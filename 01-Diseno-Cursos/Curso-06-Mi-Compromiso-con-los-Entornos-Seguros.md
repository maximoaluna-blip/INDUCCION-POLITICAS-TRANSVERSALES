# Diseño del Curso 06 — 🗺️ Mi Compromiso con los Entornos Seguros

> **Línea:** Políticas Transversales · **Nivel 1** Ruta de Fundamentación · `mi-compromiso-entornos-seguros`
> **Estado:** diseño, 19-sep-2026. Sin construir.
> **Fuente rectora:** *Autoevaluación de grupo en relación a la Política «A salvo del peligro»* (formato de la serie documental de la PNAM, 2 folios).
> **Ficha del Plan:** `../Plan-de-Formacion-Linea-Politicas-Transversales.md` §3.2.
> **Antes de tocar este diseño, leer `../CREAR-CURSO.md` §4-bis.**

---

## 0. Qué cierra este curso

Es **el último del Nivel 1** y el único que no enseña doctrina nueva: **cobra la que ya está**. Los cinco anteriores dan lenguaje (02), conducta (03) y sostén (05); este convierte los tres en **algo que el adulto puede mostrarle a su consejo de grupo el próximo martes**.

Y cambia de sujeto por segunda vez en la ruta: el 05 pasó del joven al adulto; **el 06 pasa del adulto al grupo**. Es el primero que mira una unidad entera.

> ⚠️ **Dos huecos declarados, no disimulados.** El **Curso 04** no existe (Acuerdo 405 sin publicar), así que la ruta llega aquí con **cuatro cursos de cinco**. Y el propio instrumento oficial que usa este curso **no está publicado en la biblioteca** (§0-bis). Las dos cosas se dicen dentro del curso.

---

## 0-bis. Verificación de fuentes — lo que apareció antes de diseñar

### ⚠️ El instrumento existe, y yo lo di por ausente

Busqué el semáforo con `*valuacion*grupo*` y con `evaluacion de grupo` — **sin tildes** — y las dos búsquedas dieron **cero**. Llegué a escribir que el documento no existía y que el curso estaba bloqueado. **Estaba en el corpus todo el tiempo**, como `Información para CRAM/.../23-Evaluación de grupo SFH (A salvo del peligro).pdf`, y lo encontró un barrido por **frase literal**, que sí normaliza.

> 🔑 **Un cero de búsqueda no es una ausencia.** Es el mismo fallo que el PDF de la Política con las letras espaciadas, en otra forma. **Buscar por frase del contenido, no por nombre de archivo — y normalizar acentos antes de concluir que algo no está.**

### El instrumento, cotejado ítem por ítem

| | |
|---|---|
| Título impreso | *«Autoevaluación de grupo en relación a la Política "A salvo del peligro"»* |
| Extensión | **2 folios** |
| Cabecera | **«Adultos en el Movimiento»** + logo Scouts Colombia → **serie documental de la PNAM** |
| Escala | **tres columnas por ítem: 🔴 rojo · 🟡 amarillo · 🟢 verde** |
| Ítems | **17**, contados uno a uno |

**Las cinco áreas y su reparto, verificado:** Política **6** · Liderazgo **2** · Programa **4** · Compromiso juvenil **2** · Compromiso de los padres **3**. **6+2+4+2+3 = 17.** ✓

**El texto de cabecera, literal:**

> *«La puntuación en esta autoevaluación funciona como un semáforo. Cuanto más verde se encuentre, mejor. En las áreas que se obtuvo un puntaje rojo o amarillo, pueden reconocerse como aspectos a mejorar. Recomendamos elegir una o dos áreas para enfocarse en cada término y volver a realizar esta evaluación a lo largo del año para ver cómo se está realizando el seguimiento.»*

⚠️ **La palabra «amarillo» va escrita en amarillo y desaparece en la extracción**, dejando *«un puntaje rojo o \n pueden»*. Se vio **abriendo la página renderizada**. Tercera vez en esta línea que hay que mirar el PDF con los ojos, no solo extraerlo.

