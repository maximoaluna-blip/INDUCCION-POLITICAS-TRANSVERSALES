# Auditoría doctrinal — Plan de Formación, Línea Políticas Transversales (BORRADOR v0.1)

> **Fecha:** 14-sep-2026 · **Auditor:** `auditor-doctrinal-asc` (informe íntegro, sin edición) · **Veredicto: APTO CON CORRECCIONES para pasar a Plan de Nivel** · 1 crítico · 8 mayores · 12 menores · 8 no verificables.
> **Estado (actualizado el 15-sep-2026):** **las correcciones de este informe están APLICADAS** — el plan pasó a **BORRADOR v0.2**, `INVENTARIO-FUENTES.md` a v0.2 y `GLOSARIO-ASC.md` a v1.6; los colaterales se sanearon en los planes de PJ (ADR-019) y DI (ADR-022), y el manifiesto se regeneró. Las tres citas alteradas (C1, M1, M3) se restituyeron **verificando el PDF fuente, no el informe**. **Lo que este informe deja al dueño sigue en la compuerta humana y NO se aplicó:** reparto con PJ, vigencia de los instrumentos ASP (`DECISIONES.md` **ADR-035**), cargo 2.2.30 y nivel de detalle de las señales de abuso. Detalle en `CHANGELOG-DOCTRINA.md` 2026-09-15.
>
> _El cuerpo del informe se conserva íntegro y sin editar, como lo entregó `auditor-doctrinal-asc` el 14-sep-2026._
> **Nota sobre cadena de confianza:** `DOCUMENTOS BASE/_manifiesto-oficiales.json` no contiene ninguno de los 9 documentos descargados el 14-sep ni los de la serie PNAM; los marcadores de versión se verificaron a mano. **Antes de la próxima auditoría hay que correr `python ".claude/skills/auditar-curso/manifiesto-oficiales.py"`.**

**Insumos revisados:** `Plan-de-Formacion-Linea-Politicas-Transversales.md` (469 líneas, completo), `INVENTARIO-FUENTES.md`, `README.md`; `GLOSARIO-ASC.md` (v1.4), `DECISIONES.md` (ADR-019, 022, 031, 034), `CLAUDE.md` §5, `CHECKLIST-CALIDAD-CURSO.md` §C, `TRAZABILIDAD.csv` (filas 17 y 91), `CHANGELOG-DOCTRINA.md` (regla del 2026-07-11), `INVENTARIO-DOCUMENTOS-BASE.md`, `_manifiesto-oficiales.json`, planes de PJ/DI (.md) y PA (.docx), `cursos.json` de las 3 líneas.

**Fuentes oficiales cotejadas con pypdf (20 PDF; la Política 2025 normalizada de letras espaciadas):** Política Nacional a Salvo del Peligro 2025; Manual Operativo V1.0 (feb-2023); Guía de Prevención y Atención del Daño (2020-2021); QR Botón; Política Mundial ASP (OMMS 2017); Herramienta de Autoevaluación ASP (OSM feb-2019); Código de Conducta OMMS (27-feb-2019); D&I Guía Dos y Guía Tres; PNAM; Cartilla Metodológica; Gestión para la Motivación; docs 22, 23 y 27 de la serie PNAM; Manual de Cargos; PNDI 2017; Estatuto 2025; PNPJ 2024; Modelo de Aplicación 2026; Reglamento Nacional de Grupos (texto .md).

---

## Veredicto

**APTO CON CORRECCIONES** para pasar a Plan de Nivel. El plan es doctrinalmente sólido: de ~60 citas y datos verificados, casi todos coinciden palabra por palabra con la fuente y la página citada. Los problemas son puntuales (dos citas con una palabra cambiada, una premisa de duda equivocada, un `[SIN FUENTE LOCAL]` ilegítimo, una numeración cruzada con PJ, un mapeo de roles 2023→2025 que induciría a error, y el bloque de términos que el glosario aún no tiene).

## Hallazgos

### 🔴 Críticos

- **C1 · Curso 05 (hook) y §11 Glosario («Motivar») — cita alterada.** Dice *"El que no está dando, no está motivando."* Fuente: *Gestión para la Motivación*, §3.3, p. 18: *"Dar algo. El que no **esté** dando, no está motivando."* Subjuntivo cambiado a indicativo; es el hook del curso y una entrada de glosario: se propagaría. Corrección: *"El que no esté dando, no está motivando."*

### 🟡 Mayores

