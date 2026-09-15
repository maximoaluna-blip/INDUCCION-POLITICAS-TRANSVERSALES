# Diseño del Curso 03 — 🤝 El Adulto como Garante: reportar, no investigar

> **Línea Políticas Transversales · Nivel 1 (Ruta de Fundamentación) · `adulto-garante-entorno-seguro`**
> **Vertical slice de la línea.** Es el curso de mayor riesgo doctrinal y mayor valor: si pasa las tres auditorías, el patrón de la línea queda validado (plan de línea, Hito B).
> Diseñado el 15-sep-2026. **Sin auditar todavía.**
>
> **Todas las citas de este documento se verificaron contra el PDF fuente**, no contra un informe ni contra otro curso. Donde el texto extraído traía artefactos de composición (la Política 2025 se extrae con letras espaciadas), se normalizó para leer, nunca para citar de memoria.

---

## 1. Ficha del curso

| Campo | Valor |
|---|---|
| `courseId` | `adulto-garante-entorno-seguro` |
| Título | 🤝 El Adulto como Garante: reportar, no investigar |
| Duración | 35 minutos |
| Nivel | 1 — Ruta de Fundamentación |
| Orden | 3 de 6 |
| Módulos | 8 (1 intro + 7 lecciones de contenido) |
| `status` | **`draft`** — explícito. `build-course.js` mete en `cursos.json` cualquier curso que compiles, y si el JSON no declara `status` entra como `active`. |
| Audiencia primaria | Dirigentes de unidad y jefes de grupo |
| Audiencia secundaria | **Todo adulto vinculado**, dirija unidad o no: consejeros, comisionados, contadores, equipos de servicio |
| Recomendado antes | Cursos 01 y 02 (sin gate técnico — ADR-019) |

**Por qué este curso primero y no el 01.** Porque es donde se concentra el riesgo. Un error doctrinal en la bienvenida se corrige; un error aquí manda a un adulto a hacer algo que la Política le prohíbe expresamente, en el peor momento posible. Si el patrón aguanta este curso, aguanta los otros cinco.

---

## 2. Objetivos de aprendizaje

Al terminar, el adulto podrá:

1. **Aplicar** la práctica 2+1 a situaciones que vive **cualquier adulto**, dirija unidad o no: una conversación a solas con un protagonista, un chat, un traslado, una reunión de adultos.
   - *Política Nacional a Salvo del Peligro (dic-2025), p. 26.*
   - **Alcance (ADR-038):** el concepto y la norma viven aquí. Su aplicación a **planear la actividad** —Hoja de Ruta, pernocta, transporte, actividad acuática— es del curso `a-salvo-del-peligro-programa` de Programa de Jóvenes. Este curso **enlaza, no reexplica**.
2. **Ejecutar** los pasos ante una revelación: escuchar sin presionar, no prometer secreto, no interrogar, reportar por el canal oficial y acompañar.
   - *Guía de Prevención y Atención del Daño (2020-2021), pp. 21–22; Política 2025, pp. 44–45.*
3. **Delimitar** su rol frente a las instancias competentes: qué le corresponde y qué está **expresamente fuera** de su función.
   - *Manual Operativo ASP (2023), pp. 11 y 22; Política 2025, p. 29.*

---

## 3. Hook pedagógico

> **_"Tu trabajo no es descubrir qué pasó. Tu trabajo es que la persona no esté sola y que el reporte llegue."_**

Se enuncia en la **intro**, se referencia en la **Lección 3** (cuando el adulto está frente a la revelación) y **cierra la Lección 7**.

### El hito del curso

El adulto entiende que **«no investigar» es protección, no indiferencia.**

Es un hito contraintuitivo, y ahí está su valor. El instinto del adulto que quiere a sus chicos es *averiguar*: preguntar, confirmar, «estar seguro antes de armar un escándalo». La Política dice exactamente lo contrario, y no por desconfianza del adulto sino porque **preguntar de más destruye la prueba, revictimiza y puede costar el caso**. Este curso tiene que lograr que el adulto sienta el «no investigar» como un acto de cuidado, no como una orden burocrática que lo deja de brazos cruzados.

### La fórmula que el adulto se lleva

> **Protege → Reporta → Acompaña sin investigar.**
>
> **Reporta** tiene dos destinos **acumulativos**, no alternativos: **al Estado** si hay riesgo o posible delito, y **a la ASC** por el botón, **siempre**.

**Honestidad sobre el orden:** que primero se atienda la urgencia y después el resto es **inferencia nuestra**, no letra de la Política. Ninguna fuente fija una secuencia. La acumulación de ambas obligaciones sí es literal (Política 2025, p. 21). Está en la consulta pendiente a la Comisión Nacional ASP, y **mientras no se confirme, el curso enseña la fórmula sin presentarla como norma escrita**.

---

## 4. Estructura de lecciones

### 4.1 Mapa general

