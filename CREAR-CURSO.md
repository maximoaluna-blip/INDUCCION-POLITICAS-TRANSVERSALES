# CREAR-CURSO.md — Línea Políticas Transversales

> Instancia de [`../PLANTILLA-CREAR-CURSO-LINEA.md`](../PLANTILLA-CREAR-CURSO-LINEA.md) para esta línea.
> Hereda los procedimientos universales de [`../MANUAL-CREACION-CURSOS.md`](../MANUAL-CREACION-CURSOS.md) **Parte A** — aquí solo va **lo propio de esta línea**.
> **Cuando este archivo y un rector de la raíz difieran, manda el de la raíz.**
> Versión 1.0 — 18 de septiembre de 2026, escrito **después** de publicar los dos primeros cursos.

---

## Cómo se usa este documento

- Los procedimientos técnicos universales (reparto Cowork ↔ Claude Code, pipeline, 10 secciones del curso, 7 bloques por lección, patrón anti-definición) viven en el manual base. **No se duplican aquí.**
- La referencia viva mejor desarrollada del proyecto es [`../INDUCCION-PROGRAMA-JOVENES/CREAR-CURSO.md`](../INDUCCION-PROGRAMA-JOVENES/CREAR-CURSO.md). Léela cuando dudes del nivel de detalle.
- ⚠️ **Este documento llegó tarde.** La línea se instanció el 15-sep-2026 y se publicó el 18-sep **sin él**, contra el §11 del rector. Los Cursos 01 y 03 se construyeron leyendo el Plan de Línea y el `CLAUDE.md` de la línea. **La §4-bis recoge lo que eso costó**, y es la sección más útil de este archivo.

## Trigger

Cuando se diga *«vamos a crear el curso N de Transversales»* o *«arranquemos el nivel M»*: seguir el manual base y aplicar lo de aquí.

> 🟧 **Patrón de referencia interno:** el **Curso 03** (`adulto-garante-entorno-seguro`), diseñado en `01-Diseno-Cursos/Curso-03-El-Adulto-como-Garante.md`. Es el de mayor riesgo doctrinal y mayor valor de la línea, y el único que ha pasado por las dos auditorías **con hallazgos mayores**. Replicar su estructura; leer su §«Lo que las auditorías cambiaron» antes de copiar nada.

---

## 1. Identidad pedagógica de la línea

### 1.1 Audiencia objetivo

**Toda persona adulta vinculada, sea cual sea su cargo, rama o nivel.** En orden de prioridad (Plan §1.1):

1. **Todo adulto voluntario que ingresa a la ASC** — la *Guía Fase de inducción* (v1, mar-2025) pone los cursos SFH en su checklist (p. 2). Esta línea **acompaña** ese momento; no lo reemplaza.
2. **Dirigentes de unidad de las 5 ramas** y **jefes de grupo**: conviven a diario con protagonistas menores de edad.
3. **Miembros de consejos de grupo**, en especial **Consejeros** (*Manual de Cargos*, Función 2: *«Vela por el cumplimiento de las políticas de a salvo del peligro dentro del Grupo»*).
4. **Cargos regionales y nacionales de ASP** — ver el aviso del §8 antes de nombrarlos.
5. **Familias, cuidadores y partes interesadas** (Política 2025, p. 23) — audiencia secundaria del Nivel 4.

Cada ficha explicita audiencia primaria y secundaria.

### 1.2 Niveles de la línea

| Nivel | Nombre | Cursos | Audiencia primaria | Estado |
|---|---|---|---|---|
| 1 | **Ruta de Fundamentación** | 6 | Todo adulto que ingresa | **2 publicados** (01 y 03), 1 bloqueado (04) |
| 2 | Profundización por política | 7 | Dirigentes de unidad, jefes de grupo, consejos | Por planear |
| 3 | Especialización por cargo | 5 | Cargos ASP y comisionados | Por planear |
| 4 | Transversales | 4 | Familias, partes interesadas | Por planear |

**22 cursos propuestos.** El Plan de Línea es la fuente; este documento no lo duplica.

### 1.3 Hook canónico de la línea

