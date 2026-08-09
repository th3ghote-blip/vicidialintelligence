"use client";

import { useState } from "react";
import type { Lang } from "@/lib/content";

type Item = { q: string; a: string };

export default function FAQ({ lang, content }: {
  lang: Lang;
  content: { heading: string; items: Item[] };
}) {
  const [open, setOpen] = useState<number | null>(0);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800/60">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">{content.heading}</h2>
        <div className="space-y-3">
          {content.items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="rounded-xl border border-zinc-800 bg-zinc-900/40 overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-zinc-100">{it.q}</span>
                  <svg
                    className={`h-4 w-4 shrink-0 text-emerald-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-sm text-zinc-300 leading-relaxed">{it.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
