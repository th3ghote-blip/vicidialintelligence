"use client";

import { useState } from "react";
import type { Lang } from "@/lib/content";

type State = "idle" | "sending" | "sent" | "error";

export default function ContactSection({ lang, content }: {
  lang: Lang;
  content: {
    heading: string; sub: string;
    namePlaceholder: string; emailPlaceholder: string;
    msgPlaceholder: string; send: string; or: string;
  };
}) {
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [message, setMessage] = useState("");
  const [state,   setState]   = useState<State>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("failed");
      setState("sent");
      setName(""); setEmail(""); setMessage("");
    } catch {
      setState("error");
    }
  };

  const inputClass = "w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors";

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800/60">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{content.heading}</h2>
          <p className="text-zinc-300">{content.sub}</p>
        </div>

        {state === "sent" ? (
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-10 text-center space-y-2">
            <div className="text-3xl">✅</div>
            <p className="text-emerald-300 font-semibold text-lg">
              {lang === "es" ? "¡Mensaje enviado!" : lang === "pt" ? "Mensagem enviada!" : "Message sent!"}
            </p>
            <p className="text-zinc-400 text-sm">
              {lang === "es"
                ? "Te contactaremos pronto en info@aiappgenius.com"
                : lang === "pt"
                  ? "Entraremos em contato em breve."
                  : "We'll be in touch at info@aiappgenius.com"}
            </p>
            <button
              onClick={() => setState("idle")}
              className="mt-4 text-xs text-zinc-500 hover:text-zinc-300 underline underline-offset-2 transition-colors"
            >
              {lang === "es" ? "Enviar otro mensaje" : lang === "pt" ? "Enviar outra mensagem" : "Send another message"}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text" required placeholder={content.namePlaceholder}
                value={name} onChange={e => setName(e.target.value)}
                className={inputClass}
              />
              <input
                type="email" required placeholder={content.emailPlaceholder}
                value={email} onChange={e => setEmail(e.target.value)}
                className={inputClass}
              />
            </div>
            <textarea
              required rows={4} placeholder={content.msgPlaceholder}
              value={message} onChange={e => setMessage(e.target.value)}
              className={`${inputClass} resize-none`}
            />

            {state === "error" && (
              <p className="text-sm text-red-400">
                {lang === "es"
                  ? "Error al enviar. Inténtalo de nuevo o escríbenos directamente."
                  : lang === "pt"
                    ? "Erro ao enviar. Tente novamente."
                    : "Failed to send. Try again or email us directly."}
              </p>
            )}

            <button
              type="submit"
              disabled={state === "sending"}
              className="w-full rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 disabled:cursor-not-allowed px-8 py-3.5 text-sm font-semibold text-white transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
            >
              {state === "sending" ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  {lang === "es" ? "Enviando…" : lang === "pt" ? "Enviando…" : "Sending…"}
                </>
              ) : content.send}
            </button>
          </form>
        )}

        <p className="text-center text-sm text-zinc-400 mt-6">
          {content.or}{" "}
          <a href="mailto:info@aiappgenius.com" className="text-emerald-500 hover:text-emerald-400 underline underline-offset-2">
            info@aiappgenius.com
          </a>
        </p>
      </div>
    </section>
  );
}