### ⛔ El ítem 4 lleva un término superado, y es el de Política

> *«Cada miembro del Grupo conoce el referente "Safe From Harm" y sus funciones.»*

Es el término de 2023. Hoy **quien gestiona casos es el Comité de Gestión de Incidentes** (Política 2025, pp. 39–42), y el cargo 2.2.30 sigue existiendo pero **sin funciones de gestión de casos**. El Curso 03 ya enseña esto. **El ítem se reproduce literal —es el instrumento oficial— y se glosa al lado.** No se reescribe: un adulto que lo llene en papel verá esa palabra.

⚠️ Y esto **hace disparar la compuerta del ADR-060**: `doctrina.json` vigila `referente ... Safe From Harm` en la prosa de los cursos. La glosa tiene que caer **dentro de la ventana de 260 caracteres** y usar un marcador de los que la compuerta reconoce.

### El instrumento NO está publicado en la biblioteca

Comprobado en las dos que podrían tenerlo: **DNAM, 34 documentos** y **DNDI, 18** (con su subcategoría «A salvo del Peligro», que tiene cuatro). **No aparece en ninguna.** Es oficial y está en el paquete «Documentos Oficiales PNAM 2022», pero **el adulto no puede descargarlo**.

> **Consecuencia de diseño, y es la que da forma al curso:** el curso **no puede remitir a un PDF**. Tiene que **ser** el instrumento — los 17 ítems, dentro, contestables. Que es además lo que el curso quiere: que se conteste, no que se archive.

### El Anexo 1 de la Política **no** es lo que el Plan supone

El Plan lista *«Política 2025, Anexo 1 (pp. 36–37)»* como fuente de este curso. Lo leí: es **el ciclo de vida de la política a nivel nacional** — informes semestrales de incidentes, informe anual de la Comisión Nacional, Plan Operativo, y la **Herramienta de Autoevaluación GSAT**.

⛔ **No es un instrumento de grupo, y apunta al GSAT**, que el propio Plan clasifica como instrumento **(c)** y reserva al Nivel 4. Usarlo aquí sería justo el riesgo doctrinal que el Plan manda evitar. **De ese anexo este curso toma una sola idea**: que la política se revisa periódicamente, lo que respalda el *«volver a realizar esta evaluación a lo largo del año»* del semáforo.

### Los tres instrumentos, separados de una vez

| | Qué es | Para quién | Dónde |
|---|---|---|---|
| **(a) Semáforo de grupo** | 17 ítems, 5 áreas | **un grupo scout** | serie PNAM · **este curso** |
| **(b) Herramienta de Autoevaluación ASP** | 20 pp., OSM feb-2019 | **una Organización Scout Nacional** | corpus · Manual Operativo p. 28 |
| **(c) GSAT** | sistema de calidad | la Asociación | Política 2025 pp. 36 y 43 · **Nivel 4** |

**(b) y (c) se nombran en una línea y se remiten al Nivel 4.** No se mezclan.

### Lo demás, cotejado

- **§8 «¡A motivar!» de la cartilla está en el folio 49** — y el índice dice 47. ⚠️ **Tercera confirmación de que el offset del índice deriva** (0 en §3, +2 en §6 y en §8). Solo vale el folio impreso.
- §8 aporta algo que este curso usa: la cartilla **también trae su propia herramienta de diagnóstico** («en el anexo 1 puedes disponer de ella para fotocopiar»). Sirve para decir que **cada política tiene su forma de mirarse**, sin desarrollarla aquí.

---

## 1. Ficha del curso

| | |
|---|---|
| **courseId** | `mi-compromiso-entornos-seguros` |
| **Título** | Mi Compromiso con los Entornos Seguros |
| **Icono** | 🗺️ |
| **Nivel / orden** | 1 · Ruta de Fundamentación · `order: 6` |
| **Duración** | **por medir** (ADR-047), contra el ritmo de **esta** línea: **102,7 pal/min** |
| **Módulos** | 6 (1 intro + 5 lecciones) |
| **Audiencia primaria** | Todo adulto que hizo los Cursos 01–03 y 05. **Secundaria:** consejos de grupo que quieran llenar el semáforo en equipo |
| **Recomendado antes** | Los cuatro publicados de la ruta (recomendado, **nunca exigido** — ADR-019) |