> **«Estas tres políticas no se cumplen leyéndolas. Se cumplen el día que a alguien le pasa algo y tú ya sabes qué hacer.»**

No es obligatorio, es el diapasón. La identidad de esta línea es **conducta, no información**: la descripción del Curso 03 lo dice en corto — *«No hay listas de señales: hay conducta»*. Un curso de esta línea que termine y deje al adulto sabiendo más pero sin saber **qué haría mañana**, ha fallado aunque todo lo que diga sea cierto.

---

## 2. Las cinco exigencias propias (Plan §1.3)

Todo curso las satisface o justifica explícitamente su ausencia.

| # | Exigencia | ¿Compuerta? |
|---|---|---|
| 1 | **Ningún curso sustituye ni certifica el módulo oficial de A Salvo del Peligro.** Preparan, explican y aterrizan; el certificado que la ASC exige lo emite la ASC. **Cada ficha lo dice con esas palabras.** | ✅ `doctrina.json` → `antidoto` |
| 2 | **El adulto reporta y deriva; nunca investiga ni atiende.** *«en ningún caso su función será de carácter investigativo y de gestión del reporte»* (Política 2025, p. 29). **Ningún quiz puede tener como correcta «averiguar», «confrontar» o «resolver internamente».** | ✅ `doctrina.json` → `lineaRoja` — **la única compuerta de la plataforma que mira la clave de respuestas** |
| 3 | **Sin imágenes de IA de personas ni escenas** (rector §5.5, ADR-031), con rigor especial aquí: un curso sobre abuso, discapacidad o minorías con rostros inventados es inaceptable. Solo emoji, diagramas, íconos y logos reales. | ❌ humano |
| 4 | **Casos anonimizados y no revictimizantes.** Sin nombres reales, sin detalles gráficos, sin culpabilizar (Guía de Prevención, pp. 21–22). | ❌ humano |
| 5 | **Plano del adulto.** «Competencia» aquí es **esencial o específica del adulto**; ojo con la **quinta acepción** —atribución o jurisdicción— y con «competencias socioemocionales». Ver `../GLOSARIO-ASC.md` §E-bis. | ❌ humano (a propósito: `lexico.json` **no** barre prosa, porque el término tiene cinco acepciones vivas) |

**Y una decisión de tono heredada de PJ:** *educación por el amor, no por el temor*. Estas políticas nacen de la Ley y la Promesa. Tono de cuidado y corresponsabilidad, **sin diluir la obligación de reportar**.

> ⚠️ Las tres primeras son compuerta desde el **ADR-060**. **Al tocarlas, recalibrar contra el corpus real** — las versiones ingenuas daban **5 falsos positivos y 0 verdaderos**. `PRUEBAS-E2E/calibrar-doctrina.py` hace la medida.

---

## 3. Convención de courseIds

Kebab-case, sin tildes ni ñ, máximo 5 palabras significativas.

| Nivel | Curso | `courseId` | Estado |
|---|---|---|---|
| 1 | 01 Bienvenida a las Políticas Transversales | `bienvenida-politicas-transversales` | **publicado** · 35 min |
| 1 | 02 Entornos Seguros: la Política ASP | `entornos-seguros-politica-asp` | por construir |
| 1 | 03 El Adulto como Garante | `adulto-garante-entorno-seguro` | **publicado** · 45 min |
| 1 | 04 Diversidad e Inclusión | `diversidad-e-inclusion-movimiento` | 🔒 **bloqueado** (Acuerdo C.S.N. 405) |
| 1 | 05 Gestión para la Motivación | `gestion-para-la-motivacion` | por construir |
| 1 | 06 Mi Compromiso con los Entornos Seguros | `mi-compromiso-entornos-seguros` | por construir |

Niveles 2–4: ver el Plan §4–§6.

---

## 4. Riesgos y antídotos por curso del Nivel 1

