# INVENTARIO-FUENTES.md — Línea Políticas Transversales

> Qué documentos oficiales hay en local para esta línea, qué páginas usó el Plan de Formación (BORRADOR **v0.2**) y qué falta.
> Levantado el 14 de septiembre de 2026 · **revisado el 15-sep-2026 tras `AUDITORIA-PLAN-v0.1.md`** (hallazgos M7 y m6). Complementa —no reemplaza— `../INVENTARIO-DOCUMENTOS-BASE.md`, **que ya quedó actualizado** (v1.1, §2 y §3-bis: los nueve documentos registrados y los tres títulos ASP fuera de "DNDI pendientes").
>
> Convención de páginas: **numeración impresa** del documento. La columna "pdf ↔ impresa" da el desplazamiento cuando no coinciden.
> Método de extracción: `pypdf`. Ninguno de los PDF resultó ser imagen; la Política Nacional 2025 se extrae con letras espaciadas (defecto de fuente) y se normalizó para lectura.

---

## 1. Descargados en esta sesión (14-sep-2026)

Los nueve provienen de `https://biblioteca.cdnscout.org/` (los enlaces reales de la biblioteca virtual; `scout.org.co/wp-content/...` responde **403** a `curl`, incluso con user-agent de navegador). Tamaños y títulos tal como los muestra la biblioteca.

| Título exacto en la biblioteca | Sección | Año / versión | Ruta local | Págs. | Texto | Páginas usadas en el plan |
|---|---|---|---|---|---|---|
| Política Nacional a Salvo del Peligro | DNDI › A Salvo del Peligro | Aprobación diciembre 2025 — Acuerdo C.S.N. 657 del 3-dic-2025, Acta 297 (p. 49) | `DOCUMENTOS BASE/SCOUTS/DESARROLLO INSTITUCIONAL/A SALVO DEL PELIGRO/Politica Nacional a Salvo del Peligro.pdf` (14.4 MB) | 50 | sí (espaciado) | 5–6, 8, 11–15, 17, 19, 21, 23–24, 26–34, 36–37, 39–45, 47–49 |
| Manual Operativo de la Política A Salvo del Peligro | DNDI › A Salvo del Peligro | V1.0, 1 de febrero de 2023 | `…/A SALVO DEL PELIGRO/Manual Operativo de la Politica A Salvo del Peligro (V1 feb-2023).pdf` (5.5 MB) | 33 | sí | 4, 6–7, 9, 11–14, 17–18, 20, 22–25, 27–28 (impresa = pdf − 4) |
| Guía de Prevención y Atención del Daño | DNDI › A Salvo del Peligro | «V3» **según el listado de la biblioteca**; el PDF no imprime marcador de versión (solo *"Bogotá, 2020-2021"*) | `…/A SALVO DEL PELIGRO/Guia de Prevencion y Atencion del Dano (V3 2021).pdf` (1.4 MB) | 40 | sí | créditos, 2 (índice), 14–22, 24–26, 29, 31, 34 (impresa = pdf − 1) |
| QR Botón "Me Siento a Salvo del Peligro" | DNDI › A Salvo del Peligro | s. f. | `…/A SALVO DEL PELIGRO/QR Boton Me Siento a Salvo del Peligro.pdf` (1.3 MB) | 1 | mínimo (pieza gráfica) | 1 |
| Política Mundial A Salvo del Peligro | Externos | OMMS, diciembre 2017 | `DOCUMENTOS BASE/SCOUTS/EXTERNOS/Politica Mundial A Salvo del Peligro (OMMS dic-2017).pdf` (2.5 MB) | 28 | sí | 6–14, 16, 18, 20 |
| A Salvo del Peligro – Herramienta de Autoevaluación | Externos | Oficina Scout Mundial, febrero 2019 | `…/EXTERNOS/A Salvo del Peligro - Herramienta de Autoevaluacion.pdf` (1.6 MB) | 20 | sí | 5–13 |
| Código de Conducta OMMS | Externos | Oficina Scout Mundial, versión 27-feb-2019 | `…/EXTERNOS/Codigo de Conducta OMMS.pdf` (2.8 MB) | 20 | sí (avisos de objetos mal apuntados, inocuos) | 4–13 |
| Diversidad e Inclusión – Guía Dos | Externos | sin año en el extracto; paginación impresa 24–48 | `…/EXTERNOS/Diversidad e Inclusion - Guia Dos.pdf` (3.5 MB) | 19 | sí (fuente con caracteres sustituidos en algunos títulos) | vista general (capítulo "Inclusión de las personas con discapacidad en el Movimiento Scout") |
| Diversidad e Inclusión – Guía Tres | Externos | sin año en el extracto; paginación impresa 60–85; p. 1: "Guía de Referencia para las Organizaciones Scouts Nacionales" | `…/EXTERNOS/Diversidad e Inclusion - Guia Tres.pdf` (3.5 MB) | 26 | sí | vista general (capítulo "Inclusión de personas pertenecientes a grupos minoritarios al Movimiento Scout") |