| # | Lección | Min | Qué instala |
|---|---|---|---|
| 0 | 👋 Antes de empezar | 2 | El hook, el alcance y **lo que este curso NO es** |
| 1 | ⚖️ Posición de garante: qué significa en la ley y en la Promesa | 5 | Ya eres garante; no es un cargo que te den |
| 2 | 👥 La práctica 2+1: qué es, por qué, y cómo se ve entre adultos | 5 | La medida te protege **a ti** también |
| 3 | 👂 Si alguien te cuenta algo | 6 | La conducta concreta: qué hacer y qué no |
| 4 | 🔴 El botón «Me Pongo A Salvo del Peligro» | 5 | Dónde va el reporte y qué pasa después |
| 5 | 🤐 Confidencialidad no es secreto | 5 | La distinción que más se confunde |
| 6 | 🚧 Lo que NO te corresponde (y a quién sí) | 5 | El límite, con nombre y apellido de cada instancia |
| 7 | 🫂 Cuidarte tú + compromiso | 4 | La política también te protege a ti · compromiso firmable |

---

### 4.2 Lección 0 — 👋 Antes de empezar (2 min · `isIntro: true`)

**Idea central:** este curso te va a quitar trabajo, no a dártelo.

Apertura con el hook. Luego, tres avisos que van en `info-box` y que **no se negocian**:

1. **Este curso no sustituye ni certifica el módulo oficial de A Salvo del Peligro** que exige la ASC. Aquí se prepara, se explica y se aterriza; el certificado que la Asociación exige lo emite la Asociación. *(Política 2025, pp. 29 y 33.)*
2. **No vas a encontrar listas de señales de abuso.** No por pudor: porque reconocer señales es otro oficio y otro curso (Nivel 2), y una lista sin acompañamiento invita justo a lo que la Política prohíbe — diagnosticar. Aquí se enseña **conducta**.
3. **Aviso de contenido:** el curso habla de situaciones de daño a niñas, niños y jóvenes en términos sobrios, sin casos gráficos y sin detalles. Si en algún momento te remueve algo propio, para. La Lección 7 habla justamente de eso.

---

### 4.3 Lección 1 — ⚖️ Posición de garante (5 min)

**Bloque 1 · Anclaje.** *Idea central: «garante» no es un cargo que alguien te entrega. Es una posición jurídica en la que ya estás por acompañar menores de edad.*

**Bloque 2 · Desarrollo.** Abrir por la vía cotidiana: un dirigente cree que su responsabilidad empieza cuando pasa algo. En realidad empieza antes — la ley le atribuye el **deber de obrar para impedir** que pase. No es una opinión de la Asociación: es la figura de la posición de garante del derecho penal colombiano, que el Manual Operativo recoge.

**Bloque 3 · Cita oficial** (`policy-quote`, plegable). Manual Operativo ASP (V1.0, feb-2023), p. 11:

> *"los adultos en el movimiento juegan un papel muy importante, no solo porque son las personas que acompañan y orientan el proceso educativo… sino también porque **asumen la posición de garante en relación con los sujetos de programa menores de edad**, en virtud de la cual, **tienen el deber de obrar para impedir que se materialicen riesgos, peligros o delitos que pueden ser evitables** y reparar los daños causados con ocasión a las actividades scouts."*

> ⚠️ **Regla de cita para todo el curso.** La fuente habla **en plural, de todos los adultos**. Si el texto del curso lo lleva al singular, la adaptación se marca entre corchetes — *"[el adulto] asume la posición de garante…"* — **nunca cambiando el verbo dentro de las comillas.** Este fue el hallazgo **M1** de la auditoría del Plan de Línea.

**Bloque 4 · Reformulación accesible** (`info-box`). *"En simple: si acompañas menores de edad en nombre de la Asociación, la ley espera de ti que actúes para evitar el daño. No que lo resuelvas — que actúes."*

**Bloque 4-bis · La otra mitad, que es scout.** La obligación no nace solo del Código Penal. Política 2025, p. 21:

> *"Los principios y valores contenidos en la Ley y la Promesa Scout se constituyen como la principal herramienta para la existencia de entornos seguros dentro del Movimiento Scout en todos sus niveles y áreas."*

Es el puente con el tono de la línea: **educación por el amor, no por el temor**. El adulto no reporta porque le da miedo la ley; reporta porque prometió hacer todo cuanto de él dependa.

> 🔀 **Término de doble plano — «garante»** (`GLOSARIO-ASC.md` §E-bis). Aquí es la **posición jurídica** del adulto. En el Modelo de Aplicación 2026 (§9.4, p. 65) aparece *"el dirigente como garante de inclusión y diversidad"*, que es **sentido pedagógico**. El curso usa solo el primero y **glosa la diferencia en una línea**, porque un dirigente que haya visto el Modelo va a cruzarlos.

**Bloque 5 · Reflexión.**

> *"Piensa en una actividad concreta de las últimas cuatro semanas —una reunión, un traslado, una salida— en la que estuviste a cargo de menores de edad. No busques nada malo: busca un momento en el que, si algo hubiera pasado, habrías sido tú quien tenía el deber de actuar. Escribe cuál fue y por qué lo elegiste."*

**Bloque 6 · Mini-quiz (2 preguntas).**

**P1.** Un dirigente dice: *"yo asumo la posición de garante cuando el Jefe de Grupo me nombra formalmente responsable de la salida."* ¿Qué le falta a esa idea?
- a) Nada: sin nombramiento formal la responsabilidad es del Jefe de Grupo.
- b) **Le falta que la posición de garante no depende de un nombramiento: nace de acompañar menores de edad en actividades de la Asociación.** ✅
- c) Le falta pedir el nombramiento por escrito para que quede constancia.