| Curso | Riesgo principal | Antídoto |
|---|---|---|
| **01 Bienvenida** | Leerse como trámite; y **prometer algo que no se cobra** | Decir qué exige la ASC **fuera** de esta plataforma, con el número exacto de pasos; si el hook promete «dos de estas casillas no son papeleo», **decir cuáles** |
| **02 Entornos Seguros** | Instalar el lenguaje con términos de 2021-2023 | Vocabulario de la Política 2025; el término superado **solo con marca de superación cerca** |
| **03 El Adulto como Garante** | Que un quiz premie investigar; revictimización | La línea roja como compuerta; señales y tipologías **reservadas al Nivel 2** |
| **04 Diversidad e Inclusión** | Construir sobre una política que no sabemos cuál es | **No se diseña** hasta tener el texto del Acuerdo 405 |
| **05 Motivación** | Vocabulario no vigente de la cartilla | Traducción en flujo, cita literal en `policy-quote` |
| **06 Mi Compromiso** | Recoger reflexiones que los cursos no pidieron | Verificar **abriendo cada curso origen** que la reflexión existe y se guarda con esa clave |

### 4.x Riesgos transversales del nivel

- **Sustitución del módulo oficial** (01, 02, 03) — exigencia 1, ya con compuerta.
- **Terminología 2023 vs 2025** (02, 03) — **ADR-035**: la Política 2025 prevalece.
- **Roles sin heredero** (02, 03; Nivel 3) — ver el aviso del §8. **Superado ≠ inexistente.**
- **Plano cruzado** (04, 06) — DURASLID y áreas de crecimiento **solo como enlace a PJ**, nunca como contenido propio.
- **Revictimización y contenido gráfico** (03) — Nivel 2.
- **Reparto con PJ (ADR-038)** — *¿el sujeto de la frase es el joven y la unidad, o el adulto y la institución?* **PJ informa que la ruta existe; aquí se enseña la conducta y el límite.**

---

## 4-bis. Lo que enseñaron los dos primeros cursos

**Esta sección es el motivo de que este archivo exista.** Son fallos que ya ocurrieron, con su coste medido.

### Al extraer una fuente, **imprimir primero su longitud**
El Curso 01 dijo que la fase de inducción tiene **seis** pasos cuando tiene **nueve**, en **siete sitios incluido el certificado**, porque la p. 2 de la Guía se extrajo con `[:1600]` y la página tiene **2.861 caracteres**. Se cortó la fuente por la mitad y se construyó una lección entera sobre el trozo. **Los tres pasos perdidos eran justo los que necesitan a otra persona.**

### El PDF de la Política sale **con las letras espaciadas**
Buscar `confidencialidad` en la extracción cruda da **0 resultados** — y un 0 se lee como *«la fuente no lo dice»*. La versión normalizada da 10. **Antes de concluir que una fuente no dice algo, comprobar que la extracción es legible.**

### Las páginas se citan distinto según el documento
- **Guía de Prevención → folio impreso = página de PDF − 1** (verificado: sus dos citas de «p. 15» están en PDF 16).
- **Política ASP → página de PDF** (su «p. 44» es la PDF 44).
- **Manual de Cargos → página impresa** (el cargo 2.2.30 está en la **385** impresa, PDF 393).

Verificarlo **antes** de corregir: por no hacerlo, se «corrigieron» dos citas que estaban bien.

### Un glosario puede ser la fuente del error
El peor hallazgo del Curso 03 **no estaba en el curso**: dos filas del §C-bis del glosario se contradecían sobre el mismo rol, el `CLAUDE.md` de esta línea copió **la más rotunda** —que era la falsa— y el curso copió el ancla. **Cuando dos filas del glosario hablan del mismo objeto, la que se copia es la más rotunda, no la más exacta.** Al añadir una fila, buscar si ya hay otra sobre lo mismo.

### Una compuerta de vocabulario vale lo que valga su lista de variantes
La del ADR-060 vigilaba `referente ASP`; el curso escribía **«referente regional de A Salvo del Peligro»**, con el nombre desplegado, y **cuatro apariciones pasaron limpias**.

### La duración se **mide al final**, nunca se estima (ADR-047)
El Plan estimó 25 y 35 min. Medidos tras las auditorías: **35 y 45**. La medida es palabras del JSON contra el ritmo del corpus (126–134 pal/min en todo lo medido tras el ADR-047).

