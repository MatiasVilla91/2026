# Landing Page Spec

## 1. Contexto

Este documento describe el estado actual esperado de la landing estatica de `Jabones de Glicerina`, tomando como fuente de verdad el `index.html` vigente.

Su funcion es dejar registro claro de la estructura, la intencion comercial, los bloques visibles y los criterios visuales activos para futuras iteraciones.

## 2. Objetivo de la version actual

La landing esta orientada a conversion para trafico frio y busca:

- explicar rapido que ofrece el curso
- reducir dudas de principiantes
- mostrar resultado visual y valor percibido
- sostener una estetica calida, femenina, artesanal y elegante
- empujar clics hacia Hotmart con CTAs claros y repetidos

## 3. Alcance documentado

Este spec cubre el estado actual de:

- estructura completa de `index.html`
- jerarquia comercial del contenido
- comportamiento visual general definido por `styles.css`
- integraciones visibles de SEO, legal y consentimiento

No documenta logica interna de `legal.js` mas alla de su funcion visible sobre la pagina.

## 4. Estructura general de la pagina

### 4.1 Head

El documento incluye:

- `title` orientado a SEO: `Curso de Jabones de Glicerina Online | Aprende Desde Cero Paso a Paso`
- `canonical` a `https://jabones-glicerina.site/`
- `meta description` enfocada en principiantes y resultado visual
- `meta robots` con `index, follow`
- etiquetas Open Graph
- etiquetas Twitter Card
- favicon y `apple-touch-icon` usando `img/favicon.png`
- Google Fonts con `DM Serif Display` y `Manrope`
- carga de `styles.css`
- carga de `legal.css`
- objeto global `window.LEGAL_CONFIG` con `metaPixelId` y `gaId`

### 4.2 Body

La pagina incluye, en este orden:

1. dos formas decorativas de fondo fijas
2. `header.hero` con navbar y hero principal
3. bloque CTA puente entre hero y objeciones
4. `main` con todas las secciones comerciales
5. `footer.legal-footer`
6. script inline de consentimiento por defecto para `gtag`
7. carga de `legal.js`

## 5. Navbar

### Estado esperado

- el navbar usa la clase `.topbar`
- permanece fijo arriba con `position: fixed`
- ocupa todo el ancho visible
- tiene fondo amarillo suave semitransparente
- muestra la marca `Jabones de Glicerina`
- incluye un CTA principal con estilo `btn btn-primary`

### CTA del navbar

Texto actual:

- `Quiero entrar al curso`

Comportamiento esperado:

- abre Hotmart en nueva pestana
- usa `target="_blank"` y `rel="noopener noreferrer"`
- mantiene consistencia visual con el CTA principal del hero

## 6. Hero

### Objetivo del bloque

Resolver en el primer pantallazo:

- que es el producto
- para quien es
- cual es el resultado esperado
- como avanzar

### Estructura actual

El hero esta compuesto por:

- `nav.topbar`
- `section.hero-content`
- columna izquierda `.hero-copy`
- columna derecha `.hero-card`
- carrusel visual de imagenes arriba del `h1` dentro de `.hero-copy`

### Copy principal

Elementos actuales:

- kicker: `Curso online paso a paso para principiantes`
- carrusel horizontal automatico con imagenes de resultados del curso
- `h1`: `Aprende a crear jabones de glicerina hermosos paso a paso desde cero`
- parrafo de apoyo orientado a hobby, regalo o primeros pasos de venta
- lista `trust-bullets` con 4 puntos de confianza
- bloque `hero-actions` con CTA principal y CTA secundario
- bloque `hero-proof` con 3 micropruebas

### CTAs del hero

CTA principal:

- texto: `Quiero aprender desde cero`
- link externo a Hotmart
- estilo `btn btn-primary`

CTA secundario:

- texto: `Ver que incluye`
- ancla interna hacia `#incluye`
- estilo `btn btn-ghost`

### Micropruebas visibles

La fila `.hero-proof` muestra:

- `100% online`
- `Garantia de 7 dias`
- `Pago seguro por Hotmart`

### Tarjeta lateral del hero

La tarjeta `.hero-card` resume la oferta y contiene:

