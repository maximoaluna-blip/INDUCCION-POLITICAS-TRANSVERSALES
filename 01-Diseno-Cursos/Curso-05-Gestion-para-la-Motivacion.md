# Diseño del Curso 05 — 💪 Gestión para la Motivación: motivar es dar

> **Línea:** Políticas Transversales · **Nivel 1** Ruta de Fundamentación · `gestion-para-la-motivacion`
> **Estado:** diseño, 18-sep-2026. Sin construir.
> **Fuente rectora:** *Gestión para la Motivación* (DNAM, agosto de 2020).
> **Ficha del Plan:** `../Plan-de-Formacion-Linea-Politicas-Transversales.md` §3.2.
> **Antes de tocar este diseño, leer `../CREAR-CURSO.md` §4-bis.**

---

## 0. Qué cierra este curso

Es el **tercero de la tríada** de la línea: *cuidar* (02 y 03), *incluir* (04, bloqueado), **sostener** (05). Y cambia de objeto: los cuatro anteriores hablan de cuidar a los jóvenes; **este habla de cuidar a los adultos que cuidan**.

Con el **04 bloqueado** por el Acuerdo 405, este curso deja el Nivel 1 en **4 de 6** y el arco **cuidar–sostener** cerrado por los dos extremos.

> ⚠️ **Hueco declarado:** el arco del Curso 01 promete *«cuidar, incluir, sostener»*. Mientras el 04 no exista, **el adulto va a llegar aquí sin la pieza de en medio**. Este curso **no la suple**: dice que falta y por qué. La honestidad sobre lo que no está es doctrina de esta línea.

---

## 0-bis. Verificación de fuentes — lo que apareció antes de diseñar

**Este documento tiene TRES numeraciones distintas, y hay que decirlo antes que nada:**

| | |
|---|---|
| Página de PDF | 70 en total |
| **Folio impreso** | **= PDF − 4** (constante, comprobado en diez páginas) |
| **Número del índice** | **= folio impreso − 2**, es decir **PDF − 6** (comprobado en los 26 epígrafes de §6) |

**El Plan cita por folio impreso.** Este diseño también. *Un documento con tres numeraciones es una invitación a citar mal; comprobarlo en dos páginas lejanas antes de escribir ninguna cita.*

### El hallazgo que este curso se juega: 26 ≠ las cuatro familias

- **§6 desarrolla veintiséis** maneras de dar, una por epígrafe (**6.1 a 6.26**, folios 27–42). Verificado uno por uno en el cuerpo, no en el índice.
- **§3.3–3.4 clasifica en cuatro familias**, y esas familias contienen **veinticinco**: 9 extrínsecas + 9 intrínsecas + 2 trascendentes + 5 ayudas.
- La diferencia es exactamente **«Dar formación» (6.2)**, que §6 desarrolla y **las familias no clasifican**.

> ⛔ **«Los 26 en cuatro familias» es FALSO.** Es la misma clase de error que en Programa de Jóvenes llegó a imprimirse en un certificado. **Lo que sí se puede decir:** *la cartilla agrupa las maneras de dar en cuatro familias, y después desarrolla veintiséis, una por una.* Las dos afirmaciones son ciertas por separado; **unirlas con un «los» no lo es**.

### Y una trampa que volvió a picar

La frase *«Nadie es responsable de tu motivación»* —que el Plan cita para el OA 3— **no apareció al leer su página**, porque corté la extracción en 2.100 caracteres y la página tiene 2.705. Está, y completa es mejor que la citada. **Es el `[:1600]` del Curso 01 en miniatura: al extraer, imprimir la longitud y leerla entera.**

### Lo demás, cotejado