**Carpetas nuevas creadas:** `DOCUMENTOS BASE/SCOUTS/DESARROLLO INSTITUCIONAL/A SALVO DEL PELIGRO/` y `DOCUMENTOS BASE/SCOUTS/EXTERNOS/`.

## 2. Ya existían en local y se usaron

| Documento (título exacto) | Ruta local | Págs. | Texto | Páginas usadas |
|---|---|---|---|---|
| Política Nacional de Adultos en el Movimiento | `DOCUMENTOS BASE/Información para CRAM/Información para CRAM/Documentos Oficiales PNAM 2022/1-Política Nacional de Adultos en el Movimiento.pdf` (copia también en `SCOUTS/ADULTOS EN EL MOVIMIENTO/NACION/`) | 34 | sí | 2, 12, 14, 16, 19 (impresa = pdf − 6) |
| Cartilla Metodológica | `…/Documentos Oficiales PNAM 2022/2-Cartilla Metodológica.pdf` | 30 | sí | 9–14, 18 (impresa = pdf − 6) |
| Gestión para la Motivación | `…/Documentos Oficiales PNAM 2022/21- Gestión para la Motivación.pdf` | 70 (64 impresas) | sí | 4, 6, 8–15, 17–23, 25–40, 43–46, 49–55, 60, 62 (impresa = pdf − 4) |
| Reporte de situaciones de Riesgo SFH | `…/Documentos Oficiales PNAM 2022/22-Reporte de situaciones de Riesgo SFH.pdf` | 2 | sí | 1–2 |
| Evaluación de grupo SFH (A salvo del peligro) — título impreso "Autoevaluación de grupo en relación a la Política 'A salvo del peligro'" | `…/Documentos Oficiales PNAM 2022/23-Evaluación de grupo SFH (A salvo del peligro).pdf` | 2 | sí | 1–2 |
| Fase de inducción de Adultos Voluntarios Nuevos (versión 1, marzo 2025) | `…/Documentos Oficiales PNAM 2022/27- Guía - Fase de inducción de Adultos Voluntarios Nuevos 2025.pdf` | 2 | sí | 1–2 |
| Manual de Cargos, Perfiles y Funciones por Competencias | `…/Documentos Oficiales PNAM 2022/4-Manual de cargos y perfiles.pdf` | 784 | sí | 6 (Consejero, Función 2), 268 y ss. (Comisionado Regional), 385–387 (cargo 2.2.30) (impresa = pdf − 8) |
| Política Nacional de Desarrollo Institucional (2017) | `DOCUMENTOS BASE/SCOUTS/DESARROLLO INSTITUCIONAL/Politica Nacional de Desarrollo Institucional-2017.pdf` | 18 | sí | 6, 12 |
| Estatuto Nacional 2025 | `DOCUMENTOS BASE/SCOUTS/REGLAMENTOS/Estatuto-Nacional-2025.pdf` | 48 | sí | 3, 4, 7 |
| Reglamento Nacional de Grupos Scouts (texto plano) | `DOCUMENTOS BASE/SCOUTS/DESARROLLO INSTITUCIONAL/BIBLIOTECA-CSN/Reglamento_Nacional_de_Grupos_Scouts-TEXTO.md` | — | — | Art. 7.7 (p. 34) |
| Política Nacional de Programa de Jóvenes (Acuerdo C.S.N. 617 de 2024) | `DOCUMENTOS BASE/SCOUTS/PROGRAMA DE JOVENES/2026/Política Nacional de Programa de Jóvenes.pdf` | 45 | sí | 5, 16, 35, 41 (impresa = pdf − 3) |
| Modelo de Aplicación Política Nacional de Programa de Jóvenes – El Gran Juego para la Vida (DNPJ-2026-024) | `…/PROGRAMA DE JOVENES/2026/Modelo de Aplicación Política Nacional de Programa de Jóvenes - El Gran Juego para la Vida.pdf` | 109 | sí | 65, 71–72, 89–92 (impresa = pdf − 1) |
| Youth and Adults: Scouting Together Safely Toolkit (World Scout Bureau, feb-2022, **inglés**) | `DOCUMENTOS BASE/SCOUTS/PROGRAMA DE JOVENES/A SALVO DEL PELIGRO/Youth and Adults Scouting Safely Together Toolkit_EN.pdf` | 46 | sí | índice (pp. 5–6) |
| Safe from Harm Mental Health Toolkit (World Scout Bureau, ene-2022, **inglés**) | `…/A SALVO DEL PELIGRO/4598-WorldScouting-MentalHealthToolkitbklt-2-fin.pdf` | 64 | sí | índice (pp. 5–6) |