> Distractor (a) = **la idea vieja** que el curso desarma: que la responsabilidad se delega hacia arriba.

**P2.** Según el Manual Operativo, el deber que la posición de garante impone al adulto es:
- a) Investigar los hechos para poder informar con precisión.
- b) **Obrar para impedir que se materialicen riesgos, peligros o delitos evitables.** ✅
- c) Guardar la información hasta tener pruebas suficientes.

> **Nota de construcción:** las tres opciones tienen longitud pareja. El sesgo de **posición** lo neutraliza el motor barajando; el de **longitud** no, porque viaja con la opción, y permite aprobar sin leer. Llegó al 87–90 % en las tres líneas antes de corregirse. **Ninguna opción lleva `<strong>` ni `<em>`:** se renderizan en negrita y delatan la respuesta.

**Bloque 7 · Logro.** 🛡️ *Ya eres garante*

---

### 4.4 Lección 2 — 👥 La práctica 2+1 (5 min)

**Bloque 1 · Anclaje.** *Idea central: la regla de los tres. Y protege a dos personas, no a una.*

**Bloque 2 · Desarrollo.** Presentar 2+1 como lo que es: una medida simple, memorizable, que elimina de raíz la situación en la que la palabra de un adulto queda contra la de un menor. El giro pedagógico está en la segunda mitad: **también te protege a ti**. Un adulto que nunca se queda a solas con un menor no solo previene el daño — se previene de una acusación imposible de desmentir.

**Bloque 3 · Cita oficial** (`policy-quote`). Política 2025, p. 26:

> *"La estrategia 2+1 es una medida de protección utilizada para evitar posibles situaciones de riesgo, abuso o malentendidos. Consiste en asegurar que siempre haya al menos tres personas presentes durante las actividades, interacciones o acompañamientos: dos personas adultas responsables y una persona menor de edad, o una persona adulta y dos menores, tanto en comunicaciones entre adultos-adultos, adultos-jóvenes, jóvenes-jóvenes."*

**Bloque 4 · Aterrizaje al plano del adulto** (`method-grid`, 4 tarjetas). Escenarios de **cualquier adulto**, no solo del que dirige unidad:

| Situación | Cómo se ve 2+1 |
|---|---|
| 💬 Un protagonista te escribe por WhatsApp a las 10 de la noche | Respondes en el grupo, o sumas a otro adulto al chat. La conversación privada adulto-menor es justo lo que la medida evita. |
| 🚗 Te toca llevar a un chico a su casa porque no lo recogieron | Llamas a otro adulto o a la familia antes de arrancar. Nunca el traslado a solas. |
| 🗣️ Necesitas hablar en privado con un protagonista sobre algo delicado | En un lugar visible, con otro adulto cerca. Privado no es aislado. |
| 🧑‍🤝‍🧑 Una reunión de consejo donde un adulto queda a solas con otro que le reporta | También aplica: la Política extiende la medida a las comunicaciones **entre adultos**. |

> 🔗 **Aquí termina este curso (ADR-038).** Cómo se aplica 2+1 **al planear una actividad** —la Hoja de Ruta de Reunión, la pernocta, el transporte, la actividad acuática— lo enseña el curso `a-salvo-del-peligro-programa` de la Línea Programa de Jóvenes. Este curso **enlaza y no reexplica**: si el lector dirige unidad, el enlace le dice exactamente a qué va.

**Bloque 5 · Reflexión.**

> *"Escribe una situación real de las últimas semanas —tuya o que hayas visto— en la que la práctica 2+1 no se cumplió. No para señalar a nadie: para nombrar qué habría hecho falta. ¿Una llamada? ¿Cambiar de lugar? ¿Sumar a alguien al chat?"*

**Bloque 6 · Mini-quiz (2 preguntas).**

**P1.** Un dirigente lleva en su carro a una protagonista que quedó sin quien la recogiera. Va solo con ella. ¿Qué dice la práctica 2+1?
- a) Es correcto: dejarla sola en el lugar sería peor y la urgencia lo justifica.
- b) **No cumple 2+1: hay que sumar a otro adulto o a un familiar antes de arrancar.** ✅
- c) Es correcto siempre que avise después al Jefe de Grupo.

> Distractor (a) = la idea vieja *"la urgencia justifica saltarse la medida"*. Es la más tentadora y por eso tiene que estar.

**P2.** ¿A quién protege la práctica 2+1?
- a) Solo a los menores de edad, que son los sujetos de especial protección.
- b) **A los menores y también al adulto, frente a acusaciones y malentendidos.** ✅
- c) Solo al adulto, porque es quien responde legalmente.

**Bloque 7 · Logro.** 👥 *La regla de los tres*

---

### 4.5 Lección 3 — 👂 Si alguien te cuenta algo (6 min)

> Es **la lección más importante del curso** y la que más tiene que ensayarse. Todo lo demás es marco; esto es lo que el adulto va a hacer con las manos temblando.

**Bloque 1 · Anclaje.** *Idea central: en los primeros dos minutos no se investiga nada. Se sostiene a una persona.*

