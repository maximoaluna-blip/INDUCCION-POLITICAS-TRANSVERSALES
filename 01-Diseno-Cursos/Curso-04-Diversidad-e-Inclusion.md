# Diseño del Curso 04 — 🌈 Diversidad e Inclusión: un Movimiento abierto a todos

> **Línea:** Políticas Transversales · **Nivel 1** Ruta de Fundamentación · `diversidad-e-inclusion-movimiento`
> **Estado:** diseño, 27-sep-2026. **Diseñado por Claude Code** con la autonomía que Máximo dio ese día para cerrar el Nivel 1 (excepción §1.4 del `CREAR-CURSO.md` de PJ, por analogía).
> **Ficha del Plan:** `../Plan-de-Formacion-Linea-Politicas-Transversales.md` §3.2. **Decisión que lo desbloquea:** `../../DECISIONES.md` **ADR-097**.
> **Antes de tocar este diseño, leer `../CREAR-CURSO.md` §4-bis.**
> **El texto definitivo vive en el JSON** (`../05-Generador-Cursos/borradores/diversidad-e-inclusion-movimiento.json`). Este documento fija estructura, fuentes y decisiones; no duplica la prosa.

---

## 0. Por qué este curso existe sin el Acuerdo 405

El Plan decía *«no se diseña hasta tener el texto del Acuerdo C.S.N. 405»*. **Ese texto sigue sin estar publicado** (biblioteca sin categoría de acuerdos, verificado el 15-sep; búsqueda web el 27-sep: cero). Lo que cambió el 27-sep-2026 es otra cosa: **apareció la fuente que faltaba para enseñar el contenido**, y resultó que el curso **no necesita** zanjar la discrepancia para enseñar bien.

- **Lo que sigue sin afirmarse:** si el acuerdo adoptó la política de D&I **Mundial** (Política ASP 2025, p. 5) o la **Interamericana** (Manual Operativo 2023, p. 4). **El curso lo dice en voz alta**, igual que el Curso 01. ⚠️ **El Modelo 2026 NO habla del acuerdo** —«405» no aparece en sus 109 páginas—: solo se declara coherente con la Interamericana (p. 89 del índice). `GLOSARIO-ASC.md` lo contaba entre las fuentes que discrepan sobre el acuerdo, este diseño lo copió y el curso llegó a decir «las tres fuentes»; lo cazó la auditoría doctrinal (C1). **Tercera vez en esta línea que el peor hallazgo nace en el glosario.**
- **Lo que ahora sí hay:** la **Política Interamericana de Diversidad e Inclusión** (Oficina Scout Mundial – Centro de Apoyo Interamérica, oct-2016; **Resolución 4/16 de la 26ª Conferencia Scout Interamericana, Houston**). Es **el mismo archivo** que el `INVENTARIO-FUENTES.md` §3 marcaba como faltante —`scout.org.co/wp-content/uploads/2019/11/Politica-Interamericana-Diversidad-e-Inclusion.pdf`, que hoy responde 403—, recuperado de la copia del **Internet Archive** (captura del 10-jun-2024, 1.443.493 bytes, 16 pp., sha256 `9597c519…22ef7`). Archivado en `DOCUMENTOS BASE/SCOUTS/EXTERNOS/Politica Interamericana de Diversidad e Inclusion (2016).pdf`.
- **Por qué se puede usar sin saber qué adoptó el acuerdo:** es la política **de la Región Scout a la que pertenece la ASC**, su resolución *«invita a las Organizaciones Scouts Nacionales a implementar»* sus disposiciones (p. 4), y **un documento vigente de la propia ASC se declara coherente con ella**: el Modelo de Aplicación 2026, Cap. 14 (p. 89 del índice). El curso la presenta **como lo que es con certeza** —la política de la Región— y **nunca** como «la que adoptó el Acuerdo 405».

> ⛔ **Frase prohibida en este curso y en sus derivados:** *«la ASC adoptó la Política Interamericana»* o *«la ASC adoptó la Política Mundial»*. Lo cierto, en lo que coinciden **todas** las fuentes: **por el Acuerdo 405 de 2020 la ASC adoptó, en el mismo acto, A Salvo del Peligro y una política de Diversidad e Inclusión de la OMMS.**

---

## 0-bis. Verificación de fuentes — cotejado página por página el 27-sep-2026