**Revisados y descartados como fuente de esta línea:** `SCOUTS/PROGRAMA DE JOVENES/POLITICAS/` (PNPJ 2020, Modelo PSNPJ 2020 y Política Nacional de Participación Juvenil 2016 — todos superados por documentos 2024–2026); `SCOUTS/BIBLIOTECA-CSN/` (vacía); `Mental Health Matters.pdf` y `Supporting Leaders.pdf` (OMMS, en `ADULTOS EN EL MOVIMIENTO/`, en inglés; posibles recursos del Curso 13 del Nivel 2).

## 3. Faltantes — con el título exacto que habría que descargar

| Título exacto | Dónde está | Por qué importa | Estado |
|---|---|---|---|
| **Política de Diversidad e Inclusión de la OMMS – Región Interamericana** (así la nombra el Acuerdo C.S.N. 405 de 2020 según el Manual Operativo, p. 4; en el sitio aparece como *"Política Interamericana de Diversidad e Inclusión"*) | `https://scout.org.co/wp-content/uploads/2019/11/Politica-Interamericana-Diversidad-e-Inclusion.pdf` — responde **403**; no está en la biblioteca virtual | Es el documento rector de la segunda política de la línea | `[SIN FUENTE LOCAL — verificar en scout.org.co/biblioteca]`. Ruta de respaldo: que el dueño lo arrastre a `DOCUMENTOS BASE/SCOUTS/EXTERNOS/` |
| **Diversidad e Inclusión – Guía Uno** | No aparece en la biblioteca (solo Dos y Tres) | Probable capítulo introductorio de la misma guía interamericana | `[SIN FUENTE LOCAL]` |
| **Código de Honor, Disciplinario y de Conducta** (CSN, Resolución C.S.N. 004-22) | `scout.org.co/biblioteca/csn` (listado el 14-sep-2026) | Instrumento nacional vinculante de conducta; el Curso 22 y la duda 6 de la §10 del plan dependen de él | En la biblioteca, **no descargado** (fuera del alcance de esta sesión) |
| **Manual de Referentes A Salvo del Peligro** | Citado en el Manual Operativo (p. 28); no está en la biblioteca | Detalla el rol de referente | `[SIN FUENTE LOCAL]` |
| **Instructivo Institucional de Gestión de la Crisis** | Citado en el Manual Operativo (p. 28); no está en la biblioteca | Comité de crisis | `[SIN FUENTE LOCAL]` |
| **Protocolo Nacional de Transporte**, **Protocolo Acciones Preventivas Alimentación**, **Protocolo de Combustibles y Químicos**, autorizaciones y listas de chequeo | `scout.org.co/biblioteca/dndi` › Gestión del Riesgo (listados el 14-sep-2026) | Curso 09 del Nivel 2 (actividades seguras) | En la biblioteca, no descargados |
| **Nuevas Perspectivas de la Coeducación** (DNPJ) | Citado en el Modelo 2026, p. 65; no localizado en la biblioteca DNPJ | Plano del joven; solo como conexión con PJ | `[SIN FUENTE LOCAL]` |
| **Política Nacional de Participación Juvenil (2022)** | Citada en el Modelo 2026, p. 93; en local solo la versión 2016 | Conexión con inclusión y participación | Versión vigente `[SIN FUENTE LOCAL]` |
| ~~**Proyecto Educativo ASC 2022–2032**~~ | — | — | **NO es un faltante: está en local** (hallazgo M7 de la auditoría) en `DOCUMENTOS BASE/SCOUTS/PROGRAMA DE JOVENES/PROYECTO EDUCATIVO/Proyecto Educativo 2022 - 2032.pdf`. Citarlo por **2022–2032**; la errata «2023-2033» de la PNPJ Cap. 2 está registrada en `../CHANGELOG-DOCTRINA.md`. |
| Contenido de los **módulos virtuales oficiales** "A salvo del peligro" y "Diversidad e Inclusión" (Universidad Scout) y de los cursos SFH de la Zona de Aprendizaje Scout (`learn.scout.org`) | Plataformas con login | Son lo que la ASC exige; esta línea no los sustituye | No descargables; se citan como exigencia |
| **Manual Operativo V2** (si existe, posterior a la Política 2025) | Desconocido | Resolvería la duda 1 de la §10 del plan | Preguntar a la DNDI / Comisión Nacional ASP |

