import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { rateLimit, getIp } from "@/lib/rate-limit";

const TO   = "info@aiappgenius.com";
const FROM = "Vicidial Intelligence <noreply@vicidialintelligence.com>";

/** Escape user input before interpolating into HTML email body. */
function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    // Rate-limit: 5 requests per 15 min per IP
    const ip = getIp(req);
    if (!rateLimit(`${ip}:contact`, 5, 15 * 60 * 1000)) {
      return NextResponse.json({ error: "Too many requests — try again later" }, { status: 429 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return NextResponse.json({ error: "Not configured" }, { status: 503 });
    const resend = new Resend(apiKey);

    const { name, email, message } = await req.json();

    // Presence check
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }
    // Format check
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }
    // Length caps
    if (name.length > 200 || email.length > 320 || message.length > 5000) {
      return NextResponse.json({ error: "Input too long" }, { status: 400 });
    }

    // HTML-escape before interpolating into the email body
    const safeName    = esc(name.trim());
    const safeEmail   = esc(email.trim());
    const safeMessage = esc(message.trim());

    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email.trim(),
      subject: `Vicidial Intelligence — Demo Request from ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#10b981">New demo request — Vicidial Intelligence</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#71717a;width:80px">Name</td><td style="padding:8px 0;font-weight:600">${safeName}</td></tr>
            <tr><td style="padding:8px 0;color:#71717a">Email</td><td style="padding:8px 0"><a href="mailto:${safeEmail}" style="color:#10b981">${safeEmail}</a></td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #27272a;margin:16px 0"/>
          <p style="white-space:pre-wrap;color:#d4d4d8">${safeMessage}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
