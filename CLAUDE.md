# CLAUDE.md — Línea Políticas Transversales

> Ancla local de la línea. Los documentos rectores del proyecto viven en la **raíz**
> (`../CLAUDE.md`, `../DECISIONES.md`, `../GLOSARIO-ASC.md`, `../MANUAL-CREACION-CURSOS.md`,
> `../CHECKLIST-CALIDAD-CURSO.md`), versionados en el repo privado `DOCS-MAESTRAS-ASC`.
> **Cuando este archivo y un rector de la raíz difieran, manda el de la raíz.**

## Qué es esta línea

La **cuarta** línea de la plataforma. Cubre las tres políticas que la ASC exige o recomienda a
**toda persona adulta vinculada**, sea cual sea su cargo, rama o nivel: **A Salvo del Peligro**,
**Diversidad e Inclusión** y **Gestión para la Motivación**.

- **Plan de Línea:** `Plan-de-Formacion-Linea-Politicas-Transversales.md` (BORRADOR v0.2) — 22 cursos en 4 niveles.
- **Repo:** `maximoaluna-blip/INDUCCION-POLITICAS-TRANSVERSALES`, **PÚBLICO** desde el 18-sep-2026 — **ADR-036 cerrado** al publicarse la línea. ⚠️ El repo es **nuevo**: el anterior quedó renombrado a `…-privado` porque un `force-push` no borra nada en GitHub (ADR-062).
- **Color de marca:** verde **`#2E7D32`**. ⚠️ No `#4CAF50`: da **2.78:1** sobre blanco, por debajo de AA.
- **Apellido de las claves de `localStorage`:** `politicas-transversales:` (ADR-025 / ADR-034).

## Lo que no es negociable en esta línea

1. **Ningún curso sustituye ni certifica los módulos oficiales de A Salvo del Peligro** que exige la ASC (son cuatro; dónde se hacen, en el Curso 01, lección «📋 Lo exigido», y cada curso remite allí). Los cursos preparan, explican y aterrizan; el certificado que la ASC exige lo emite la ASC. Cada ficha lo dice con esas palabras.
2. **El adulto reporta y deriva; nunca investiga ni atiende.** Es la línea roja: *"en ningún caso su función será de carácter investigativo y de gestión del reporte"* (Política 2025, p. 29). **Ningún quiz puede tener como respuesta correcta «averiguar», «confrontar» o «resolver internamente».**
3. **Sin imágenes generadas por IA de personas ni escenas** (`../CLAUDE.md` §5.5, ADR-031), con rigor especial aquí: un curso sobre abuso, discapacidad o minorías ilustrado con rostros inventados es inaceptable. Solo emoji, diagramas, íconos y logos reales.
4. **Casos anonimizados y no revictimizantes.** Sin nombres reales, sin detalles gráficos, sin culpabilizar a la víctima (Guía de Prevención, pp. 21–22).
5. **Plano del adulto.** «Competencia» aquí es **esencial** o **específica** del adulto voluntario; y cuidado con la **quinta acepción** —atribución o jurisdicción— que la Política usa al hablar de instancias. Ver `../GLOSARIO-ASC.md` §E-bis.

## La trampa doctrinal número uno

La Política de dic-2025 **superó nombres, y en dos casos el modelo entero**. Escribir el término
de 2023 en un curso de 2026 manda al adulto a una puerta que ya no existe. **Tabla completa en
`../GLOSARIO-ASC.md` §C-bis.** Lo esencial:

| Vigente | Superado |
|---|---|
| botón **«Me Pongo A Salvo del Peligro»** | «Botón de Denuncias» · y el eslogan «Me Siento a Salvo del Peligro» de la pieza QR |
| espacios **¡Óyeme!** con dinamizadores, *"no representa atención en salud mental"* | «Escuchadero» con psicólogo/a — **cambió el modelo** |
| **DURASLID** (8 rasgos) | «DURAS-I» (6) |
| **Comité de Gestión de Incidentes** | «referente ASP» — **cambió quién gestiona**: hoy ningún rol regional **gestiona** casos. ⚠️ **No escribir «no existe ningún rol regional»**: el cargo **2.2.30 «Coordinador Regional del Safe From Harm»** sigue en el Manual de Cargos (p. 385) y se llama a sí mismo *«el referente regional»*; lo superado son sus funciones de gestión de casos. **Superado ≠ inexistente** |

**Y la prelación está decidida (ADR-035):** la Política 2025 prevalece sobre el Manual Operativo
2023 y la Guía 2021 en lo que difieran; Manual y Guía se citan solo para lo que la Política no
regula, siempre con título y año.

## El reparto con Programa de Jóvenes (ADR-038)

No es criterio nuestro: lo parte la propia Política, que separa *«Articulación con el Programa de
Jóvenes»* (pp. 26–27, experiencias educativas) de *«Articulación con Adultos»* (pp. 28–29, ciclo
de vida del adulto y procedimientos).

**La regla:** *¿el sujeto de la frase es el **joven y la unidad**, o el **adulto y la institución**?*
PJ enseña cómo el Método Scout hace seguro el entorno; esta línea, qué se espera del adulto, dónde
está su límite y por dónde van las rutas. **PJ informa que la ruta existe; aquí se enseña la
conducta y el límite.**

## Estado

