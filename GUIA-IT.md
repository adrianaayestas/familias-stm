# Portal Familias STM · Guía para el equipo de IT

App web instalable (PWA) para las familias de St. Mary School. Contenido: avisos, calendario,
extracurriculares y contactos. Sin login, sin base de datos, sin backend.

## 1. Qué es técnicamente
- **Sitio estático**: HTML, CSS y JavaScript puros. No usa frameworks, no requiere Node, PHP ni base de datos.
- **PWA**: `manifest.webmanifest` + `sw.js` (service worker) permiten instalarla en Android e iPhone
  desde el navegador y abrirla sin conexión con la última copia guardada.
- **Sin dependencias externas** salvo la tipografía Open Sans desde Google Fonts (si se bloquea, cae a Segoe UI / Arial).
- **Sin datos personales**: no recolecta ni almacena información de las familias. Solo guarda en el
  navegador de cada usuario el idioma elegido y qué avisos ya leyó (localStorage).

## 2. Archivos
| Archivo | Función |
|---|---|
| `index.html` | Pantallas de la app |
| `styles.css` | Estilos (colores del colegio: azul `#0E0737`, verde `#0E8F34`) |
| `app.js` | Lógica de navegación, calendario, idioma ES/EN e instalación |
| `datos.js` | **Todo el contenido editable**: avisos, actividades, extracurriculares, contactos, enlaces |
| `manifest.webmanifest`, `icons/` | Nombre, ícono y colores de la app instalada |
| `sw.js` | Caché para abrir rápido y sin señal. Tiene un número `VERSION` |
| `img/` | Escudo y logo |
| `circulares/` | PDFs adjuntos a los avisos (vacía al inicio) |

## 3. Requisitos del hosting
1. Servir los archivos tal cual (cualquier servidor web estático sirve).
2. **HTTPS obligatorio**: sin HTTPS el navegador no permite instalar la app ni activar el service worker.
3. `index.html` como documento por defecto de la carpeta.
4. Tipo MIME correcto para `manifest.webmanifest`: `application/manifest+json`
   (Vercel, Netlify, Cloudflare Pages y Nginx modernos lo hacen solos; en IIS hay que agregarlo).
5. Recomendado: dominio propio, por ejemplo `familias.stmary.edu.ni`.

## 4. Opciones para montarla (elegir una)

### Opción A · Vercel o Netlify (recomendada, gratis, 15 minutos)
1. Crear un repositorio en GitHub (por ejemplo `portal-stm`) y subir el contenido de esta carpeta.
2. En Vercel: *Add New → Project → Import* el repositorio → *Deploy*. Sin configuración adicional.
3. En *Settings → Domains* agregar `familias.stmary.edu.ni`. Vercel indica el registro DNS
   (un CNAME hacia `cname.vercel-dns.com`). Crearlo en el DNS del dominio `stmary.edu.ni`.
4. HTTPS se emite solo. Cada `git push` publica la versión nueva automáticamente.

### Opción B · Servidor web propio del colegio (Apache, Nginx o IIS)
1. Copiar la carpeta completa a la raíz del sitio (o a un subdominio dedicado).
2. Activar HTTPS con un certificado válido (Let's Encrypt funciona bien).
3. En IIS agregar el tipo MIME `.webmanifest → application/manifest+json`.
4. Para actualizar contenido: reemplazar `datos.js` (y `sw.js` si se subió la versión).

### Opción C · Como subcarpeta del sitio actual en WordPress (ELEGIDA: stmary.edu.ni/familias/)
El sitio está en un hosting con cPanel, detrás de Cloudflare. La app va en una carpeta propia y
no toca WordPress. Todos los enlaces internos son relativos, así que funciona en subcarpeta.

1. Entrar a cPanel → **Administrador de archivos** → `public_html` (la carpeta donde está WordPress:
   se ven `wp-admin`, `wp-content`, `wp-config.php`).
2. Crear la carpeta **`familias`** (en minúsculas, sin acentos).
3. Entrar a `familias`, pulsar **Cargar** y subir `portal-stm.zip`. Luego clic derecho sobre el zip →
   **Extract** → extraer en `/public_html/familias`. Borrar el zip después.
4. Verificar que dentro de `familias` quedaron `index.html`, `app.js`, `datos.js`, `.htaccess`
   (activar "Mostrar archivos ocultos" en la configuración del Administrador de archivos para verlo),
   y las carpetas `icons`, `img`, `circulares`.
5. Abrir `https://stmary.edu.ni/familias/` en un celular. Debe cargar la app y ofrecer instalarla.
6. Si Cloudflare muestra una versión vieja tras un cambio: Cloudflare → Caching → **Purge Everything**,
   o crear una regla de caché que excluya `stmary.edu.ni/familias/*`.
7. En WordPress, agregar el enlace en el menú y un botón en la portada: **"App para familias"** →
   `https://stmary.edu.ni/familias/` (Apariencia → Menús, o el botón en Elementor).

El archivo `.htaccess` incluido hace tres cosas: evita que WordPress capture la ruta, declara el tipo
MIME del manifest y marca `sw.js`, `datos.js` e `index.html` como no cacheables.

Más adelante, si se prefiere `familias.stmary.edu.ni`: cPanel → Dominios → crear subdominio apuntando
a `public_html/familias`, y en Cloudflare agregar el registro DNS que indique cPanel. En `.htaccess`
cambiar `RewriteBase /familias/` por `RewriteBase /`.

## 5. Cómo se actualiza el contenido
- Todo se edita en `datos.js` (avisos, calendario, extracurriculares, contactos, enlaces).
  El archivo tiene comentarios que explican cada campo.
- Los PDF de circulares se copian a `circulares/` y se referencian por nombre en el aviso.
- Cuando haya cambios importantes, subir el número `VERSION` en `sw.js`
  (por ejemplo `stm-v2.1.0` → `stm-v2.1.1`) para que los celulares con la app instalada descarguen la versión nueva.
  Los cambios solo en `datos.js` se ven igual: la app siempre intenta la red primero y usa la caché como respaldo.

## 6. Prueba después de montarla
1. Abrir la URL en un celular Android con Chrome: debe ofrecer "Instalar app".
2. Abrirla en iPhone con Safari: Compartir → "Agregar a inicio". Debe abrir a pantalla completa, sin barra del navegador.
3. Activar modo avión y volver a abrirla: debe cargar igual.
4. Opcional: en Chrome de escritorio, DevTools → Lighthouse → categoría PWA, debe pasar "Installable".

## 7. Siguientes fases posibles (no incluidas)
- Panel para que secretaría publique avisos sin editar archivos (requiere un backend ligero, por ejemplo Supabase).
- Notificaciones push.
- Publicación en Play Store / App Store empaquetando esta misma app (Capacitor o PWABuilder).

Contacto interno del proyecto: Adriana Ayestas · aayestas@stmary.edu.ni
