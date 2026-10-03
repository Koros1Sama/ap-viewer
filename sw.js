/* ═══════════════════════════════════════════════════════
   Service Worker — Advanced Programming Study Viewer (د. بيداء لعلع)
   • القشرة الأساسية تُخزن عند التثبيت (الصفحات + config + الأيقونات)
   • المحتوى يُخزن تدريجياً مع التصفح، وزر «تحميل الكل» يكمل الباقي
   • التحديث: صفحات وconfig = الشبكة أولاً (النطاق يتحدث فوراً)
     بيانات data = قديم فوراً + تحديث بالخلفية (SWR)
     صور الشرائح = الكاش أولاً (كبيرة ومستقرة)
   ═══════════════════════════════════════════════════════ */
const RUNTIME = "ap-runtime-v25";
const CORE = "ap-core-v32";
const CORE_PREFIX = "ap-core-";
const RUNTIME_PREFIX = "ap-runtime-";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./summary.html",
  "./prompts.html",
  "./app.js",
  "./manifest.json",
  "./favicon.ico",
  "./data/config.js",
  "./data/emergency.js",
  "./icons/icon.svg",
  "./icons/icon-32.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/maskable-512.png",
  "./icons/apple-touch-icon.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CORE)
      .then((c) => c.addAll(CORE_ASSETS))
      .catch(() => null)
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    (async () => {
      const keys = await caches.keys();
      const targetRuntime = await caches.open(RUNTIME);

      /* حماية ونقل كافة الشرائح والموارد المحملة من أي كاش رن تايم سابق لمنع ضياع أي ملف تم تحميله */
      for (const k of keys) {
        if (k.startsWith(RUNTIME_PREFIX) && k !== RUNTIME) {
          try {
            const oldC = await caches.open(k);
            const oldReqs = await oldC.keys();
            for (const req of oldReqs) {
              const res = await oldC.match(req);
              if (res) await targetRuntime.put(req, res);
            }
            await caches.delete(k);
          } catch {}
        }
      }

      /* تنظيف كاش القشرة القديم فقط (ap-core-*) مع حظر مساس كاش الرن تايم الأساسي أو أي كاشات أخرى */
      for (const k of keys) {
        if (k.startsWith(CORE_PREFIX) && k !== CORE) {
          try {
            await caches.delete(k);
          } catch {}
        }
      }

      await self.clients.claim();
    })(),
  );
});

async function networkFirst(req) {
  const runtime = await caches.open(RUNTIME);
  try {
    const res = await fetch(req);
    if (res && res.ok) runtime.put(req, res.clone());
    return res;
  } catch {
    const cached = await caches.match(req, { ignoreSearch: true });
    if (cached) return cached;
    return new Response("أوفلاين — لا نسخة محفوظة", {
      status: 503,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
}

async function cacheFirst(req) {
  const cached = await caches.match(req, { ignoreSearch: true });
  if (cached) return cached;
  const runtime = await caches.open(RUNTIME);
  const res = await fetch(req);
  if (res && res.ok) runtime.put(req, res.clone());
  return res;
}

async function staleWhileRevalidate(req) {
  const cached = await caches.match(req, { ignoreSearch: true });
  const runtime = await caches.open(RUNTIME);
  const fresh = fetch(req)
    .then((res) => {
      if (res && res.ok) runtime.put(req, res.clone());
      return res;
    })
    .catch(() => null);
  if (cached) return cached;
  const res = await fresh;
  if (res) return res;
  return new Response("أوفلاين — لا نسخة محفوظة", {
    status: 503,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  let url;
  try {
    url = new URL(req.url);
  } catch {
    return; /* رابط معطوب — تجاهل بأمان */
  }
  if (url.origin !== location.origin) return;
  const p = url.pathname;

  /* سكربت العامل نفسه: شبكة مباشرة دائماً لاكتشاف التحديثات فورياً */
  if (p.endsWith("/sw.js")) return;

  /* الصفحات والإعدادات وكود التطبيق: الشبكة أولاً — تغييرات النطاق تصل فوراً */
  if (
    p === "/" ||
    p.endsWith("/") ||
    p.endsWith(".html") ||
    p.endsWith("/data/config.js") ||
    p.endsWith("/app.js") ||
    p.endsWith("/manifest.json") ||
    p.endsWith("/favicon.ico")
  ) {
    return e.respondWith(networkFirst(req));
  }

  /* الشرائح والأيقونات: الكاش أولاً (كبيرة ومستقرة) */
  if (p.includes("/slides/") || p.includes("/icons/")) {
    return e.respondWith(cacheFirst(req));
  }

  /* ملفات البيانات: نسخة محفوظة فوراً + تحديث بالخلفية */
  if (p.includes("/data/")) {
    return e.respondWith(staleWhileRevalidate(req));
  }

  /* أي مورد محلي آخر: الشبكة أولاً */
  return e.respondWith(networkFirst(req));
});