**Descripción:**

> Aquí no se aprende nada nuevo: se cobra lo aprendido. Vas a mirar tu grupo con el semáforo oficial de la Asociación —17 preguntas, cinco áreas, tres colores—, a recoger lo que fuiste escribiendo curso a curso, y a salir con **dos o tres compromisos con fecha** que puedas llevar al próximo consejo. Es el curso que cierra la ruta y el único que mira a tu grupo entero.

---

## 2. Objetivos de aprendizaje

1. **Valorar** su grupo con el **semáforo oficial de 17 ítems** en cinco áreas, y reconocer qué mide cada área.
2. **Identificar** las **una o dos áreas** en que enfocarse, que es lo que el propio instrumento recomienda — **no las diecisiete**.
3. **Recuperar** lo que escribió en los cursos anteriores y **reconocerlo como un hilo**, no como reflexiones sueltas.
4. **Formular** compromisos **fechados, observables y mostrables** a su consejo de grupo.
5. **Distinguir** el semáforo de grupo de los otros dos instrumentos de autoevaluación que existen, y saber cuál le toca a quién.

---

## 3. Hook pedagógico

> **«Cuanto más verde se encuentre, mejor.»**
> *Autoevaluación de grupo en relación a la Política «A salvo del peligro», folio 1 — literal.*

### El hito del curso

El adulto entra con **cuatro cursos de doctrina en la cabeza** y sale con **dos o tres frases con fecha en la mano**. El giro no es de conocimiento: es de **estado**. Pasa de *saber* a *haber quedado en algo*.

### La frase que el adulto se lleva

> **«Un compromiso que solo conoces tú no es un compromiso: es una intención. Dilo en el consejo y ponle fecha.»**

---

## 4. Estructura de lecciones

| # | Lección | Qué hace | Quiz |
|---|---|---|---|
| 0 | 👋 Antes de empezar | Avisa de que este curso se **contesta**, no se lee | — |
| 1 | 🧭 Lo que ya escribiste | Devuelve las reflexiones de los cursos 01–03 y 05 | 2 |
| 2 | 🚦 El semáforo: Política y Liderazgo | Los 8 ítems del adulto | 2 |
| 3 | 👦 El semáforo: Programa, jóvenes y familias | Los 9 ítems restantes | 2 |
| 4 | ✍️ Tus compromisos | `plan-builder` | 2 |
| 5 | 📄 Llevarlo al consejo | Qué se hace con esto el martes | 2 |

**10 preguntas.** Reflexión en las cinco lecciones.

⚠️ **Cada lección abre con `info-box` de «Idea central»** — el rasgo de estilo de la línea.

---

### 4.1 Lección 0 — 👋 Antes de empezar

> **Los cinco cursos anteriores te pidieron leer. Este te pide contestar. Vas a mirar tu grupo con diecisiete preguntas que no escribimos nosotros —son el formato oficial de la Asociación— y algunas te van a incomodar. Esa es la idea: un semáforo en el que todo sale verde a la primera es un semáforo que no se miró.**

`course-objectives` con los cinco, el `info-box` de orientación **con el aviso del 70 %**, y dos avisos:

⚠️ **El hueco del 04**, como en el Curso 05: *«la ruta prometía cinco cursos antes de este y hay cuatro; el de Inclusión espera un acuerdo sin publicar»*.

⚠️ **Y uno propio, de honestidad sobre la fuente:** *«El semáforo que vas a usar es un formato oficial de la Asociación, pero no está publicado en la biblioteca: por eso lo traemos entero aquí dentro en vez de mandarte a descargarlo.»*

---

### 4.2 Lección 1 — 🧭 Lo que ya escribiste

