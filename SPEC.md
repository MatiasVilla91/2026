# Landing Page UI Spec

## 1. Contexto

Este documento define la especificacion funcional y visual de la iteracion aplicada sobre la landing page de `Jabones de Glicerina`. Su objetivo es dejar registro claro de las decisiones tomadas, el alcance del trabajo y el estado esperado de la interfaz despues de los cambios.

## 2. Objetivo

Optimizar la parte superior de la landing para mejorar visibilidad, claridad comercial y ritmo visual, sin romper la estetica calida y artesanal del sitio.

## 3. Alcance

La iteracion cubre exclusivamente ajustes en:

- navbar
- CTA principal del navbar
- layout del hero
- espaciado vertical general entre secciones

No incluye cambios de contenido estructural, nuevas secciones, integraciones, ni rediseño completo del sistema visual.

## 4. Problemas detectados

Antes de los cambios, se observaron estos puntos:

- el navbar no permanecia visible al hacer scroll
- el CTA superior no estaba alineado con el objetivo comercial principal
- el hero tenia demasiado espacio superior
- la separacion entre el hero y la primera seccion era excesiva
- el espaciado entre secciones resultaba amplio para el ritmo buscado
- el navbar no ocupaba todo el ancho visual de la pagina

## 5. Criterios de diseno

Las decisiones de esta iteracion se guiaron por estos criterios:

- mantener una estetica suave, calida y artesanal
- mejorar jerarquia visual sin introducir elementos agresivos
- priorizar claridad de conversion en el encabezado
- compactar el layout sin hacerlo sentir apretado
- conservar consistencia con la paleta existente del sitio

## 6. Cambios implementados

### 6.1 Navbar

Se implementaron los siguientes cambios en el navbar:

- se fijo al borde superior mediante `position: fixed`
- se ajusto para permanecer visible durante el scroll
- se configuro a `width: 100%` para ocupar todo el ancho visible
- se elimino el corte lateral que generaba el ancho limitado anterior
- se aplico un fondo amarillo suave `rgba(255, 244, 220, 0.95)` compatible con la estetica general
- se mantuvo una apariencia sobria, sin redondeos extra ni decoracion innecesaria

### 6.2 CTA del navbar

Se ajusto el llamado a la accion superior para alinearlo con la intencion comercial principal:

- el texto paso de `Ver programa` a `Quiero acceder al curso`
- el boton adopto la clase `btn-primary`
- el CTA del navbar quedo visualmente alineado con el CTA principal del hero

### 6.3 Hero

Se realizaron ajustes para subir visualmente el hero y reducir aire innecesario:

- se redujo el espacio superior del contenedor `.hero`
- se detecto que el centrado vertical de `.hero-content` estaba causado por `margin: auto`
- se reemplazo ese comportamiento por `margin: 0 auto`
- se redujo el `padding-top` de `.hero-content`
- se redujo el `padding-bottom` de `.hero-content`

Resultado esperado:

- el contenido principal arranca mas arriba
- el hero queda mas cerca del navbar
- la distancia con la primera seccion se reduce de forma visible

### 6.4 Espaciado entre secciones

Para compactar el ritmo general de lectura:

- se redujo el `padding` vertical base de `.section` de `4rem` a `2rem`
- se redujeron margenes de `h1` y `h2`
- se redujo el margen superior de `.hero-actions`
- se redujo el espacio inferior del bloque `.section-title`

## 7. Estado visual esperado

Al finalizar esta iteracion, la landing debe presentar estas caracteristicas:

- navbar sticky, full width y pegado al top
- fondo del navbar en tono amarillo suave
- CTA superior con el mismo lenguaje visual del CTA principal
- hero mas alto en la pantalla, con menos aire por encima
- menor separacion entre hero y primera seccion
- menor separacion vertical entre secciones en general

## 8. Archivos impactados

- `index.html`
- `styles.css`

## 9. Resultado funcional

Los cambios implementados deben producir este comportamiento:

- el usuario siempre ve el navbar al desplazarse
- el CTA principal permanece accesible durante la navegacion
- la parte superior de la landing comunica mejor y ocupa menos espacio muerto
- el flujo entre bloques se percibe mas compacto y mas intencional

## 10. Pendientes sugeridos

No forman parte de esta iteracion, pero quedan como posibles mejoras:

- limitar visualmente el contenido interno del navbar mientras el fondo sigue full width
- agregar un estado visual del navbar al scrollear, si se busca mayor feedback
- revisar consistencia de espaciados internos en cards, testimonios y FAQ
- documentar futuras iteraciones con fecha y responsable

## 11. Nota de mantenimiento

Este archivo debe funcionar como referencia base de esta iteracion. Si se realizan nuevos ajustes, conviene agregar una nueva seccion de historial o versionado en lugar de reemplazar el contexto existente.