- **M1 · Curso 03 (hito) y §11 («Posición de garante») — citas del Manual Operativo con el verbo cambiado de número.** Fuente: Manual Operativo p. 11: *"los adultos en el movimiento … **asumen** la posición de garante … **tienen** el deber de obrar…"*. Corrección: citar en plural con su sujeto o marcar la adaptación entre corchetes.
- **M2 · §1.2 y Curso 04 — «confirmado en la Política Nacional 2025, p. 5» no es exacto; las fuentes discrepan sobre qué política de D&I adoptó el Acuerdo 405.** Manual Operativo p. 4: *Política de D&I de la OMMS – Región Interamericana*; Política 2025 p. 5: *"la Política **Mundial** de Diversidad e Inclusión"*; Modelo 2026 p. 89: *"la Política **Interamericana** de Diversidad e Inclusión"*. El OA1 del Curso 01 (título exacto del documento rector) no puede cumplirse para D&I hasta tener el texto del Acuerdo 405. Corrección: registrar la discrepancia; obtener el Acuerdo 405 (biblioteca CSN › acuerdos) antes de diseñar el Curso 04.
- **M3 · Curso 02 (hook) — «Haré todo cuanto de mí dependa» no es «el inicio de la Promesa».** Estatuto 2025, Art. 5, p. 4: *"Por mi honor y con la gracia de Dios, prometo hacer todo cuanto de mí dependa…"*. Corrección: *"no es solo una frase de la Promesa: desde diciembre de 2025 es también el nombre de una política."*
- **M4 · §10 duda 1, Curso 02 (riesgo) — el mapeo «Referentes ASP → Comité de Gestión de Incidentes + Referentes Regionales de Promoción» induce a error de rol.** Política 2025 p. 40: los Referentes Regionales de Promoción hacen campañas; p. 39: nadie distinto de la Comisión Nacional ASP designada recibe ni gestiona reportes. La orientación/activación de rutas del antiguo Referente ASP (Manual p. 13; Guía p. 14, presentada como *"una propuesta"*) pasa al Comité de Gestión de Incidentes y al Coordinador/a Nacional de Gestión de Incidentes (p. 39). **En 2025 no existe un rol regional que reciba u oriente casos.** Corrección (Cursos 02, 03, 07, 14, 15): *"Lo que antes hacía el 'referente ASP' hoy lo hace el Comité de Gestión de Incidentes, al que llegas por el botón. Los Referentes Regionales de Promoción hacen campañas, no reciben casos."*
- **M5 · Curso 14 (Nivel 3) — el cargo 2.2.30 se presenta con funciones que la Política 2025 dejó sin efecto.** Manual de Cargos p. 386, Función 3: rutas de actuación ante casos, coordinación de protección, *"Activar el comité de crisis regional"*, dependencia del Comisionado nacional de gestión del riesgo (p. 385). Política 2025 p. 39 y p. 28 punto 2 (ordena actualizar el Manual de Cargos, que sigue siendo el de 2020). Corrección: enseñar el cargo como vigente (ADR-022 no lo afecta) pero con las funciones de gestión de casos y comité de crisis regional **superadas**; conservar promoción, articulación regional y verificación de cursos.
- **M6 · §1.4 — numeración cruzada del curso de PJ.** El plan de PJ en archivo dice **22** HeForShe y **24** A Salvo del Peligro; `CLAUDE.md` §2/§5.3 y ADR-019 dicen **25** tras la renumeración +1. Corrección: citar por `courseId` con una sola nota. Colateral: el plan de PJ no fue renumerado y sigue llamando «habilitante» al Curso 24 (líneas 254, 272, 283), contra el ADR-019.
- **M7 · `INVENTARIO-FUENTES.md` §3 — `[SIN FUENTE LOCAL]` ilegítimo: el Proyecto Educativo sí está en local** (`DOCUMENTOS BASE/SCOUTS/PROGRAMA DE JOVENES/PROYECTO EDUCATIVO/Proyecto Educativo 2022 - 2032.pdf`). Los demás `[SIN FUENTE LOCAL]` sí son legítimos (buscados por título).
- **M8 · Términos conceptuales de la línea ausentes de `GLOSARIO-ASC.md` (CHECKLIST §C v3.1).** Lista completa abajo. Además, **quinta acepción de «competencia»** no registrada en §E-bis y que el propio plan cita: competencia como *atribución o jurisdicción* (Política p. 34: *"competencias propias del Sistema de Salud"*; p. 23: *"según sus competencias y funciones"*; Curso 03 OA3: *"instancias competentes"*), y *"competencias socioemocionales"* (pp. 13, 28, 31, 40) de jóvenes y adultos a la vez. La exigencia 5 de §1.3 es insuficiente para esta línea; ampliar §E-bis antes del Curso 03.

