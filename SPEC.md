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