## 12. Actualizacion de contenido - Modulos del programa

Se actualizo la seccion `Lo que incluye tu acceso` para reflejar la nueva estructura del curso.

- la grilla paso de 6 modulos a 9 modulos
- se reemplazo el temario anterior por una secuencia centrada en acompanamiento, bases, materiales, elaboracion, diseno, formulacion consciente, linea natural, emprendimiento y temporadas
- no se modifico la estructura visual de la seccion, solo su contenido

Estado esperado:

- la landing muestra 9 tarjetas desplegables de modulos
- el tono del contenido sigue siendo claro, comercial y facil de escanear
- la seccion conserva el mismo estilo visual y responsive actual

## 13. Nueva seccion visual - Galeria de fotos

Se incorporo una seccion de fotos dentro del flujo principal de la landing para mostrar ejemplos visuales del tipo de piezas que el curso permite crear.

- la nueva galeria usa imagenes existentes de `img/`
- se mantuvo el tono calido, artesanal y elegante del sitio
- la seccion se integro sin romper el ritmo compacto entre bloques

Estado esperado:

- la landing muestra una galeria de fotos despues del bloque visual principal
- las imagenes se ven prolijas en desktop y mobile
- la seccion refuerza el valor visual del producto sin competir con los CTAs

## 14. Ajuste de contenido - Eliminacion de bonos

Se elimino la seccion `Bonos y recursos extra` de la landing.

- ya no se muestran recursos complementarios como bloque independiente
- el flujo queda mas directo entre modulos y argumentos de conversion
- no fue necesario cambiar estilos globales para este ajuste

## 15. Reordenamiento de secciones para conversion

Se ajusto el orden del contenido principal para que la landing presente antes los argumentos de valor, la prueba social y el contenido concreto del programa.

Nuevo orden esperado dentro de `main`:

- resultados del programa
- testimonios
- bloque visual de valor percibido
- vista previa en video
- galeria de fotos
- contenido del programa
- identificacion con la audiencia
- presentacion de la creadora
- garantia
- preguntas frecuentes
- oferta final con CTA

Criterio aplicado:

- mostrar primero la transformacion prometida
- sumar confianza temprano con prueba social
- exhibir antes el contenido del curso para justificar la compra
- dejar la identificacion con la audiencia despues de que el valor ya esta claro
- mantener garantia, FAQ y CTA final en la parte baja para cerrar la decision

Estado esperado:

- el usuario entiende rapido que logra, ve prueba real y luego descubre que incluye
- la landing reduce friccion en el tramo medio
- el cierre mantiene respaldo y claridad sin cortar el ritmo comercial

## 16. Ajuste de tono - Presentacion de la creadora

Se actualizo el bloque `Conoce a la creadora` para que la presentacion de Karen Isabel quede redactada en tercera persona.

- se elimino la voz en primera persona dentro del bloque de autora
- se mantuvo el tono cercano, calido y comercial del resto de la landing
- no se modifico la estructura visual de la seccion, solo el copy

Estado esperado:

- la autora se presenta en tercera persona
- el texto suena natural y consistente con el resto del sitio
- no da la sensacion de que quien publica la landing habla como si fuera la autora

## 17. Nueva seccion visual - Vista previa en video

Se incorporo un bloque compacto con video para mostrar una pequena muestra del curso dentro del flujo principal de la landing.

- el video se integro como una pieza visual pequena, sin dominar la pantalla
- se utilizo un copy breve y comercial alineado con el tono calido del sitio
- la seccion se ubico antes de la galeria de fotos y del bloque de contenido del programa para reforzar curiosidad y valor percibido
- se mantuvo un diseno sobrio, elegante y responsive

Estado esperado:

- la landing muestra un bloque con el mensaje `Asoma un ojo al curso por dentro`
- el video se ve pequeno, prolijo y bien enmarcado en desktop y mobile
- la nueva seccion acompana la conversion sin romper la estetica artesanal y femenina actual

## 18. Ajuste visual - Vista previa en video

Se hizo un ajuste menor sobre el bloque de video para mejorar presencia visual y legibilidad del mensaje.

- se aumento moderadamente el ancho visible del reproductor en desktop y mobile
- se acorto el titulo del bloque para hacerlo mas directo y facil de escanear
- se mantuvo el caracter compacto de la seccion, sin convertirla en un hero secundario

Estado esperado:

- el cuadro del video se percibe mas comodo y menos chico
- el titulo del bloque se lee mas rapido
- la seccion sigue integrada con el ritmo visual general de la landing

## 19. Ajuste de contenido - Testimonios

Se elimino el testimonio mas largo del bloque de prueba social para mantener una lectura mas limpia y una grilla visualmente mas prolija.