### 🔵 Menores

- **m1** · §10 duda 3 e inventario — la Guía de inducción 2025 (p. 2) lista **cuatro** enlaces (SfH 1, 2b, 3 y un cuarto en easygenerator sin título); «4 cursos **habilitados**» = disponibles, no habilitantes.
- **m2** · §1.4 — *"refuerza la motivación"* es paráfrasis de PNAM §5.2.4 (p. 16: *"buscando reforzar su motivación"*), no cita.
- **m3** · Cursos 05 y 12 — páginas de la Cartilla tomadas del índice, corrido dos páginas: §8.1 p. 50, §8.26 p. 56, §9 p. 57.
- **m4** · Curso 06 — la Política 2025 (pp. 36, 43) remite a la *Herramienta de Autoevaluación GSAT*, no a la *A Salvo del Peligro – Herramienta de Autoevaluación* (OSM 2019, que lista el Manual 2023 p. 28). Separar ambas.
- **m5** · §1.1 — la función de *"promoción y la aplicación de las políticas de participación juvenil, diversidad e inclusión"* (p. 268) es del **Comisionado Regional de Programa de Jóvenes**; decirlo.
- **m6** · Inventario — la Guía se etiqueta «V3» pero el PDF no trae marcador de versión (solo *"Bogotá, 2020-2021"*); indicar que «V3» viene del listado de la biblioteca.
- **m7** · Curso 03 y §11 — la URL `forms.gle/PPgbS1U4ip5t5Q1PA` solo consta en `CLAUDE.md` §8; la Política dice que el botón está *"en la página de Scouts de Colombia"* (p. 44). Verificar en vivo antes de publicar.
- **m8** · Nombre del botón — la pieza QR de la biblioteca dice *"Me Siento a Salvo del Peligro"* (eslogan); la Política dice *"Me Pongo A Salvo del Peligro"* (p. 44). Enseñar solo el de la Política.
- **m9** · Curso 06 — el documento 23 no imprime emisor: decir «formato de la serie documental de la PNAM (biblioteca DNAM)»; su ítem 4 usa *"referente 'Safe From Harm'"* (término 2023): glosar.
- **m10** · Curso 15 (título) — la Política nombra el rol *"Referentes Regionales de Promoción"* (pp. 40, 42); «de Entornos Seguros» pertenece a la Coordinación Nacional. Ajustar.
- **m11** · §9.1 — la PNPJ figura con páginas usadas pero el plan no la cita nunca. Citar o retirar.
- **m12** · Curso 06 OA2 («plan personal de tres compromisos») — en el plano del adulto «plan personal» es el PPD (PNAM §5.2.1). Llamarlo «plan de compromisos» y decir que no es el PPD.

## Afirmaciones NO VERIFICABLES

1. Existencia de un **Manual Operativo V2** — la Política 2025 lo presupone (p. 32 punto 7; pp. 34, 40). Preguntar a la DNDI / Comisión Nacional ASP.
2. **Secuencia normada Estado ↔ botón** — ninguna fuente fija un orden (ver duda 2). Confirmar con la Comisión Nacional ASP.
3. Que los módulos oficiales de ASP y D&I vivan en **Universidad Scout** — la Cartilla dice «módulo virtual» sin plataforma; la Guía 2025 ubica los SFH en learn.scout.org + easygenerator.
4. Título completo, emisor y año de **Guía Dos** y **Guía Tres** (solo *"Guía de Referencia para las Organizaciones Scouts Nacionales"*).
5. **Política Nacional de Participación Juvenil (2022)** — solo la cita el Modelo 2026 (p. 93); en local está la de 2016.
6. Reinterpretación oficial del **cargo 2.2.30** tras el Acuerdo 657.
7. **Reglamento Nacional de Grupos, Art. 7.7 «(p. 34)»** — el artículo existe; la página no es verificable desde el texto plano.
8. Texto del **Acuerdo C.S.N. 405** — resolvería M2.

## Respuesta fundamentada a las 10 dudas del §10