**La lección que solo puede existir al final.** Devuelve, con el componente `brujula-display`, lo que el adulto escribió al cerrar cada curso.

| Curso | Qué pidió | `data-source-module` |
|---|---|---|
| 01 Bienvenida | su palabra —cuidar, incluir o sostener— y un compromiso con fecha | **7** |
| 02 Entornos Seguros | una frase: qué hará distinto a partir de mañana | **7** |
| 03 El Adulto como Garante | **tres** frases numeradas | **8** |
| 05 Gestión para la Motivación | «Esta semana voy a…» | **7** |

⚠️ **Los cuatro módulos son distintos y el componente asume el 6 por defecto.** Hay que declarar `data-source-course` y `data-source-module` en los cuatro, o **saldrán las cuatro cajas vacías** y la lección se cae sola.

⚠️ **NO usar `brujula-action`.** Su catálogo de principios quedó **vacío** al copiar el motor de Desarrollo Institucional (`var principios = []`, comentado en el propio código), así que siempre devuelve el mensaje de «aún no registramos tu brújula». **Está inerte hasta que esta línea defina su propio catálogo.**

⚠️ **Y una nota para quien mantenga esto:** el registro `PRUEBAS-E2E/claves-localstorage.json` dice que el `brujula-display` lee la clave `politicas-transversales:brujula`. **No la lee** — lee la reflexión guardada de cada curso. La clave está `planeada` y describe un mecanismo que no es el implementado. **Corregir esa ficha al construir.**

**Bloque de cierre** (`mission-box`): que esas cuatro frases, puestas juntas, **ya son un plan** — solo que sin fecha. Esta lección las ordena; la 4 les pone fecha.

**Reflexión L1.** *Léelas seguidas. ¿Cuál de las cuatro **no** cumpliste? Escríbela otra vez, tal cual, y debajo por qué se quedó sin hacer. No es un reproche: es el dato que más te sirve para la lección 4.*

---

### 4.3 Lección 2 — 🚦 El semáforo: Política y Liderazgo

**Bloque 1** (`policy-quote`, folio 1) — el texto de cabecera del instrumento, literal y entero, con su fuente.

**Bloque 2** (`info-box`). **Cómo funciona:** tres colores por ítem; rojo y amarillo **no son suspensos, son la lista de lo que hay que mirar**; y la propia hoja recomienda **elegir una o dos áreas**, no atacar las diecisiete.

**Bloque 3** (`list`, ordenada) — **los seis ítems de POLÍTICA, literales**.

**Bloque 4** (`info-box`) — ⛔ **la glosa obligatoria del ítem 4.** Redacción cuidada para que caiga dentro de la ventana de la compuerta del ADR-060 y con marcador de superación:

> ⚠️ **El ítem 4 nombra al «referente Safe From Harm», y ese término es de 2021-2023: hoy está superado.** Lo dejamos como está porque es el formato oficial tal cual se llena en papel. Pero **si te formaron con él, actualiza**: quien recibe y gestiona un caso hoy es el **Comité de Gestión de Incidentes** (Política 2025, pp. 39-42). El cargo regional sigue existiendo, pero **ya no gestiona casos**. Al contestar este ítem, léelo como *«cada miembro del Grupo sabe por dónde se reporta y quién responde»*.

**Bloque 5** (`list`, ordenada) — **los dos ítems de LIDERAZGO**, literales.

**Bloque 6** (`paragraph`). Por qué estas dos áreas van juntas: **las ocho preguntas son sobre adultos**. Ninguna pregunta por los jóvenes todavía.

**Reflexión L2.** *De estos ocho, ¿cuál marcarías en rojo hoy? Uno solo, el más rojo. Y ahora lo que cuesta: escribe **qué tendría que pasar** para que ese pase a amarillo. No a verde — a amarillo. Un paso.*

---

### 4.4 Lección 3 — 👦 El semáforo: Programa, jóvenes y familias