- se quito el comentario de Maria del 16 de febrero de 2026
- se priorizo un conjunto de testimonios mas breves y faciles de escanear
- no se modifico el estilo general de la seccion

## 20. Ajuste tecnico - SEO base y compartido social

Se aplico una optimizacion SEO conservadora para mejorar lectura tecnica, indexacion y previsualizacion del enlace sin alterar el copy principal visible de la landing.

- se ajusto el `title` para incluir la busqueda principal `curso de jabones de glicerina online`
- se actualizo la `meta description` con una formulacion mas clara para buscadores
- se agrego `meta robots` con `index, follow`
- se incorporaron etiquetas `Open Graph` y `Twitter Card` para mejorar compartido social
- se mantuvo intacto el cuerpo comercial de la landing

Estado esperado:

- Google entiende con mas claridad la tematica principal de la pagina
- la URL tiene mejores senales basicas de indexacion
- al compartir el enlace deberia mostrarse una vista previa mas consistente

## 21. Nuevo bloque estructural - Footer legal

Se agrego un footer legal al final de la landing, inmediatamente antes del cierre de `body`.

- el bloque incorpora copyright de marca
- se agregan enlaces a `privacidad.html`, `cookies.html` y `terminos.html`
- se suma un disclaimer breve sobre enlaces de afiliado y procesamiento de pago en Hotmart

Estado esperado:

- la landing cierra con un bloque legal independiente del contenido principal
- los enlaces legales quedan accesibles desde el pie de pagina
- el texto de afiliacion queda visible al final del recorrido comercial

## 22. Consentimiento de cookies y tracking

Se agrego un flujo base de consentimiento para cookies y etiquetas de medicion.

- se carga `legal.css` para estilos del footer legal, banner y modal
- se define `gtag consent default` con almacenamiento denegado por defecto
- se agrega `legal.js` al final de `body` para manejar banner, preferencias y persistencia local
- el Meta Pixel deja de inicializarse automaticamente y pasa a depender del consentimiento otorgado
- la configuracion contempla un campo `gaId` para una futura integracion de Google Analytics o Google Ads

Estado esperado:

- al entrar por primera vez, el usuario ve un banner de cookies
- no se activan etiquetas de marketing o analytics antes del consentimiento
- el usuario puede aceptar o rechazar las cookies no esenciales

## 23. Ajuste tecnico - Sitemap ampliado

Se fortalecio el sitemap XML para que refleje mejor las URLs publicas reales del sitio.

- se mantuvo la home como URL principal del sitemap
- se agregaron las rutas legales publicas `privacidad`, `cookies` y `terminos`
- se conservaron prioridades mas bajas para las paginas legales y prioridad maxima para la landing principal

Estado esperado:

- `sitemap.xml` lista las rutas indexables relevantes del sitio
- Search Console recibe un sitemap mas completo y consistente con la navegacion publicada
- la home sigue siendo la URL de mayor prioridad de rastreo

## 24. Ajuste visual - Banner de cookies

Se refino la estetica del consentimiento de cookies para integrarlo mejor con la identidad calida y artesanal de la landing.

- se aumento el padding interno del banner para evitar que el texto quede pegado a los bordes
- se reemplazo el fondo blanco plano por fondos calidos con degradado suave
- se ajustaron bordes, radios y sombras para que el bloque se sienta mas elegante y menos tecnico
- el titulo del banner adopta una presencia visual mas alineada con la tipografia decorativa del sitio
- en mobile los botones pasan a ancho completo para mejorar aire y legibilidad

Estado esperado:

- el banner de cookies se ve mas integrado con la web y menos ajeno al sistema visual
- el texto respira mejor y no queda pegado al contenedor

## 25. Simplificacion funcional - Consentimiento de cookies

Se simplifico el flujo para hacerlo mas directo y menos tecnico.

- se elimino la opcion `Configurar` del banner
- se retiro el acceso a configuracion desde el footer
- el consentimiento queda resuelto solo con `Aceptar` o `Rechazar`
- se actualizaron los textos para reflejar esta version simplificada

Estado esperado:

- el usuario entiende la decision mas rapido
- el banner se siente mas simple y liviano
- no quedan referencias visibles a configuraciones avanzadas que ya no existen

## 26. Reestructuracion comercial - Landing orientada a conversion

Se realizo una nueva iteracion con foco explicito en performance marketing para trafico frio proveniente de Meta Ads.

Objetivo de esta version:

- aumentar claridad comercial en los primeros segundos
- mejorar el CTR hacia Hotmart
- reducir friccion y dispersion dentro del recorrido
- hacer la pagina mas escaneable en mobile

### 26.1 Cambio de enfoque general