**1. Vigencia del Manual 2023 y la Guía 2021.** Siguen vigentes como instrumentos operativos **en todo lo que no contradiga** la Política 2025, que prevalece: (a) rango — Acuerdo C.S.N. 657 (p. 49) vs. desarrollo operativo (Manual p. 6) y «herramientas orientadoras» (Guía p. 3); (b) la Política los cita (pp. 47–48) y ordena *"poner en práctica los manuales operativos"* (p. 32); (c) revisión cada 3–5 años (Manual p. 27) vs. cada 4 (Política p. 36). **Renombres confirmados, y más que renombres:** Botón de Denuncias (Manual p. 13) → botón «Me Pongo A Salvo del Peligro», *"ruta oficial"* (Política p. 44) ✓ · Escuchadero con psicólogo/a (Manual p. 17, p. 25) → espacios ¡Óyeme! con dinamizadores certificados, *"primeros respondientes"*, *"dicha escucha no representa atención en salud mental"* (Política pp. 34, 40) — cambió el modelo · DURAS-I de 6 rasgos (Manual p. 23) → DURASLID de 8, añade Lúdicas y Diversas (Política p. 26; Modelo 2026 §10) · Referente ASP → Comité de Gestión de Incidentes (M4). **Sigue valiendo** del Manual: principios y enfoques (p. 9), garante y deber legal de denunciar (p. 11), *"NO DEBE entenderse como instancia judicial…"* (p. 22), líneas de acción e Informe Periódico de Actividades Seguras (p. 22); de la Guía: marco legal, PAP, autoridades estatales, señales y recomendaciones. **Regla para los cursos:** la Política 2025 es la única norma que se cita; Manual y Guía con título y año, solo para lo que la Política no detalla; «referente ASP», «Escuchadero» y «DURAS-I» se glosan como términos de 2021-2023.

**2. Secuencia autoridad estatal ↔ botón.** Dos obligaciones **acumulativas**: Política p. 21 (*"informar, derivar o reportar … a los Sistemas estatales … así como a los órganos … de Scouts de Colombia"*); p. 31 punto 4; Manual p. 22 (principio de coordinación); Manual p. 11 (deber legal). El orden lo fija la urgencia: (1) peligro inmediato o salud → Policía y/o centro de salud, PAP (Guía pp. 27–28, 31); (2) reporte a la ASC **siempre**, por el botón (p. 44), que activa al Comité de Gestión de Incidentes (pp. 39, 44); (3) posible delito o vulneración a un menor → Fiscalía, Policía, Comisaría o Defensoría de Familia (Guía pp. 17–18, 25). **Lo que el adulto de grupo NO hace:** investigar ni gestionar (p. 29), recibir reportes a nombre de la ASC (p. 39), interrogar a la presunta víctima (Guía p. 15), prometer secreto (p. 21), resolverlo «en el consejo», contar a externos (Guía p. 15), esperar «a estar seguro» (precaución, Manual p. 9), ni reemplazar a la autoridad con el botón o viceversa. Fórmula para el Curso 03: **«Protege → Reporta (al Estado si hay riesgo o posible delito; a la ASC por el botón, siempre) → Acompaña sin investigar.»** El orden por urgencia es inferencia pendiente de confirmación por la Comisión Nacional ASP.

**3. «4 cursos habilitados».** Cuatro enlaces (m1). No inferir gate: «habilitados» = disponibles.

**4. Reparto con PJ.** La Política ya reparte: *"Articulación con el Programa de Jóvenes"* (pp. 26–27) y *"Articulación con Adultos"* (pp. 28–30). Propuesta: **Transversales** = definiciones, Declaración, articulación con Adultos, estructuras, eventos, anexos, rutas y conducta del adulto (Cursos 02, 03, 07); **PJ 24/25** = articulación con PJ aplicada a la vida de la unidad y enlace al Curso 03 para la conducta ante una revelación. Retirar del plan de PJ la frase *"ruta cuando se identifica una situación de daño"* (línea 250) y corregir allí «habilitante» (ADR-019). Citar por `courseId`.

**5. Estatus de *Gestión para la Motivación*.** Documento oficial DNAM (ago-2020; la Cartilla §2.9 lo integra al sistema). Fuente válida con dos salvedades: (a) vocabulario ASDE no vigente en la ASC (bibliografía p. 62): «Sección»/«Coordinadores de Sección»/«Equipo de Sección» → unidad/rama, Jefe de Rama, equipo de dirigentes; «Ronda Solar» (p. 26) → ciclo de programa; «Scout» por el adulto (p. 44) → adulto voluntario; (b) Maslow, Herzberg, Vroom son marcos prestados, no doctrina. Los conteos son coherentes (25 «dar» en pp. 18–19; 26 en §6, §8 y Anexo II).