- El hook, **literal** en §3.3, folio 18.
- «Hola», folio 4: la tesis del documento, **literal**.
- §5, folio 25: **tres razones numeradas** —la tercera es la de coherencia educativa— **más una cuarta sin numerar**. *El Plan decía «tres razones y una de coherencia educativa»: son cosas distintas.*
- §7, folio 43: **cuatro** momentos, no tres.
- §7.1, folio 44: la gasolina y la frase del propósito.
- §9, folio 57: el cierre, **literal**.
- **Cero términos ASP superados** en todo el documento.

---

## 1. Ficha del curso

| | |
|---|---|
| **courseId** | `gestion-para-la-motivacion` |
| **Título** | Gestión para la Motivación: motivar es dar |
| **Icono** | 💪 |
| **Nivel / orden** | 1 · Ruta de Fundamentación · `order: 5` |
| **Duración** | **por medir** (ADR-047). El Plan estimó 30. **No copiar esa cifra al JSON.** |
| **Módulos** | 7 (1 intro + 6 lecciones) |
| **Audiencia primaria** | Jefes de grupo, jefes de rama, comisionados, asesores personales. **Secundaria:** todo adulto (automotivación) |
| **Recomendado antes** | Curso 01 (recomendado, **nunca exigido** — ADR-019) |

**Descripción:**

> Motivar no es dar ánimo: es dar algo, y distinto a cada uno. Aquí vas a saber qué separa un motivo de una motivación, las veintiséis maneras concretas de dar que propone la ASC, cuáles son las tres que más se fallan, cuándo hacerlo y —lo que casi nadie se plantea— de dónde sacas la tuya. Es el curso de cuidar a los adultos que cuidan.

---

## 2. Objetivos de aprendizaje

1. **Distinguir** motivo, motivación y motivar según la cartilla (folios 17–18).
2. **Nombrar** las cuatro familias en que la cartilla agrupa las maneras de dar, y poner un ejemplo propio de cada una (folios 18–19).
3. **Elegir**, para **un adulto concreto** de su equipo, **tres** maneras de dar de las veintiséis, y justificar por qué esas y no otras (folios 27–42).
4. **Reconocer** los **cuatro** momentos que la cartilla señala para motivar (folio 43).
5. **Explicar** por qué *«nadie es responsable de tu motivación»* y qué hace él con eso (folio 44).

---

## 3. Hook pedagógico

> **«El que no esté dando, no está motivando.»**
> *Gestión para la Motivación, §3.3, folio 18 — **en subjuntivo, como en la fuente**.*

### El hito del curso

El adulto entra creyendo que motivar es **dar ánimo** —una charla, una palmada, un discurso— y sale sabiendo que es **una entrega concreta y distinta para cada persona**. La cartilla lo dice en su primera página, y es la frase que sostiene el curso entero:

> *«lo que motiva a unas personas puede desmotivar a otras. Entonces, ¿cómo puedo hacer para motivarlos a todos? **Qué tal si les doy a cada uno lo que necesita.**»* (folio 4)

### La frase que el adulto se lleva

> **«Motivar no es animar. Es dar — y dar lo que esa persona necesita, no lo que a ti te motivaría.»**

---

## 4. Estructura de lecciones

| # | Lección | Qué instala | Quiz |
|---|---|---|---|
| 0 | 👋 Antes de empezar | Que esto no va de dar ánimo | — |
| 1 | 🎯 Por qué molestarse | Las tres razones + la de coherencia educativa | 2 |
| 2 | 🔤 Motivo, motivación, motivar | El hook, y por qué «motivar» es un verbo transitivo | 2 |
| 3 | 🎁 Veintiséis maneras de dar | Las cuatro familias, y las 26 | 2 |
| 4 | 🔧 Las tres que más se fallan | Información, reconocimiento, confianza | 2 |
| 5 | ⏰ Cuándo | Los **cuatro** momentos | 2 |
| 6 | ⛽ Tu propia gasolina | Automotivación + el propósito del §9 | 2 |

**12 preguntas.** Reflexión en las seis lecciones — **las seis**, como los tres cursos publicados de la línea.

