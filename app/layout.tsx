import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-X1BJDV1F5Z";

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
      <body className="bg-zinc-950 text-zinc-100 antialiased">
        {children}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { linker: { domains: ['vicidialintelligence.com', 'vicidial-insights-ui.vercel.app'] } });
        `}</Script>
      </body>
    </html>
  );
}