**6. Código de Conducta OMMS.** Alcance: *"Equipo de la OMMS"* (p. 4). La Cartilla lo incluye en la Zona de Cascada (§2.4, p. 11): legítimo enseñarlo como referencia que la ASC eligió mostrar, no como norma que obliga al adulto de grupo. El instrumento vinculante es el *Código de Honor, Disciplinario y de Conducta* (Res. C.S.N. 004-22; no local). El Curso 22 no debe diseñarse sin él.

**7. Cargo 2.2.30 vs Anexo 2.** Coexisten, no en pie de igualdad: el cargo está en el Manual de Cargos (vigente; el Acuerdo 558 suspendió reglamentos, no el Manual), pero la Política 2025 ordena actualizarlo (p. 28 punto 2; p. 43) y sus funciones de casos chocan con p. 39. Los Referentes Regionales de Promoción son un **rol de la Política**, solo de promoción. Recomendación: un solo curso de Nivel 3 «Rol regional de A Salvo del Peligro» con la advertencia expresa de que ningún rol regional recibe ni gestiona casos. Consultar a DNAM/DNDI.

**8. Señales de abuso en plataforma abierta.** Doctrinalmente admisible e incluso exigido: Política Mundial §2.6 (p. 16) y Política 2025 p. 29 punto 7 (*"signos y síntomas de abuso"*, formación *"a disposición de todos los adultos"*); Cartilla §2.5; la Guía 2021 (pp. 22–33) es pública. Condiciones: «reconocer para reportar, no para diagnosticar» (p. 29), sin material gráfico, con advertencia de contenido, sin culpabilizar (Guía pp. 21–22), sin sustituir el módulo oficial. La decisión final es pedagógica y del dueño.

**9. Fecha del Acuerdo 405.** Coinciden; citar *"Acuerdo 405 del 04 de septiembre de 2020, (Acta 214)"* (Manual p. 4). Registrar la discrepancia sobre su objeto (M2).

**10. Qué registrar.** ADR propuesto: «Vigencia de los instrumentos ASP tras el Acuerdo 657/2025» — prevalencia de la Política 2025 sobre Manual 2023 y Guía 2021; tabla de términos superados; reparto Transversales ↔ PJ 24/25; criterio para señales de abuso. Tarea: regenerar el manifiesto.

## Verificaciones de reglas del proyecto

- **ADR-019:** ningún curso bloquea. Colateral: el plan de PJ arrastra «habilitante».
- **ADR-022:** el plan no cita al Fiscal. Colateral: el plan de DI, Curso 20, aún dice «Fiscal o Revisor Fiscal».
- **ADR-031:** exigencia 3 correcta.
- **ADR-034:** aislamiento de claves y plano correctos; falta la quinta acepción de «competencia» (M8). Términos de doble plano detectados: *garante* (legal / pedagógico), *referente* (tres sentidos), *consejero* (de Grupo vs Juvenil), *área* (semáforo vs crecimiento), *ciclo* (programa vs vida del adulto), *equipo*, *plan personal* (m12).
- **Colateral de glosario:** §H aún define «Curso habilitante» como prerrequisito real, contra el ADR-019.

## Verificado y correcto (resumen)

Coinciden con la fuente, palabra por palabra y en la página: Política 2025 pp. 5, 8, 11, 13–15, 21, 23–24, 26, 28–30, 32–34, 36, 39–40, 42, 44, 49; Manual 2023 pp. 4, 7, 9, 11–13, 17, 22–23, 25, 28; Guía 2021 créditos, pp. 14–22, 25; Política Mundial pp. 8–9, 14, 16; Autoevaluación OSM pp. 6–13; Código OMMS pp. 4, 8, 13; PNAM pp. 12, 14, 19; Cartilla §2.4–2.6, §2.9; Motivación pp. 4, 18 (salvo C1), 25, 43–46, 60, 62; Guía de inducción 2025 p. 2; Manual de Cargos pp. 6, 268, 385–387; PNDI 2017; Estatuto Art. 2, 4, 9; Modelo 2026 §9.4 p. 65 y Cap. 14 pp. 89–92; Reglamento de Grupos Art. 7.7; todos los `courseId`s citados existen. Las simplificaciones («la política me protege a mí también», «no investigar es protección, no indiferencia», «cuidar, incluir, sostener») son fieles a las fuentes.

## Términos que `GLOSARIO-ASC.md` debe recibir

