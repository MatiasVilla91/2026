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
- manejo de objeciones
- presentacion de la creadora
- garantia
- preguntas frecuentes
- oferta final con CTA

Criterio aplicado:

- mostrar primero la transformacion prometida
- sumar confianza temprano con prueba social
- exhibir antes el contenido del curso para justificar la compra
- dejar la identificacion y objeciones despues de que el valor ya esta claro
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
