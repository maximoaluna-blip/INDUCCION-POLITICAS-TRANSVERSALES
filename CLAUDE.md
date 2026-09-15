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
| **Comité de Gestión de Incidentes** | «referente ASP» — **no tiene heredero regional**: ningún rol regional recibe u orienta casos |

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
- **En construcción:** el vertical slice del **Curso 03** `adulto-garante-entorno-seguro`, el de
  mayor riesgo doctrinal y mayor valor de la línea.
- **Bloqueado aparte:** el **Curso 04** (`diversidad-e-inclusion-movimiento`) no se diseña hasta
  tener el texto del **Acuerdo C.S.N. 405** — las fuentes discrepan sobre si la política de D&I
  adoptada es la Mundial o la Interamericana, y **no está publicado en la biblioteca**.

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
