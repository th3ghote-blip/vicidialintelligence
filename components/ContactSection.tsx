import type { Lang } from "@/lib/content";

export default function ContactSection({ lang, content }: {
  lang: Lang;
  content: { heading: string; sub: string; };
}) {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800/60">
      <div className="mx-auto max-w-2xl text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">{content.heading}</h2>
        <p className="text-zinc-300">{content.sub}</p>
        <a
          href="mailto:info@aiappgenius.com"
          className="inline-block mt-2 text-lg text-emerald-400 hover:text-emerald-300 underline underline-offset-4 transition-colors"
        >
          info@aiappgenius.com
        </a>
      </div>
    </section>
  );
}