⚠️ **Cada lección abre con `info-box` de «Idea central».** Es el rasgo de estilo de la línea, y el Curso 02 nació sin él.

---

### 4.1 Lección 0 — 👋 Antes de empezar

> **Si crees que este curso va a enseñarte a dar discursos motivadores, no. Va de algo más incómodo y más útil: que la motivación no se da en general, se da en concreto y a una persona concreta — y que probablemente ahora mismo hay alguien en tu equipo al que le estás dando exactamente lo que no necesita.**

`course-objectives` con los cinco. Y el `info-box` de orientación **con el aviso del 70 %** (el motor pide 70 % y con dos preguntas eso es un 100 %).

⚠️ **Aquí va también el hueco del 04**, en una línea: *«Este es el tercero de tres —cuidar, incluir, sostener—. El de incluir todavía no existe: está esperando el texto de un acuerdo. Te lo decimos para que no lo busques.»*

---

### 4.2 Lección 1 — 🎯 Por qué molestarse (§5, folio 25)

**Anti-definición**: no abrir explicando qué es la motivación, sino **por qué debería importarle**.

**`method-grid` con las tres razones numeradas**, en las palabras de la fuente:
1. *«una persona motivada realiza la tarea mejor, más rápida y con mayor eficacia»*
2. *«las personas motivadas no sólo realizan mejor su trabajo, sino que contagian esta forma de trabajar a los demás»*
3. **coherencia educativa** — *«nuestro trabajo con jóvenes consiste en enseñarles y enfrentarles a una serie de vivencias que le formen el carácter»*

**Y la cuarta, que la cartilla no numera y es la que más importa**, en `mission-box`:

> *«Finalmente, y no por ello menos importante, porque **nos deben interesar las personas** que trabajan con nosotros. Interesarnos por las personas, sus problemas, sus dificultades, sus éxitos, es trabajar por el ser humano y dejar este mundo un poco mejor que lo encontramos.»*

⚠️ **La tercera razón es la que conecta con la línea entera:** un adulto que exige a los jóvenes lo que no se aplica a sí mismo enseña eso. Es el mismo argumento de *educación por el amor, no por el temor*.

#### Quiz L1
- **P1.** Escenario: un jefe de grupo dice que no tiene tiempo para «andar motivando». ¿Qué razón de las que da la cartilla le responde sin apelar a los sentimientos? → *que una persona motivada hace la tarea mejor y más rápido* (es la razón de **eficacia**, la única que responde a un argumento de tiempo).
- **P2.** La tercera razón es de **coherencia educativa**. ¿Qué significa? → que pedimos a los jóvenes lo que no nos estamos dando entre adultos.

---

### 4.3 Lección 2 — 🔤 Motivo, motivación, motivar (§3, folios 17–18)

**Bloque 1** (`paragraph`). Las tres palabras se usan como si fueran una y la cartilla las separa.

**Bloque 2** (`method-grid`, 3 ítems) — acotado a la fuente:
- **Motivo** (folio 17): *«el impulso que lleva a la persona a actuar de determinada manera»*. Puede venir de fuera (una agresión) o de dentro (hambre, necesidad de reconocimiento).
- **Motivación** (folio 17): del latín *moveré*, mover. *«un impulso que nos permite mantener una cierta continuidad en la acción»* hacia un objetivo.
- **Motivar** (folio 18): **un verbo transitivo**. *«requiere un comportamiento activo. Dar algo.»*

**Bloque 3** (`policy-quote`, folio 18) — el hook, literal y entero:

> *«requiere un comportamiento activo. Dar algo. El que no esté dando, no está motivando. Si además no estamos dando aquello que se supone que deberíamos de dar, estamos desmotivando (quitando motivos).»*

**Bloque 4** (`info-box`). **El giro:** *desmotivar no es no motivar. Es quitar motivos* — y la cartilla pone los ejemplos: *«peleas, malos modos»*. Un consejo de grupo que se pelea no está dejando de motivar: está **desmotivando activamente**.

