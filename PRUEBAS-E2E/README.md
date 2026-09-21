# PRUEBAS-E2E — Auditoría funcional de la Línea Políticas Transversales

> ⚠️ **Sin `ASC_BASE_URL`, esta suite corre contra PRODUCCIÓN** (`https://maximoaluna-blip.github.io/INDUCCION-POLITICAS-TRANSVERSALES/02-Plataforma-Web/`), no contra el HTML que acabas de compilar. Un «todo en verde» en local sin esa variable valida lo publicado, no tu cambio. Para probar el repo local haz lo que hace el CI: `python -m http.server 8099` en la raíz del repo y `ASC_BASE_URL=http://127.0.0.1:8099/02-Plataforma-Web/ npx playwright test`.

Suite de [Playwright](https://playwright.dev) que verifica la línea de forma repetible: la
tercera pata de calidad, junto a la **doctrinal** (`/auditar-curso`) y la **pedagógica**
(`/auditar-pedagogia`). Responde a «¿funciona?», no a «¿es verdad?» ni «¿enseña bien?».

Es una copia adaptada de las otras tres líneas: la mayoría de los archivos son **idénticos**
porque la suite se diseñó agnóstica de línea (lee el catálogo de cursos en runtime vía
`ASC_BASE_URL`). Lo propio de esta línea son los defaults (`playwright.config.js`,
`tests/_setup-cursos.js`, `tests/cursos.js`), su `lexico.json` y **tres reglas doctrinales**
dentro de `codigo.spec.js` que no existen en ninguna otra (§«Doctrina de la línea», abajo).

> **Este README nació el 20-sep-2026**, con la auditoría de plataforma: era la única de las
> cuatro líneas **sin README de pruebas**, y la tabla de este archivo es el mapa de la suite —
> quien no lo tiene, no sabe cuántas compuertas hay. Ver `docs/AUDITORIA-PLATAFORMA-2026-09-20.md` §C1.

## Estado: Fase 0 + Fase 1a (sin backend real)

Corre contra el sitio **público** (GitHub Pages). **No escribe nada** en el backend de Apps
Script: las llamadas se interceptan con `page.route()` (`tests/_backend.js`).

**Fase 0 — verificación estática:**

| Archivo | Qué verifica | Checklist |
|---|---|---|
| `tests/smoke.spec.js` | Cada curso carga, título no vacío, sin excepciones JS | §G |
| `tests/links.spec.js` | 0 enlaces internos rotos (externos: solo se reportan) | §M |
| `tests/a11y.spec.js` | Accesibilidad axe WCAG A/AA, claro + oscuro | §H |
| `tests/responsive.spec.js` | Sin scroll horizontal en móvil (Pixel 5) y escritorio | §H |
| `tests/persistence.spec.js` | La preferencia de tema sobrevive a recarga (localStorage) | §F, §H |
| `tests/portal.spec.js` | El portal carga, `lineas.json` válido y enlaces de líneas activas (solo con `ASC_PORTAL_URL`) | §G, §M |

**Fase 1a — flujo del alumno (backend interceptado, sin escribir en prod):**

| Archivo | Qué verifica | Checklist |
|---|---|---|
| `tests/e2e-flujo.spec.js` | Registro → responder cada quiz ≥70 % → recorrer módulos → certificado `ASC-AAAA-XXXXX`, con el contrato POST y la idempotencia del certificado. Sobre **todos los cursos activos** del catálogo. | §F, §G |
| `tests/e2e-plan-builder.spec.js` | Descubre en runtime el curso con `plan-builder` (aquí: **Curso 06, `mi-compromiso-entornos-seguros`**) y verifica que meta, plazo, recursos y compromiso **persisten tras recargar**. | §F |
| `tests/e2e-integracion.spec.js` | Escritura y lectura reales contra un **backend de pruebas** (Fase 1b). Opcional: se salta si no hay `ASC_TEST_BACKEND`. | — |
| `tests/_backend.js` | Helper: intercepta y captura las llamadas a Apps Script | — |

**Fase 2 — compuertas de regresión (cada una nació de un defecto real que las otras no vieron):**

| Archivo | Qué verifica | Nació de |
|---|---|---|
| `tests/codigo.spec.js` | La parte **mecánica** de la auditoría de código sobre el HTML **ya compilado**: toda escritura pasa por `guardarLocal()`, ningún `catch` vacío, sin `console.log`, sin rastro del token de Rover, logros por `unlockOnModule` y no por id cableado, ningún curso por encima de 500 KB, **ninguna sección compilada vacía** (ADR-066), un solo módulo de intro y `totalContentModules` coherente, el vocabulario del `lexico.json` y las claves de `localStorage` (ADR-034), y que **ningún curso marque la correcta por posición** (ADR-061). | ADR-033 |
| `tests/feedback-quiz.spec.js` | Falla **a propósito** cada pregunta de cada curso y comprueba que el motor marca en verde **la opción correcta**, no otra. | ADR-061 — el motor señalaba una opción equivocada al fallar, en 26 cursos de 4 líneas: `e2e-flujo` solo recorre el camino de acierto |
| `tests/certificado-puntuacion.spec.js` | Completa cada curso **acertando todo** y exige que el certificado imprima **100**. | ADR-065 — `quizScores` se indexa por número de módulo: `reduce` se salta los huecos y `length` los cuenta, así que seis quizzes perfectos daban **75 %** |
| `tests/landing.spec.js` | Que la **landing de la línea** pinte el catálogo completo agrupado por nivel, con `level`/`levelName`/`order`. | ADR-058 — ninguna prueba tocaba esa página |

### Doctrina de la línea: las tres reglas «no negociables» (17-sep-2026)

Únicas de Políticas Transversales, dentro de `codigo.spec.js`. Existen porque el `CLAUDE.md` de
la línea declara tres reglas no negociables y **ninguna la vigilaba una compuerta**: vivían en
prosa, sostenidas por el auditor doctrinal leyendo. Aquí el peor caso no es una imprecisión que
se corrige: es **una instrucción de conducta equivocada ante la revelación de un daño a un niño**.

1. **Ningún curso usa como vigente un término ASP superado** (ADR-035).
2. **Ninguna respuesta correcta instruye al adulto a investigar** — la línea roja de la línea: mira
   la opción marcada como correcta y falla si arranca con un verbo prohibido.
3. **Todo curso que menciona el módulo oficial dice que no lo sustituye.**

⚠️ **Alcance, y es lo contrario de lo que decidió `lexico.json` a propósito:** estas tres **sí
barren la prosa de los cursos**. En el léxico el término vigilado («competencia») tiene varias
acepciones vivas y barrer prosa dio puro ruido; aquí los términos no son ambiguos y **el daño
vive justamente en la prosa**. Calibradas contra el corpus real (4 líneas, 24+ cursos) **antes**
de escribirse: las versiones ingenuas daban 5 falsos positivos y 0 verdaderos.

> ⚠️ **Lo que estas compuertas enseñan junto:** *una suite verde prueba lo que recorre, no lo que
> existe.* Varias nacieron de defectos que vivieron **meses en producción** con el CI en verde, y
> la de la landing, de una página que simplemente **no estaba en ninguna lista**. Al añadir una
> página o un artefacto a la línea, preguntar **qué spec lo recorre** — si la respuesta es
> «ninguna», no hay compuerta. El 20-sep-2026 la auditoría encontró exactamente eso con
> `verificar-certificado.html` (**ADR-070**), y por eso esta línea estrenó su
> `e2e-plan-builder.spec.js`: tenía el componente en producción y era la única sin su prueba.

## Cursos cubiertos hoy (5 activos)

Nivel 1: `bienvenida-politicas-transversales` (35 min), `entornos-seguros-politica-asp` (30 min),
`adulto-garante-entorno-seguro` (45 min), `gestion-para-la-motivacion` (35 min) y
`mi-compromiso-entornos-seguros` (60 min).

**Falta el Curso 04** (*Diversidad e Inclusión*): bloqueado a la espera del texto del Acuerdo
C.S.N. 405, que no está publicado en la biblioteca.

Con los 5, la suite da **89 passed / 0 failed** (medido el 20-sep-2026, ya con
`e2e-plan-builder.spec.js`; eran 88 antes de añadirla).

## Dos trampas de esta suite (verde no siempre significa probado)

**1. Un curso en `draft` se salta la suite entera (ADR-052).** El catálogo dinámico filtra por
`status: "active"/"new"`, así que un curso en `draft` **no entra en la lista y la suite pasa en
verde sin haberlo tocado**. Para probar un curso **antes** de activarlo: copiar
`02-Plataforma-Web/`, `assets/`, `index.html` y `404.html` a una carpeta temporal, voltear el
`status` **en la copia** (nunca en el catálogo real), servirla con `ThreadingHTTPServer` y
**comprobar que el número de pruebas subió**. Si no subió, no se probó nada.

**2. Una compuerta intermitente deja de ser compuerta (ADR-051).** `a11y.spec.js` desactiva las
animaciones **antes** de la primera auditoría y espera a que el módulo sea opaco; si no lo
consigue en 3 s, registra el hallazgo como **grave** en vez de saltárselo en silencio. Un test
que parpadea se arregla o se borra: no rompe el CI, pero enseña a ignorarlo.

## Instalación

```bash
cd PRUEBAS-E2E
npm install
npx playwright install chromium
```

## Uso

```bash
npm test              # toda la suite
npm run smoke         # solo smoke
npm run links         # solo enlaces
npm run a11y          # solo accesibilidad
npm run responsive    # solo responsive
npm run persistence   # solo persistencia
npm run report        # abrir el último reporte HTML
```

```bash
# Un build local servido en localhost (lo que hace el CI)
ASC_BASE_URL="http://127.0.0.1:8099/02-Plataforma-Web/" npm test

# Smoke del portal central
ASC_PORTAL_URL="https://maximoaluna-blip.github.io/PORTAL-ADULTOS-ASC/" npx playwright test portal
```

## Proyectos (navegadores/viewports)

- `desktop-chromium` — Chrome de escritorio.
- `movil-android` — Pixel 5 (audiencia principal). Los tests marcados `@solo-escritorio`
  (enlaces, a11y, persistencia, flujo E2E, plan-builder) no se duplican en móvil.

## CI

`.github/workflows/pruebas-e2e.yml` (en la raíz de este repo) corre la suite completa en cada
push/PR a `main`: recompila los cursos con `build-course.js`, los sirve en `localhost:8099` con
`python3 -m http.server` y corre `npx playwright test` contra ese build — **no contra producción**.

## Pendiente — Fase 1b (persistencia real en un Sheet de pruebas)

Comprobar que los datos se **escriben** de verdad y que los flujos de **lectura** (`recover`,
`verify`) responden contra un backend de pruebas real. El procedimiento es el mismo que
documenta `INDUCCION-ADULTOS/PRUEBAS-E2E/SETUP-FASE-1B.md`.
