import type { Lang } from "@/lib/content";

export default function AISection({ lang, content }: { lang: Lang; content: { eyebrow: string; heading: string; body: string; extras: { title: string; body: string }[] } }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800/60">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-zinc-900/60 p-8 sm:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 mb-4">
                {content.eyebrow}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">{content.heading}</h2>
              <p className="text-zinc-300 leading-relaxed mb-8">{content.body}</p>
              <div className="space-y-4">
                {content.extras.map((e, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="h-5 w-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="h-3 w-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-zinc-200">{e.title}</div>
                      <div className="text-sm text-zinc-300 mt-0.5">{e.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI chat mockup */}
            <div className="rounded-xl border border-zinc-700 bg-zinc-900 p-4 space-y-3">
              <div className="text-xs text-zinc-500 font-medium mb-4">AI Chat Interface</div>
              {[
                { role: "user", msg: "Who had the best close rate on the Solar campaign last week?" },
                { role: "ai", msg: "María García led Solar LATAM with 24.1% close rate — 3.8 points above the campaign average. She averaged 4.2 min per call and set 8 callbacks, all converted." },
                { role: "user", msg: "What should I focus on today?" },
                { role: "ai", msg: "3 agents in the watch list for declining momentum. Carlos Ruiz is rushing calls (32/hr, only 2.8% close) — worth a coaching call before the afternoon shift." },
              ].map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-xl px-3 py-2 text-xs leading-relaxed ${m.role === "user" ? "bg-emerald-600/80 text-white rounded-br-sm" : "bg-zinc-800 text-zinc-300 rounded-bl-sm"}`}>
                    {m.msg}
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-2 border-t border-zinc-800 pt-3 mt-2">
                <div className="flex-1 h-7 rounded-lg bg-zinc-800 text-[10px] text-zinc-600 flex items-center px-3">Ask anything about your data...</div>
                <div className="h-7 w-7 rounded-lg bg-emerald-600 flex items-center justify-center">
                  <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
