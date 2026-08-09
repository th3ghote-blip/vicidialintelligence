import { BOOKING_URL, type Lang } from "@/lib/content";

type Plan = { name: string; price: string; period: string; setup: string; desc: string; features: string[]; cta: string; highlight: boolean };

export default function Pricing({ lang, content }: { lang: Lang; content: { heading: string; sub: string; plans: Plan[]; note: string; setupNote: string } }) {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800/60">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{content.heading}</h2>
          <p className="text-zinc-400">{content.sub}</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {content.plans.map((plan, i) => (
            <div key={i} className={`rounded-2xl border p-8 flex flex-col ${plan.highlight ? "border-emerald-500/40 bg-emerald-500/5 shadow-lg shadow-emerald-500/10" : "border-zinc-800 bg-zinc-900/40"}`}>
              {plan.highlight && (
                <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">Most Popular</div>
              )}
              <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-zinc-400 mb-1 text-sm">{plan.period}</span>
              </div>
              <div className="text-xs text-zinc-500 mb-3">{plan.setup}</div>
              <p className="text-sm text-zinc-300 mb-6">{plan.desc}</p>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <svg className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={`w-full text-center py-3 rounded-xl text-sm font-semibold transition-all ${plan.highlight ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-500/20" : "border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white"}`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-zinc-400 mt-4">{content.setupNote}</p>
        <p className="text-center text-xs text-zinc-500 mt-2">{content.note}</p>
      </div>
    </section>
  );
}
