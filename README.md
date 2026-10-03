# Línea Políticas Transversales · Asociación Scouts de Colombia

> **PUBLICADA.** 8 cursos activos de los 22 planeados: **el Nivel 1 completo** desde el 27-sep-2026 (ADR-097) y el **Nivel 2** en curso desde el 28-sep-2026 (Cursos 12 y 07; ADR-110 y 115).
> 🔗 **https://maximoaluna-blip.github.io/INDUCCION-POLITICAS-TRANSVERSALES/**

Es la **cuarta línea** de la plataforma de formación de adultos voluntarios. Cubre las tres políticas que la ASC exige o recomienda a **toda persona adulta vinculada**, sea cual sea su cargo, rama o nivel: **A Salvo del Peligro**, **Diversidad e Inclusión** y **Gestión para la Motivación**.

## Los cursos

| # | Curso | Duración | Qué hace |
|---|---|---|---|
| 01 | `bienvenida-politicas-transversales` | 35 min | Desactiva el obstáculo de adopción: *«esto es un trámite»*. Promete la tríada **cuidar · incluir · sostener** |
| 02 | `entornos-seguros-politica-asp` | 30 min | Instala el **lenguaje**: entorno seguro, peligro, riesgo, abuso, violencia |
| 03 | `adulto-garante-entorno-seguro` | 45 min | Entrega la **conducta**: 2+1, escuchar, no prometer secreto, reportar, **no investigar**. El de mayor riesgo y mayor valor de la línea |
| 04 | `diversidad-e-inclusion-movimiento` | 35 min | **Amplía el marco**: un entorno es seguro cuando lo es para todos. Estigma, discriminación sin intención, barreras y sobreprotección. **No afirma qué política adoptó el Acuerdo 405**, que sigue sin publicarse (ADR-097) |
| 05 | `gestion-para-la-motivacion` | 35 min | **Cambia de objeto**: del cuidado de los jóvenes al **cuidado de los adultos que cuidan** |
| 06 | `mi-compromiso-entornos-seguros` | 60 min | **Cobra** lo que enseñaron los otros: el semáforo oficial de 17 ítems, la brújula de los cursos anteriores y compromisos con fecha para el consejo de grupo |

**Los seis pasan las tres auditorías** —doctrinal, pedagógica y funcional— y el **06 además se re-auditó**.

> ⚠️ **Lo que el Curso 04 no dice, y dice que no lo dice:** qué política de Diversidad e Inclusión adoptó el Acuerdo 405. El acuerdo no está publicado y las fuentes que lo citan no coinciden, así que el curso trabaja con la política **de la Región** y lo declara. **La honestidad sobre lo que falta es doctrina de esta línea.**

## Qué hay aquí

| Ruta | Qué es |
|---|---|
| `Plan-de-Formacion-Linea-Politicas-Transversales.md` | Plan de Línea (**borrador v0.2**): los 4 niveles, 22 cursos, el Nivel 1 detallado curso a curso con fuente y página |
| `CREAR-CURSO.md` | **Cómo se construye el siguiente. Su §4-bis es la sección útil**: lo que costó cada error ya cometido |
| `01-Diseno-Cursos/` | Un diseño por curso. **Son fuente histórica** (ADR-057): lo que vale hoy es el JSON, y cada diseño lleva al final lo que las auditorías le cambiaron |
| `02-Plataforma-Web/` | Los HTML compilados y `cursos.json`. **Artefactos generados: no se editan a mano** |
| `05-Generador-Cursos/` | `build-course.js`, el esquema, las plantillas del motor y los **JSON fuente** en `borradores/` |
| `PRUEBAS-E2E/` | Playwright + axe, y las compuertas propias de la línea (`doctrina.json`, `lexico.json`, `claves-localstorage.json`) |
| `INVENTARIO-FUENTES.md` | Qué documentos oficiales hay en local, qué páginas se usaron y qué falta |

## Lo que no es negociable en esta línea

1. **Ningún curso sustituye ni certifica el módulo oficial de A Salvo del Peligro** que exige la ASC.
2. **El adulto reporta y deriva; nunca investiga ni atiende** — *«en ningún caso su función será de carácter investigativo»* (Política 2025, p. 29). **Ningún quiz puede tener como correcta «averiguar», «confrontar» o «resolver internamente».**
3. **Sin imágenes generadas por IA de personas ni escenas.**
4. **Casos anonimizados y no revictimizantes.**
5. **Plano del adulto** — ver `../GLOSARIO-ASC.md` §E-bis.

**Las tres primeras ya son compuerta automática**, no solo prosa: las declara `PRUEBAS-E2E/doctrina.json` y las vigila `codigo.spec.js`. Y **leen el JSON fuente**, así que cubren también los cursos en `draft`.

## Cómo seguir

1. **Nivel 1: completo** (ADR-097). Si algún día llega el texto del Acuerdo 405 —lo custodia la Cancillería Nacional—, el 01 y el 04 pueden afirmar el título: es una frase en cada uno.
2. **Nivel 2 en adelante:** el Plan lo detalla. Antes de construir, **leer `CREAR-CURSO.md` §4-bis** — no es opcional.
3. **Antes de publicar cualquier cosa:** las tres auditorías, `python ../verificar-consistencia.py`, y **verificación en producción**. Publicar toca **tres repos**: este, el portal y el panel de administración.

---

_Creado el 14-sep-2026 como borrador sin repo. Publicado el 18-sep-2026 (ADR-062). Última actualización: **19-sep-2026**, con el Curso 06 — el Nivel 1 queda en 5 de 6._