| Fuente | Convención de página | Qué se usa | Verificado |
|---|---|---|---|
| **Estatuto Nacional 2025** | folio impreso = PDF («Página 04 - 48») | Art. 4 (p. 4): *«abierta a todos, sin vinculación partidista, sin distinción de nacionalidad, género, etnia, credo o condición social»*; Art. 5 (p. 4): los programas se fundamentan en la Promesa y la Ley *«que todos sus miembros aceptan libremente»* — ⚠️ **la extracción plana pega esa frase al Art. 4**; con `extraction_mode='layout'` se ve que es del **5**; Art. 9 (p. 7): **«Equidad e inclusión»** entre los principios de **buena gobernanza** | ✅ literal |
| **PNAM** | folio = PDF − 6 | §5.1.3 *Búsqueda y Selección* (p. 12): *«fomentar la equidad de género en su contexto social y cultural, y promover la diversidad, para llegar con el Movimiento Scout a todos los segmentos de la sociedad»* — ⚠️ **es sobre la selección de adultos**, no una declaración general | ✅ literal |
| **Cartilla Metodológica** | folio = PDF − 6 | §2.4 (p. 11): *Inclusión y Diversidad* en la Zona de Cascada; §2.6 (p. 14): *«con apertura para todos los jóvenes y adultos que acepten nuestros valores fundamentales»* y *«presentes a lo largo de todo el ciclo de vida del adulto»* | ✅ literal |
| **Manual Operativo ASP (V1, feb-2023)** | folio = PDF − 4 | p. 4 (PDF 8): el Acuerdo 405 *«mediante el cual el Consejo Scout Nacional … adopta la Política de Diversidad e Inclusión de la Organización Mundial del Movimiento Scout - Región Interamericana y la Política A Salvo del Peligro (Safe From Harm)…»*; §5.6 **Enfoque Diferencial** y §5.7 **Enfoque de derechos humanos** (p. 9, PDF 13) | ✅ literal (la extracción cambia «ti» por `�`: *Polí�ca* = Política) |
| **Política Nacional A Salvo del Peligro 2025** | página de PDF | p. 5: *«mediante el Acuerdo 405 de 2020, adoptando la Política Mundial A Salvo del Peligro y la Política Mundial de Diversidad e Inclusión, con una aplicación ajustada al contexto nacional»* | ✅ literal (letras espaciadas en la extracción) |
| **Modelo de Aplicación 2026** | **no imprime folio**; su **índice = PDF − 1** | Cap. 14 (p. 89 del índice): coherencia con la *Política Interamericana*; p. 92: buenas prácticas — **barreras físicas, comunicativas o culturales** y *«Formación de dirigentes»*; §9.4 (p. 65) *«El dirigente como garante de inclusión y diversidad»* | ✅ literal. ⚠️ **`GLOSARIO-ASC.md` cita el §14.1 en «p. 90», que es la página de PDF**: el curso cita por el índice, y lo declara en el `source` |
| **Reglamento Nacional de Grupos Scouts** | página impresa = PDF | Art. 7.7 (p. 34): discreción y sin prejuicios entre credos, reconocimiento de la diversidad espiritual, **sin proselitismo** en encuentros interconfesionales | ✅ literal. No es función de cargo, así que **el Acuerdo 558 no la alcanza** |
| **Política Interamericana de D&I (2016)** | folio impreso = PDF | p. 4 resolución; p. 6 principios; **p. 8** diversidad, inclusión (incluye a **los adultos**: *«la forma en que reclutamos, capacitamos, apoyamos y retenemos»*), vulnerabilidad; **p. 9** estigma, **discriminación** (*«por acción u omisión, sutil o abiertamente hostil, directa o indirecta, intencional o no intencional»*), **asistencialismo**; **p. 11** *Estigma de la sobreprotección* y *Los adultos con discapacidad*; **p. 12** la seguridad de los jóvenes es preponderante al seleccionar; *«no existe quien pueda considerarse invulnerable»*; **p. 13** la D&I como contenido de la formación de adultos | ✅ texto legible; varias páginas salen con **sílabas partidas** («pers ona s») — normalizar antes de buscar |

**Lo que NO se usó, y por qué:**
- **Guías Dos y Tres** (discapacidad, minorías): son la materia de los Cursos **10 y 11** del Nivel 2. Aquí solo se nombran como lectura siguiente.
- **Cap. 14 del Modelo en su plano del joven** (coeducación, progresión, áreas de crecimiento): es de PJ. El curso lo **enlaza**, no lo enseña (riesgo (b) del Plan).
- **El «Comité de Ética» que la Política Interamericana pide a las OSN (p. 14):** no consta que la ASC lo tenga. **No se menciona**, para no sugerir un órgano que quizá no existe.

