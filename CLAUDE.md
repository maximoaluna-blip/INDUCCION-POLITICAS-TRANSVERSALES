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
- **Repo:** `maximoaluna-blip/INDUCCION-POLITICAS-TRANSVERSALES`, **PRIVADO** (ADR-036). Pasa a público el día que se active GitHub Pages, no antes.
- **Color de marca:** verde `#4CAF50`.
- **Apellido de las claves de `localStorage`:** `politicas-transversales:` (ADR-025 / ADR-034).

## Lo que no es negociable en esta línea

1. **Ningún curso sustituye ni certifica el módulo oficial de A Salvo del Peligro** que exige la ASC. Los cursos preparan, explican y aterrizan; el certificado que la ASC exige lo emite la ASC. Cada ficha lo dice con esas palabras.
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

- **Nada publicado.** El catálogo (`02-Plataforma-Web/cursos.json`) está vacío y la línea no está
  dada de alta en `PORTAL-ADULTOS-ASC/lineas.json` ni en `PORTAL-ADMIN-ASC/dashboards.json`.
- **Auditados y en compuerta humana, los dos en `draft`:** el **Curso 01**
  `bienvenida-politicas-transversales` (35 min) y el **Curso 03** `adulto-garante-entorno-seguro`
  (45 min), el de mayor riesgo doctrinal de la plataforma. **Los dos pasan las tres auditorías.**
  ⚠️ La del Curso 03 encontró que **la raíz del peor error estaba en `../GLOSARIO-ASC.md`**, no en el
  curso: dos filas del §C-bis se contradecían sobre el mismo rol, el ancla de esta línea copió la más
  rotunda y el curso copió el ancla. **Corregido de arriba abajo** (glosario v1.27, esta ficha,
  `doctrina.json` y el curso). *Corregir solo el curso habría dejado la fuente del error en pie.*
- **Bloqueado aparte:** el **Curso 04** (`diversidad-e-inclusion-movimiento`) no se diseña hasta
  tener el texto del **Acuerdo C.S.N. 405** — las fuentes discrepan sobre si la política de D&I
  adoptada es la Mundial o la Interamericana, y **no está publicado en la biblioteca**.

## Las tres reglas «no negociables» ya son compuerta (ADR-060, 17-sep-2026)

Hasta esa fecha las tres vivían **solo en prosa**, en la sección de arriba, y las sostenía el auditor doctrinal
leyendo. Hoy las declara **`PRUEBAS-E2E/doctrina.json`** y las vigilan tres pruebas de `codigo.spec.js`:

| Regla | Qué falla exactamente |
|---|---|
| **Términos ASP superados** | Usarlos **como vigentes**. Pueden aparecer —la doctrina exige glosarlos como términos de 2021-2023— pero solo con una marca de superación cerca. |
| **La línea roja** | Que **la opción CORRECTA** de un quiz arranque con *investigar · averiguar · confrontar · indagar · interrogar*, o lo contenga sin negación ni consecuencia. **Es la única compuerta de la plataforma que mira la clave de respuestas.** |
| **El antídoto** | Que un curso mencione el módulo oficial y **no diga en ninguna parte** que este curso no lo sustituye. |

⚠️ **Estas tres barren la PROSA de los cursos, al revés que `lexico.json`** — y es deliberado: allí el término
vigilado tiene cinco acepciones vivas y barrer prosa dio ruido; aquí los términos no son ambiguos. **El alcance de
una compuerta no se hereda de otra: depende de si el término tiene una acepción o cinco.**

⚠️ **Se calibraron contra el corpus real antes de escribirse.** Las versiones ingenuas daban **5 falsos positivos y
0 verdaderos**: señalaban al Curso 03 *enseñando* que un término está superado, y a un ítem correcto que explica
*por qué no* interrogar. **Al tocarlas, recalibrar** — `scratchpad/calibrar_compuertas.py` hace la medida.

✅ **Leen el JSON fuente, no el catálogo: vigilan también los cursos en `draft`** (el hueco del ADR-052).

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
