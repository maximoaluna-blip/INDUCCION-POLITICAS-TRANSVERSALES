# Curso 01 — 🛡️ Bienvenida a las Políticas Transversales

> **Línea:** Políticas Transversales · **Nivel 1 — Ruta de Fundamentación** · **`courseId`: `bienvenida-politicas-transversales`** · **`order`: 1**
> **Estado:** diseño del 17-sep-2026, tras la aprobación del Plan de Línea (**ADR-059**). Primer curso construido de la línea después del 03.
> **Duración:** se **mide** al cerrar las tres auditorías (**ADR-047**). El plan estimó 25 min; no se declara hasta medir.

---

## 0. La comprobación de fuentes, hecha antes de escribir

Por el **§12.3 / ADR-056**, las cuatro fuentes del curso se cotejaron contra la biblioteca **antes** de diseñar:

| Documento | Local vs. biblioteca |
|---|---|
| *Política Nacional de Adultos en el Movimiento* (PNAM) | **sha256 idéntico** |
| *Guía — Fase de inducción de Adultos Voluntarios Nuevos* (v1, marzo 2025) | **sha256 idéntico** |
| *Política Nacional A Salvo del Peligro* (dic-2025) | **sha256 idéntico** |
| ***Cartilla Metodológica*** | **sha distinto — y NO era un cambio de contenido** |

La Cartilla difería en **286 bytes**. Comprobado por cuatro vías que es **el mismo documento**: 30 páginas en las dos, **texto idéntico en las treinta**, **19 imágenes con hash idéntico** y los mismos metadatos. Era reenvasado del archivo, no reedición. De paso apareció que el corpus tenía **dos copias distintas** del mismo PDF y que **la desalineada era la de la ruta canónica**; las dos quedaron alineadas con lo que la biblioteca sirve hoy. `TRAZABILIDAD.csv` tiene **0 filas** apoyadas en la Cartilla, así que no había nada que re-auditar. Asiento en `CHANGELOG-DOCTRINA.md`.

---

## 1. La corrección al plan que apareció al abrir la fuente

El **§3.2 del Plan** propone como hito pedagógico que *«la Cartilla Metodológica las coloca en una estación llamada **Cascada**»*. **Es cierto para dos de las tres.**

La Cartilla (**§2.4, pp. 15–17**) describe el módulo de inducción como *«un campamento scout con **seis estaciones**»* — Cabaña · Zona de Campamento · Zona de Fogata · **Zona de Cascada** · Zona de Maderos · Certificación. Y la Zona de Cascada contiene **tres temas**, que enumera en la p. 17:

- **A salvo del peligro (Safe From Harm)**
- **Inclusión y Diversidad**
- **Código de Conducta de la OMMS**

**Gestión para la Motivación no está ahí.** Vive en el **§2.9, p. 24**, en la parte del documento que acompaña el desempeño, no la protección. Las tres políticas de esta línea son **tres módulos distintos de la Cartilla**: **§2.5** (A salvo del peligro), **§2.6** (Diversidad e Inclusión) y **§2.9** (Gestión para la motivación).

**Y esto no debilita el hito: lo mejora, y explica el arco del propio plan.** El plan resume la línea como *«cuidar, incluir, sostener»*. Resulta que **cuidar e incluir** son exactamente lo que la ASC metió en la Cascada —la estación que, dice la Cartilla, trata los temas que *«determinan las pautas y directrices entorno a la protección y garantía de los derechos fundamentales»*— y **sostener** está en otra parte del documento porque es otra cosa: no protege derechos, sostiene a quien los protege. El arco deja de ser un recurso de redacción y pasa a estar en la fuente.

> **Acción sobre el plan:** la ficha del §3.2 queda marcada con esta corrección, no reescrita — el patrón del ADR-057. El diseño es fuente: si alguien reconstruye desde la ficha sin este aviso, reintroduce la afirmación falsa.

**Colateral que abre, y que es bueno:** el tercer tema de la Cascada —el **Código de Conducta de la OMMS**— es materia del **Curso 22** de esta línea (Nivel 4, `conducta-etica-y-codigos`). La L1 lo nombra y lo remite, en vez de fingir que la Cascada tiene solo dos cosas.

---

## 2. Ficha

| | |
|---|---|
| **Audiencia** | Todo adulto que ingresa a la ASC. Secundaria: adultos antiguos que nunca recorrieron el módulo de inducción. |
| **Hook** | *«Hay tres cosas que la Asociación le pide a todo adulto antes de pedirle cualquier otra: cuidar, incluir y sostener.»* |
| **Recomendado antes** | Ninguno. **Recomendado en paralelo:** el módulo oficial de A Salvo del Peligro que exige la ASC (L5). |
| **Módulos** | 7 — 1 de registro + 6 lecciones |
| **Quizzes** | 12 (2 por lección) |
| **Icono** | 🛡️ |