---

## 1. Ficha del curso

| | |
|---|---|
| **courseId** | `diversidad-e-inclusion-movimiento` |
| **Título** | Diversidad e Inclusión: un Movimiento abierto a todos |
| **Icono** | 🌈 |
| **Nivel / orden** | 1 · Ruta de Fundamentación · `order: 4` |
| **Duración** | **medida al final** (ADR-047) — ver §9 |
| **Módulos** | 7 (1 intro + 6 lecciones) |
| **Audiencia primaria** | Todo adulto. **Secundaria:** consejos de grupo y comisionados con la función de promover la inclusión |
| **Recomendado antes** | Cursos 02 y 03 (recomendados, **nunca exigidos** — ADR-019) |

**Este curso no sustituye ni certifica el módulo oficial de A Salvo del Peligro que exige la ASC, ni ningún módulo oficial de la Asociación.** Prepara, explica y aterriza (exigencia 1 del `CREAR-CURSO.md`).

---

## 2. Objetivos de aprendizaje

1. **Citar** dónde está escrito el compromiso de la ASC con la inclusión: Estatuto 2025 (Art. 4 y Art. 9), PNAM §5.1.3 y el Acuerdo C.S.N. 405 de 2020.
2. **Explicar** por qué protección e inclusión se adoptaron **en el mismo acto** y qué significa eso para un entorno seguro.
3. **Distinguir** diversidad, inclusión, estigma, discriminación y asistencialismo, y reconocer una discriminación **por omisión y sin intención**.
4. **Aplicar** el enfoque diferencial del Manual Operativo sin convertirlo en etiquetar a nadie.
5. **Identificar** barreras físicas, comunicativas y culturales —y la trampa de la sobreprotección— y proponer **un ajuste concreto**.

---

## 3. Hook y hito

> **«"Abierta a todos" está en el Estatuto. Que sea verdad depende de cómo recibes al que llega distinto.»** *(Plan §3.2)*

**Hito:** la ASC **no adoptó la inclusión y la protección por separado**: el mismo acuerdo de 2020 adoptó las dos. *Un entorno es seguro cuando lo es para todos* —el anuncio 03 → 04 del `CREAR-CURSO.md` §5.1—.

**Segundo hito, el que el adulto no espera:** la mayor parte de la exclusión en un grupo **no es hostil**. La Política Interamericana define la discriminación incluyendo la que es **por omisión** y **no intencional**, y nombra una forma de excluir **cuidando**: la **sobreprotección**.

---

## 4. Estructura

| # | Lección | Qué instala | Fuente angular |
|---|---|---|---|
| 0 | 👋 Antes de empezar | Qué afirma el curso y qué no; el plano del adulto | — |
| 1 | 📜 «Abierta a todos» | El compromiso escrito en tres sitios, y su condición: aceptar la Promesa y la Ley | Estatuto Art. 4, 5 y 9; PNAM §5.1.3 |
| 2 | 🤝 Dos políticas en un solo acuerdo | Acuerdo 405: protección e inclusión, juntas; el hueco dicho en voz alta; qué es la Política Interamericana | MO p. 4; Política ASP 2025 p. 5; Modelo p. 89; Interamericana p. 4 |
| 3 | 🔤 Las palabras que ordenan | Diversidad, inclusión, estigma, discriminación (por omisión), asistencialismo | Interamericana pp. 8–9 |
| 4 | 🧭 Reconocer para proteger | Enfoque diferencial y de derechos; vulnerabilidad relativa; reconocer ≠ etiquetar | MO §5.6–5.7 p. 9; Interamericana pp. 8 y 12 |
| 5 | 🚧 Barreras, y la trampa de cuidar de más | Barreras físicas, comunicativas, culturales; sobreprotección; los adultos con discapacidad deciden | Modelo p. 92; Interamericana pp. 11–12 |
| 6 | 🏕️ La inclusión empieza entre adultos | Reclutar, capacitar, apoyar, retener; diversidad espiritual sin proselitismo; un ajuste con fecha | Interamericana pp. 8 y 13; Cartilla §2.6; RG Art. 7.7 |

**12 preguntas** (dos por lección) y **seis reflexiones**. Cada lección abre con `info-box` de «Idea central».

### Reglas de redacción que este curso se impone