**Bloque 2 · Desarrollo.** Reencuadre del hook. Lo que el adulto quiere hacer —preguntar, confirmar, entender— es lo que **no** debe hacer, y no por trámite: porque interrogar revictimiza y puede arruinar la actuación de quien sí tiene que investigar. La Guía lo dice sin rodeos (p. 15): interrogar *"inquisitivamente"* a la presunta víctima *"se puede convertir en otra vulneración de derechos"*.

**Bloque 3 · Dos columnas** (`method-grid`), tomadas literalmente de la Guía, pp. 21–22:

| ✅ Qué hacer | ❌ Qué no hacer o decir |
|---|---|
| Intentar un lugar tranquilo, minimizando distracciones (8) | No presionar a la persona para que cuente su historia (1) |
| Hacerle entender que estás escuchando — asentir, *"hmmm…"* (11) | No interrumpir ni apurar; no mirar la hora (2) |
| Tener paciencia y mantener la calma (12) | No juzgar lo que hizo o dejó de hacer, ni sus sentimientos (4) |
| Dejar espacios para el silencio (14) | No inventar cosas que no sabes (5) |
| Promover la **desculpabilización** de la víctima (3) | **No hacer falsas promesas ni dar falsos argumentos tranquilizadores (9)** |
| Respetar la privacidad y la confidencialidad (9) | No actuar como si tuvieras que resolverle todos los problemas (10) |

**Bloque 4 · El punto donde casi todos fallan** (`mission-box`). *"No prometas secreto."* Es el ítem 9 de «qué no hacer» y es la promesa más natural del mundo cuando un chico te dice *"pero no le digas a nadie"*. La respuesta honesta —y la única compatible con la Política— es decirle la verdad: *"voy a cuidar lo que me contaste y no se lo voy a contar a cualquiera. Pero hay personas que sí tienen que saberlo para poder ayudarte, y a esas se lo voy a decir."* La Lección 5 desarrolla por qué.

**Bloque 5 · La fórmula** (`info-box` destacado): **Protege → Reporta → Acompaña sin investigar.** Con la marca de honestidad sobre el orden (§3).

**Bloque 6 · Reflexión.**

> *"Imagina que mañana un protagonista de tu unidad te dice «te voy a contar algo pero no le digas a nadie». Escribe, con tus palabras y en voz alta si puedes, la frase exacta con la que le vas a responder. No la busques perfecta: búscala tuya, porque la vas a necesitar rápido."*

> **Por qué así:** el marco metodológico exige reflexiones que fuercen un caso concreto. Esta además **hace ensayar la frase**, que es lo que falla en el momento real — no el conocimiento, sino no tener las palabras listas.

**Bloque 7 · Mini-quiz (2 preguntas).**

**P1.** Un protagonista te dice: *"te cuento algo si prometes no decirle a nadie."* ¿Qué haces?
- a) Prometes, porque si no, no te va a contar y perderás la oportunidad de ayudar.
- b) **Le dices que vas a cuidar lo que te cuente, y que si alguien debe saberlo para ayudarlo, se lo dirás.** ✅
- c) Le dices que primero te cuente y después deciden juntos qué hacer con esa información.

> Distractor (a) = la idea vieja, y es la que más gente elige: la promesa parece el precio de la confianza.

**P2.** Después de una revelación, el primer impulso de muchos adultos es preguntar detalles para entender bien qué pasó. Según esta lección, ¿por qué no?
- a) Porque no es asunto del adulto y podría meterse en problemas legales.
- b) **Porque interrogar revictimiza y puede dañar la actuación de quien sí debe investigar.** ✅
- c) Porque la Asociación prefiere que los detalles queden por escrito en el formulario.

**Bloque 8 · Logro.** 👂 *Sé qué decir*

---

### 4.6 Lección 4 — 🔴 El botón «Me Pongo A Salvo del Peligro» (5 min)

**Bloque 1 · Anclaje.** *Idea central: hay una sola puerta oficial, está abierta siempre, y no tienes que saber nada más para tocarla.*

**Bloque 2 · Cita oficial** (`policy-quote`). Política 2025, p. 44:

> *"La ruta oficial para presentar un reporte de incidentes es el botón «Me Pongo A Salvo del Peligro», el cual se encuentra ubicado en la página de Scouts de Colombia; allí se diligencia el formulario, disponible en todo momento y desde cualquier dispositivo. En eventos nacionales se dispondrá de códigos QR de fácil acceso, que remitan al formulario de reporte de incidentes."*

> ⚠️ **Nombre — y solo este.** La pieza con el código QR que publica la biblioteca se titula *"Me Siento a Salvo del Peligro"*. Es un **eslogan de la pieza**, no el nombre del mecanismo. El curso enseña **«Me Pongo A Salvo del Peligro»**, que es como lo nombra la Política. *(Hallazgo m8 de la auditoría del plan.)*

> ⚠️ **Sobre la URL.** El proyecto tiene registrado `https://forms.gle/PPgbS1U4ip5t5Q1PA` en `../CLAUDE.md` §8, pero **ninguna fuente oficial la imprime**: la Política solo dice *"en la página de Scouts de Colombia"*. **Verificar en vivo antes de publicar.** Si no responde, el curso enseña **la ruta** —entrar por `scout.org.co` y buscar el botón— y no la URL, que puede cambiar sin avisarnos.

