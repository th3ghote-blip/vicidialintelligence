import type { Lang } from "@/lib/content";

export default function DataSection({ lang, content }: { lang: Lang; content: { eyebrow: string; heading: string; body: string; points: string[]; contrast: string } }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800/60">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-400 mb-4">
              🔒 {content.eyebrow}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">{content.heading}</h2>
            <p className="text-zinc-400 leading-relaxed mb-8">{content.body}</p>
            <ul className="space-y-3">
              {content.points.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-zinc-400">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture diagram */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
            <div className="text-xs text-zinc-500 font-medium mb-6">Data flow</div>
            <div className="space-y-4">
              {[
                { label: "Your Vicidial Server", sub: "MySQL + Asterisk recordings", color: "zinc", icon: "🖥️" },
                { label: "Read-only connection", sub: "Encrypted, no writes ever", color: "sky", icon: "🔒", arrow: true },
                { label: "Vicidial Intelligence", sub: "Analytics + AI processing", color: "emerald", icon: "🤖" },
                { label: "Your browser", sub: "Dashboard — nothing stored", color: "zinc", icon: "📊", arrow: true },
              ].map((item, i) => (
                <div key={i}>
                  {item.arrow && (
                    <div className="flex justify-center my-1">
                      <svg className={`h-5 w-5 text-${item.color}-500/60`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                      </svg>
                    </div>
                  )}
                  <div className={`flex items-center gap-3 rounded-xl border p-3 ${item.color === "emerald" ? "border-emerald-500/30 bg-emerald-500/10" : item.color === "sky" ? "border-sky-500/20 bg-sky-500/5" : "border-zinc-700 bg-zinc-900"}`}>
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="text-sm font-medium text-zinc-200">{item.label}</div>
                      <div className="text-xs text-zinc-500 mt-0.5">{item.sub}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800">
              <p className="text-xs text-zinc-500 italic">{content.contrast}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
