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
- **Selección múltiple:** arrastra en una zona vacía (recuadro) o Mayús + clic. Arrastra una pieza seleccionada para mover el grupo; en la pestaña Ficha: alinear, repartir, petos, color, duplicar, bloquear, eliminar.
- **Zoom:** rueda en zona vacía, Ctrl + rueda, teclas + / −, o pellizco con dos dedos. Desplazar: botón central, botón derecho en zona vacía o dos dedos. Botón *Ajustar* para volver.
- **Girar y tamaño:** botón derecho + arrastrar (horizontal gira, vertical tamaño; Mayús: pasos de 15°), rueda sobre la pieza (Mayús + rueda gira), o en táctil un dedo sobre la pieza y otro al lado.
- **Trazos por fotograma:** con fotogramas guardados, los trazos nuevos se ven solo en el fotograma actual. En Ficha eliges *Todos*, *Solo en el N* o *Desde el N*.
- **Compartir:** Archivo → *Compartir por enlace*. La jugada va dentro del enlace (`#j=…`); al abrirlo se carga en la pizarra.
- **Plantillas:** Campo → Plantillas. Dorsal, nombre, portero y titular; *Aplicar al local / rival*.
- **Teclado:** Ctrl+Z / Ctrl+Y deshacer y rehacer · Supr borrar · flechas mover · L bloquear · Espacio reproducir · Esc quitar selección.