- **Reflexiones (ADR-087):** por **situación o rol**, nunca por persona. En un curso sobre discapacidad, minorías y vulnerabilidad el riesgo es mayor que en ninguno: **ninguna reflexión pide describir la condición de alguien identificable**. Las de las Lecciones 4 y 5 lo dicen expresamente.
- **Casos anonimizados y no revictimizantes** (exigencia 4). Sin imágenes de personas (exigencia 3).
- **Quizzes:** contar longitudes antes de compilar; **fuga de conjunto**: cuando el enunciado nombra un conjunto (tipos de barrera, las palabras de la Lección 3), **los tres distractores son miembros del conjunto**.
- **Nunca «incluir» como sinónimo de «tolerar»**, y nunca un caso en que el adulto «investigue» la situación de una familia (línea roja; aquí se escribe *preguntar a la persona qué necesita*, que es lo contrario de averiguar sobre ella).

---

## 5. Quizzes — la clave y por qué

> ⚠️ **Esta tabla es la del diseño y quedó superada:** las auditorías reescribieron 9 de las 12 preguntas. **Manda el JSON.** Ver al final «Lo que las auditorías cambiaron».

| L | Pregunta (resumen) | Correcta | Por qué los distractores tientan |
|---|---|---|---|
| 1 | Un consejo duda en recibir a un adulto de otro credo | Abierta a todos sin distinción de credo; lo que se pide es aceptar la Promesa y la Ley | «decide la fe mayoritaria» / «lo decide el asesor religioso»: los dos suenan a prudencia de grupo |
| 1 | Qué significa que «Equidad e inclusión» esté en el Art. 9 | Es un principio de cómo se **gobierna** la ASC | Las otras la reducen a Programa o a grupos «especiales» |
| 2 | «La inclusión es otro tema» | Se adoptaron en el mismo acto | Fechas y órdenes falsos, plausibles |
| 2 | Por qué el curso no dice Mundial o Interamericana | El acuerdo no está publicado y las fuentes que lo citan no coinciden | «da igual» / «la ASC no ha decidido»: las dos son afirmaciones sin fuente |
| 3 | Tareas de responsabilidad que nunca se ofrecen a una dirigente con discapacidad visual («no podría») | Sí: la definición incluye la discriminación **por omisión y sin intención** — aquí hay **estigma** (creencia falsa de incapacidad) | «Sin intención no hay» / «solo si se queja». ⚠️ **El primer caso era un horario que excluía a alguien por su trabajo por turnos**: la definición exige exclusión **en función de un estigma**, y un turno no lo es (auditoría M1). Eso es una **barrera**, materia de la Lección 5 |
| 3 | Pagarlo todo sin preguntar | **Asistencialismo** | Estigma y discriminación: **miembros del mismo conjunto** |
| 4 | «Trato a todos igual» | Enfoque diferencial: hay poblaciones con más riesgo que requieren garantías especiales | Distractores tomados de **otros principios del mismo Manual** (dignidad, prevención) mal aplicados |
| 4 | «Aquí no hay población vulnerable» | Vulnerabilidad relativa y dinámica: nadie es invulnerable | Las dos la atan a pobreza o a una clasificación externa |
| 5 | Dirigente con movilidad reducida apartada «para cuidarla» | **Sobreprotección**: decidir por un adulto lo que puede decidir | «Prudencia» y «enfoque diferencial»: el segundo es **miembro del conjunto** del curso |
| 5 | Decisiones por nota de voz | Barrera **comunicativa** | Física y cultural: **las otras dos del mismo conjunto** |
| 6 | Oración de un solo credo para todos | Sin proselitismo, cada quien según su credo | «La del credo mayoritario» / «ninguna expresión espiritual»: la segunda contradice el reconocimiento que pide el Art. 7.7 |
| 6 | Adulto nuevo con otra lengua materna | La inclusión se nota en cómo se le **recluta, capacita, apoya y retiene** | Reducirla a la bienvenida o a la unidad |

---

## 6. Logros

| id | Nombre | Módulo |
|---|---|---|
| achievement-1 | Abierta a todos | 2 |
| achievement-2 | Dos políticas, un acuerdo | 3 |
| achievement-3 | Las palabras que ordenan | 4 |
| achievement-4 | Reconocer para proteger | 5 |
| achievement-5 | Sin barreras y sin cuidar de más | 6 |
| achievement-6 | Empieza entre adultos | 7 |
| achievement-7 | Diversidad e Inclusión | fin |

---

## 7. Hilos con la línea

