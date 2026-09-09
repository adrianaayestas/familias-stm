# Portal Familias STM

App informativa para madres, padres y tutores de St. Mary School. Se instala en el celular desde
el navegador (Android e iPhone) sin pasar por las tiendas.

## Las cinco páginas (versión 2.4)
- **Inicio**: estado del día y avisos sin leer, accesos rápidos, anuncio destacado, tablero de anuncios
  con filtro por categoría (Académico, Cívico, Familias, Deporte, Artes, Administrativo) y "Esta semana"
  con las tres próximas actividades. La app recuerda qué avisos ya leyó cada familia.
- **Calendario**: calendario compacto (la semana actual; "Ver mes completo" lo despliega), filtro por nivel
  y lista de actividades agrupada por semana con ícono por tipo. Las semanas pasadas quedan ocultas
  bajo "Ver semanas anteriores".
- **Extras** (extracurriculares): filtro por tipo, pasos para inscribirse, contacto de Servicios Educativos
  para el pago y la lista de actividades con horario, cupo, responsable y botones de contacto.
- **Pagos** (Servicios Educativos): cuentas bancarias con botón de copiar, nota de nombre y código del
  estudiante, y envío del comprobante por WhatsApp, correo o llamada.
- **Contactos**: dirección y horario, directorio en tres grupos (Atención principal, Coordinaciones,
  Servicios del colegio), tarjeta "¿No sabes a quién escribir?", idioma (español / inglés) y guía de instalación.

## Cómo cambiar el contenido
Todo el contenido está en **`datos.js`**: avisos, actividades, extracurriculares, contactos y enlaces.
Edita ese archivo, guarda y sube el cambio a GitHub. Vercel publica la nueva versión sola.

- Avisos: el más reciente primero (ese es el anuncio destacado). Cada uno necesita un `id` único que no
  cambie, un `tipo` (academico, civico, familias, deporte, artes, admin) y un `resumen` de una línea.
  Para adjuntar un PDF, súbelo a la carpeta `circulares/` y escribe su nombre en `adjunto`.
- Actividades: `fecha` en formato AAAA-MM-DD, `hasta` si dura varios días, `tipo` (feriado, academico,
  civico, familias, deporte, artes, pastoral, admin) y `niveles` (preescolar = Edu. Inicial, primaria, secundaria).
  Septiembre y octubre 2026 ya están cargados desde el calendario oficial.
- Avisos con pasos: agrega `pasos: [ {es, en}, ... ]` y opcionalmente `contacto: { nombre, telefono, correo }`
  (así está hecho el aviso de Matrículas 2027).
- Extracurriculares: solo nombre, programa y responsable con su contacto. Sin horarios.
- Valor del mes: en `valores`, con la clave AAAA-MM.
- Enlaces de Inicio: si un enlace no tiene `url`, no se muestra (por ejemplo, el calendario en PDF).

Cuando publiques cambios importantes, sube el número de `VERSION` en `sw.js` para que los
celulares que ya tienen la app instalada tomen la versión nueva.

## Publicar
1. Sube esta carpeta a un repositorio de GitHub (por ejemplo `portal-stm`).
2. En Vercel: Add New Project → Import → elige el repositorio → Deploy. No hay que configurar nada.
3. Comparte el enlace que da Vercel. Para usar `familias.stmary.edu.ni`, agrega el dominio en
   Vercel (Settings → Domains) y crea el registro DNS que indica.

## Archivos
- `index.html` pantallas · `styles.css` estilos · `app.js` lógica · `datos.js` contenido
- `manifest.webmanifest` + `icons/` hacen que se pueda instalar · `sw.js` la guarda para abrir sin señal
- `img/stm-crest.png` escudo del colegio · `circulares/` PDFs adjuntos
