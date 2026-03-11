# AGENTS.md

## Proyecto

Landing page estatica para vender un curso online de jabones de glicerina.

## Objetivo del agente

Ayudar a iterar la landing con cambios rapidos, prolijos y consistentes con la estetica actual, sin sobrecomplicar la estructura del proyecto.

## Stack actual

- `index.html`: estructura de la landing
- `styles.css`: estilos globales y responsive
- `img/`: imagenes usadas por la landing
- `SPEC.md`: documento de referencia funcional y visual de la iteracion actual

## Regla principal

Antes de hacer cambios visuales o estructurales, revisar `SPEC.md` para entender el estado esperado del proyecto y no deshacer decisiones ya tomadas.

## Flujo de trabajo recomendado

1. Leer el pedido del usuario y mapearlo a una parte concreta de la landing.
2. Revisar primero `index.html` y `styles.css` antes de proponer cambios.
3. Hacer cambios pequenos y acumulativos.
4. Evitar rediseños no pedidos.
5. Confirmar que el resultado siga alineado con la estetica artesanal, calida y comercial del sitio.
6. Si el cambio modifica comportamiento, jerarquia visual o copy importante, actualizar `SPEC.md`.

## Criterios de diseno a respetar

- Mantener una estetica calida, femenina, artesanal y elegante.
- Evitar colores frios o demasiado saturados.
- Evitar componentes visuales agresivos o demasiado modernos si rompen el tono de la marca.
- Priorizar claridad comercial y lectura simple.
- Mantener consistencia entre CTAs, espaciados y jerarquia tipografica.

## Navbar

Estado esperado actual:

- sticky/fixed en el top
- full width
- fondo amarillo suave
- CTA del navbar con estilo `btn-primary`

Al modificar el navbar:

- no volver a limitarlo con un ancho centrado si el pedido no lo exige
- no agregar bordes redondeados o efectos fuertes sin confirmacion del usuario
- cuidar que no tape el contenido del hero

## Hero

Estado esperado actual:

- contenido mas arriba que en la version original
- menor espacio entre navbar, hero y primera seccion
- CTA principal visualmente destacado

Al modificar el hero:

- revisar tanto `.hero` como `.hero-content`
- no asumir que el problema de espaciado viene de un solo `padding`
- revisar margenes automaticos, centrado vertical y paddings inferiores

## Espaciado general

El sitio ya fue compactado respecto a la version original.

Al hacer nuevos ajustes:

- preferir cambios graduales
- no volver a separar demasiado las secciones
- revisar impacto en mobile

## Copy y CTAs

- Mantener tono claro, directo y orientado a conversion.
- No cambiar copys importantes sin pedido explicito.
- Si se cambia un CTA principal, revisar consistencia con otros CTAs del hero y navbar.

## Responsive

Cada cambio visual debe considerar desktop y mobile.

Puntos minimos a revisar:

- navbar
- hero
- botones full width en mobile
- espaciados verticales

## Cambios permitidos

El agente puede:

- editar `index.html`
- editar `styles.css`
- crear o actualizar documentacion `.md`

El agente no debe:

- agregar frameworks
- reestructurar el proyecto sin necesidad
- introducir JavaScript si el pedido se resuelve solo con HTML/CSS

## Documentacion

Si una conversacion deja decisiones importantes de diseño, comportamiento o alcance:

- actualizar `SPEC.md`, o
- crear un nuevo `.md` si el cambio corresponde a otra iteracion o a otro frente de trabajo

## Estilo de colaboracion

- Ejecutar primero, explicar despues.
- Ser concreto.
- No sobre-ingenierizar una landing simple.
- Priorizar velocidad con criterio visual.