**Bloque 3 · Qué pasa después** (`timeline`, 4 pasos). Es la parte que nadie explica y la que más tranquiliza al que duda si reportar. Política 2025, Anexo 3, p. 44:

1. **Análisis del incidente** — por el **Comité de Gestión de Incidentes**
2. **Toma de decisiones** — determinar las acciones apropiadas
3. **Activación de rutas** — implementar rutas internas y externas
4. **Seguimiento**, con esta garantía textual:

> *"Durante el trámite, se garantiza el respeto al debido proceso y la imparcialidad en la valoración de los hechos, se mantiene la confidencialidad en el manejo de la información, salvaguardando la dignidad de todas las personas involucradas, y se establecen estrategias de sensibilización y de cuidado de las víctimas."*

**Bloque 4 · Reformulación** (`info-box`). *"Tú llenas un formulario. A partir de ahí, el caso lo lleva gente designada para eso. No tienes que saber cómo sigue — tienes que asegurarte de que empiece."*

**Bloque 5 · Reflexión.**

> *"Entra ahora a la página de Scouts de Colombia y busca el botón. No reportes nada: solo localízalo y anota en una frase dónde está y cuánto te tomó encontrarlo. Si no lo encontraste, anótalo también — ese dato también sirve."*

> **Por qué así:** convierte una lección informativa en un ensayo real. Y si varios estudiantes no lo encuentran, la línea se entera de algo que conviene reportar a la DNDI.

**Bloque 6 · Mini-quiz (2 preguntas).**

**P1.** ¿Cuándo se reporta por el botón?
- a) Cuando ya se confirmó que el hecho ocurrió realmente.
- b) **Siempre que se identifique un incidente, sin esperar a estar seguro de los hechos.** ✅
- c) Cuando el Jefe de Grupo lo autorice tras revisar el caso.

> Distractor (a) = *"esperar a estar seguro"*, que es la puerta de atrás del «primero averiguo». El Manual lo cierra con el principio de precaución (p. 9).

**P2.** Después de que envías el reporte, ¿quién analiza el incidente?
- a) El Jefe de Grupo, que conoce el contexto de la unidad.
- b) **El Comité de Gestión de Incidentes.** ✅
- c) El referente regional de A Salvo del Peligro.

> Distractor (c) es **deliberado**: es el rol que la Lección 6 desarma. Un adulto formado con el Manual de 2023 lo elegiría.

**Bloque 7 · Logro.** 🔴 *Sé por dónde entra*

---

### 4.7 Lección 5 — 🤐 Confidencialidad no es secreto (5 min)

**Bloque 1 · Anclaje.** *Idea central: cuidar la información y ocultarla son cosas opuestas, aunque se parezcan.*

**Bloque 2 · Desarrollo.** La confusión es honesta: el adulto que calla suele creer que está protegiendo. La Política corta por lo sano (p. 21):

> *"todas las personas en Scouts de Colombia tienen así la obligación de informar, derivar o reportar según sea el incidente, cualquier acción que represente un posible delito o vulnere la dignidad de sus miembros, a los Sistemas estatales de Salud, Protección y/o Justicia, así como a los órganos disciplinarios y de protección de Scouts de Colombia. En ese sentido, **no cabrá la posibilidad de guardar ningún secreto**, ni será permitido ocultar información."*

> 🧩 **Esta cita también sostiene la fórmula.** Fíjate en el *"así como"*: los dos destinos son **acumulativos**. Reportar a la ASC no reemplaza avisar al Estado, ni al revés.

**Bloque 3 · La distinción, en dos tarjetas** (`method-grid`):

| 🤐 Confidencialidad — **sí** | 🙊 Secreto — **no** |
|---|---|
| Dar la información **solo** a quien debe tenerla para ayudar | Callar para «no armar un escándalo» |
| No dar detalles a ningún externo *(Guía, p. 15)* | Contarlo en el consejo «para que opinen» |
| Cuidar la dignidad de todos los involucrados | Prometerle a un chico que no dirás nada |
| Respetar la privacidad **salvo la activación de la ruta** *(Guía, p. 21, ítem 9)* | Esperar a tener pruebas antes de avisar |

**Bloque 4 · Cita de apoyo** (`policy-quote`). Guía de Prevención, p. 15:

> *"solo se debe dar información a las adultas o los adultos responsables de los mismos o a las instituciones pertinentes y que directamente pueda ayudar en el proceso y no se deben dar detalles a ningún externo."*

**Bloque 5 · Reflexión.**

> *"¿Has estado en una conversación de adultos scouts donde se comentó el caso de un chico con gente que no tenía por qué saberlo? No hace falta que des nombres. Escribe qué habrías dicho para cortarla, en una frase que puedas usar la próxima vez."*

**Bloque 6 · Mini-quiz (2 preguntas).**

**P1.** Un dirigente lleva un caso al consejo de grupo *"para que entre todos decidan qué hacer"*. ¿Es correcto?
- a) Sí: el consejo es el órgano de la unidad y debe conocer lo que pasa.
- b) **No: ampliar el círculo a quien no debe intervenir es ocultar mal, no cuidar.** ✅
- c) Sí, siempre que el consejo firme un acta de confidencialidad.

**P2.** Según la Política, ¿cabe guardar un secreto sobre un posible delito contra un miembro?
- a) Sí, si la familia lo pide expresamente para proteger al menor.
- b) **No cabe: la Política lo excluye de forma expresa.** ✅
- c) Sí, mientras no haya pruebas que confirmen el hecho.