- video vertical autoplay, muted, loop y `playsinline`
- fuente de video alojada en Cloudinary
- eyebrow `Lo que te llevas`
- titulo orientado a empezar bien, evitar errores y lograr piezas cuidadas
- lista `mini-checks` con 3 beneficios concretos

### Estado visual esperado del hero

- el contenido arranca alto en pantalla y sin aire excesivo
- el layout usa dos columnas en desktop
- el carrusel suma prueba visual rapida antes del titular, sin competir con el CTA
- el video queda integrado como pieza de apoyo y no como bloque dominante
- el `h1` tiene ancho suficientemente amplio para evitar cortes innecesarios
- en mobile el hero pasa a una sola columna sin romper ritmo ni legibilidad
- en mobile el carrusel del hero se mantiene en una version mas compacta y centrada

## 7. Orden real de secciones en `main`

El orden actual esperado es el siguiente:

1. CTA puente
2. Objeciones comunes
3. Transformacion / resultado
4. Antes y despues
5. Testimonios
6. Galeria visual de resultados
7. Que incluye el curso
8. Encaje del curso
9. Creadora del curso
10. Garantia
11. FAQ breve
12. Oferta final

## 8. Descripcion de secciones

### 8.1 Objeciones comunes

Bloque `.objections` con 4 cards orientadas a remover friccion inicial.

Mensajes actuales:

- no tener experiencia
- miedo a gastar mal en materiales
- deseo de lograr un mejor resultado visual
- duda entre hobby o salida comercial

### 8.2 CTA puente

Bloque `.bridge-cta` ubicado inmediatamente despues del hero y antes de objeciones.

Incluye:

- kicker `Empieza hoy`
- titulo: `Tus manos pueden crear cosas hermosas, solo necesitás dar el primer paso`
- parrafo de apoyo sobre acceso online y garantia
- CTA principal `Quiero empezar ahora`
- micropruebas:
  - `100% online`
  - `Acceso inmediato`
  - `Garantia de 7 dias`

Su funcion es capturar a la visitante de alta intencion antes de entrar al bloque de objeciones.

### 8.3 Transformacion / resultado

Bloque `#resultado` con 3 cards que explican el cambio prometido:

- empezar con claridad
- mejorar el resultado final
- darle una salida real al aprendizaje

Incluye un CTA inline:

- `Quiero empezar con una guia clara`

### 8.4 Antes y despues

Seccion comparativa con dos cards:

- `Antes`
- `Despues`

Su funcion es volver tangible el cambio entre aprender con contenido suelto y seguir un metodo completo.

### 8.5 Testimonios

Bloque `.testimonials` con:

- encabezado de prueba social
- subtitulo que enfatiza claridad y paso a paso
- grilla de 4 testimonios
- rating visual `5/5`
- CTA inline `Yo tambien quiero aprender`

El foco del bloque esta en:

- claridad para aprender
- motivacion
- facilidad de seguimiento
- primer paso para emprender

### 8.6 Galeria visual de resultados

Bloque `.photo-gallery` con:

- titulo centrado en lo que la alumna puede llegar a crear
- grilla de 3 imagenes en desktop
- columna lateral con 3 note cards:
  - `Para regalar`
  - `Para disfrutar en casa`
  - `Para empezar a vender`

Comportamiento responsive esperado:

- en mobile se oculta la imagen `J1`
- la galeria se simplifica sin perder claridad

### 8.7 Que incluye el curso

Bloque `#incluye` con:

- CTA inline superior `Quiero ver todo lo que incluye`
- titulo centrado en base solida y errores comunes
- grilla de 6 cards de contenido
- desplegable `details` con temario resumido de 9 modulos
- CTA inline `Quiero ver el programa`

Las 6 cards actuales cubren:

- fundamentos desde cero
- materiales y herramientas
- proceso paso a paso
- diseno y terminacion
- variantes y linea natural
- base para vender

El temario resumido del desplegable lista 9 modulos:

- bienvenida y acompanamiento
- bases de la jaboneria artesanal
- materiales y preparacion
- elaboracion paso a paso
- diseno y creatividad
- cuidado de la piel y formulacion
- linea de jabones naturales
- emprendimiento desde casa
- jabones tematicos y temporadas

