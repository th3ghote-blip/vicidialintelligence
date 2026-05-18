import type { Lang } from "@/lib/content";

const DEMO_URL = "https://vicidial-insights-ui.vercel.app";

type MockupContent = {
  navItems: string[];
  kpiLabels: string[];
  kpiSubs: string[];
  chartTitle: string;
  campaignTitle: string;
  momentumTitle: string;
  agentFlags: string[];
  badgeMock: string;
  caption: string;
  customNote: string;
};

const NAV_ICONS = ["📊", "🔔", "🎯", "👥", "⚡", "📈"];
const NAV_BADGES = [null, "3", null, null, null, null];

export default function DashboardMockup({ lang, content }: { lang: Lang; content: MockupContent }) {
  const kpis = [
    { value: "284", up: true },
    { value: "1,847", up: null },
    { value: "15.4%", up: null },
    { value: "+12.3%", up: true },
  ];

  const agents = [
    { name: "María G.", color: "emerald" },
    { name: "Carlos R.", color: "sky" },
    { name: "Ana L.", color: "amber" },
    { name: "Pedro M.", color: "red" },
  ];

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
                <svg className="h-3 w-3 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
                <span className="text-[10px] text-zinc-500">vicidialintelligence.com/dashboard</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 font-medium">{content.badgeMock}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-medium">Live</span>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="flex bg-zinc-950">
            {/* Sidebar */}
            <div className="hidden sm:flex flex-col w-48 border-r border-zinc-800/80 bg-zinc-950 p-3 gap-1">
              <div className="flex items-center gap-2 p-3 mb-2">
                <div className="h-6 w-6 rounded-md bg-gradient-to-br from-emerald-400 to-emerald-600" />
                <div>
                  <div className="text-[10px] font-semibold text-zinc-200">ViciIntel</div>
                  <div className="text-[8px] text-zinc-500">Call Analytics</div>
                </div>
              </div>
              {content.navItems.map((label, i) => (
                <div key={label} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-[11px] ${i === 0 ? "bg-zinc-800 text-white" : "text-zinc-500"}`}>
                  <span>{NAV_ICONS[i]}</span>
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
            <div className="flex-1 p-4 space-y-4 min-h-[380px]">
              {/* KPI row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {kpis.map((kpi, i) => (
                  <div key={i} className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3">
                    <div className="text-[9px] uppercase tracking-wider text-zinc-500 font-semibold mb-1">{content.kpiLabels[i]}</div>
                    <div className="flex items-end gap-1">
                      <div className="text-lg font-semibold text-zinc-100">{kpi.value}</div>
                      {kpi.up !== null && (
                        <svg className={`h-3.5 w-3.5 mb-0.5 ${kpi.up ? "text-emerald-400" : "text-red-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={kpi.up ? "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" : "M2.25 6L9 12.75l4.306-4.307a11.95 11.95 0 015.814 5.519l2.74 1.22m0 0l-5.94 2.28m5.94-2.28l-2.28-5.941"} />
                        </svg>
                      )}
                    </div>
                    <div className="text-[9px] text-zinc-600 mt-0.5">{content.kpiSubs[i]}</div>
                  </div>
                ))}
              </div>

              {/* Chart + table */}
              <div className="grid sm:grid-cols-5 gap-2">
                {/* Bar chart */}
                <div className="sm:col-span-3 rounded-lg border border-zinc-800 bg-zinc-900/60 p-3">
                  <div className="text-[10px] font-semibold text-zinc-300 mb-3">{content.chartTitle}</div>
                  <div className="flex items-end gap-1 h-20">
                    {[3,5,8,12,15,18,22,26,24,28,32,35,30,28,25,22,18,14,10,7,4,2,1,0].map((v, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center justify-end" style={{ height: "100%" }}>
                        <div
                          style={{ height: `${Math.max((v / 35) * 100, v > 0 ? 4 : 0)}%` }}
                          className={`w-full rounded-sm ${i === 12 ? "bg-emerald-500 shadow-sm shadow-emerald-500/40" : "bg-emerald-500/40"}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Campaign table */}
                <div className="sm:col-span-2 rounded-lg border border-zinc-800 bg-zinc-900/60 p-3">
                  <div className="text-[10px] font-semibold text-zinc-300 mb-2">{content.campaignTitle}</div>
                  <div className="space-y-1.5">
                    {[
                      { name: "Solar LATAM", sales: 89, rate: "18.2%" },
                      { name: "Debt Relief US", sales: 72, rate: "14.1%" },
                      { name: "Insurance MX", sales: 61, rate: "11.8%" },
                      { name: "Home Impr.", sales: 44, rate: "9.3%" },
                    ].map((c) => (
                      <div key={c.name} className="flex items-center gap-2">
                        <div className="flex-1 text-[9px] text-zinc-400 truncate">{c.name}</div>
                        <div className="text-[9px] font-semibold text-emerald-400 tabular-nums w-6 text-right">{c.sales}</div>
                        <div className="text-[9px] text-sky-400 tabular-nums w-10 text-right">{c.rate}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Agent momentum strip */}
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3">
                <div className="text-[10px] font-semibold text-zinc-300 mb-2">{content.momentumTitle}</div>
                <div className="flex gap-2 overflow-x-auto">
                  {agents.map((a, i) => (
                    <div key={a.name} className="flex-shrink-0 rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 min-w-32">
                      <div className="text-[10px] font-medium text-zinc-200">{a.name}</div>
                      <div className={`text-[9px] mt-1 text-${a.color}-400`}>{content.agentFlags[i]}</div>
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
