# Pizarra táctica

Pizarra táctica de fútbol: fichas, material de entrenamiento, trazos, animación por fotogramas y exportación a imagen y vídeo. Funciona en PC, tablet y móvil.

## Dos formas de usarla

| Versión | Archivo | Para qué |
|---|---|---|
| **App instalable (PWA)** | `index.html` + `manifest.webmanifest` + `sw.js` + iconos | Se abre desde la web de GitHub Pages, se instala con su icono y funciona sin internet. |
| **HTML de un solo archivo** | `html/pizarra-tactica.html` | Descargar y abrir con doble clic en cualquier navegador, sin instalar nada. Ideal para llevar en un pendrive o pasar por correo. |

## Publicar con GitHub Pages

1. Settings → Pages → Source: *Deploy from a branch* → rama `main`, carpeta `/ (root)` → Save.
2. En 1–2 minutos:
   - App: `https://TU-USUARIO.github.io/pizarra-tactica/`
   - HTML suelto: `https://TU-USUARIO.github.io/pizarra-tactica/html/pizarra-tactica.html`

## Instalar la app

- **PC (Chrome / Edge):** icono de instalar en la barra de direcciones.
- **Android (Chrome):** menú ⋮ → *Instalar aplicación*.
- **iPhone / iPad (Safari):** Compartir → *Añadir a pantalla de inicio*.

## Actualizar

1. Sustituye `index.html` y `html/pizarra-tactica.html` (son la misma pizarra; la de la raíz solo añade lo necesario para instalarse).
2. Sube el número de `VERSION` en `sw.js` (p. ej. `pizarra-v2-2` → `pizarra-v2-3`).
3. Commit y push. Los dispositivos con la app instalada se actualizan al abrirla con conexión.

## Datos

Las jugadas se guardan en el navegador de cada dispositivo. Para llevarlas a otro: *Archivo → Exportar archivo*, y en el otro *Archivo → Importar archivo*.

## Uso rápido

- **Herramientas:** 1 Mover · 2 Desmarque · 3 Pase · 4 Conducción · 5 Curva · 6 Zona · 7 Óvalo · 8 Conectar · 9 Texto · 0 Borrar
- **Ratón:** botón derecho + arrastrar → horizontal gira, vertical cambia el tamaño (Mayús: pasos de 15°). Rueda → tamaño; Mayús + rueda → girar.
- **Teclado:** Ctrl+Z / Ctrl+Y deshacer y rehacer · Supr borrar · flechas mover · L bloquear · Espacio reproducir.
