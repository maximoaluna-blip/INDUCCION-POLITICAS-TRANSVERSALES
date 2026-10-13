# Diseño del Curso 19 — 👨‍👩‍👧 A Salvo del Peligro para familias y partes interesadas

> **Línea:** Políticas Transversales · **Nivel 4** (transversales) · `a-salvo-del-peligro-para-familias` · ADR-155 · 12-oct-2026
> **Duración:** 25 min. **Audiencia:** familias, cuidadores y representantes legales de los scouts; patrocinadores, proveedores y aliados. El grupo lo puede compartir con ellos (Plan §6 y §3).

## Fuentes

| Documento | Cita | Notas |
|---|---|---|
| Política Nacional ASP 2025 (Acuerdo CSN 657) | p. 5 (corresponsabilidad: Estado, familia y sociedad); p. 6 (participación de jóvenes y familias); **p. 23** (alcance a familias, cuidadores, representantes legales, patrocinadores, proveedores, aliados); p. 26 (práctica 2+1, también en comunicaciones; entornos en línea; datos médicos); p. 29 (comunicar a las partes interesadas; nombramiento tras procedimientos; formación); **p. 31** (declaración de compromiso explicada «de forma prioritaria a las familias»); **p. 32** (módulo para padres, proveedores y patrocinadores; canales de reporte y protección frente a represalias); p. 33 (eventos); p. 42 (confidencialidad); **p. 44** (el botón, abierto «en todo momento y desde cualquier dispositivo») | Página = PDF; letras espaciadas. |

## 0-bis. Decisiones antes de diseñar

1. **El destinatario no es el adulto voluntario.**
   - El curso se escribe para familias y partes interesadas, en lenguaje sin jerga.
   - Declara `registration.motivationLabel` y un `subtitle` propio (ADR-090).
   - ⚠️ El `build-course.js` de PT **no tenía** el gancho del `motivationLabel`, que PJ y Rover sí tenían. Se añadió con el mismo patrón y el mismo texto por defecto; los demás cursos compilan idénticos.
2. **No es el módulo oficial.** La p. 32 encarga a la Asociación un módulo para padres, representantes legales, proveedores y patrocinadores. Este curso lo dice en el intro, en la última lección y en el certificado, y manda a pedir el módulo.
3. **Lo que se le dice a una familia, y lo que no.**
   - **Medidas sí:** la 2+1, las comunicaciones en línea, la formación de los adultos y los datos.
   - **Casos de otros no:** la confidencialidad, p. 42.
   - **La ruta:** el botón y, si puede ser delito, las autoridades.
   - **Sin teléfonos:** no hay fuente, lección del Curso 07.
4. **A la familia no se le pide que investigue ni que confronte.** El curso se lo dice como alivio, no como prohibición. La Política le prohíbe investigar al adulto (p. 29); a la familia simplemente no le hace falta.
5. **Lo que la Política no detalla** (la directriz de fotos, la lista de plataformas) se manda a preguntar al grupo.
6. **Privacidad (ADR-087):** las reflexiones viajan a la hoja. Ninguna pide nombres, casos ni datos de los hijos.

## Lecciones

| # | Lección | Fuente |
|---|---|---|
| 0 | 👋 Antes de empezar | p. 32 |
| 1 | 🤝 La Política también es contigo | pp. 5, 6, 23, 31 |
| 2 | 🛡️ Lo que la Asociación se compromete a cuidar | pp. 26, 29 |
| 3 | ❓ Lo que puedes preguntarle al grupo | pp. 29, 42 |
| 4 | 🔘 Si algo te preocupa | pp. 21, 32, 44 |
| 5 | 🧩 Patrocinadores, proveedores y aliados | pp. 23, 31, 32, 33, 44 |

## Quizzes — criterio

Diez preguntas:
- **De dato:** el alcance (p. 23) y los datos médicos (p. 26).
- **El resto, de aplicación.**
- Roles y géneros repartidos.
- Sin parejas de prefijo con la clave dentro.
- Sin «solo», «Ninguno» ni dos puntos.
- Medir con dos modelos (ADR-148).

## ⚠️ Lo que las auditorías cambiaron

- **Doctrinal (APTO CON CORRECCIONES MENORES; 3 mayores):**
  - **M1:** la participación de las familias es un estándar al que la Política se alinea (p. 6), no algo que diga haber hecho.
  - **M2:** el módulo para patrocinadores es un encargo, y no consta que exista. Se pregunta «si ya está disponible».
  - **M3:** faltaban en el glosario el módulo de la p. 32, la declaración de compromiso, el grooming y el ciberacoso. Van en la raíz.
  - **Re-auditoría:** la «dirigente de la patrulla» no existe (la patrulla elige a un joven Guía); la Guía se cita como 2020-2021 con páginas; el Comité no vigila dirigentes; el alcance de la p. 23 es para quien toca el cuidado de los scouts.
- **Pedagógica (REQUIERE MEJORA):**
  - Las claves eran las más parecidas a la lección.
  - Los hombres se equivocaban siempre y la mamá acertaba siempre.
  - Dos reflexiones invitaban a escribir datos de salud de un hijo, que viajan a la hoja (ADR-087).
  - Había jerga sin explicar.
  - Se rehicieron 9 de 10 preguntas. La re-auditoría encontró distractores con la misma actitud y dos claves cortas en la L3. Se cerraron.
- **Compuerta del antídoto:** el borrador decía «no es ese módulo» sin la frase «no sustituye ni certifica los módulos oficiales». La suite de producción del 21 lo cazó, porque lee los JSON fuente.
- **Regla ciega (ADR-148, dos modelos):**
  - Primera versión: mismo modelo 5 de 5, Haiku 5 de 5.
  - Final: **mismo modelo 4 de 5, Haiku 4 de 5**.
- ⚠️ **Deuda que queda (ADR-090):** el motor sigue mostrando a una familia textos de adultos voluntarios: el pie «Plataforma de Formación de Adultos ASC», `#AdultosEnElMovimiento` al compartir y el campo «Grupo Scout». Es el núcleo, no la línea.
