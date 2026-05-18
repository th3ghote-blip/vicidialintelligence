import Link from "next/link";
import type { Lang } from "@/lib/content";

export default function Footer({ lang, content, nav }: { lang: Lang; content: { tagline: string; rights: string }; nav: Record<string, string> }) {
  const base = `/${lang}`;
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-800/60 bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <span className="font-semibold text-sm text-zinc-200">Vicidial Intelligence</span>
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed">{content.tagline}</p>
          </div>
          <div>
            <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">{nav.product}</div>
            <div className="space-y-2">
              <a href={`${base}#features`} className="block text-sm text-zinc-500 hover:text-zinc-300 transition-colors">{nav.features}</a>
              <a href={`${base}#data-security`} className="block text-sm text-zinc-500 hover:text-zinc-300 transition-colors">{nav.security}</a>
              <a href={`${base}#pricing`} className="block text-sm text-zinc-500 hover:text-zinc-300 transition-colors">{nav.pricing}</a>
              <a href="https://vicidial-insights-ui.vercel.app" target="_blank" rel="noopener noreferrer" className="block text-sm text-zinc-500 hover:text-zinc-300 transition-colors">{nav.demo}</a>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">{nav.languages}</div>
            <div className="space-y-2">
              <Link href="/en" className="block text-sm text-zinc-500 hover:text-zinc-300 transition-colors">English</Link>
              <Link href="/es" className="block text-sm text-zinc-500 hover:text-zinc-300 transition-colors">Español</Link>
              <Link href="/pt" className="block text-sm text-zinc-500 hover:text-zinc-300 transition-colors">Português</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-700">© {year} Vicidial Intelligence. {content.rights}</p>
          <p className="text-xs text-zinc-700">
            Built by{" "}
            <a href="https://aiappgenius.com" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-400 transition-colors">AiAppGenius</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