## 4. Tareas de mantenimiento derivadas

| # | Tarea | Estado |
|---|---|---|
| 1 | `../INVENTARIO-DOCUMENTOS-BASE.md`: añadir las nueve filas de la §1, quitar los tres títulos ASP de "DNDI pendientes" y corregir las métricas. | ✅ **Hecho** (v1.1, 14-sep-2026: §2 y la nueva §3-bis EXTERNOS) |
| 2 | `../GLOSARIO-ASC.md` §C: fila para *Política Nacional a Salvo del Peligro* (2025, Acuerdo C.S.N. 657) y para el Acuerdo C.S.N. 405 de 2020. | ✅ **Hecho** (v1.5 §C para la Política; el Acuerdo 405 entra en la v1.6 con su objeto marcado como discrepante) |
| 3 | `../CHANGELOG-DOCTRINA.md`: entrada con la incorporación de la Política 2025 y la tensión terminológica con el Manual Operativo 2023. | ✅ **Hecho** (entrada del 14-sep-2026) |
| 4 | `../DECISIONES.md`: ADR con la decisión de vigencia. | ✅ **CERRADO — ADR-035 aceptado el 15-sep-2026.** La Política 2025 prevalece; Manual 2023 y Guía 2021 se citan solo para lo que ella no regula. Fundamento: p. 31 de la Política. **Bloqueo levantado** |
| 5 | `TRAZABILIDAD.csv` fila 17: apuntar a la ruta local de la Política 2025 y dejar de decir «Habilitante». | ✅ **Hecho** (14-sep-2026: ruta local + «no habilitante - ADR-019») |
| 6 | Regenerar `DOCUMENTOS BASE/_manifiesto-oficiales.json` antes de la próxima auditoría. | ✅ **Hecho (15-sep-2026).** **El manifiesto se regeneró el 15-sep-2026** (`_GOBERNANZA/skills/auditar-curso/manifiesto-oficiales.py`, desde `APP APRENDIZAJE/`): **22 documentos registrados, 22 resueltos, 0 ausentes, 0 rutas a corregir, sin cambios de hash**. Lo que el informe leyó como «el manifiesto no tiene los documentos nuevos» es otra cosa: **el manifiesto se construye desde la columna `ruta_local` de `TRAZABILIDAD.csv`, no barriendo `DOCUMENTOS BASE/`**. La Política 2025 sí entró —porque la fila 17 se actualizó el 14-sep—; el Manual Operativo 2023, la Guía 2021, los 5 documentos OMMS y el resto de la serie PNAM no están **porque todavía ninguna afirmación de un curso los cita**. Esa brecha se cierra sola al diseñar los cursos de Transversales: cada afirmación añade su fila a `TRAZABILIDAD.csv` y el documento entra al manifiesto. |
| 7 | Conseguir el **texto del Acuerdo C.S.N. 405**: zanja si la política de D&I adoptada es la Mundial o la Interamericana. | ⬜ **Pendiente — bloquea el Curso 04.** ⚠️ **No está en la biblioteca** (verificado el 15-sep-2026: las 6 categorías no incluyen «acuerdos»; la sección del CSN son 8 documentos y ninguno lo es; «Transparencia» son papeles de permanencia ESAL). **Hay que pedirlo a la Cancillería Nacional**, que custodia las actas — va en `CONSULTA-DNDI-ASP.md` |