### El `build-course.js` de la línea imprime texto propio — revisarlo
Su cuadro de compromiso decía *«tu compromiso como **adulto certificado**»* **en el curso de A Salvo del Peligro**, que es exactamente lo que esta línea **no acredita**. Lo que el build imprime también es doctrina.

### Poner `title`/`description` en la **sección** en vez de en el **item**
Un `method-grid` aceptó claves que no le tocaban, no aplicó el cambio y **no falló**. Si una corrección «no se ve», comprobar que se escribió en el nivel correcto del JSON.

---

## 5. Hilos cross-course

### 5.1 Anuncios narrativos (Plan §7.1)

- **01 →** anuncia 02–06 como un solo arco: *«cuidar (02, 03), incluir (04), sostener (05), comprometerte (06)»*.
- **02 → 03:** *«Ya sabes qué es un entorno seguro. Ahora, qué hacer tú cuando deja de serlo.»*
- **03 → 04:** *«Un entorno es seguro cuando lo es para todos.»*
- **04 → 05:** *«Hasta aquí, cuidar a los jóvenes. Ahora, cuidar a los adultos que cuidan.»*
- **05 → 06:** *«Tres políticas y muchas ideas. Ahora, tres compromisos con fecha.»*
- **06 →** Niveles 2–4 según dónde dio rojo el semáforo.

> ⚠️ Cada anuncio se verifica **abriendo el curso destino** (CHECKLIST §I). Mientras el destino no exista, el anuncio se coteja contra el **Plan**, y **eso se dice en el ledger**.

### 5.2 Hilos de datos (responsabilidad Claude Code)

Claves con apellido de línea (ADR-025/034), declaradas en `PRUEBAS-E2E/claves-localstorage.json`:

- `politicas-transversales:brujula` — reflexiones de los Cursos 01–05, leídas por el `brujula-display` del 06.
- `politicas-transversales:semaforo-asp-grupo` — las 17 respuestas del semáforo (06), **con versionado de escala**.
- `politicas-transversales:plan` — los tres compromisos (06).
- El `plan-builder` declara sus `labels` en el JSON del curso: **el renderizador no trae vocabulario**.
- **Prohibido** consumir `politica-adultos:*` o `programa-jovenes:*` — distinto plano y distinta línea.

---

## 6. Casos especiales de la línea

- **6.1 Componentes.** `brujula-display` y `plan-builder` en el Curso 06. `policy-quote` es el componente más usado de esta línea: **toda cita lleva documento, año y página**.
- **6.2 Cursos previos.** **No hay cursos habilitantes** (ADR-019). Ficha del Nivel 1: *«Recomendado antes: ninguno. Recomendado en paralelo: el módulo oficial de A Salvo del Peligro que exige la ASC.»* Niveles 2–4: *«Recomendado antes: Nivel 1 completo.»*
- **6.3 Multimedia.** Sin video propio. Enlaces a la Zona de Aprendizaje Scout, **probados antes de publicar** — no se probaron para el Curso 01 y quedó dicho en el ledger.
- **6.4 Sub-audiencia.** El Nivel 3 es por **cargo**. Cada curso declara el cargo exacto con su número de ficha del Manual de Cargos.
- **6.5 Reemplazos.** Si un curso se sustituye, la ruta vieja queda como **redirección**, no se borra (ADR-063).

---

## 7. Documentos fuente vigentes

**Prelación decidida (ADR-035):** la **Política 2025 prevalece** sobre el Manual Operativo 2023 y la Guía 2021 en lo que difieran. Manual y Guía se citan **solo para lo que la Política no regula**, siempre con título y año.

### 7.1 Nacionales
- **Política Nacional a Salvo del Peligro** — *«Haré todo cuanto de mí dependa»*, Acuerdo C.S.N. **657** del 3-dic-2025. **Fuente angular de la línea.**
- **Manual Operativo de la Política ASP** — V1.0, feb-2023.
- **Guía de Prevención y Atención del Daño** — V3, 2020-2021.
- **Guía Fase de inducción de Adultos Voluntarios Nuevos** — v1, mar-2025.
- **Manual de cargos, perfiles y funciones por competencias** (PNAM).
- **Cartilla Metodológica** · **Protocolo Nacional de Transporte** (DNDI).

