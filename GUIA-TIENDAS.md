# Familias STM · Cómo publicarla en Google Play y App Store

La app ya está construida. Para las tiendas se "empaqueta" la misma app con la herramienta gratuita
**PWABuilder** (https://www.pwabuilder.com), que genera los archivos que piden Google y Apple.
No hay que programar nada nuevo.

## Paso 0 · Antes de las tiendas (obligatorio)
1. La app debe estar publicada en internet con HTTPS, por ejemplo `https://familias.stmary.edu.ni`
   (ver GUIA-IT.md). Las versiones de tienda abren esa misma dirección, así que cualquier cambio
   en el sitio se refleja en las apps sin volver a publicarlas.
2. La política de privacidad debe estar en línea: `https://familias.stmary.edu.ni/privacidad.html`
   (ya viene en esta carpeta). Las dos tiendas exigen esa dirección.
3. Preparar material gráfico: ícono 512×512 (ya está en `icons/icon-512.png`), 4 a 8 capturas de
   pantalla de un celular usando la app, y para Google una imagen de portada de 1024×500 px.
4. Decidir a nombre de quién se abren las cuentas: **a nombre del colegio (organización)**, no de una
   persona. Ambas tiendas piden el número D-U-N-S del colegio (gratis, se solicita en dnb.com, tarda
   unos días) y documentos de la institución.

## Paso 1 · Google Play (Android)
Costo: US$ 25 una sola vez. Tiempo: 1 a 2 semanas contando la verificación de la cuenta.

1. Crear la cuenta en https://play.google.com/console como **Organización**, pagar los US$ 25 y
   completar la verificación (datos del colegio, D-U-N-S, correo institucional).
2. Entrar a https://www.pwabuilder.com, escribir la dirección de la app y pulsar *Start*.
   Debe salir la calificación "Installable". Pulsar *Package for stores → Android*.
3. En las opciones: Package ID `ni.edu.stmary.familias`, App name "Familias STM",
   color del tema `#0E0737`. Descargar el zip. Contiene el archivo `.aab` (la app) y un archivo
   `assetlinks.json`.
4. **Subir `assetlinks.json` al sitio** en la ruta exacta `/.well-known/assetlinks.json`
   (esto le prueba a Android que la app y el sitio son del mismo dueño; sin esto la app abre con la
   barra del navegador visible).
5. En Play Console: *Crear app* → nombre "Familias STM", tipo App, gratis.
6. Completar el panel de configuración: política de privacidad (la URL del paso 0), acceso a la app
   (todo disponible sin login), anuncios (no), clasificación de contenido (cuestionario, sale "Para todos"),
   público objetivo (adultos, 18+ ya que es para padres), seguridad de datos (no recopila datos).
7. *Ficha de Play Store*: descripción corta y larga, ícono, portada 1024×500, capturas.
8. *Producción → Crear versión* → subir el `.aab` → revisar → *Iniciar lanzamiento a producción*.
9. Google revisa en 1 a 7 días. Después aparece buscando "Familias STM" en Play Store.

Nota: si la cuenta se abre a nombre de una persona en lugar del colegio, Google exige además una
prueba cerrada con 20 usuarios durante 14 días antes de publicar. Con cuenta de organización no aplica.

## Paso 2 · App Store (iPhone)
Costo: US$ 99 al año. Requiere **una computadora Mac** con Xcode instalado. Tiempo: 1 a 3 semanas.

1. Inscribirse en https://developer.apple.com/programs/ como **Organización** (pide D-U-N-S, nombre legal
   del colegio y una persona con autoridad para firmar). Apple llama por teléfono para verificar.
2. En PWABuilder, misma dirección → *Package for stores → iOS*. Bundle ID `ni.edu.stmary.familias`,
   nombre "Familias STM". Descargar el zip: es un proyecto de Xcode.
3. En la Mac: abrir el proyecto en Xcode, iniciar sesión con la cuenta de desarrollador del colegio,
   seleccionar el equipo (Team) y pulsar *Product → Archive* → *Distribute App → App Store Connect*.
4. En https://appstoreconnect.apple.com: *Mis apps → +* → nombre "Familias STM", idioma español,
   Bundle ID el mismo del paso 2.
5. Completar: capturas de pantalla (iPhone 6.7" y 6.5"), descripción, categoría Educación,
   política de privacidad (URL), "App Privacy" marcando que no recopila datos, clasificación 4+.
6. Seleccionar la compilación subida desde Xcode y *Enviar a revisión*.
7. Apple revisa en 1 a 3 días. Puede pedir cambios; lo más común es que pregunte por qué no es
   solo una página web. Respuesta: funciona sin conexión, se instala, es la app oficial del colegio
   para sus familias. Las apps institucionales de colegios normalmente se aprueban.

## Paso 3 · Después de publicar
- Los cambios de contenido se siguen haciendo en `datos.js` del sitio web. No hay que volver a subir
  nada a las tiendas.
- Solo hay que generar una versión nueva en las tiendas si cambia el nombre, el ícono o los colores.
- Comunicar a las familias tres formas de instalarla: Play Store, App Store, o directo desde el navegador
  con el enlace (esta última sigue funcionando y no depende de las tiendas).

## Resumen de costos y requisitos
| | Google Play | App Store |
|---|---|---|
| Cuenta | US$ 25 una vez | US$ 99 por año |
| A nombre de | Colegio (D-U-N-S) | Colegio (D-U-N-S) |
| Computadora | Cualquiera | Mac con Xcode |
| Revisión | 1 a 7 días | 1 a 3 días |
| Herramienta | PWABuilder | PWABuilder + Xcode |