---

## 5. Barrido de la biblioteca virtual — 15-sep-2026

Hecho al cerrar el ADR-035. Corrige dos `[SIN FUENTE LOCAL]` de la §3 y descarta uno.

| Documento | Dónde está | Para qué |
|---|---|---|
| **Código de Honor, Disciplinario y de Conducta** | ✅ **Sí está** — biblioteca › Consejo Scout Nacional (PDF, 499 KB). La §3 lo daba por no descargado | **Desbloquea el Curso 22** (Nivel 4) |
| **Protocolo Nacional de Transporte** | ✅ **Sí está** — biblioteca › DNDI › Gestión del Riesgo (PDF, 396 KB) | **Desbloquea el Curso 09** (Nivel 2), que lo marcaba `[SIN FUENTE LOCAL]` |
| **Acuerdo C.S.N. 405** | ❌ **No está.** La biblioteca no tiene categoría de acuerdos | Sigue bloqueando el **Curso 04**; pedirlo a la Cancillería Nacional |
| **Manual Operativo V2** | ❌ **No existe publicado.** Un solo Manual Operativo (5.5 MB), sin marcador de versión ni etiqueta «NUEVO» | Confirma el ADR-035 |
| **Manual de Cargos actualizado** | ❌ **No.** Sigue el mismo (7.6 MB), sin etiqueta «NUEVO», pese a que la Política (p. 28) ordena actualizarlo | Confirma que las funciones de casos del cargo 2.2.30 están superadas de hecho, no de derecho |
| **Manual de Referentes ASP** · **Instructivo Institucional de Gestión de la Crisis** | ❌ No están, como ya decía la §3 | — |

> **Otros documentos de la DNAM que hay en la biblioteca y no en local** (no los necesita esta línea, anotados de paso): *Declaración Jefe Inmediato* y *Procedimiento para solicitud de certificaciones IM, GR, GN* —ambos marcados **NUEVO**—, *Formato para el Nombramiento en Cargos*, *Solicitud de Registro e Inscripción del Adulto* y *Política Editorial*.

> **Cómo se hizo:** la biblioteca carga su índice por JavaScript, así que un `WebFetch` ve cero resultados. Hay que abrirla con navegador. Rutas útiles: `scout.org.co/biblioteca`, `/biblioteca/csn`, `/biblioteca/dndi`, `/biblioteca/dnam`. Las fichas de detalle **no muestran versión ni fecha**: solo título y tamaño.

---

_Versión 0.3 — 15-sep-2026 (nueva §5 con el barrido de la biblioteca al cerrar el ADR-035; §4 actualizada). Versión 0.2 — 15-sep-2026 (aplicados M7 y m6 de `AUDITORIA-PLAN-v0.1.md`; §4 pasa a tabla con estado). Parte del BORRADOR v0.2 del Plan de Formación de la Línea Políticas Transversales._
