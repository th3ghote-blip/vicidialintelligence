import type { Metadata } from "next";
import { LANGS, meta, type Lang } from "@/lib/content";

export async function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const l = (LANGS.includes(lang as Lang) ? lang : "en") as Lang;
  const m = meta[l];
  const url = `https://vicidialintelligence.com/${l}`;
  return {
    title: m.homeTitle,
    description: m.homeDesc,
    alternates: {
      canonical: url,
      languages: {
        "en": "https://vicidialintelligence.com/en",
        "es": "https://vicidialintelligence.com/es",
        "pt": "https://vicidialintelligence.com/pt",
        "x-default": "https://vicidialintelligence.com/en",
      },
    },
    openGraph: {
      url,
      title: m.homeTitle,
      description: m.homeDesc,
      locale: l === "es" ? "es_ES" : l === "pt" ? "pt_BR" : "en_US",
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const l = (LANGS.includes(lang as Lang) ? lang : "en") as Lang;
  return <div lang={l}>{children}</div>;
}