### 7.2 Internacionales
- 5 documentos **OMMS / Región Interamericana** (Safe From Harm, herramienta de autoevaluación, D&I). Ver `INVENTARIO-FUENTES.md`.

### 7.3 Verificación
Antes de publicar: **barrer toda la línea contra la biblioteca**, no solo la fuente del curso de turno (**ADR-056**). Correr `python ../verificar-corpus.py`. Un documento **CAMBIADO** obliga a re-auditar lo que lo cita (`TRAZABILIDAD.csv`, columna `documento_fuente`).

> ⚠️ **Los Acuerdos del CSN no están publicados en la biblioteca.** Ni el 657 ni el 405. Se conocen por lo que dicen de ellos terceros documentos — y por eso el **Curso 04 está bloqueado**. La consulta redactada para la DNDI vive en el repo privado `DOCS-MAESTRAS-ASC` (ver §«Dónde está la consulta» del `CLAUDE.md` de la línea).

---

## 8. Glosario propio de la línea

Tabla completa en `../GLOSARIO-ASC.md` **§C-bis**. Lo imprescindible:

| Vigente | Superado — **nunca sin glosa** |
|---|---|
| botón **«Me Pongo A Salvo del Peligro»** | «Botón de Denuncias»; «Me Siento a Salvo del Peligro» es el **título de catálogo** de la pieza QR, no un eslogan |
| espacios **¡Óyeme!** con dinamizadores, *«no representa atención en salud mental»* | «Escuchadero» con psicólogo/a — **cambió el modelo**, no el nombre |
| **DURASLID** (8 rasgos) | «DURAS-I» (6) |
| **Comité de Gestión de Incidentes** | «referente ASP» — **cambió quién gestiona** |

> ⚠️ **Superado ≠ inexistente.** Hoy **ningún rol regional gestiona casos**, pero el cargo **2.2.30 «Coordinador Regional del Safe From Harm»** sigue en el *Manual de Cargos* (**p. 385**) y su Función 3 es *«ser el referente regional»* de la política. **No escribir «no existe ningún rol regional»**: es falso, estuvo escrito en el glosario, en el ancla de esta línea y en el curso, y la diferencia se comprueba con un organigrama regional delante.

**Términos de la línea:** *entorno seguro* · *corresponsabilidad* · *reportar / derivar* (nunca «denunciar» como sinónimo) · *revelación* (glosarla la primera vez) · *incidente* (**no lo clasifica el adulto**).

---

## 9. Checklist tripartito

Hereda el del manual base §A.8. Propio de esta línea:

### 9.1 Cowork (pedagógico)
- [ ] Cumple las **cinco exigencias** del §2, o justifica la ausencia.
- [ ] La ficha dice **con esas palabras** que el curso no sustituye el módulo oficial.
- [ ] **Ningún quiz** tiene como correcta averiguar / confrontar / resolver internamente.
- [ ] Casos **anonimizados**, sin detalle gráfico, sin culpabilizar.
- [ ] El curso deja al adulto sabiendo **qué haría mañana**, no solo sabiendo más.
- [ ] Si nombra el miedo que frena la conducta, lo nombra **en voz alta**.

### 9.2 Claude Code (técnico)
- [ ] `courseId` según §3; claves de `localStorage` con apellido de línea.
- [ ] **Las tres compuertas del ADR-060 en verde** (`codigo.spec.js`).
- [ ] **Sesgo de longitud, extremo y oveja negra** medidos por el build — **contar, no leer**.
- [ ] El **texto que imprime `build-course.js`** revisado: también es doctrina.
- [ ] `contentVersion` con la fecha del cambio doctrinal o pedagógico.
- [ ] Si el curso sigue en `draft`, **la suite se lo salta** (ADR-052): probar sobre **copia** con el `status` volteado.
- [ ] `tests/cursos.js` trae un espejo del catálogo **a mano**, para cuando no haya red. Ya no es la vía normal —la línea está publicada y el `globalSetup` baja el catálogo real—, pero **si se añade un curso, añadirlo también ahí**.