**Bloque 1** (`paragraph`). El giro: **las nueve que quedan ya no preguntan por ti, preguntan por lo que el grupo hace y por quién lo sabe**.

**Bloques 2-4** (`list` ordenada ×3) — **PROGRAMA (4), COMPROMISO JUVENIL (2), COMPROMISO DE LOS PADRES (3)**, literales.

**Bloque 5** (`info-box`). **El área que casi siempre sale roja y nadie espera: Compromiso juvenil.** Sus dos ítems piden que los jóvenes **sepan**: que se les hable de protección una vez por trimestre y que sepan cómo mantenerse a salvo. Es el puente con Programa de Jóvenes, y **es la diferencia entre proteger a alguien y enseñarle a protegerse** (ADR-038: PJ informa que la ruta existe; esta línea enseña la conducta y el límite).

**Bloque 6** (`info-box`) — **los otros dos instrumentos, nombrados y despachados**: la *Herramienta de Autoevaluación* de la OSM es para **Organizaciones Scouts Nacionales**, no para grupos; y el **GSAT** es el sistema de calidad al que remite la Política. **Los dos son del Nivel 4.** Este es el de tu grupo.

**Reflexión L3.** *Toma el área de Compromiso de los padres. ¿Cuándo fue la última vez que un padre o una madre de tu unidad supo, por ti, algo sobre protección? Si la respuesta es «nunca» o «no me acuerdo», escríbelo. Es el rojo más barato de arreglar de los diecisiete.*

---

### 4.5 Lección 4 — ✍️ Tus compromisos

**Bloque 1** (`paragraph`). Lo que dice la propia hoja: **una o dos áreas**, no todas. Y aquí se junta con lo de la Lección 1: lo que ya escribiste, más lo que acabas de ver en rojo.

**Bloque 2** (`plan-builder`). **Decisión de diseño sobre las tres políticas:**

- **A Salvo del Peligro** — exigible. La enseñan los Cursos 02 y 03.
- **Gestión para la Motivación** — exigible. La enseña el Curso 05.
- **Diversidad e Inclusión** — **opcional y declarado**: *«esta política tiene curso propio y todavía no existe. Si ya la conoces por otra vía, comprométete; si no, déjala en blanco — volveremos a por ella.»*

⚠️ **Mínimo 2, no 3.** Pedir tres compromisos cuando la ruta solo enseñó dos políticas es prometer de más — y el Curso 05 ya dejó la lección de que **un objetivo no puede pedir lo que el curso no da**.

Cada compromiso pide **qué**, **para cuándo** y **en qué se va a notar** — las tres columnas del `plan-builder`, con `labels` propias de esta línea.

**Bloque 3** (`info-box`). **Qué hace bueno a un compromiso:** tiene fecha, se nota desde fuera, y **no depende de que otro cambie primero**. *«Que el consejo se tome en serio la protección»* no es un compromiso. *«Llevar el ítem 4 al consejo del 6 de octubre»* sí.

**Reflexión L4.** *De los compromisos que acabas de escribir, elige **el que te da más pereza**. Ese. Escribe quién más se va a enterar de que lo asumiste — con nombre. Un compromiso que solo conoces tú no es un compromiso.*

---

### 4.6 Lección 5 — 📄 Llevarlo al consejo

**Bloque 1** (`paragraph`). El curso termina, el compromiso no. Qué se hace el martes.

**Bloque 2** (`method-grid`, 3 ítems):
- **Llenar el semáforo en equipo.** Solo es un diagnóstico si lo contestan varios. Y los desacuerdos **son el dato**: si tú marcas verde y otro rojo en el mismo ítem, ahí hay algo.
- **Elegir una o dos áreas.** Literal de la hoja. Un plan con cinco áreas no se cumple.
- **Volver a mirarlo a lo largo del año.** También literal. Lo respalda la Política, que se revisa cada cuatro años y pide seguimiento (Anexo 1).