**§C:** Acuerdo C.S.N. 405 (4-sep-2020, Acta 214) — objeto por resolver (Mundial vs Interamericana) · Manual Operativo ASP V1.0 (1-feb-2023) y Guía de Prevención y Atención del Daño (2020-2021) — vigentes con salvedades · Política Mundial ASP (OMMS, Res. 2017-5) · Herramienta de Autoevaluación ASP (OSM, feb-2019) · Código de Conducta OMMS (27-feb-2019; alcance Equipo de la OMMS) · Gestión para la Motivación (DNAM, ago-2020) · Cartilla Metodológica (PNAM) · Fase de inducción de Adultos Voluntarios Nuevos (v1, mar-2025) · Proyecto Educativo 2022–2032 (ruta local) · Código de Honor: completar «Resolución C.S.N. 004-22». *(La Política ASP 2025 ya entró en §C el 14-sep.)*

**Nueva sección «A Salvo del Peligro — vigente vs. superado»:** botón «Me Pongo A Salvo del Peligro» ← Botón de Denuncias ASP · espacios ¡Óyeme! / dinamizadores / Coordinador/a Nacional de Espacios ¡Óyeme! ← Escuchadero · DURASLID ← DURAS-I · Comité de Gestión de Incidentes / Coordinador/a Nacional de Gestión de Incidentes ← Referente ASP · Comisión Nacional (de) A Salvo del Peligro y Comisionado/a Nacional ASP · Coordinador/a Nacional de Promoción de Entornos Seguros, Equipos Nacionales de Promoción y de Sensibilización, Referentes Regionales de Promoción · responsable del plan ASP del evento · Coordinador Regional del Safe From Harm, cargo 2.2.30 (funciones de casos superadas) · Comisión Nacional de Gestión de Riesgos · Comité de crisis (sin equivalente en la Política) · Comisión Regional de Desarrollo Institucional.

**Conceptos:** A Salvo del Peligro = Safe from Harm/SFH · entorno seguro / inseguro · negligencia, maltrato institucional, revictimización · violencias interpersonales, abuso, peligro, riesgo · protección integral y sujetos de la política · partes interesadas · práctica 2+1 · corresponsabilidad; informar/derivar/reportar · posición de garante y deber de denunciar · principios y enfoques (Manual p. 9) · promoción/prevención/atención/seguimiento y cinco líneas de acción · Informe Periódico de Actividades Seguras · PAP · módulo oficial ASP / cursos SFH · Zona de Cascada · Autoevaluación de grupo ASP / semáforo · formato Reporte de situaciones de Riesgo SFH · GSAT · Equidad e inclusión (Estatuto Art. 9) · motivo / motivación / motivar / los 26 «dar» / automotivación / motivación delegada / mentorización · superados de la cartilla: Sección, Coordinador de Sección, Equipo de Sección, Ronda Solar, «Scout» por adulto.

**§E-bis:** quinta acepción de «competencia» (atribución/jurisdicción) y «competencias socioemocionales»; dobles sentidos de garante, referente, consejero, área, ciclo, equipo, plan personal.

## Documentos a registrar

**`INVENTARIO-DOCUMENTOS-BASE.md`:** las 9 filas de `INVENTARIO-FUENTES.md` §1; quitar los tres títulos ASP de «DNDI pendientes» (líneas 125–127); el Estatuto 2025 figura como «pendiente» en BIBLIOTECA-CSN cuando está en `SCOUTS/REGLAMENTOS/`; añadir el Proyecto Educativo 2022–2032; regenerar `_manifiesto-oficiales.json`.

**`CHANGELOG-DOCTRINA.md` (14-sep-2026):** incorporación de la Política ASP 2025 (Acuerdo 657) y de la Política Mundial 2017, Herramienta 2019, Código OMMS 2019 y Guías D&I Dos/Tres; tabla de términos superados del Manual 2023/Guía 2021; discrepancia del nombre de la política de D&I entre Manual 2023, Política 2025 y Modelo 2026; el Manual de Cargos (2020) no refleja la estructura ASP 2025; Guía de inducción 2025 con cuatro cursos SFH; `TRAZABILIDAD.csv` fila 17 debe pasar de «pendiente descarga ASP» y «Habilitante» a la ruta local y «recomendado».

## Nota sobre lenguaje

Todas las correcciones mantienen el tono cercano del plan; ninguna pide volver el texto más técnico. Los hooks, las anti-definiciones y las simplificaciones del Nivel 1 son fieles a la doctrina. Lo que hay que arreglar son datos y citas, no el estilo.
