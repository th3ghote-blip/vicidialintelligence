import { BOOKING_URL, type Lang } from "@/lib/content";

export default function ContactSection({ lang, content }: {
  lang: Lang;
  content: { heading: string; sub: string; bookCta: string; orEmail: string };
}) {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800/60">
      <div className="mx-auto max-w-2xl text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">{content.heading}</h2>
        <p className="text-zinc-300">{content.sub}</p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-10 py-4 text-base font-semibold text-white transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
        >
          {content.bookCta}
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
          </svg>
        </a>
        <p className="text-sm text-zinc-400">
          {content.orEmail}{" "}
          <a href="mailto:info@aiappgenius.com" className="text-emerald-500 hover:text-emerald-400 underline underline-offset-2">
            info@aiappgenius.com
          </a>
        </p>
      </div>
    </section>
  );
}
