import type { Lang } from "@/lib/content";

export default function Features({ lang, content }: { lang: Lang; content: { heading: string; sub: string; items: { icon: string; title: string; body: string }[] } }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800/60">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{content.heading}</h2>
          <p className="text-zinc-300 max-w-2xl mx-auto">{content.sub}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.items.map((item, i) => (
            <div key={i} className="group rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 hover:border-emerald-500/30 hover:bg-zinc-900/60 transition-all">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-base font-semibold text-zinc-100 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