**Bloque 7 · Logro.** 🤐 *Distingo cuidar de callar*

---

### 4.8 Lección 6 — 🚧 Lo que NO te corresponde (y a quién sí) (5 min)

**Bloque 1 · Anclaje.** *Idea central: hay cinco cosas que no son tuyas, y saberlo te libera.*

**Bloque 2 · Cita oficial** (`policy-quote`). Manual Operativo ASP, p. 22 — con la lista completa de instancias:

> *"A Salvo del Peligro es una instancia de acompañamiento y garantía en los procesos de promoción, prevención, y atención de situaciones de riesgo, por ende, **NO DEBE entenderse como instancia de carácter judicial, de atención en salud mental o física o disciplinaria**, puesto que estos escenarios deberán ser asumidos por las autoridades competentes, entiéndase Policía Nacional, Fiscalía, Comisarías de Familia, ICBF, Hospitales, Clínicas, Psicóloga/o Tratante y Corte de Honor Nacional (corte.honor@scout.org.co), entre otros, no obstante, todas las situaciones deberán reportarse."*

Y el límite del rol del adulto, Política 2025, p. 29: *"clarificar alcance del rol del adulto en estos incidentes, entendiendo que **en ningún caso su función será de carácter investigativo y de gestión del reporte**."*

**Bloque 3 · Lo que NO te corresponde** (`list`):

1. **Investigar** — ni preguntar de más, ni reconstruir los hechos.
2. **Gestionar el reporte** — el caso no lo llevas tú.
3. **Diagnosticar** — ni salud mental, ni física.
4. **Disciplinar** — eso es de la Corte de Honor.
5. **Decidir si «amerita»** — esa valoración es del Comité, no tuya.

**Bloque 4 · Y ahora la parte que envejece mal** (`mission-box`) — **el corazón doctrinal de la lección**:

> **Si te formaron con los documentos de 2021 o 2023, aprendiste a llamar al «referente ASP». Ese rol ya no existe.**
>
> La Guía de Prevención (2021) todavía dice, en su p. 15, *"se recomienda contactar al **Referente ASP** para recibir la asesoría de la ruta a activar"*, y vuelve a nombrarlo en su lista de qué hacer (p. 21, ítem 15). **El consejo sigue siendo bueno; el destinatario cambió.**
>
> Hoy, lo que hacía el referente ASP lo hace el **Comité de Gestión de Incidentes** y el **Coordinador/a Nacional de Gestión de Incidentes**, y se llega **por el botón** *(Política 2025, p. 39)*.
>
> **Y ojo con el atajo mental:** los **Referentes Regionales de Promoción** que sí crea la Política **hacen campañas de promoción, no reciben casos** *(pp. 40 y 42)*. **En 2025 no existe ningún rol regional que reciba u oriente casos.**

> 📌 **Por qué esto está en el curso y no solo en el glosario.** Es el error más caro que este curso puede evitar: mandar a un adulto a buscar a una persona que no existe, en el momento en que más falta hace que el reporte llegue. La tabla completa de vigente vs. superado está en `../../GLOSARIO-ASC.md` §C-bis, y la regla de prelación en el **ADR-035**.

**Bloque 5 · Reflexión.**

> *"De las cinco cosas que no te corresponden, ¿cuál te costaría más no hacer si mañana pasara algo en tu unidad? Sé honesto contigo: escribe cuál y por qué."*

**Bloque 6 · Mini-quiz (2 preguntas).**

**P1.** Un dirigente recibe una revelación y llama al referente regional de A Salvo del Peligro de su región para pedir orientación. ¿Qué pasa con esa decisión hoy?
- a) Es correcta: el referente regional es la primera instancia de orientación.
- b) **Ese rol ya no recibe casos: hoy se entra por el botón, y el caso lo toma el Comité de Gestión de Incidentes.** ✅
- c) Es correcta solo si además llena el formulario después.

**P2.** El Manual Operativo dice que A Salvo del Peligro no es instancia judicial, de salud ni disciplinaria. ¿Qué significa eso para el adulto de grupo?
- a) Que no debe reportar hasta que una autoridad competente se lo pida.
- b) **Que reporta y deriva, y quienes valoran, atienden o sancionan son otros.** ✅
- c) Que debe elegir entre reportar a la ASC o acudir a las autoridades.

> Distractor (c) ataca el error de creer que las dos obligaciones son alternativas. Refuerza la Lección 5.

**Bloque 7 · Logro.** 🚧 *Conozco mi límite*

---

### 4.9 Lección 7 — 🫂 Cuidarte tú, y tu compromiso (4 min)

**Bloque 1 · Anclaje.** *Idea central: la política también es para ti.*

**Bloque 2 · Desarrollo + cita** (`policy-quote`). Política 2025, p. 30:

> *"Cultura de protección entre adultos: la política no solo protege a jóvenes, sino también a los adultos frente a situaciones de riesgo, maltrato, abuso de poder o acoso. Se promoverá una cultura de cuidado horizontal entre pares, donde se puedan expresar preocupaciones de manera segura, evitando relaciones jerárquicas dañinas o punitivas."*

