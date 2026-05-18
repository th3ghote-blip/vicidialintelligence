import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ISO 3166-1 alpha-2 → lang
const ES_COUNTRIES = new Set([
  "ES","MX","CO","AR","CL","PE","VE","EC","GT","CU","BO","DO",
  "HN","PY","SV","NI","CR","PA","UY","GQ","PR",
]);
const PT_COUNTRIES = new Set(["BR","PT","AO","MZ","CV","GW","ST","TL"]);

function countryToLang(country: string | null): "en" | "es" | "pt" {
  if (!country) return "en";
  if (ES_COUNTRIES.has(country.toUpperCase())) return "es";
  if (PT_COUNTRIES.has(country.toUpperCase())) return "pt";
  return "en";
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only intercept the bare root — let /en, /es, /pt and all their
  // sub-paths pass through unchanged.
  if (pathname !== "/") return NextResponse.next();

  // Vercel injects this header on every request (empty on localhost)
  const country = request.headers.get("x-vercel-ip-country");
  const lang = countryToLang(country);

  const url = request.nextUrl.clone();
  url.pathname = `/${lang}`;
  return NextResponse.redirect(url, { status: 307 });
}

export const config = {
  matcher: ["/"],
};