### Objetivos de aprendizaje

1. **Nombrar** las tres políticas transversales y el documento rector de cada una. ⚠️ **Salvedad del plan, respetada:** para **Diversidad e Inclusión** el curso enseña *que* la ASC la adoptó y remite a la biblioteca, **sin afirmar el título** — las fuentes discrepan sobre qué adoptó el **Acuerdo C.S.N. 405** y el texto no está publicado.
2. **Situar** las tres dentro del ciclo de vida del adulto: atracción y vinculación · desempeño · decisiones para el futuro.
3. **Explicar** por qué dos de ellas viven en la **Zona de Cascada** del módulo de inducción y la tercera no.
4. **Distinguir** lo que esta línea ofrece —comprensión y aplicación— de lo que la ASC **exige** por fuera de ella.
5. **Enumerar** los seis pasos de la fase de inducción que su jefe inmediato le va a pedir.
6. **Escribir** su primer compromiso con una de las tres políticas.

---

## 3. Hilo narrativo

Una adulta que acaba de aceptar un cargo en un grupo. No un caso dramático: el caso normal. Le llega un correo del jefe de grupo con una lista de cosas por hacer, y no entiende por qué la mitad de ellas existen. El curso recorre esa lista y, al hacerlo, explica de dónde salen las tres políticas.

Es deliberadamente **el opuesto del hito que hay que desactivar**: el curso empieza *dentro* del trámite —la lista del correo— y termina mostrando que dos de esas casillas son lo único que la Organización considera *«de vital importancia (…) para la protección y garantía de los derechos fundamentales»*.

---

## 4. Lecciones

### L1 — 🛡️ Tres políticas, una sola promesa

**Idea central:** no son tres trámites separados; son tres respuestas a la misma pregunta — *¿qué tiene que ser verdad para que un adulto pueda estar cerca de un niño?*

`info-box` de duración · `course-objectives` · `paragraph` (el correo del jefe de grupo, seis casillas) · `heading` · **`method-grid`** con las tres políticas y su documento rector: **A Salvo del Peligro** → *Política Nacional A Salvo del Peligro*, dic-2025, Acuerdo C.S.N. **657**; **Diversidad e Inclusión** → ⚠️ adoptada por la ASC, **título no afirmado** (Acuerdo 405, texto no publicado); **Gestión para la Motivación** → cartilla *Gestión para la Motivación* · `paragraph` (por qué de la tercera no decimos el título, y que eso es honestidad, no descuido) · **`info-box`** con el enlace a la biblioteca.

**Quiz (2):** un compañero afirma el título de la política de D&I citando una circular — ¿qué haces? · cuál de los tres documentos es el que un Acuerdo del CSN aprobó en 2025.

---

### L2 — ⛺ La estación que no sabías que recorriste

**Idea central:** la ASC ya decidió dónde van estas políticas dentro de la inducción, y la decisión es informativa.

`info-box` · `paragraph` (el módulo de inducción es **un campamento con seis estaciones**) · **`method-grid`** o `timeline` con las seis: Cabaña · Zona de Campamento · Zona de Fogata · **Zona de Cascada** · Zona de Maderos · Certificación · **`policy-quote`** §2.4, p. 16: *«se analizan temas de vital importancia para la Organización Scout Mundial, ya que determinan las pautas y directrices entorno a la protección y garantía de los derechos fundamentales…»* · `list` con los **tres temas** de la Cascada, incluido el **Código de Conducta de la OMMS**, remitido al Curso 22 · **`info-box` de honestidad**: *y la tercera política de esta línea no está en la Cascada* — está en el **§2.9**, y eso dice algo: cuidar e incluir protegen derechos; sostener sostiene a quien los protege.

**Quiz (2):** ubicar en qué estación se tratan la protección y los derechos · un dirigente dice que Motivación es «lo mismo pero de adultos» — qué le falta.

---

### L3 — 🏕️ A Salvo del Peligro en dos minutos

**Idea central:** no es «protección de menores»; es un compromiso de toda la membresía que también protege al adulto.

`info-box` · `paragraph` · **`policy-quote`** (Política 2025, p. 11: *«A Salvo del Peligro es un compromiso y una responsabilidad de toda la membresía»*) · `paragraph` (los dos filos: protege a los jóvenes **y** al adulto — p. 30) · **`info-box`** puente: *«el Curso 02 lo desarrolla entero; aquí solo necesitas saber que existe y que te incluye»*.

**Quiz (2):** a quién obliga · por qué «esto es para proteger a los niños de los adultos» está incompleto.

---

### L4 — 🌈 Diversidad e Inclusión en dos minutos

**Idea central:** un entorno es seguro cuando lo es **para todos**, o no lo es.