Y el reconocimiento explícito de la misma página: *"Reconocer y garantizar que las personas adultas dentro Scouts de Colombia sean cuidadas, acompañadas y protegidas."*

**Bloque 3 · Lo que esto habilita** (`info-box`). Que un adulto pueda decir *"no me siento cómodo con cómo me habla ese compañero"* sin que sea deslealtad. Que acompañar una revelación **pesa**, y que buscar apoyo después no es debilidad. Cierre con el hook, en eco:

> *"Tu trabajo no era descubrir qué pasó. Era que la persona no estuviera sola. Que tú tampoco lo estés es parte de la misma política."*

**Bloque 4 · Compromiso firmable** (`commitment_adulto-garante-entorno-seguro`). Tres campos, para que sea concreto y mostrable al consejo:

> **Esta semana voy a ______________________ para que mi unidad (o mi equipo de adultos) esté más cerca de la práctica 2+1.**
> **Guardé el acceso al botón en ______________________.**
> **Si mañana alguien me revelara algo, mi primera frase sería: ______________________.**

> **Por qué estos tres.** Uno cambia una conducta, otro deja lista una herramienta y el tercero **ensaya la frase**, que es lo que de verdad falla en el momento real. Los tres son verificables por el propio adulto en una semana.

**Bloque 5 · Mini-quiz (2 preguntas).** La segunda es de síntesis del curso completo — y además el esquema exige mínimo dos por lección, cosa que el build rechazó en el primer intento.

**P1.** Según la Política 2025, la cultura de protección entre adultos busca:
- a) Que los adultos vigilen el comportamiento de sus compañeros y lo reporten.
- b) **Que los adultos también sean cuidados y puedan expresar preocupaciones de forma segura.** ✅
- c) Que los conflictos entre adultos se resuelvan en la Corte de Honor.

**Bloque 6 · Logro.** 🫂 *También me cuido*

---

## 5. Logros (achievements)

| # | Nombre | Emoji | Se desbloquea al terminar |
|---|---|---|---|
| 1 | Ya eres garante | 🛡️ | Lección 1 |
| 2 | La regla de los tres | 👥 | Lección 2 |
| 3 | Sé qué decir | 👂 | Lección 3 |
| 4 | Sé por dónde entra | 🔴 | Lección 4 |
| 5 | Distingo cuidar de callar | 🤐 | Lección 5 |
| 6 | Conozco mi límite | 🚧 | Lección 6 |
| 7 | También me cuido | 🫂 | Lección 7 |

---

## 6. Conexiones cross-course

### 6.1 Dentro del Nivel 1 de esta línea

- **Viene del Curso 02** (`entornos-seguros-politica-asp`): *"Ya sabes qué es un entorno seguro. Ahora vas a saber qué hacer tú cuando deja de serlo."* Sin el 02, este curso se lee como lista de prohibiciones — el vocabulario (peligro, riesgo, abuso, corresponsabilidad) se instala allí.
- **Va al Curso 04** (`diversidad-e-inclusion-movimiento`): *"Un entorno es seguro cuando lo es para todos. Eso es lo que sigue."*
- **Alimenta el Curso 06**: las reflexiones de este curso entran a `politicas-transversales:brujula`, que lee el `brujula-display` del cierre del Nivel 1.

### 6.2 Con la Línea Programa de Jóvenes (ADR-038)

- **Hacia PJ:** la aplicación de 2+1 a planear la actividad vive en `a-salvo-del-peligro-programa`. Este curso enlaza en la Lección 2.
- **Desde PJ:** ese curso **informa que la ruta existe** y enlaza **aquí** para la conducta ante una revelación. Es el enlace más importante de los dos planes, y garantiza **una sola fuente** para el contenido más delicado de la plataforma.

### 6.3 Al Nivel 2 de esta línea

- **Curso 07** (`rutas-de-atencion-primeros-auxilios`): las rutas estatales con nombre —Fiscalía, Policía, Comisaría, Defensoría, ICBF, Personería— y los PAP en profundidad.
- **Curso 08** (`senales-maltrato-negligencia-vif`): las señales, con advertencia de contenido. **Este curso las anuncia y no las da**, y lo dice explícitamente en la intro.

> ⚠️ **Verificar antes de publicar** (CHECKLIST §I): cada anuncio se comprueba **abriendo el curso destino**. Hoy **ninguno de los destinos existe todavía**, así que los anuncios se redactan como *"en el Nivel 2 vas a…"*, sin enlace roto, y se convierten en enlaces cuando esos cursos se construyan.

---

## 7. Tipos de sección utilizados

`info-box` · `paragraph` · `heading` · `policy-quote` · `method-grid` · `mission-box` · `list` · `timeline`

**No se usa** `photo-upload` (sería inapropiado en un curso sobre revelaciones de daño), ni `self-assessment`, ni `plan-builder` (el plan es del Curso 06). El compromiso final usa el mecanismo estándar `commitment_<courseId>` del motor.

---

## 8. Multimedia requerido

**Ninguno, y es una decisión.** Sin imágenes de personas, sin escenas, sin fotografías de archivo — `../../CLAUDE.md` §5.5 y ADR-031 lo prohíben en todo el proyecto, y aquí el rigor es mayor: **un curso sobre abuso ilustrado con rostros inventados es inaceptable**. Solo emoji, las tarjetas del `method-grid` y el `timeline`. El peso visual lo lleva la tipografía y el color de la línea (verde `#4CAF50`).

