/**
 * Simple in-memory rate limiter.
 * Per-instance on Vercel (good enough for low-traffic endpoints).
 * Keyed by IP + route so limits are independent per endpoint.
 */
const store = new Map<string, { count: number; reset: number }>();

// Prune stale entries every 5 min to avoid unbounded growth
setInterval(() => {
  const now = Date.now();
  for (const [k, v] of store.entries()) {
    if (now > v.reset) store.delete(k);
  }
}, 5 * 60 * 1000);

/**
 * Returns true if the request is allowed, false if rate-limited.
 * @param key    Unique key (e.g. `${ip}:contact`)
 * @param max    Max requests per window
 * @param windowMs  Window length in ms
 */
export function rateLimit(key: string, max: number, windowMs: number): boolean {
  const now = Date.now();
  const entry = store.get(key);
  if (!entry || now > entry.reset) {
    store.set(key, { count: 1, reset: now + windowMs });
    return true;
  }
  if (entry.count >= max) return false;
  entry.count++;
  return true;
}

/** Extract best-effort IP from a Next.js request. */
export function getIp(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}