`info-box` · `paragraph` · **`info-box` de límite** (⚠️ lo que **no** podemos decirte todavía: cuál es el título exacto de la política que adoptó el Acuerdo 405 y por qué — **el curso lo dice en voz alta**) · `paragraph` (lo que sí consta: la Cartilla la pone en la Cascada, junto a ASP) · **`info-box`** puente al Curso 04 *(y el aviso de que ese curso espera el texto del Acuerdo)*.

**Quiz (2):** por qué el curso no afirma el título · qué relación tiene la inclusión con la seguridad.

---

### L5 — 📋 Lo que la ASC te exige por fuera de esta plataforma

**Idea central — y es el riesgo doctrinal n.º 1 de este curso:** **esta línea no reemplaza nada.** Lo que la ASC exige está en otro sitio, tiene certificado propio y se entrega al jefe inmediato.

`info-box` de aviso **fijo** (el antídoto que pide el plan) · `paragraph` (volvemos al correo de la L1) · **`list` ordenada con los SEIS pasos** de la *Guía — Fase de inducción de Adultos Voluntarios Nuevos* (v1, marzo 2025, p. 2): hoja de vida en **Talento 360°** · **compromiso de acuerdo mutuo de servicio voluntario** · inscripción en **SISCOUT** · leer el **Manual de Cargos, Perfiles y Funciones** · **curso de inducción general** en Universidad Scout, con certificado al jefe inmediato · **los cuatro cursos SFH** de `learn.scout.org`, con certificados al jefe inmediato · **`policy-quote`** de la exigencia de la Política 2025 · **`info-box` de precisión**: la Guía dice *«los 4 cursos **habilitados**»* — **habilitados = disponibles, no habilitantes**; y en esta plataforma **ningún curso bloquea a otro** (ADR-019).

**Quiz (2):** un adulto cree que con este curso ya cumplió — qué le falta · qué significa «habilitados» en esa frase.

---

### L6 — 🧭 Tu brújula: el primer compromiso

**Idea central:** tres políticas no se «aprenden»; se convierten en una cosa que harás distinto el sábado.

`info-box` · `paragraph` (el arco completo: cuidar → incluir → sostener, y qué curso trabaja cada uno) · **`method-grid`** con los cinco cursos que siguen y qué entrega cada uno · `reflection` **que alimenta `politicas-transversales:brujula`** (§7.2 del plan), leída después por el Curso 06 · **`mission-box`**: una sola cosa, con fecha, para el próximo consejo de grupo.

**Quiz (2):** cuál de las tres políticas cubre un caso dado · qué NO es un compromiso ejecutable.

---

## 5. Logros

7: uno por lección (`unlockOnModule` 2–7) más el final con `unlockOnModule: -1`.
🛡️ *Sé cuáles son* · ⛺ *Sé dónde viven* · 🏕️ *Sé que me incluye* · 🌈 *Sé lo que falta* · 📋 *Sé qué me exigen* · 🧭 *Tengo un compromiso* · ⭐ *Entré por la puerta grande*

---

## 6. Conexiones

**Hacia adelante (§7.1 del plan, verbatim):** la L6 anuncia los Cursos 02–06 como un solo arco — *«cuidar (02, 03), incluir (04), sostener (05), comprometerte (06)»*.
**Cross-línea:** ninguna dependencia de datos. **Prohibido** leer `politica-adultos:*` o `programa-jovenes:*` (§7.2).
**Colaterales al publicar:** `cursos.json` de la línea · el Curso **03**, que ya existe en `draft` y cuya ficha debe apuntar al 01 como recomendado previo · `landing.spec.js` y la agrupación por nivel de esta línea, que el **ADR-058** dejó fuera · portal y panel admin.

---

## 7. Riesgos

| Riesgo | Antídoto |
|---|---|
| **Sustituir el módulo oficial** (riesgo n.º 1 del plan) | `info-box` fijo en la L5 con la exigencia literal y los seis pasos con su enlace. |
| **Afirmar el título de la política de D&I** | Prohibido. La L4 lo declara como límite conocido y remite a la biblioteca. |
| **Repetir el hito falso del plan** (las tres en la Cascada) | §1 de este diseño. Son **dos** más el Código de Conducta. |
| **Sonar a trámite** | El hilo narrativo *empieza* en el trámite y lo desarma desde dentro. |
| **Terminología 2021–2023** | Este curso no entra en operativa; si aparece, se glosa con año. |

---

## 8. Estado

1. **Hecho:** comprobación de fuentes (§0), corrección al plan (§1), este diseño.
2. **Pendiente:** JSON y build · auditoría doctrinal · auditoría pedagógica · auditoría funcional · **medir la duración** (ADR-047) · compuerta humana · publicación.