**Bloque 3** (`info-box`). **Lo que este curso NO acredita**, en las palabras de siempre de la línea: no sustituye ni certifica el módulo oficial de A Salvo del Peligro que exige la ASC. ⚠️ **Obligatorio si se menciona el módulo** — lo vigila la compuerta del antídoto (ADR-060).

**Bloque 4** (`paragraph`). Y el cierre de la ruta entera: **cuidar, incluir, sostener** — con lo que falta dicho por su nombre.

**Reflexión L5 (cierre).** *Escribe la fecha del próximo consejo de grupo y, al lado, la primera frase que vas a decir. Una sola. Esa frase es la que vas a pegar al final, en el certificado.*

⚠️ **El `commitmentBox` de este curso debe pedir exactamente eso** — el cuadro de compromiso lo declara cada curso desde el ADR-065.

---

## 5. Logros

| id | Nombre | Módulo |
|---|---|---|
| 1 | Mi hilo | 2 |
| 2 | Las ocho del adulto | 3 |
| 3 | Las nueve del grupo | 4 |
| 4 | Con fecha | 5 |
| 5 | Dicho en voz alta | 6 |
| 6 | Mi Compromiso con los Entornos Seguros | certificado (`-1`) |

---

## 6. Riesgos y antídotos

| Riesgo | Antídoto |
|---|---|
| **Presentar el semáforo como auditoría o como el sistema de calidad** | Es una **autoevaluación de grupo**. GSAT y la herramienta OSM se nombran y se remiten al Nivel 4 |
| **Confundir los tres instrumentos** | Tabla del §0-bis; `info-box` propio en la L3 |
| **El término superado del ítem 4** | Se reproduce literal **y se glosa al lado**, con marcador de superación dentro de la ventana del ADR-060 |
| **Remitir a un PDF que el adulto no puede descargar** | El curso **trae los 17 ítems dentro** |
| **Pedir tres compromisos con dos políticas enseñadas** | Mínimo **2**; el de Inclusión, opcional y declarado |
| **Las cajas de brújula vacías** | Declarar `data-source-module` en los cuatro: **7, 7, 8, 7** |
| **Usar `brujula-action`** | Está **inerte**. No usarlo |
| **Compromisos que no dependen de uno** | `info-box` de la L4 con el contraejemplo |

---

## 7. Fuentes

- **Autoevaluación de grupo en relación a la Política «A salvo del peligro»** — serie documental de la PNAM, **2 folios**. ⚠️ **No publicada en la biblioteca**: comprobado en DNAM (34 documentos) y DNDI (18). Local: `DOCUMENTOS BASE/Información para CRAM/Información para CRAM/Documentos Oficiales PNAM 2022/23-Evaluación de grupo SFH (A salvo del peligro).pdf`.
- **Política Nacional a Salvo del Peligro** (dic-2025) — pp. 39–42 (quién gestiona incidentes) y **Anexo 1, pp. 36–37**, ⚠️ **solo** para la idea de revisión periódica: **no es un instrumento de grupo**.
- **Gestión para la Motivación** (DNAM, ago-2020) — **§8, folio 49** (el índice dice 47: **el offset del índice deriva**).
- Cursos **01, 02, 03 y 05** de esta línea, como fuente de la brújula.

---

## 8. Antes de construir

- [ ] Releer `../CREAR-CURSO.md` **§4-bis**.
- [ ] Los **17 ítems, literales**, cotejados contra el PDF — y **contados**: 6+2+4+2+3.
- [ ] La glosa del ítem 4 **dentro de la ventana de 260 caracteres** del ADR-060, y **correr la suite para comprobar que la compuerta no salta**.
- [ ] `data-source-course` y `data-source-module` en las **cuatro** cajas de brújula (7, 7, 8, 7).
- [ ] **No** usar `brujula-action`.
- [ ] `labels` completas del `plan-builder`, **o el build falla** (ADR-034).
- [ ] `commitmentBox` propio (ADR-065).
- [ ] Corregir la ficha de `politicas-transversales:brujula` en `claves-localstorage.json`.
- [ ] **Contar el sesgo antes de compilar** — los dos extremos, la oveja negra, **y la fuga de conjunto** (ADR-064).
- [ ] `status: "draft"` hasta la compuerta humana.
- [ ] **Medir la duración** al cerrar las auditorías, a **102,7 pal/min**.
- [ ] Añadir el curso al espejo de `PRUEBAS-E2E/tests/cursos.js`.
- [ ] Filas en `../../TRAZABILIDAD.csv`, **una por ítem del semáforo**.