- **03 → 04** (*«Un entorno es seguro cuando lo es para todos»*): lo recoge la Lección 2.
- **04 → 05** (*«Hasta aquí, cuidar a los jóvenes. Ahora, cuidar a los adultos que cuidan»*): cierra la Lección 6. **Coincide con la propia lección**, que ya mira a los adultos.
- **Brújula:** la reflexión de cierre alimenta `politicas-transversales:brujula` como las demás.
- **Al publicarse, cuatro cursos dicen que este «no existe»** y hay que corregirlos en el mismo commit: 01 (Lección 4 y certificado), 03 (cierre), 05 (intro) y 06 (intro, `plan-builder`, cierre). **Ninguno puede prometer ya que «cuando llegue el acuerdo, el 04 afirmará lo que el 01 no afirma»**: el 04 **tampoco** lo afirma, y lo dice.

---

## 8. Riesgos y antídotos

| Riesgo | Antídoto |
|---|---|
| Afirmar qué política adoptó el Acuerdo 405 | Frase prohibida (§0); la Interamericana se presenta **como la de la Región** |
| Plano cruzado: enseñar coeducación y progresión (plano del joven) | Solo §9.4 y p. 92 del Modelo; el Cap. 14 se **enlaza** a PJ |
| Revictimizar o etiquetar | «Reconocer no es etiquetar ni diagnosticar»; reflexiones por situación |
| Inclusión como caridad | El asistencialismo es contenido explícito de la Lección 3 |
| Cuidar de más | La sobreprotección es contenido explícito de la Lección 5, con la otra mitad: **la seguridad de los jóvenes es preponderante** al seleccionar (p. 12) |
| Nombrar un órgano que no consta | Sin «Comité de Ética» (§0-bis) |

---

## 9. Medición y auditorías

**Duración: 35 min.** Tiene unas 4.500 palabras contra ~4.300 del Curso 01 y ~4.200 del 05, que declaran lo mismo. Todas las lecciones quedan entre 6 y 7,3 min a 102,7 pal/min. **Sesgo:** la correcta es la más larga en 3 de 12, sin extremos ni ovejas negras. **Suite local:** 109 = 107 passed + 2 skipped, 0 failed.

---

## ⚠️ Lo que las auditorías cambiaron (27-sep-2026) — este diseño NO se reescribió

**Doctrinal, en tres vueltas: 1 crítico y 4 mayores → 1 mayor nuevo → APTO.**
- **C1:** el Modelo 2026 **no habla del Acuerdo 405**. La lista de fuentes sobre el acuerdo quedó en dos, y el Modelo pasó a ser razón aparte para usar la Interamericana. La raíz estaba en el glosario (fila del 405) y en el Plan: corregidos los dos.
- **M1:** **la discriminación exige estigma** (p. 9). El caso del horario por turnos era una barrera; se cambió por el dirigente sordo al que no se ofrecen tareas.
- **M2:** «del Movimiento Scout Mundial» sonaba a «la Mundial». Se cambió por «de la Organización Mundial del Movimiento Scout (OMMS)».
- **M3:** se quitó que el Manual Operativo «regula cómo se reporta», porque la ruta vigente es la de la Política 2025.
- **Menores:**
  - m1: la cita «invita» no era literal.
  - m2: «misma política», cuando son dos.
  - m3: se añaden las barreras sensoriales (p. 78).
  - m4: «entre otras».
  - m5: «condición de fondo».
  - m6: «asesores espirituales y religiosos».
  - m7: el conteo de «sitios».
- **N-M1 (segunda vuelta):** la clave de la L2 Q2 oponía «OMMS» a «Región» e insinuaba que no fue la Interamericana. Ahora dice «lo seguro es que se adoptó una de la OMMS, pero no cuál».

**Pedagógica, en tres vueltas: 4 altos (58 % comprensión o aplicación) → 2 altos traídos al corregir → APTO (12 de 12).**
- Reflexiones de la L2 y la L3 reescritas para que **nadie describa a una persona identificable** (ADR-087).
- La mission-box prometía que «el certificado te la devuelve», y no es así.
- Se reescribieron 9 preguntas: casos nuevos en lugar de la frase literal de la lección.
- **A2 (segunda vuelta):** la clave del enfoque diferencial premiaba garantizar **sin preguntar**, que es asistencialismo. Ahora es «acordar con él y su familia».
- Se añadió un info-box sobre la exclusión **deliberada**, que puede ser un incidente de ASP y va por el botón (validado doctrinalmente: Política 2025, pp. 13, 15, 21, 30 y 44).
- El puente al Curso 05 prometía una pregunta que ese curso no responde; se corrigió.
- **No aplicado:** B4, que proponía «turnar oraciones de distintos credos» como distractor. Puede ser una práctica interconfesional válida.
