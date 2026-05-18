import type { Lang } from "@/lib/content";

export default function ContactSection({ lang, content }: { lang: Lang; content: { heading: string; sub: string; namePlaceholder: string; emailPlaceholder: string; msgPlaceholder: string; send: string; or: string } }) {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800/60">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{content.heading}</h2>
          <p className="text-zinc-300">{content.sub}</p>
        </div>
        <form action={`https://formspree.io/f/info@aiappgenius.com`} method="POST" className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input type="text" name="name" required placeholder={content.namePlaceholder}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors" />
            <input type="email" name="email" required placeholder={content.emailPlaceholder}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors" />
          </div>
          <textarea name="message" required rows={4} placeholder={content.msgPlaceholder}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors resize-none" />
          <input type="hidden" name="_subject" value="Vicidial Intelligence — Demo Request" />
          <button type="submit"
            className="w-full rounded-xl bg-emerald-600 hover:bg-emerald-500 px-8 py-3.5 text-sm font-semibold text-white transition-all shadow-lg shadow-emerald-500/20">
            {content.send}
          </button>
        </form>
        <p className="text-center text-sm text-zinc-400 mt-6">
          {content.or}{" "}
          <a href="mailto:info@aiappgenius.com" className="text-emerald-500 hover:text-emerald-400 underline underline-offset-2">
            info@aiappgenius.com
          </a>
        </p>
      </div>
    </section>
  );
}