### 8.8 Encaje del curso

Bloque `.audience` con dos cards:

- `Este curso es para ti si...`
- `Probablemente no sea para ti si...`

Sirve para calificar mejor a la visitante y bajar objeciones antes del cierre.

### 8.9 Creadora del curso

Bloque `.creator-section` con:

- foto de Karen Isabel
- copy en tercera persona
- foco en claridad, confianza y proceso simple
- highlights:
  - `+15 anos de experiencia`
  - `Metodo paso a paso`
  - `Enfoque practico y cercano`
- CTA inline `Quiero aprender con Karen`

### 8.10 Garantia

Bloque `.guarantee` con caja central destacada.

Mensajes actuales:

- compra con tranquilidad
- 7 dias para revisar y decidir
- CTA: `Quiero entrar con garantia`

### 8.11 FAQ breve

Bloque `.faq` con 5 preguntas desplegables sobre:

- experiencia previa
- materiales
- hobby
- modalidad online
- devolucion
- CTA inline `Quiero entrar ahora`

### 8.12 Oferta final

Bloque `.offer` orientado al cierre con:

- kicker `Ultimo paso`
- titulo centrado en empezar hoy y dejar la prueba y error
- CTA final `Quiero entrar al curso`
- nota de apoyo sobre pago seguro y garantia de 7 dias

## 9. Sistema visual actual

### 9.1 Direccion estetica

La identidad visual debe seguir sintiendose:

- calida
- artesanal
- femenina
- elegante
- comercialmente clara

No deben introducirse estilos frios, excesivamente modernos o agresivos si rompen este tono.

### 9.2 Paleta

La paleta base usa:

- fondo crema rosado
- superficies marfil y beige suave
- texto marron profundo
- acento terracota / cobre
- lineas y bordes calidos

### 9.3 Tipografia

- titulares: `DM Serif Display`
- texto corrido y UI: `Manrope`

### 9.4 Componentes visuales recurrentes

Se repiten estos recursos:

- cards con fondo claro, borde suave y sombra calida
- pills para pruebas y highlights
- botones redondeados tipo pill
- fondos con gradientes suaves
- formas decorativas de fondo desenfocadas

## 10. Responsive

### Desktop

- hero en dos columnas
- galeria en dos columnas: imagenes y notas
- creadora en dos columnas
- objeciones en 2 columnas
- resultados e incluye en 3 columnas
- testimonios en 2 columnas

### Tablet

Hasta `980px`:

- hero, galeria y creadora pasan a una columna
- grillas de 3 items pueden pasar a 2 columnas
- la hero card deja de subirse artificialmente

### Mobile

Hasta `720px`:

- navbar mantiene posicion fija
- hero pasa a flujo simple de una columna
- los CTAs de contenido pasan a ancho completo
- el CTA del navbar se mantiene compacto para no romper el header
- se compactan paddings del hero
- la galeria reduce complejidad ocultando `J1`
- todas las grillas principales pasan a una sola columna

## 11. SEO, legal y consentimiento

### SEO y compartido

El `index.html` actual ya contempla:

- `title`
- `meta description`
- `canonical`
- `robots`
- Open Graph
- Twitter Card

### Footer legal

El footer incluye:

- copyright del sitio
- enlaces a `privacidad.html`, `cookies.html` y `terminos.html`
- disclaimer de afiliacion
- disclaimer de no asociacion con Meta

### Consentimiento base

La pagina define:

- consentimiento por defecto denegado para `gtag`
- carga de `legal.js` para manejar interaccion legal y de cookies
- configuracion global para Meta Pixel y GA

## 12. Criterios para futuras iteraciones

Al hacer cambios sobre esta landing:

- respetar el orden comercial actual salvo pedido explicito
- mantener consistencia entre CTAs del navbar, hero y cierres
- no volver a abrir demasiado los espaciados verticales
- revisar siempre impacto en mobile
- si cambia la estructura, el copy principal o la jerarquia de conversion, actualizar este archivo

## 13. Archivos de referencia directa

- `index.html`
- `styles.css`
- `legal.css`
- `legal.js`
