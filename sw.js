/* Einsingen: Service Worker für den Offline-Betrieb.
   Beim ersten Öffnen mit Internet werden alle Dateien der App und die Schriften
   auf dem Gerät gespeichert. Danach startet die App auch ohne Internet.
   Nach Änderungen an der App: VERSION erhöhen, dann holen sich die Geräte
   beim nächsten Öffnen mit Internet die neue Fassung.

   Auf GitHub Pages teilen sich alle Apps eines Kontos eine Adresse (DEIN-NAME.github.io) und damit
   den Speicher. Deshalb löscht dieser Service Worker nur eigene Speicher (einsingen-app-…) und füllt
   seinen eigenen beim Öffnen wieder auf, falls eine andere App ihn gelöscht hat.
   Er arbeitet nur, während die App geöffnet ist: kein Push, kein Hintergrund-Sync. */
const VERSION = "2026-11-26-3";
const APP = "einsingen-app-" + VERSION;
const FONTS = "einsingen-fonts-v1";
const FILES = [
  "./",
  "index.html",
  "installieren.js",
  "abcjs-basic-min.js",
  "manifest.webmanifest",
  "icons/icon-180.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png"
];
const FONT_CSS = "https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Familjen+Grotesk:wght@600;700&display=swap";

/* cache: "reload" holt jede Datei frisch vom Server, nicht aus dem Zwischenspeicher des Browsers */
function allesLaden(c) {
  return c.addAll(FILES.map(u => new Request(u, { cache: "reload" })));
}

self.addEventListener("install", ev => {
  ev.waitUntil((async () => {
    const c = await caches.open(APP);
    await allesLaden(c);
    try { await cacheFonts(); } catch (e) { /* ohne Schriften geht es mit Systemschrift */ }
    await self.skipWaiting();
  })());
});

async function cacheFonts() {
  const fc = await caches.open(FONTS);
  if (await fc.match(FONT_CSS, { ignoreVary: true })) return;
  const r = await fetch(FONT_CSS, { mode: "cors" });
  if (!r.ok) return;
  const css = await r.clone().text();
  const urls = [...css.matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)\s]+)\)/g)].map(m => m[1]);
  await Promise.all(urls.map(async u => {
    try { const f = await fetch(u, { mode: "cors" }); if (f.ok) await fc.put(u, f); } catch (e) {}
  }));
  await fc.put(FONT_CSS, r);
}

self.addEventListener("activate", ev => {
  ev.waitUntil((async () => {
    /* nur eigene alte Fassungen löschen, nie die Speicher anderer Apps */
    for (const k of await caches.keys()) {
      if (k.startsWith("einsingen-app-") && k !== APP) await caches.delete(k);
    }
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", ev => {
  const req = ev.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin) { ev.respondWith(appFile(ev)); return; }
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") { ev.respondWith(font(req)); }
});

/* App-Dateien: sofort aus dem Speicher, beim Öffnen still aktualisieren */
async function appFile(ev) {
  const req = ev.request;
  const nav = req.mode === "navigate";
  const key = nav ? "index.html" : req;
  const c = await caches.open(APP);
  /* Fehlt die Startseite im Speicher, hat ihn jemand geleert: beim Öffnen alles neu holen */
  if (nav) {
    try {
      ev.waitUntil(c.match("index.html").then(da => da ? null : Promise.all([
        allesLaden(c).catch(() => {}),
        cacheFonts().catch(() => {})
      ])));
    } catch (e) {}
  }
  const hit = await c.match(key, { ignoreSearch: true });
  const net = fetch(nav ? req.url : req, { cache: "no-cache" }).then(r => {
    if (r && r.ok && r.type === "basic" && !r.redirected) c.put(key, r.clone()).catch(() => {});
    return r;
  }).catch(() => null);
  if (hit) { try { ev.waitUntil(net); } catch (e) {} return hit; }
  const r = await net;
  return r || new Response("Diese Datei ist offline nicht gespeichert.", { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

/* Schriften: einmal laden, dann immer aus dem Speicher */
async function font(req) {
  const fc = await caches.open(FONTS);
  const hit = await fc.match(req, { ignoreVary: true });
  if (hit) return hit;
  try {
    const r = await fetch(req);
    if (r && (r.ok || r.type === "opaque")) fc.put(req, r.clone()).catch(() => {});
    return r;
  } catch (e) {
    return new Response("", { status: 503 });
  }
}
