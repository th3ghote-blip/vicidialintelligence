import type { Lang } from "@/lib/content";

const DEMO_URL = "https://vicidial-insights-ui.vercel.app";

export default function Hero({ lang, content }: { lang: Lang; content: { eyebrow: string; headline: string; sub: string; cta: string; ctaSub: string; trust: string[] } }) {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-24">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute top-20 left-1/4 w-[400px] h-[300px] bg-emerald-600/5 rounded-full blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-400 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          {content.eyebrow}
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
          {content.headline.split("Vicidial").map((part, i, arr) => (
            <span key={i}>{part}{i < arr.length - 1 && <span className="text-emerald-400">Vicidial</span>}</span>
          ))}
        </h1>

        {/* Sub */}
        <p className="mx-auto max-w-2xl text-lg text-zinc-300 leading-relaxed mb-10">
          {content.sub}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-8 py-3.5 text-sm font-semibold text-white transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30">
            {content.cta}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 hover:border-zinc-500 px-8 py-3.5 text-sm font-medium text-zinc-300 hover:text-white transition-all">
            <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
            </svg>
            {content.ctaSub}
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-zinc-400">
          {content.trust.map((t, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
