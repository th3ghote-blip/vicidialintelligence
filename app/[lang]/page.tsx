import { type Lang, LANGS, hero, features, aiSection, dataSection, pricing, contact, footer, nav, mockup } from "@/lib/content";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import DashboardMockup from "@/components/DashboardMockup";
import Features from "@/components/Features";
import AISection from "@/components/AISection";
import DataSection from "@/components/DataSection";
import Pricing from "@/components/Pricing";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default async function Home({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const l = (LANGS.includes(lang) ? lang : "en") as Lang;

  // JSON-LD schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Vicidial Intelligence",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "AI-powered analytics dashboard for Vicidial call centres",
    url: "https://vicidialintelligence.com",
    offers: { "@type": "Offer", price: "1000", priceCurrency: "USD", priceSpecification: { "@type": "UnitPriceSpecification", price: "1000", priceCurrency: "USD", unitText: "MONTH" } },
    provider: { "@type": "Organization", name: "Vicidial Intelligence", email: "info@aiappgenius.com", url: "https://vicidialintelligence.com" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav lang={l} nav={nav[l]} />
      <main>
        <Hero lang={l} content={hero[l]} />
        <DashboardMockup lang={l} content={mockup[l]} />
        <Features lang={l} content={features[l]} />
        <AISection lang={l} content={aiSection[l]} />
        <DataSection lang={l} content={dataSection[l]} />
        <Pricing lang={l} content={pricing[l]} />
        <ContactSection lang={l} content={contact[l]} />
      </main>
      <Footer lang={l} content={footer[l]} nav={nav[l]} />
    </>
  );
}