La landing dejo de priorizar un tono mayormente inspiracional e informativo para pasar a una estructura mas directa, persuasiva y orientada a decision.

Se mantuvo la estetica femenina, calida y artesanal, pero subordinada a claridad comercial.

### 26.2 Nueva jerarquia de la pagina

Nuevo orden esperado dentro de `main`:

- objeciones comunes
- transformacion / resultado
- testimonios
- bloque visual de resultados esperados
- resumen escaneable de que incluye el curso
- bloque para quien es / para quien no es
- presentacion breve de la creadora
- garantia
- FAQ breve
- CTA final

### 26.3 Hero de alta claridad

El hero fue replanteado para conectar con trafico frio en menos de 3 segundos.

Cambios aplicados:

- titular principal mas directo y orientado al resultado
- subtitulo mas concreto sobre el tipo de alumna y el beneficio principal
- incorporacion de 4 bullets de confianza arriba del pliegue
- CTA principal mas especifico y orientado a la accion real
- CTA secundario de exploracion hacia `Que incluye`
- tarjeta lateral con resumen de oferta para reforzar comprension inmediata
- micropruebas visibles: `100% online`, `Garantia de 7 dias`, `Ideal para hobby o emprendimiento`

### 26.4 Objeciones y friccion

Se agrego un bloque temprano de objeciones con el mensaje:

- `Si viste el video y pensaste esto...`

Funcion esperada:

- contener dudas tipicas de una visitante fria
- responder barreras antes de pedir una decision fuerte
- mejorar continuidad de lectura desde anuncios y video

### 26.5 Contenido eliminado o fusionado

Para simplificar el recorrido y evitar dispersion:

- se elimino el bloque de video embebido
- se retiro el bloque visual narrativo separado
- se sintetizo el contenido del programa en una grilla mas escaneable
- se dejo el temario extendido dentro de un desplegable, en vez de exponer muchas tarjetas largas de entrada

### 26.6 Prueba social y conversion

Los testimonios quedaron mas arriba en la landing para reforzar confianza antes del detalle de contenido.

Estado esperado:

- una visitante fria ve antes la validacion de otras alumnas
- la prueba social aparece antes de pedir demasiado esfuerzo de lectura

### 26.7 Bloques de decision

Se incorporaron o reforzaron bloques pensados para ayudar a decidir:

- transformacion / resultado
- resultados visuales esperados
- para quien es / para quien no es
- garantia con CTA propio
- FAQ breve y concreta
- CTA final orientado a ver el curso y el precio en Hotmart

### 26.8 Lineamientos de copy para esta version

El copy de esta iteracion debe mantener estas caracteristicas:

- lenguaje concreto
- promesa realista
- enfasis en `desde cero`, `paso a paso`, `online`, `hobby o emprendimiento`
- foco en piezas lindas, delicadas y con mejor terminacion
- bajo uso de lenguaje poetico o abstracto

### 26.9 Estado visual esperado

La landing debe sentirse:

- mas directa
- mas comercial
- menos dispersa
- mas facil de escanear en mobile
- mas clara para una usuaria que llega sin contexto previo

## 27. Ajuste visual - Video en el hero

Se reemplazo la imagen estatica del resumen de oferta en el hero por un video vertical alojado en Cloudinary.

- el cambio se aplico dentro de `.hero-card`, conservando la misma estructura del bloque
- el video se reproduce automaticamente, en silencio, en loop y con `playsinline`
- se mantuvo el mismo criterio visual de tarjeta calida y compacta
- se definio un encuadre consistente para desktop y mobile con `object-fit: cover`

Estado esperado:

- el lateral del hero muestra video en lugar de imagen fija
- el bloque mantiene proporciones prolijas y no rompe el layout responsive
- la pieza visual refuerza el valor percibido sin competir con el copy principal

## 28. Ajuste fino - Jerarquia del hero

Se hizo un refinamiento visual sobre el bloque superior para mejorar lectura y balance entre copy y pieza multimedia.

- la tarjeta lateral del hero se subio levemente en desktop para que quede mas cerca del arranque del contenido
- el `h1` amplio su ancho util para reducir cortes de linea y lograr una lectura mas lineal
- en mobile se mantuvo un comportamiento estable, sin desplazar artificialmente la tarjeta

Estado esperado:

- el video del hero se percibe un poco mas arriba dentro de la composicion
- el titulo principal se lee con menos saltos y mejor ritmo visual

## 29. Ajuste fino adicional - H1 mas lineal

Se hizo un segundo ajuste menor en el hero para estirar un poco mas la caja de texto principal.

- se amplio el ancho maximo de `.hero-copy`
- se aumento nuevamente el ancho util del `h1` en desktop

Estado esperado:

- el titular principal corta menos
- la lectura del hero se siente mas corrida y mas facil de escanear