**Reflexión L2.** *Piensa en la última reunión de adultos de tu grupo. ¿Hubo algún momento en que alguien saliera con **menos** motivos de los que entró? No hace falta que fuera una pelea: basta un silencio, una respuesta cortante, una idea que nadie recogió. Descríbelo en una línea.*

---

### 4.4 Lección 3 — 🎁 Veintiséis maneras de dar (§3.3–3.4 y §6)

**La lección central, y la que tiene el número delicado.**

**Bloque 1** (`paragraph`). *¿Y qué se da? La cartilla no lo deja en abstracto: lo enumera.*

**Bloque 2** (`method-grid`, **4 familias**) — con el número de cada una y un ejemplo de consejo de grupo:

| Familia | Cuántas | Qué es |
|---|---|---|
| **Extrínseca** | 9 | Lo que viene de fuera: información, objetivos, reconocimiento, recompensas, medios, contactos… |
| **Intrínseca** | 9 | *«el gusto por hacer un buen trabajo»*: confianza, autonomía, responsabilidad, capacidad de decisión, retos… |
| **Trascendente** | 2 | *«la motivación espiritual y altruista»*: dar sentido a lo que se hace, y orgullo de pertenencia |
| **Ayudas** | 5 | *«no provocan la motivación, pero potencian el resto»*: respeto, afecto, humor, sorpresa, ilusión |

**Bloque 3** (`info-box`). **Redacción obligatoria, y aquí está el cuidado:**

> 📋 **Cuatro familias, veintiséis maneras.** La cartilla primero **agrupa** en esas cuatro familias, y después **desarrolla veintiséis** maneras de dar, una por una, con ejemplos (folios 27–42). ⚠️ **No son la misma lista**: la que desarrolla incluye *dar formación*, que no aparece en las cuatro familias. No te preocupes por encajarlas — **preocúpate por elegir la que esa persona necesita**.

⚠️ **Para quien mantenga este curso:** no escribir *«las 26 en cuatro familias»*. Las familias contienen **25**. Ver §0-bis.

**Bloque 4** (`list`). **Una muestra de las veintiséis**, no las veintiséis: seis, con su número de epígrafe, para que se vea que existen y que están desarrolladas una por una. *(Carga cognitiva: enumerar 26 en una lección de 5 minutos es un listado, no una lección.)*

**Reflexión L3.** *Elige a **una** persona de tu equipo de adultos. Una, con nombre —aunque no lo escribas—. De las cuatro familias, ¿cuál crees que le falta? No la que a ti te gustaría recibir: la que le falta a ella. Y escribe **una** cosa concreta que puedas darle esta semana.*

---

### 4.5 Lección 4 — 🔧 Las tres que más se fallan (§6.1, §6.6, §6.11)

**Información** (6.1, folio 27), **reconocimiento** (6.6, folio 30) y **confianza** (6.11, folio 35). Las tres, en las palabras de la cartilla, con un caso de grupo scout cada una.

Por qué estas tres: son las que **no cuestan dinero, no requieren permiso de nadie y se fallan igual**. Un dirigente que no sabe qué se decidió en el consejo, uno que hizo el campamento y nadie se lo dijo, uno al que le revisan cada decisión.

**Reflexión L4.** *De las tres, ¿cuál te falta a ti ahora mismo? Y la incómoda: ¿cuál estás dejando de dar tú?*

---

### 4.6 Lección 5 — ⏰ Cuándo (§7, folio 43)

**Cuatro momentos**, no tres:

1. **Al principio** de la actividad, la reunión o el ciclo — *«que las tareas comiencen con ilusión y ganas»*.
2. **Al terminar** — *«no cerrar las cosas con un "colorín colorado"»*: recordar los éxitos y **preparar algo que motive a seguir**.
3. **En las evaluaciones periódicas**, cuando el ciclo es largo — porque *«las expectativas creadas y no satisfechas suelen generar insatisfacción»*.
4. **Previendo**: al planificar, mirar **en qué días van a aparecer las dificultades** y programar algo ahí.