**Dónde va la línea: `../ESTADO.md`**, que genera `python ../generar-estado.py` y no se escribe a mano. Qué pasó y por qué: `../docs/BITACORA.md` y los ADR 062 (publicación), 064, 066 y **097** (Nivel 1 cerrado, 6 de 6). Cómo se construye el siguiente: [`CREAR-CURSO.md`](CREAR-CURSO.md), empezando por su **§4-bis**.

Reglas que dejó construir el Nivel 1:
- **`verificar-certificado.html` vive en la raíz del repo**, enlazada desde el pie del `index.html` (ADR-070). Al tocarla, comprobar el `SCRIPT_URL` (el backend de la plataforma, no el de Rover) y que siga enlazada.
- **Re-auditar** cuando el veredicto fue *REQUIERE MEJORA* o las correcciones cambiaron el curso. En los Cursos 06 y 04, **los altos de la re-auditoría eran defectos traídos al corregir**.
- **Lo que no se recompila, no se corrige:** si se toca texto que imprime `build-course.js`, hay que recompilar todos los cursos.
- **El glosario fue tres veces la raíz del peor hallazgo** (Cursos 03, 05 y 04). Antes de escribir una afirmación, mirar qué dice `../GLOSARIO-ASC.md` sobre lo mismo, y corregir arriba, no solo el curso.
- **Al planear un nivel, mirar qué curso sostiene a cuál:** el orden de construcción no tiene por qué seguir la numeración, pero el hueco se nota.
- **Acuerdo 405:** ningún curso afirma qué política de D&I adoptó, y no se desempata por fecha (ADR-097). El Curso 04 trabaja con la Política Interamericana **como la de la Región**.

## Las tres reglas «no negociables» ya son compuerta (ADR-060, 17-sep-2026)

Hasta esa fecha las tres vivían **solo en prosa**, en la sección de arriba, y las sostenía el auditor doctrinal
leyendo. Hoy las declara **`PRUEBAS-E2E/doctrina.json`** y las vigilan tres pruebas de `codigo.spec.js`:

| Regla | Qué falla exactamente |
|---|---|
| **Términos ASP superados** | Usarlos **como vigentes**. Pueden aparecer —la doctrina exige glosarlos como términos de 2021-2023— pero solo con una marca de superación cerca. |
| **La línea roja** | Que **la opción CORRECTA** de un quiz arranque con *investigar · averiguar · confrontar · indagar · interrogar*, o lo contenga sin negación ni consecuencia. **Es la única compuerta de la plataforma que mira la clave de respuestas.** |
| **El antídoto** | Que un curso mencione los módulos oficiales y **no diga en ninguna parte** que este curso no los sustituye. La regex reconoce singular y plural: al cambiar la forma de decirlo, **recalibrar** (`calibrar-doctrina.py`). |

⚠️ **Estas tres barren la PROSA de los cursos, al revés que `lexico.json`** — y es deliberado: allí el término
vigilado tiene cinco acepciones vivas y barrer prosa dio ruido; aquí los términos no son ambiguos. **El alcance de
una compuerta no se hereda de otra: depende de si el término tiene una acepción o cinco.**

⚠️ **Se calibraron contra el corpus real antes de escribirse.** Las versiones ingenuas daban **5 falsos positivos y
0 verdaderos**: señalaban al Curso 03 *enseñando* que un término está superado, y a un ítem correcto que explica
*por qué no* interrogar. **Al tocarlas, recalibrar** — `PRUEBAS-E2E/calibrar-doctrina.py` hace la medida — vive **en la suite**, no en un scratchpad.

✅ **Leen el JSON fuente, no el catálogo: vigilan también los cursos en `draft`** (el hueco del ADR-052).

## Dónde está la consulta a la DNDI

`CONSULTA-DNDI-ASP.md` **ya no vive aquí**: al publicarse la línea (18-sep-2026) este repo pasó a
**público**, y ese documento es **correspondencia sin enviar** que nombra a personas reales con su
cargo, tomadas de los créditos de la Política. Está en el repo privado **`DOCS-MAESTRAS-ASC`**, en su
raíz, y **se borró también de la historia de este repo** — que nunca fue público y no tenía forks.

**Ya no bloquea nada** (ADR-097): el Curso 04 se publicó sin el texto del **Acuerdo C.S.N. 405**. Pedirlo a la
Cancillería permitiría afirmar el título de la política de D&I en el 01 y el 04. Lo demás de esa consulta es verificación del ADR-035.

⚠️ **Regla que deja:** antes de abrir un repo, mirar qué documentos internos arrastra — y sobre todo si
alguno **nombra a personas**. El proyecto ya publica sus planes y sus auditorías sin problema; la
correspondencia es otra cosa.

## La compuerta antes de publicar

Las **tres auditorías**, que responden preguntas distintas y no se sustituyen:

| Auditoría | Pregunta | Cómo |
|---|---|---|
| Doctrinal | ¿es **cierto**? | `/auditar-curso <courseId>` |
| Pedagógica | ¿**enseña bien**? | `/auditar-pedagogia <courseId>` |
| Funcional | ¿**funciona**? | `PRUEBAS-E2E` en verde, local y en CI |

Y antes de dar la línea por publicada: `python ../verificar-consistencia.py`, más verificación
**en producción**. Publicar toca **tres** repos — el de la línea y los **dos** portales.
El panel admin es el que siempre se olvida (`../CLAUDE.md` §7-bis).
