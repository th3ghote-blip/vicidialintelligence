import type { Lang } from "@/lib/content";

const DEMO_URL = "https://vicidial-insights-ui.vercel.app";

type MockupContent = {
  navItems: string[];
  kpiLabels: string[];
  kpiSubs: string[];
  kpiTrends: (boolean | null)[];
  kpiValues: string[];
  chartTitle: string;
  campaignTitle: string;
  campaignCols: string[];
  agentsTitle: string;
  agentCols: string[];
  insightTitle: string;
  insightText: string;
  momentumTitle: string;
  agentFlags: string[];
  badgeMock: string;
  caption: string;
  customNote: string;
};

// Leads last — that's the point
const NAV_ICONS  = ["📊", "🔔", "👥", "⚡", "📈", "🎯"];
const NAV_BADGES = [null,  "3",  null, null, null,  null];

const CAMPAIGNS = [
  { name: "Solar LATAM",    agts: 8, sales: 89, rate: "18.2%" },
  { name: "Debt Relief US", agts: 6, sales: 72, rate: "14.1%" },
  { name: "Insurance MX",   agts: 5, sales: 61, rate: "11.8%" },
  { name: "Home Impr.",     agts: 4, sales: 44, rate: "9.3%"  },
];

const TOP_AGENTS = [
  { name: "María G.",  sales: 31, rate: "24.1%" },
  { name: "José R.",   sales: 28, rate: "21.8%" },
  { name: "Ana L.",    sales: 26, rate: "20.2%" },
  { name: "Carlos M.", sales: 22, rate: "17.1%" },
];

const MOMENTUM_AGENTS = [
  { name: "María G.",  color: "emerald" },
  { name: "José R.",   color: "sky"     },
  { name: "Ana L.",    color: "amber"   },
  { name: "Pedro M.",  color: "red"     },
];

const BAR_DATA = [3,5,8,12,15,18,22,26,24,28,32,35,30,28,25,22,18,14,10,7,4,2,1,0];