⚠️ **El cuarto es el que nadie hace y el que más se parece a gestionar.** Es también el que conecta con la planeación del ciclo de programa.

⚠️ **No reproducir el ejemplo de la fuente** —los generales arengando a las tropas antes del combate, con referencia a *Braveheart*—. Es la ilustración del autor, no su doctrina, y el registro bélico no encaja con el tono de esta línea. **Se conserva la idea (el arranque motiva), se cambia el ejemplo.**

**Reflexión L5.** *Mira el ciclo o el trimestre que tienes por delante. Señala **el día concreto** en que va a costar más —el que sabes que va a costar— y escribe qué vas a preparar para ese día.*

---

### 4.7 Lección 6 — ⛽ Tu propia gasolina (§7.1 folio 44, §9 folio 57)

**Bloque 1** (`policy-quote`, folio 44) — la metáfora, literal:

> *«La motivación es la gasolina que hace mover el motor de nuestro vehículo. El motor (y la dirección, y los frenos, y los asientos y...) son nuestras habilidades, vivencias, experiencias. Cuanto mejor las tengamos, mejor iremos en el vehículo. Pero para que este se mueva tenemos que tener una motivación (la gasolina).»*

**Bloque 2** (`paragraph`). Que la motivación **cambia con la vida**: la cartilla compara al adulto que empieza —*«estudiante, con tiempo libre y poco dinero»*— con el que lleva ocho años —*«trabajador, con hipoteca»*— y remata: **puede ser la misma persona**.

**Bloque 3** (`mission-box`) — la frase del propósito, completa:

> *«Al igual que hay que actualizar y renovar la Promesa Scout periódicamente para adaptarla a tu situación, debes hacer lo mismo con tus motivaciones. **Nadie es responsable de tu motivación.** Los demás pueden ayudar, pero tú eliges lo que haces, cuánto lo haces y por qué lo haces.»*

⚠️ **Cuidado con el tono aquí.** «Nadie es responsable de tu motivación» puede leerse como *«apáñatelas»*, que es justo lo contrario de un curso sobre cuidar a los adultos. La fuente dice *«los demás pueden ayudar»* **en la misma frase**: hay que dejar las dos mitades juntas.

**Bloque 4** (`policy-quote`, folio 57) — **el cierre del curso**, literal:

> *«Todos los scouts tenemos la obligación de hacer una buena acción diaria… Ahora te proponemos un propósito… **Cada día escoger a una persona y darle motivos para seguir haciendo su tarea. Dentro y fuera del Escultismo.**»*

**Reflexión L6 (cierre).** *La cartilla propone cambiar la buena acción diaria por esto: cada día, una persona, y darle motivos. Elige a la persona de mañana —solo mañana— y escribe qué le vas a dar. De las veintiséis. Una cosa, concreta, que puedas hacer en cinco minutos.*

---

## 5. Logros

| id | Nombre | Módulo |
|---|---|---|
| 1 | Sé por qué | 2 |
| 2 | Motivar es un verbo transitivo | 3 |
| 3 | Veintiséis maneras | 4 |
| 4 | Las tres que se fallan | 5 |
| 5 | El día que va a costar | 6 |
| 6 | Mi propia gasolina | 7 |
| 7 | Gestión para la Motivación | certificado (`-1`) |

---

## 6. Traducciones obligatorias del vocabulario

La cartilla es de **2020** y usa términos que no son los vigentes. **Cita literal dentro de `policy-quote`; traducción en el flujo principal.** Verificado que aparecen:

| En la fuente | En el flujo del curso | Apariciones |
|---|---|---|
| «Sección» | unidad / rama | varias |
| «Coordinadores de Sección» | Jefe de Rama | 2 |
| «Equipo de Sección» | equipo de dirigentes | 4 |
| «Ronda Solar» | ciclo de programa | 1 |
| «Scout» referido al adulto (folio 44) | adulto voluntario | — |

