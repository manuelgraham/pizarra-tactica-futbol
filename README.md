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
2. Cambia `VERSION` en `sw.js` y `APP_VERSION` en los dos `.html` al número de la nueva versión (p. ej. `1.1.0` → `1.1.1`).
3. Commit y push. Los dispositivos con la app instalada se actualizan al abrirla con conexión.

## Datos

Las jugadas se guardan en el navegador de cada dispositivo. Para llevarlas a otro: *Archivo → Exportar archivo*, y en el otro *Archivo → Importar archivo*.

## Uso rápido

- **Herramientas:** 1 Mover · 2 Desmarque · 3 Pase · 4 Conducción · 5 Curva · 6 Zona · 7 Óvalo · 8 Conectar · 9 Texto · 0 Borrar
- **Presentar (P):** pantalla completa sin controles. Avanza con → / Espacio o tocando la parte derecha; retrocede con ← o tocando la izquierda; Esc para salir.
- **Notas por fotograma:** pestaña Animación → *Nota del fotograma*. Se ven al reproducir, al presentar y en la imagen y el vídeo exportados.
- **Flechas numeradas:** botón *Numerar* (N) para numerar las nuevas; en Ficha, número a mano; en selección múltiple, *Numerar 1, 2, 3…*.
- **Ejercicio:** datos del ejercicio, *PDF de este ejercicio* (con la secuencia de fotogramas) y *PDF de la sesión* a partir de jugadas guardadas.
- **Partidos:** tu calendario (a mano o *Pegar calendario* copiado de la web de la federación), próximo partido, resultados y **alineación de la jornada** con titulares, suplentes, sistema y consignas: verla en la pizarra o sacar el PDF.
- **Diapositivas del partido:** desde Partidos › *Diapositivas*: día de partido, convocatoria, citación, alineación y cuerpo técnico; 3 diseños y 3 formatos; compartir (WhatsApp), imagen o PDF. Los datos del club (escudo, competición, cuerpo técnico) están en Partidos › Mi equipo y la citación en *Editar partido*.
- **Biblioteca (17 ejercicios por categorías):** calentamiento, técnica, táctica, físico, porteros, balón parado y juego reducido. Filtro por categoría en la pestaña Ejercicio.
- **Selección múltiple:** arrastra en una zona vacía (recuadro) o Mayús + clic. En Ficha: alinear, repartir, petos, color, números, duplicar, bloquear, eliminar.
- **Zoom:** rueda en zona vacía, Ctrl + rueda, teclas + / −, o pellizco con dos dedos. Desplazar: botón central, botón derecho en zona vacía o dos dedos. *Ajustar* para volver.
- **Girar y tamaño:** botón derecho + arrastrar (horizontal gira, vertical tamaño; Mayús: pasos de 15°), rueda sobre la pieza (Mayús + rueda gira), o en táctil un dedo sobre la pieza y otro al lado.
- **Trazos por fotograma:** con fotogramas guardados, los trazos nuevos se ven solo en el fotograma actual. En Ficha eliges *Todos*, *Solo en el N* o *Desde el N*.
- **Compartir:** Archivo → *Compartir por enlace*. La jugada va dentro del enlace (`#j=…`).
- **Plantillas:** Campo → Plantillas. Dorsal, nombre, portero y titular; *Aplicar al local / rival*.
- **Teclado:** Ctrl+Z / Ctrl+Y · Supr borrar · flechas mover · L bloquear · Espacio reproducir · Esc quitar selección.

## Versiones

Las versiones publicadas están en **Releases**. Cada una se puede descargar por separado. La versión instalada se ve en *Archivo* (al pie).