export default function DashboardMockup({ lang, content }: { lang: Lang; content: MockupContent }) {
  return (
    <section className="relative pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Browser frame */}
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 shadow-2xl shadow-black/40 overflow-hidden">

          {/* Browser chrome */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-800 bg-zinc-900">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-emerald-500/60" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-64 h-6 rounded-md bg-zinc-800 flex items-center px-3 gap-2">
                <svg className="h-3 w-3 text-zinc-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <span className="text-[10px] text-zinc-500">vicidialintelligence.com/dashboard</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 font-medium">{content.badgeMock}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-medium">Live</span>
            </div>
          </div>

          {/* Dashboard body */}
          <div className="flex bg-zinc-950">

            {/* Sidebar */}
            <div className="hidden sm:flex flex-col w-44 border-r border-zinc-800/80 bg-zinc-950 p-3 gap-0.5">
              <div className="flex items-center gap-2 p-2 mb-3">
                <div className="h-6 w-6 rounded-md bg-gradient-to-br from-emerald-400 to-emerald-600 shrink-0" />
                <div>
                  <div className="text-[10px] font-semibold text-zinc-200">ViciIntel</div>
                  <div className="text-[8px] text-zinc-500">Call Analytics</div>
                </div>
              </div>

              {content.navItems.map((label, i) => (
                <div
                  key={label}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px] ${
                    i === 0 ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                    : i === content.navItems.length - 1 ? "text-zinc-600 mt-2 pt-2 border-t border-zinc-800/60"
                    : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  <span className={i === content.navItems.length - 1 ? "opacity-50" : ""}>{NAV_ICONS[i]}</span>
                  <span className="flex-1">{label}</span>
                  {NAV_BADGES[i] && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-red-500/15 text-red-400 border border-red-500/30">{NAV_BADGES[i]}</span>
                  )}
                </div>
              ))}

              <div className="mt-auto pt-3 border-t border-zinc-800 space-y-1.5">
                <div className="flex items-center gap-1.5 text-[9px] text-zinc-600 px-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />Backend: mock
                </div>
                <div className="flex items-center gap-1.5 text-[9px] text-zinc-600 px-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />LLM: Haiku
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 p-3 space-y-2.5 min-h-[460px]">

              {/* KPI row — 5 cards */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {content.kpiValues.map((val, i) => (
                  <div key={i} className={`rounded-lg border p-2.5 ${i === 0 ? "border-emerald-500/25 bg-emerald-500/5" : "border-zinc-800 bg-zinc-900/60"}`}>
                    <div className="text-[8px] uppercase tracking-wider text-zinc-500 font-semibold mb-1">{content.kpiLabels[i]}</div>
                    <div className="flex items-end gap-1">
                      <div className={`text-base font-bold ${i === 0 ? "text-emerald-300" : "text-zinc-100"}`}>{val}</div>
                      {content.kpiTrends[i] !== null && (
                        <svg className="h-3 w-3 mb-0.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                        </svg>
                      )}
                    </div>
                    <div className="text-[8px] text-zinc-600 mt-0.5 leading-tight">{content.kpiSubs[i]}</div>
                  </div>
                ))}
              </div>

              {/* Middle row: chart + campaigns | agents + insight */}
              <div className="grid sm:grid-cols-5 gap-2">

                {/* Left: chart + campaign table stacked */}
                <div className="sm:col-span-3 flex flex-col gap-2">

                  {/* Bar chart */}
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3">
                    <div className="text-[10px] font-semibold text-zinc-300 mb-2">{content.chartTitle}</div>
                    <div className="flex items-end gap-px h-16">
                      {BAR_DATA.map((v, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                          <div
                            style={{ height: `${Math.max((v / 35) * 100, v > 0 ? 5 : 0)}%` }}
                            className={`w-full rounded-sm transition-all ${
                              i === 12 ? "bg-emerald-400 shadow-sm shadow-emerald-500/40"
                              : i > 12 ? "bg-emerald-500/25"
                              : "bg-emerald-500/45"
                            }`}
                          />
                        </div>
                      ))}
                    </div>
                    {/* Hour axis labels */}
                    <div className="flex justify-between mt-1.5">
                      {["00", "06", "12", "18", "23"].map(h => (
                        <span key={h} className="text-[8px] text-zinc-700">{h}h</span>
                      ))}
                    </div>
                  </div>

                  {/* Campaign table */}
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3 flex-1">
                    <div className="text-[10px] font-semibold text-zinc-300 mb-2">{content.campaignTitle}</div>
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-1.5 pb-1.5 border-b border-zinc-800">
                      <div className="flex-1 text-[8px] uppercase tracking-wider text-zinc-600">{content.campaignCols[0]}</div>
                      <div className="text-[8px] uppercase tracking-wider text-zinc-600 w-6 text-right">{content.campaignCols[1]}</div>
                      <div className="text-[8px] uppercase tracking-wider text-zinc-600 w-8 text-right">{content.campaignCols[2]}</div>
                      <div className="text-[8px] uppercase tracking-wider text-zinc-600 w-10 text-right">{content.campaignCols[3]}</div>
                    </div>
                    <div className="space-y-1.5">
                      {CAMPAIGNS.map((c, i) => (
                        <div key={c.name} className="flex items-center gap-2">
                          <div className="flex-1 flex items-center gap-1.5">
                            <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${i === 0 ? "bg-emerald-400" : i === 1 ? "bg-sky-400" : i === 2 ? "bg-violet-400" : "bg-zinc-500"}`} />
                            <span className="text-[9px] text-zinc-300 truncate">{c.name}</span>
                          </div>
                          <div className="text-[9px] text-zinc-500 tabular-nums w-6 text-right">{c.agts}</div>
                          <div className="text-[9px] font-semibold text-emerald-400 tabular-nums w-8 text-right">{c.sales}</div>
                          <div className="text-[9px] text-sky-400 tabular-nums w-10 text-right">{c.rate}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: top agents + AI insight stacked */}
                <div className="sm:col-span-2 flex flex-col gap-2">

                  {/* Top agents */}
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3">
                    <div className="text-[10px] font-semibold text-zinc-300 mb-2">{content.agentsTitle}</div>
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-1.5 pb-1.5 border-b border-zinc-800">
                      <div className="flex-1 text-[8px] uppercase tracking-wider text-zinc-600">{content.agentCols[0]}</div>
                      <div className="text-[8px] uppercase tracking-wider text-zinc-600 w-7 text-right">{content.agentCols[1]}</div>
                      <div className="text-[8px] uppercase tracking-wider text-zinc-600 w-10 text-right">{content.agentCols[2]}</div>
                    </div>
                    <div className="space-y-1.5">
                      {TOP_AGENTS.map((a, i) => (
                        <div key={a.name} className="flex items-center gap-2">
                          <span className="text-[8px] text-zinc-600 w-3 shrink-0">{i + 1}</span>
                          <div className="flex-1 text-[9px] text-zinc-300 truncate">{a.name}</div>
                          <div className="text-[9px] font-semibold text-emerald-400 tabular-nums w-7 text-right">{a.sales}</div>
                          <div className="text-[9px] text-sky-400 tabular-nums w-10 text-right">{a.rate}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* AI insight card */}
                  <div className="rounded-lg border border-emerald-500/25 bg-emerald-500/5 p-3 flex-1">
                    <div className="flex items-center gap-1.5 mb-2">
                      <svg className="h-3 w-3 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                      </svg>
                      <div className="text-[10px] font-semibold text-emerald-400">{content.insightTitle}</div>
                    </div>
                    <p className="text-[9px] text-zinc-300 leading-relaxed">{content.insightText}</p>
                  </div>
                </div>
              </div>

              {/* Agent momentum strip — bottom */}
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3">
                <div className="text-[10px] font-semibold text-zinc-300 mb-2">{content.momentumTitle}</div>
                <div className="flex gap-2 overflow-x-auto">
                  {MOMENTUM_AGENTS.map((a, i) => (
                    <div key={a.name} className="flex-shrink-0 rounded-lg border border-zinc-700/60 bg-zinc-900 px-3 py-2 min-w-[120px]">
                      <div className="text-[10px] font-medium text-zinc-200">{a.name}</div>
                      <div className={`text-[9px] mt-0.5 text-${a.color}-400`}>{content.agentFlags[i]}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Custom note */}
        <p className="text-center text-xs text-zinc-400 mt-4 max-w-xl mx-auto">{content.customNote}</p>

        {/* Caption */}
        <p className="text-center text-xs text-zinc-600 mt-2">
          {content.caption}{" "}
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-400 underline underline-offset-2">
            vicidial-insights-ui.vercel.app
          </a>
        </p>
      </div>
    </section>
  );
}