### 9.3 Coherencia con la línea
- [ ] Anuncios narrativos §5.1 **verificados abriendo el curso destino**, o dicho en el ledger que se cotejaron contra el Plan.
- [ ] Documentos citados están en §7 y **vigentes**; página verificada con la convención correcta (§4-bis).
- [ ] Filas en `../TRAZABILIDAD.csv` con **todas** las afirmaciones doctrinales.
- [ ] **Duración medida**, no estimada (ADR-047).
- [ ] Fila en `../ESTADO-AUDITORIA.md` diciendo **qué se cotejó y qué no** (ADR-050).
- [ ] Las **tres auditorías**: `/auditar-curso`, `/auditar-pedagogia`, suite en verde.

---

## 9-bis. Publicar la línea — **hecho el 18-sep-2026** (ADR-062)

No repetir; queda como acta de lo que costó:

1. `index.html` + `404.html` en la raíz, con `.back-portal` y agrupación por nivel (ADR-058). ⚠️ **La landing salió publicada con el subtítulo de Desarrollo Institucional**, viajado pegado a la plantilla — y sus metaetiquetas sí estaban bien. **Mirar la landing publicada, no solo que responda 200.**
2. Alta en `../PORTAL-ADULTOS-ASC/lineas.json` + la tabla de su `README.md`. Color **#2E7D32** (el #4CAF50 da 2.78:1 sobre blanco, bajo AA).
3. Alta en `../PORTAL-ADMIN-ASC/dashboards.json` con `courseIds` — **el repo que siempre se olvida**.
4. Añadir la línea a `../verificar-consistencia.py`, que la excluía a propósito hasta tener un curso `active`.
5. **El repo pasó de privado a público** (ADR-036). ⚠️ **Un `force-push` no borra nada en GitHub:** el commit purgado se sigue sirviendo por SHA. Hubo que **renombrar el repo y crear uno nuevo** que naciera limpio. **Antes de abrir un repo que fue privado, mirar qué arrastra la HISTORIA, no solo el árbol — y si algo nombra a personas, sacarlo antes.**

> El `status` vive en **dos** sitios: el catálogo y el JSON fuente del curso. Cambiar los dos.

---

## 10. Referencias cruzadas

- [`../MANUAL-CREACION-CURSOS.md`](../MANUAL-CREACION-CURSOS.md) · [`../PLANTILLA-CURSO.md`](../PLANTILLA-CURSO.md) · [`../CHECKLIST-CALIDAD-CURSO.md`](../CHECKLIST-CALIDAD-CURSO.md)
- [`../GLOSARIO-ASC.md`](../GLOSARIO-ASC.md) — **§C-bis** (ASP) y **§E-bis** (las cinco acepciones de «competencia»).
- [`../DECISIONES.md`](../DECISIONES.md) — **ADR-035** prelación · **038** reparto con PJ · **047** duración medida · **050** el ledger · **052** el `draft` y la suite · **056** barrer toda la línea · **057** el diseño se marca · **059** plan aprobado · **060** las tres compuertas · **061** el feedback del quiz · **062** publicación.
- [`CLAUDE.md`](CLAUDE.md) — ancla de la línea. · [`Plan-de-Formacion-Linea-Politicas-Transversales.md`](Plan-de-Formacion-Linea-Politicas-Transversales.md) — los 22 cursos.
- [`PRUEBAS-E2E/doctrina.json`](PRUEBAS-E2E/doctrina.json) — las tres reglas no negociables, ejecutables. · [`INVENTARIO-FUENTES.md`](INVENTARIO-FUENTES.md) · [`BACKEND.md`](BACKEND.md)
- [`../INDUCCION-PROGRAMA-JOVENES/CREAR-CURSO.md`](../INDUCCION-PROGRAMA-JOVENES/CREAR-CURSO.md) — referencia viva del proyecto.

---

_Versión 1.0 — 18-sep-2026. Escrito **después** de publicar los Cursos 01 y 03, no antes: la §4-bis recoge lo que costó no tenerlo._
