"use client";
import { useState } from "react";
import Link from "next/link";
import type { Lang } from "@/lib/content";

const DEMO_URL = "https://vicidial-insights-ui.vercel.app";

export default function Nav({ lang, nav }: { lang: Lang; nav: Record<string, string> }) {
  const [open, setOpen] = useState(false);
  const base = `/${lang}`;

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={base} className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
            </div>
            <span className="font-semibold text-sm tracking-tight">Vicidial Intelligence</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href={`${base}/features`} className="text-zinc-400 hover:text-zinc-100 transition-colors">{nav.features}</Link>
            <Link href={`${base}/data-security`} className="text-zinc-400 hover:text-zinc-100 transition-colors">{nav.security}</Link>
            <Link href={`${base}/pricing`} className="text-zinc-400 hover:text-zinc-100 transition-colors">{nav.pricing}</Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {/* Language switcher */}
            <div className="flex border border-zinc-800 rounded-lg overflow-hidden text-xs bg-zinc-900/60">
              {(["en","es","pt"] as Lang[]).map(l => (
                <Link key={l} href={`/${l}`} className={`px-2.5 py-1.5 uppercase transition-colors ${lang === l ? "bg-zinc-800 text-white" : "text-zinc-500 hover:text-zinc-200"}`}>{l}</Link>
              ))}
            </div>
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer"
              className="text-sm text-zinc-300 border border-zinc-700 rounded-lg px-4 py-1.5 hover:border-zinc-500 transition-colors">
              {nav.demo}
            </a>
            <a href={`#contact`}
              className="text-sm bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg px-4 py-1.5 transition-colors font-medium">
              {nav.contact}
            </a>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-zinc-400">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950 px-4 py-4 space-y-3 text-sm">
          <Link href={`${base}/features`} className="block text-zinc-400">{nav.features}</Link>
          <Link href={`${base}/data-security`} className="block text-zinc-400">{nav.security}</Link>
          <Link href={`${base}/pricing`} className="block text-zinc-400">{nav.pricing}</Link>
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="block text-emerald-400">{nav.demo}</a>
          <div className="flex gap-2 pt-2">
            {(["en","es","pt"] as Lang[]).map(l => (
              <Link key={l} href={`/${l}`} className={`px-2.5 py-1 text-xs uppercase border rounded ${lang === l ? "border-emerald-500 text-emerald-400" : "border-zinc-700 text-zinc-500"}`}>{l}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