**Las teorías —Maslow (7 menciones), Herzberg (7), Vroom (3)— se presentan como lo que la cartilla toma prestado de la psicología organizacional, no como doctrina scout.** Si el curso las menciona, que sea en una línea y con esa etiqueta. **Mejor: no mencionarlas.** No hacen falta para ninguno de los cinco objetivos.

---

## 7. Fuentes

- **Gestión para la Motivación** (DNAM, agosto de 2020). Folios: 4 (Hola) · 17–19 (definiciones y familias) · 25 (por qué) · 26 (campos) · 27–42 (§6, las 26) · 43 (cuándo) · 44 (automotivación) · 50–56 (§8, las acciones) · 57 (§9).
- **Política Nacional de Adultos en el Movimiento (PNAM)**, §6 «Gestión de la Motivación», **folio 19** (PDF 25 de 34; en este documento folio = PDF − 6). ✅ **Cotejado**: *«Contar con adultos motivados, registra mayores niveles de desempeño y compromiso; por consiguiente, una aplicación adecuada y con calidad del Sistema de Gestión llevan a alcanzar la misión del Movimiento Scout.»*
  ⚠️ **Ojo con la preposición:** la PNAM titula su §6 «Gestión **de** la Motivación» y la cartilla se llama «Gestión **para** la Motivación». Son dos documentos oficiales con una preposición de diferencia. **El curso se llama como la cartilla**, y al citar la PNAM se respeta su «de». No es una errata de ninguno de los dos: no «corregir» uno con el otro.
- **Cartilla Metodológica** §2.9 — sitúa Gestión para la Motivación fuera de la Zona de Cascada. **Ya verificado por el Curso 01.**

---

## 8. Riesgos y antídotos

| Riesgo | Antídoto |
|---|---|
| **«Los 26 en cuatro familias»** | Falso. Las familias contienen 25. §0-bis y el `info-box` de la L3 |
| **Citar por el número del índice** | Tres numeraciones. Folio impreso = PDF − 4; índice = folio − 2 |
| **Volverse un listado de 26** | La L3 muestra **seis**; las 26 existen y se dice dónde están |
| **Vocabulario de 2020** | Tabla del §6, traducción en flujo y cita literal en `policy-quote` |
| **Teorías como doctrina** | No mencionarlas. No hacen falta |
| **«Nadie es responsable de tu motivación» leído como «apáñatelas»** | Dejar las dos mitades de la frase juntas |
| **El ejemplo bélico de §7** | No reproducirlo. Se conserva la idea, se cambia el ejemplo |
| **El hueco del Curso 04** | Se declara en la intro, en una línea |

---

## 9. Antes de construir

- [ ] Releer `../CREAR-CURSO.md` **§4-bis**.
- [ ] Citas cotejadas contra el PDF **por folio impreso**, no por índice.
- [ ] **Contar el sesgo antes de compilar** — y **los dos extremos**, no solo «la más larga».
- [ ] `status: "draft"` hasta la compuerta humana.
- [ ] **Medir la duración** al cerrar las auditorías. **No copiar los 30 del Plan.**
- [ ] Añadir el curso al espejo de `PRUEBAS-E2E/tests/cursos.js`.
- [ ] Filas en `../../TRAZABILIDAD.csv`.
- [x] ~~Verificar la cita de la PNAM~~ — **hecho**: folio 19, §6, literal.

---

_Diseño escrito el 18-sep-2026. Las páginas se leyeron del PDF con la longitud impresa antes de citarlas, y aun así una frase se escapó por un corte a 2.100 caracteres: está anotado en el §0-bis. Fuente: Gestión para la Motivación (DNAM, agosto 2020), folios 4, 17–19, 25, 26, 27–42, 43, 44, 57._