---

## 9. Validación contra el marco metodológico

| Exigencia | Cómo la cumple este curso |
|---|---|
| **Microlearning** (5–7 min por lección) | 7 lecciones de 4–6 min. La 3 es la más larga (6) por ser la de conducta. |
| **Hook de una frase, repetible** | Enunciado en la intro, referenciado en L3, cierra en L7 en eco. |
| **Patrón anti-definición — variante** | **Variante A** en la Lección 1: la cita del Manual p. 11 es la más densa y jurídica del curso (*"posición de garante… en virtud de la cual"*), y en seco aleja al lector. Las demás lecciones usan **Variante B**: contexto antes de la cita. Registrado aquí por exigencia del `CREAR-CURSO` §6.2. |
| **Quizzes de escenario, no de memoria** | 14 preguntas; **12 plantean una situación** y piden decidir. Solo P2 de L1 y P1 de L7 son de comprensión directa, y ancladas a cita literal. |
| **Un distractor = la idea vieja** | Explícito en L1-P1, L2-P1, L3-P1, L4-P1, L6-P2 y en la de síntesis de L7. En **L4-P2 el distractor es el rol superado**, que es el error más probable de un adulto ya formado. |
| **Sesgo de longitud** | **La primera versión lo tenía: en 9 de 13 preguntas la correcta era la opción más larga (69 %).** Lo detectó la verificación mecánica sobre el JSON, no la lectura. Se reescribieron 9 preguntas alargando distractores —lo que además los hace más plausibles— y acortando tres correctas: **ahora es 0 de 14**. Sin `<strong>` ni `<em>` en ninguna opción. De paso se repartió `correctIndex`, que estaba fijo en 1 en las 13. |
| **Reflexiones aterrizadas** | Las 7 piden un caso concreto, una fecha o una frase propia. Las de L3 y L4 hacen **ensayar**, no solo pensar. |
| **Compromiso firmable y mostrable** | Tres campos verificables en una semana (L7). |
| **Andragogía (Knowles)** | El adulto llega con experiencia: cada lección parte de algo que ya hizo o creyó, no de la norma. L6 reconoce expresamente que **su formación previa quedó desactualizada** en vez de ignorarlo. |
| **Educación por el amor, no por el temor** | La obligación se ancla en la Ley y la Promesa (L1), no en la amenaza de sanción. El «no investigar» se presenta como cuidado, no como prohibición. |

---

## 10. Riesgos de este curso y sus antídotos

| Riesgo | Antídoto |
|---|---|
| **Convertirse en manual de detección** con listas de señales que inviten a diagnosticar | Las señales se **reservan al Nivel 2** y la intro lo dice. Ninguna lección las enumera. |
| **Enseñar un rol que ya no existe** («referente ASP», «Escuchadero», «DURAS-I») | La Lección 6 lo aborda de frente, y los términos se **glosan como de 2021-2023**. El auditor doctrinal lo verifica contra `GLOSARIO-ASC.md` §C-bis. |
| **Que un quiz tenga como correcta una conducta prohibida** | Regla de la línea: **ningún quiz puede tener como respuesta correcta «averiguar», «confrontar» o «resolver internamente»**. Las 13 preguntas se revisaron contra esa regla. |
| **Presentar como norma el orden de la fórmula** | Va marcado como inferencia en §3 y en la L3, pendiente de la consulta a la Comisión Nacional ASP. |
| **Revictimizar con los ejemplos** | Sin nombres, sin detalles, sin escenas. Los casos son de **conducta del adulto**, nunca de la experiencia de la víctima. |
| **Sustituir el módulo oficial** | `info-box` fijo en la intro, con el texto de la exigencia n.º 1 del plan de línea. |
| **La URL del botón cambia y el curso queda mintiendo** | Verificar en vivo antes de publicar; si falla, enseñar la ruta y no la URL. |

---

## 11. Próximos pasos

1. ~~Diseño `.md`~~ — este documento.
2. **Compilar a JSON** en `05-Generador-Cursos/borradores/adulto-garante-entorno-seguro.json`, con **`status: "draft"` explícito**.
3. `node build-course.js adulto-garante-entorno-seguro` → HTML en `02-Plataforma-Web/`.
4. **Las tres auditorías** (ninguna sustituye a otra):
   - `/auditar-curso adulto-garante-entorno-seguro` — doctrinal
   - `/auditar-pedagogia adulto-garante-entorno-seguro` — pedagógica
   - `PRUEBAS-E2E` en verde, local y en CI — funcional
5. **Compuerta humana.** Decisión de Máximo.
6. Solo entonces: `status: "active"`, alta en los **dos** portales, `python ../verificar-consistencia.py`, y verificación **en producción**.

> **Nada de esto se publica** mientras el plan de línea siga en borrador y sin el visto bueno del dueño.

---

_Diseñado el 15 de septiembre de 2026. Citas verificadas contra los PDF de `DOCUMENTOS BASE/`. Ver `../Plan-de-Formacion-Linea-Politicas-Transversales.md` §3.2 (ficha del curso) y `../../DECISIONES.md` ADR-035 y ADR-038._
