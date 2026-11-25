// Pizarra táctica: funciona sin conexión. Sube VERSION al publicar cambios.
const VERSION='pizarra-v2-5';
const CORE=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable.png','./apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  const url=new URL(r.url);
  if(r.mode==='navigate'){ // la página: primero red (para recibir actualizaciones), si no hay, la copia guardada
    e.respondWith(fetch(r).then(res=>{const c=res.clone();caches.open(VERSION).then(k=>k.put('./index.html',c));return res}).catch(()=>caches.match('./index.html')));return;
  }
  // resto (iconos, tipografías de Google): copia guardada primero
  e.respondWith(caches.match(r).then(hit=>hit||fetch(r).then(res=>{if(res&&(res.ok||res.type==='opaque')&&(url.origin===location.origin||/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname))){const c=res.clone();caches.open(VERSION).then(k=>k.put(r,c))}return res})));
});
