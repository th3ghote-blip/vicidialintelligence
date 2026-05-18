import { LANGS, type Lang, meta } from "@/lib/content";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { nav, footer } from "@/lib/content";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params;
  const m = meta[lang] ?? meta.en;
  return {
    title: m.blogTitle,
    description: m.blogDesc,
    alternates: {
      languages: {
        en: "https://vicidialintelligence.com/en/blog/vicidial-analytics",
        es: "https://vicidialintelligence.com/es/blog/vicidial-analytics",
        pt: "https://vicidialintelligence.com/pt/blog/vicidial-analytics",
      },
    },
  };
}

const blogContent = {
  en: {
    title: "The Complete Guide to Vicidial Analytics in 2026",
    intro: "Vicidial powers thousands of call centres worldwide. Its open-source model means zero licensing fees and full control over your infrastructure. But it has a blind spot: the built-in reporting is, to put it charitably, bare-bones.",
    sections: [
      {
        h2: "What Vicidial's built-in reports actually give you",
        body: "Vicidial ships with a Reports section that covers call counts, agent login times, disposition breakdowns, and campaign penetration. These are useful as raw counts — but they're static exports, not a live intelligence layer. You're looking at a table of numbers and trying to pattern-match in your head. There's no trending, no anomaly detection, no agent behaviour scoring, and no way to ask 'why did close rates drop on Thursday?'",
      },
      {
        h2: "The KPIs that actually predict revenue",
        body: "Most Vicidial managers watch calls handled and sales count. Those are lagging indicators — they tell you what happened, not what's about to happen. Leading indicators worth tracking: close rate trend by agent (week over week), average talk time vs close rate correlation, dials-per-hour vs conversion rate, callback set-to-conversion ratio, and campaign penetration rate vs time of day. When you see a 20% drop in an agent's close rate over 3 days before their call count changes, you have a coaching opportunity, not a performance problem.",
      },
      {
        h2: "Why agent behaviour patterns matter more than totals",
        body: "An agent handling 80 calls/day looks fine on a summary report. Dig into the data and you might find they're averaging 45 seconds per call — not reaching the pitch — and their close rate is 1.2%. Meanwhile the agent handling 55 calls/day with a 4-minute average is closing at 18%. Totals hide this completely. Vicidial Intelligence surfaces these patterns automatically: short-call flags, rushing patterns (high dials/hr + low close rate), and callback dead-ends where callbacks are being set but never converted.",
      },
      {
        h2: "AI in call centres: what's actually useful",
        body: "AI in call centre analytics means two things: pattern recognition at scale, and natural language access to your data. Pattern recognition catches the agent behaviour issues described above across 50 agents simultaneously — no manager can do that manually. Natural language access means instead of building a custom SQL report, your floor manager asks 'who had the best conversion rate on the solar campaign last Tuesday afternoon?' and gets an answer in 3 seconds. Call transcription adds a third layer: AI listening to every call and flagging quality issues, compliance risks, and coaching moments without requiring someone to audit recordings manually.",
      },
      {
        h2: "Data residency: why it matters for call centres",
        body: "Call centre data is sensitive. It includes customer PII, call recordings, and performance data you don't want leaving your control. Many SaaS analytics platforms solve this by ingesting your data to their cloud. This creates compliance risk (GDPR, HIPAA, PCI), lock-in risk, and frankly a security surface area you don't need. The better approach — and what Vicidial Intelligence does — is a read-only connection to your existing Vicidial MySQL database. The data never moves. Audio processed by AI is discarded immediately after transcription. Your Vicidial server stays exactly where it is.",
      },
      {
        h2: "Getting started: what you actually need",
        body: "To deploy a proper Vicidial analytics layer you need: (1) read access to your Vicidial MySQL database, (2) the disposition codes that indicate a sale and a callback, and (3) about 48 hours for setup. No migration, no downtime, no changes to your existing Vicidial installation. The reporting runs alongside your live dialler without affecting it.",
      },
    ],
    conclusion: "Vicidial is a powerful platform that most operators dramatically under-exploit because the native reporting doesn't surface the intelligence the data contains. The gap between 'we run Vicidial' and 'we understand what our Vicidial data is telling us' is exactly where the competitive advantage lives.",
  },
  es: {
    title: "Guía Completa de Analítica para Vicidial en 2026",
    intro: "Vicidial impulsa miles de call centers en todo el mundo. Su modelo de código abierto significa cero tarifas de licencia y control total sobre tu infraestructura. Pero tiene un punto ciego: los reportes integrados son, para decirlo amablemente, muy básicos.",
    sections: [
      {
        h2: "Qué te dan realmente los reportes nativos de Vicidial",
        body: "Vicidial incluye una sección de Reportes que cubre conteos de llamadas, tiempos de login de agentes, desglose de disposiciones y penetración de campañas. Son útiles como conteos brutos, pero son exportaciones estáticas, no una capa de inteligencia en vivo. Estás mirando una tabla de números e intentando detectar patrones mentalmente. No hay tendencias, no hay detección de anomalías, no hay puntuación de comportamiento de agentes y no hay forma de preguntar '¿por qué bajaron las tasas de cierre el jueves?'",
      },
      {
        h2: "Los KPIs que realmente predicen los ingresos",
        body: "La mayoría de los managers de Vicidial monitorean llamadas atendidas y conteo de ventas. Estos son indicadores rezagados — te dicen lo que pasó, no lo que está por pasar. Indicadores líderes que vale la pena rastrear: tendencia de tasa de cierre por agente (semana a semana), correlación entre tiempo de conversación promedio y tasa de cierre, marcaciones por hora vs tasa de conversión, ratio de callbacks establecidos vs convertidos, y tasa de penetración de campaña vs hora del día.",
      },
      {
        h2: "Por qué los patrones de comportamiento de agentes importan más que los totales",
        body: "Un agente que maneja 80 llamadas/día parece bien en un reporte resumen. Profundiza en los datos y podrías encontrar que está promediando 45 segundos por llamada — sin llegar al pitch — con una tasa de cierre del 1.2%. Mientras tanto, el agente que maneja 55 llamadas/día con un promedio de 4 minutos está cerrando al 18%. Los totales ocultan esto completamente. Vicidial Intelligence detecta estos patrones automáticamente: alertas de llamadas cortas, patrones de prisa y callbacks sin convertir.",
      },
      {
        h2: "IA en call centers: qué es realmente útil",
        body: "La IA en analítica de call center significa dos cosas: reconocimiento de patrones a escala y acceso en lenguaje natural a tus datos. El reconocimiento de patrones detecta los problemas de comportamiento de agentes descritos arriba en 50 agentes simultáneamente. El acceso en lenguaje natural significa que en lugar de construir un reporte SQL personalizado, tu supervisor pregunta '¿quién tuvo la mejor tasa de conversión en la campaña solar el martes pasado por la tarde?' y obtiene una respuesta en 3 segundos.",
      },
      {
        h2: "Residencia de datos: por qué importa para los call centers",
        body: "Los datos de call center son sensibles. Incluyen PII de clientes, grabaciones de llamadas y datos de rendimiento que no quieres que salgan de tu control. Muchas plataformas SaaS de analítica resuelven esto ingiriendo tus datos a su nube, creando riesgo de cumplimiento y lock-in. El mejor enfoque — y lo que hace Vicidial Intelligence — es una conexión de solo lectura a tu base de datos MySQL de Vicidial existente. Los datos nunca se mueven.",
      },
      {
        h2: "Para empezar: qué necesitas realmente",
        body: "Para desplegar una capa de analítica adecuada para Vicidial necesitas: (1) acceso de lectura a tu base de datos MySQL de Vicidial, (2) los códigos de disposición que indican una venta y un callback, y (3) aproximadamente 48 horas para la configuración. Sin migración, sin tiempo de inactividad, sin cambios en tu instalación de Vicidial existente.",
      },
    ],
    conclusion: "Vicidial es una plataforma poderosa que la mayoría de los operadores infrautilizan dramáticamente porque los reportes nativos no muestran la inteligencia que contienen los datos. La brecha entre 'usamos Vicidial' y 'entendemos lo que nos dicen los datos de Vicidial' es exactamente donde vive la ventaja competitiva.",
  },
  pt: {
    title: "Guia Completo de Analytics para Vicidial em 2026",
    intro: "Vicidial alimenta milhares de call centers em todo o mundo. Seu modelo de código aberto significa zero taxas de licença e controle total sobre sua infraestrutura. Mas tem um ponto cego: os relatórios integrados são, para dizer gentilmente, muito básicos.",
    sections: [
      {
        h2: "O que os relatórios nativos do Vicidial realmente oferecem",
        body: "O Vicidial inclui uma seção de Relatórios que cobre contagens de chamadas, tempos de login de agentes, breakdown de disposições e penetração de campanhas. São úteis como contagens brutas, mas são exportações estáticas, não uma camada de inteligência ao vivo. Você está olhando para uma tabela de números e tentando identificar padrões mentalmente. Não há tendências, detecção de anomalias, pontuação de comportamento de agentes ou forma de perguntar 'por que as taxas de fechamento caíram na quinta-feira?'",
      },
      {
        h2: "Os KPIs que realmente preveem receita",
        body: "A maioria dos gerentes de Vicidial monitora chamadas atendidas e contagem de vendas. Esses são indicadores atrasados — dizem o que aconteceu, não o que está prestes a acontecer. Indicadores líderes que valem a pena rastrear: tendência de taxa de fechamento por agente (semana a semana), correlação entre tempo médio de conversa e taxa de fechamento, discagens por hora vs taxa de conversão, e taxa de penetração de campanha vs horário do dia.",
      },
      {
        h2: "Por que padrões de comportamento de agentes importam mais que totais",
        body: "Um agente atendendo 80 chamadas/dia parece bem em um relatório resumo. Aprofunde nos dados e pode descobrir que está com média de 45 segundos por chamada — sem chegar ao pitch — com taxa de fechamento de 1,2%. Enquanto isso, o agente com 55 chamadas/dia e média de 4 minutos está fechando em 18%. Os totais escondem isso completamente. Vicidial Intelligence detecta esses padrões automaticamente.",
      },
      {
        h2: "IA em call centers: o que é realmente útil",
        body: "IA em analytics de call center significa duas coisas: reconhecimento de padrões em escala e acesso em linguagem natural aos seus dados. O reconhecimento de padrões detecta problemas de comportamento de agentes em 50 agentes simultaneamente. O acesso em linguagem natural significa que em vez de construir um relatório SQL personalizado, seu supervisor pergunta 'quem teve a melhor taxa de conversão na campanha solar na última terça à tarde?' e obtém uma resposta em 3 segundos.",
      },
      {
        h2: "Residência de dados: por que importa para call centers",
        body: "Dados de call center são sensíveis. Incluem PII de clientes, gravações de chamadas e dados de desempenho que você não quer que saiam do seu controle. Muitas plataformas SaaS de analytics resolvem isso ingerindo seus dados para a nuvem delas, criando risco de compliance e lock-in. A abordagem melhor — e o que faz o Vicidial Intelligence — é uma conexão somente leitura ao seu banco de dados MySQL do Vicidial existente. Os dados nunca se movem.",
      },
      {
        h2: "Para começar: o que você realmente precisa",
        body: "Para implantar uma camada de analytics adequada para Vicidial você precisa: (1) acesso de leitura ao seu banco de dados MySQL do Vicidial, (2) os códigos de disposição que indicam uma venda e um callback, e (3) aproximadamente 48 horas para configuração. Sem migração, sem downtime, sem mudanças na sua instalação existente do Vicidial.",
      },
    ],
    conclusion: "Vicidial é uma plataforma poderosa que a maioria dos operadores subutiliza dramaticamente porque os relatórios nativos não revelam a inteligência que os dados contêm. A lacuna entre 'usamos Vicidial' e 'entendemos o que nossos dados do Vicidial nos dizem' é exatamente onde vive a vantagem competitiva.",
  },
};

export default async function BlogPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const l = (LANGS.includes(lang) ? lang : "en") as Lang;
  const c = blogContent[l];

  return (
    <>
      <Nav lang={l} nav={nav[l]} />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
        <div className="mb-3 text-xs text-emerald-400 font-medium uppercase tracking-wider">Vicidial Analytics Guide</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">{c.title}</h1>
        <p className="text-lg text-zinc-400 leading-relaxed mb-12 border-b border-zinc-800 pb-8">{c.intro}</p>
        <div className="prose prose-zinc prose-invert max-w-none space-y-10">
          {c.sections.map((s, i) => (
            <div key={i}>
              <h2 className="text-xl font-semibold text-zinc-100 mb-3">{s.h2}</h2>
              <p className="text-zinc-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-6 mt-8">
            <p className="text-zinc-300 leading-relaxed italic">{c.conclusion}</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-800 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-8 py-3.5 text-sm font-semibold text-white transition-all">
            {l === "es" ? "Habla con nosotros" : l === "pt" ? "Fale conosco" : "Talk to us"}
          </a>
        </div>
      </main>
      <Footer lang={l} content={footer[l]} nav={nav[l]} />
    </>
  );
}