---


---

## ⚠️ Lo que las auditorías cambiaron (19-sep-2026) — este diseño NO se reescribió

> **El diseño es fuente histórica** (ADR-057). Lo que vale hoy es el JSON.

| Dónde | Decía | Dice hoy |
|---|---|---|
| **§0-bis** | La glosa del ítem 4 «hace disparar la compuerta del ADR-060» | ⚠️ **Falso: no la disparaba.** El patrón exigía «regional» o «ASP» y el formato escribe *«el referente "Safe From Harm"»* a secas. Y la ventana era **por fragmento**, así que una glosa en la caja siguiente no podía salvar una cita literal. **Las dos cosas arregladas y calibradas** |
| **§1** | «Duración: por medir» | **50 min** — y **no por palabras**: el recuento daba 25 y este curso es sobre todo actividad. Modelado lección a lección por la auditoría pedagógica |
| **§4.2** | `brujula-display` «existe» | Existía **en el motor**, no en el build: **ningún build de la plataforma lo renderizaba**. Se añadió el caso, con `sourceCourse` y `sourceModule` **obligatorios** |
| **§4.3** | «las ocho no preguntan por los jóvenes» | ⚠️ **Falso:** los ítems **4 y 6** dicen «cada / todos los **miembros** del Grupo». El formato distingue «dirigentes», «adultos (18+)» y «miembros» a propósito |
| **§4.3** | La glosa: «un nombre que ya no es el vigente» | Lo superado son **las funciones**, no el nombre: el cargo 2.2.30 sigue vigente y sigue llamándose así. *Superado ≠ inexistente.* Y ahora dice **por dónde se reporta** |
| **§4.4** | «el área que más veces sale roja» | **No hay dato.** Se presenta como observación del curso, igual que «las tres que más se fallan» del Curso 05 |
| **§4.5** | «las tres columnas del `plan-builder`: qué, para cuándo y en qué se va a notar» | ⚠️ **La tercera columna es «Recursos»**, y el motor la imprime cocida. Los rótulos se alinearon a lo que el motor imprime; el criterio se enseña y se evalúa, pero **no tiene campo** |
| **§4.5** | Mínimo 2 compromisos | Se mantiene — pero **el curso pedía «una o dos áreas» y el sistema exigía «al menos dos políticas»**, mezclando dos planos. Separados explícitamente |
| **Todo el curso** | «Este te pide **contestar**» | Era una promesa sin instrumento: **15 de los 17 ítems no se contestaban** y ninguna pregunta los tocaba. Instrumentado con `photo-upload` y reflexiones que recogen el conteo |
| **§7** | El instrumento, citado sin más | Cada una de sus **26 filas de trazabilidad** lleva escrito que **no imprime emisor, versión, fecha ni folio** y que **no está en la biblioteca** — para que nadie tenga que volver a deducirlo |

**Lo que este diseño acertó y no se tocó:** los 17 ítems y su reparto, la decisión de **traer el instrumento dentro** en vez de remitir a un PDF que nadie puede descargar, los cuatro punteros de la brújula (7, 7, 8, 7), el corte 8/9 entre lecciones —que la auditoría pedagógica llamó *«el mejor movimiento conceptual del curso»*—, la reflexión que pregunta **cuál de las cuatro no cumpliste**, y los tres avisos de honestidad.


_Diseño escrito el 19-sep-2026. Su fuente rectora estuvo a punto de darse por inexistente porque se buscó sin tildes: está anotado en el §0-bis, y es la lección que este curso deja aunque no tenga nada que ver con su contenido._
