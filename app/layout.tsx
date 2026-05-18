import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  metadataBase: new URL("https://vicidialintelligence.com"),
  title: { default: "Vicidial Intelligence", template: "%s | Vicidial Intelligence" },
  description: "AI-powered analytics dashboard for Vicidial call centres. Your data stays on your server.",
  openGraph: { type: "website", siteName: "Vicidial Intelligence" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
