# Diseño del Curso 03 — 🤝 El Adulto como Garante: reportar, no investigar

> **Línea Políticas Transversales · Nivel 1 (Ruta de Fundamentación) · `adulto-garante-entorno-seguro`**
> **Vertical slice de la línea.** Es el curso de mayor riesgo doctrinal y mayor valor: si pasa las tres auditorías, el patrón de la línea queda validado (plan de línea, Hito B).
> Diseñado el 15-sep-2026. **Auditado doctrinalmente el mismo día** (`auditor-doctrinal-asc`): APTO CON CORRECCIONES MENORES → correcciones aplicadas → **re-auditoría: contenido APTO**, 0 críticos y 0 mayores nuevos en `.md` y JSON. Lo que quedó pendiente al cerrar no es del contenido: el rótulo de línea del certificado **PDF**, que vive en el núcleo compartido y afecta a tres líneas publicadas.
>
> **Auditoría pedagógica hecha el 15-sep-2026, y sus seis reescrituras con carga doctrinal re-arbitradas por el `auditor-doctrinal-asc`** (una —R6— **rechazada** y sustituida por otra que no obliga al estudiante a juzgar qué es reportable). **Correcciones aplicadas ese mismo día: las 10 reescrituras de quiz (R1–R10) y los 13 hallazgos estructurales (H1–H13).** Las dos **compuertas de paridad** que `build-course.js` estrenó ese día quedan en **0 de 14** las dos.
>
> **Dos cosas quedaron señaladas para el `auditor-doctrinal-asc`, y no son del corrector:** (1) al absorber el `paragraph` de la frase modelo en el `mission-box` de la L3 (H5-b), el curso **perdió la atribución expresa a la Guía** de la regla «no prometas secreto»; (2) el recorte de la L6 (H6) se aplicó **fundiendo** los dos párrafos y **no suprimiendo** el primero, porque el texto literal del informe se llevaba por delante la cita de la Guía p. 15 y la frase *"el consejo sigue siendo bueno; el destinatario cambió"*. Ambas van explicadas en su sitio.
>
> **Todas las citas de este documento se verificaron contra el PDF fuente**, no contra un informe ni contra otro curso. Donde el texto extraído traía artefactos de composición (la Política 2025 se extrae con letras espaciadas), se normalizó para leer, nunca para citar de memoria.

---

## 1. Ficha del curso

| Campo | Valor |
|---|---|
| `courseId` | `adulto-garante-entorno-seguro` |
| Título | 🤝 El Adulto como Garante: reportar, no investigar |
| Duración | 40 minutos |
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
   - *Guía de Prevención y Atención del Daño (2020-2021), pp. 21–22; Política 2025, p. 44.*
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
| 0 | 👋 Antes de empezar | 3 | El hook, el alcance y **lo que este curso NO es** |
| 1 | ⚖️ Posición de garante: qué significa en la ley y en la Promesa | 5 | Ya eres garante; no es un cargo que te den |
| 2 | 👥 La práctica 2+1: qué es, por qué, y cómo se ve entre adultos | 5 | La medida te protege **a ti** también |
| 3 | 👂 Si alguien te cuenta algo | 7 | La conducta concreta: qué hacer y qué no |
| 4 | 🔴 El botón «Me Pongo A Salvo del Peligro» | 5 | Dónde va el reporte y qué pasa después |
| 5 | 🤐 Confidencialidad no es secreto | 5 | La distinción que más se confunde |
| 6 | 🚧 Lo que NO te corresponde (y a quién sí) | 4 | El límite, con nombre y apellido de cada instancia |
| 7 | 🫂 Cuidarte tú + compromiso | 6 | La política también te protege a ti · compromiso firmable |

**Total: 40 minutos**, que es lo que declara la ficha. *(Corregido — hallazgo H6. El reparto anterior sumaba 37 contra una ficha que decía 35: ni cuadraba consigo mismo ni con la ficha.)* El nuevo reparto refleja lo que la auditoría pedagógica movió: la **intro +1** (la regla del 70 % y el mapa de logros), la **L3 +1** (el eco del hook, la frase modelo dentro del `mission-box` y la tarjeta de bolsillo), la **L6 −1** (el recorte de los dos párrafos del Comité) y la **L7 +2** (las dos cajas de cuidado y el compromiso reformulado). La L3 sigue siendo la más larga, y ahora por más margen — es la que el curso quiere que se lea dos veces.

---

### 4.2 Lección 0 — 👋 Antes de empezar (2 min · `isIntro: true`)

**Idea central:** este curso te va a quitar trabajo, no a dártelo.

Apertura con el hook. Luego, el `heading` **«Tres cosas antes de entrar»** y tres avisos que van en `info-box` y que **no se negocian**. **El orden es el de abajo** (hallazgo H8 de la auditoría pedagógica: el aviso de contenido va primero, porque llega tarde si el lector ya leyó los otros dos):

1. **Aviso de contenido:** el curso habla de situaciones de daño a niñas, niños y jóvenes en términos sobrios, sin casos gráficos y sin detalles. Si en algún momento te remueve algo propio, para. La Lección 7 habla justamente de eso.
2. **Este curso no sustituye ni certifica el módulo oficial de A Salvo del Peligro** que exige la ASC. Aquí se prepara, se explica y se aterriza; el certificado que la Asociación exige lo emite la Asociación. *(Política 2025, pp. 29 y 33.)*
3. **No vas a encontrar listas de señales de abuso.** No por pudor: porque reconocer señales es otro oficio, y una lista sin acompañamiento invita justo a lo que la Política prohíbe — diagnosticar. Ese contenido **tendrá** su propio curso en el **Nivel 2 de esta línea**, con la advertencia y el cuidado que pide. Aquí se enseña **conducta**.

> ⚠️ **Los punteros van en futuro** (hallazgo H4). Ninguno de los cursos que este curso anuncia existe todavía, así que el curso **no puede anunciarlos en presente**. Vale para este aviso y para el enlace a Programa de Jóvenes de la Lección 2.

**Cierre de la intro — dos `paragraph` añadidos por la auditoría pedagógica:**

**(H9) La regla del 70 %, explicada antes de que confunda.** Con dos preguntas por lección, el «70 %» que muestra el motor significa **las dos**. Decirlo aquí evita que el adulto lo lea como que puede fallar una:

> *"Cada lección cierra con dos preguntas. Hay que acertar las dos para pasar — si fallas una, el sistema te dirá que necesitas «70 %», pero con dos preguntas eso significa las dos. No es examen: puedes reintentarlo las veces que quieras, y fallar es parte de aprender esto."*

**(H10) Los logros como mapa, no como premio.** Es la última sección del módulo:

> *"Los siete logros de abajo son el mapa: uno por lección, y cada uno dice lo que vas a poder hacer al terminarla. Empieza por el primero."*

---

### 4.3 Lección 1 — ⚖️ Posición de garante (5 min)

**Bloque 1 · Anclaje.** *Idea central: «garante» no es un cargo que alguien te entrega. Es una posición jurídica en la que ya estás por acompañar menores de edad.*

**Bloque 2 · Desarrollo.** Abrir por la vía cotidiana: un dirigente cree que su responsabilidad empieza cuando pasa algo. En realidad empieza antes — la ley le atribuye el **deber de obrar para impedir** que pase. No es una opinión de la Asociación: es la figura de la posición de garante del derecho penal colombiano, que el Manual Operativo recoge.

**Bloque 3 · Cita oficial** (`policy-quote`, plegable). Manual Operativo ASP (V1.0, feb-2023), p. 11:

> *"los adultos en el movimiento juegan un papel muy importante, no solo porque son las personas que acompañan y orientan el proceso educativo… sino también porque **asumen la posición de garante en relación con los sujetos de programa menores de edad**, en virtud de la cual, **tienen el deber de obrar para impedir que se materialicen riesgos, peligros o delitos que pueden ser evitables** y reparar los daños causados con ocasión a las actividades scouts."*

> ⚠️ **Regla de cita para todo el curso.** La fuente habla **en plural, de todos los adultos**. Si el texto del curso lo lleva al singular, la adaptación se marca entre corchetes — *"[el adulto] asume la posición de garante…"* — **nunca cambiando el verbo dentro de las comillas.** Este fue el hallazgo **M1** de la auditoría del Plan de Línea.

**Bloque 4 · Reformulación accesible** (`info-box`). *"En simple: si acompañas menores de edad en nombre de la Asociación, la ley espera de ti que actúes para evitar el daño. No que lo resuelvas — que actúes."*

**Bloque 4-bis · La otra mitad, que es scout.** La obligación no nace solo del Código Penal. Política 2025, p. 21:

> *"Los principios y valores contenidos en la Ley y la Promesa Scout se constituyen como la principal herramienta para la existencia de entornos seguros dentro del Movimiento Scout en todos sus niveles y áreas…"*

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

**P2.** *(Reescrita — hallazgo R1.)* En una salida ves que la puerta del bus queda sin asegurar y los chicos entran y salen solos. No ha pasado nada, y el transporte no está a tu cargo. ¿Qué te pide la posición de garante?
- a) **Actuar ya para cerrar ese riesgo y avisar a quien corresponda, aunque no haya pasado nada.** ✅
- b) Esperar a que ocurra algo concreto: hasta entonces no hay nada que reportar ni corregir.
- c) Anotarlo para comentarlo luego con el responsable del transporte, que es de quien depende.

> **Por qué se reescribió.** Era la pregunta más de memoria del curso: recitaba la cita del Manual p. 11. Ahora **pone a prueba las dos mitades de la figura** que la lección acaba de enseñar — el deber es **de acción**, y **no depende de un encargo formal** («el transporte no está a tu cargo»). El distractor (b) es el error que abre la lección: *"mi responsabilidad empieza cuando pasa algo"*. El (c) es el más fino: hacer algo, pero tarde y por la vía cómoda.
>
> **Nota de construcción:** longitudes 90 / 88 / 90 y tres aperturas distintas (Actuar / Esperar / Anotarlo). El sesgo de **posición** lo neutraliza el motor barajando; el de **longitud** y el de **apertura** no, porque viajan con la opción. **Ninguna opción lleva `<strong>` ni `<em>`:** se renderizan en negrita y delatan la respuesta.

**Bloque 7 · Logro.** 🛡️ *Ya eres garante*

---

### 4.4 Lección 2 — 👥 La práctica 2+1 (5 min)

**Bloque 1 · Anclaje.** *Idea central: la regla de los tres. Y protege a dos personas, no a una.*

**Bloque 2 · Desarrollo.** Presentar 2+1 como lo que es: una medida simple, memorizable, que elimina de raíz la situación en la que la palabra de un adulto queda contra la de un menor. El giro pedagógico está en la segunda mitad: **también te protege a ti**. Un adulto que nunca se queda a solas con un menor no solo previene el daño — se previene de una acusación imposible de desmentir.

**Bloque 3 · Cita oficial** (`policy-quote`). Política 2025, p. 26:

> *"La estrategia 2+1 es una medida de protección utilizada para evitar posibles situaciones de riesgo, abuso o malentendidos. Consiste en asegurar que siempre haya al menos tres personas presentes durante las actividades, interacciones o acompañamientos: dos personas adultas responsables y una persona menor de edad, o una persona adulta y dos menores, tanto en comunicaciones entre adultos - adultos, adultos - jóvenes, jóvenes - jóvenes"*

**Bloque 4 · Aterrizaje al plano del adulto** (`method-grid`, 4 tarjetas). Escenarios de **cualquier adulto**, no solo del que dirige unidad:

| Situación | Cómo se ve 2+1 |
|---|---|
| 💬 Un protagonista te escribe por WhatsApp a las 10 de la noche | Respondes en el grupo, o sumas a otro adulto al chat. La conversación privada adulto-menor es justo lo que la medida evita. |
| 🚗 Te toca llevar a un chico a su casa porque no lo recogieron | Llamas a otro adulto o a la familia antes de arrancar. Nunca el traslado a solas. |
| 🗣️ Necesitas hablar en privado con un protagonista sobre algo delicado | En un lugar visible, con otro adulto cerca. Privado no es aislado. |
| 🧑‍🤝‍🧑 Una reunión de consejo donde un adulto queda a solas con otro que le reporta | También aplica: la Política extiende la medida a las comunicaciones **entre adultos**. |

> 🔗 **Aquí termina este curso (ADR-038).** Cómo se aplica 2+1 **al planear una actividad** —la Hoja de Ruta de Reunión, la pernocta, el transporte, la actividad acuática— lo **enseñará** el curso `a-salvo-del-peligro-programa` de la Línea Programa de Jóvenes (hallazgo H4: **en futuro**, porque ese curso todavía no existe). Este curso **enlaza y no reexplica**: si el lector dirige unidad, el enlace le dice exactamente a qué va.

**Bloque 5 · Reflexión.**

> *"Escribe una situación real de las últimas semanas —tuya o que hayas visto— en la que la práctica 2+1 no se cumplió. No para señalar a nadie: para nombrar qué habría hecho falta. ¿Una llamada? ¿Cambiar de lugar? ¿Sumar a alguien al chat?"*

**Bloque 6 · Mini-quiz (2 preguntas).**

**P1.** Un dirigente lleva en su carro a una protagonista que quedó sin quien la recogiera. Va solo con ella. ¿Qué dice la práctica 2+1?
- a) **Que no se cumple, y que hay que sumar a otro adulto o a un familiar antes de arrancar.** ✅
- b) Que no se cumple, pero la urgencia lo justifica y basta con avisar después al Jefe.
- c) Que sí se cumple, porque dejarla sola en el lugar habría sido claramente peor para ella.

> Distractor (b) = la idea vieja *"la urgencia justifica saltarse la medida"*. Es la más tentadora y por eso tiene que estar.
>
> **Reescritas las opciones (hallazgo R8), no el enunciado.** Antes la correcta era la única que empezaba por «No» y las otras dos por «Es»: se acertaba sin leer. Ahora **dos opciones comparten la polaridad de la correcta** —(a) y (b) admiten las dos que 2+1 no se cumple— y la diferencia está en qué se hace con eso, que es justo lo que la lección enseña. Quien adivine por «la que no se parece» elige (c) y falla. Longitudes 86 / 83 / 88.

**P2.** *(Reescrita — hallazgo R2 de la auditoría pedagógica, con el ajuste del `auditor-doctrinal-asc`.)* Un dirigente con veinte años de trayectoria te dice que a él la práctica 2+1 le sobra. ¿Qué le respondes?
- a) Que tiene parte de razón: con esa trayectoria, el riesgo de un malentendido en su caso es mínimo.
- b) **Que 2+1 no se gana con años: protege a los chicos, y lo protege a él, porque sin testigos su palabra queda sola.** ✅
- c) Que la medida es para las actividades con menores de edad, no para los chats ni las reuniones entre adultos.

> **Por qué se reescribió.** La versión anterior —*"¿a quién protege la práctica 2+1?"*— era de memoria y además la única que empezaba distinto a las otras dos («a» frente a «solo»): se acertaba sin leer. Ahora las tres abren igual.
>
> **El distractor (c) es el error real**, y la p. 26 lo cierra con todas las letras: *"tanto en comunicaciones entre adultos - adultos, adultos - jóvenes, jóvenes - jóvenes"*. De paso evalúa la cuarta tarjeta del `method-grid`, que hasta ahora no se preguntaba en ningún sitio.
>
> **Descartado por el auditor doctrinal:** el distractor que decía *"la medida protege a los chicos y su experiencia no cambia lo que pide la política"*. Bajo la p. 26 esa respuesta es **suficiente**, no incompleta; lo que la haría inferior sería un énfasis nuestro, no la doctrina.
>
> **Control de longitud:** 97 / 112 / 108. La correcta quedaba a exactamente 12 caracteres de la siguiente —el umbral de la compuerta— así que se **alargó el distractor (c)** («con menores» → «con menores de edad»). Nunca se toca la correcta.

**Bloque 7 · Logro.** 👥 *La regla de los tres*

---

### 4.5 Lección 3 — 👂 Si alguien te cuenta algo (6 min)

> Es **la lección más importante del curso** y la que más tiene que ensayarse. Todo lo demás es marco; esto es lo que el adulto va a hacer con las manos temblando.

**Bloque 1 · Anclaje.** *Idea central: en los primeros dos minutos no se investiga nada. Se sostiene a una persona.*

**Bloque 2 · Desarrollo.** Reencuadre del hook. Lo que el adulto quiere hacer —preguntar, confirmar, entender— es lo que **no** debe hacer, y no por trámite: porque interrogar revictimiza y puede arruinar la actuación de quien sí tiene que investigar. La Guía lo dice sin rodeos (p. 15): interrogar *"inquisitivamente"* a la presunta víctima *"se puede convertir en otra vulneración de derechos"*.

**Bloque 2-bis · Cita oficial** (`policy-quote`). Guía de Prevención y Atención del Daño (2020-2021), p. 15:

> *"Es importante que en ningún momento se le falte al respeto a la presunta víctima, juzgando, poniendo en evidencia o interrogando inquisitivamente al niño, la niña, adolescente o joven, o adulto, ya que esto se puede convertir en otra vulneración de derechos para los mismos…"*

> ⚠️ **El corte va marcado, y se explica** (hallazgo M2 de la auditoría del curso). La frase de la Guía no termina ahí: sigue con coma —*", las preguntas deben ser claras y concisas y solo para tomar información que en realidad ayude a esclarecer la situación."*—, justo donde la Guía de 2021 todavía admitía preguntar. Por eso la cita cierra con **puntos suspensivos** y debajo va un `info-box`: *"La Guía es de 2021 y todavía contemplaba que preguntaras un poco. La Política de 2025 cerró esa puerta: tu función no es investigativa. Manda la Política."* Es el **ADR-035** dicho en cristiano, y refuerza la Lección 6.

**Bloque 3 · Dos columnas** (`method-grid`), tomadas literalmente de la Guía, pp. 21–22:

| ✅ Qué hacer | ❌ Qué no hacer o decir |
|---|---|
| Intentar un lugar tranquilo, minimizando distracciones (8) | No presionar a la persona para que cuente su historia (1) |
| Hacerle entender que estás escuchando — asentir, *"hmmm…"* (11) | No interrumpir ni apurar; no mirar la hora (2) |
| Tener paciencia y mantener la calma (12) | No juzgar lo que hizo o dejó de hacer, ni sus sentimientos (4) |
| Dejar espacios para el silencio (14) | No inventar cosas que no sabes (5) |
| Promover la **desculpabilización** de la víctima (3) | **No hacer falsas promesas ni dar falsos argumentos tranquilizadores (9)** |
| Respetar la privacidad y la confidencialidad (9) | No actuar como si tuvieras que resolverle todos los problemas (10) |

**Bloque 4 · El punto donde casi todos fallan** (`mission-box`). *"No prometas secreto."* Es el ítem 9 de «qué no hacer» de la Guía (pp. 21–22) y es la promesa más natural del mundo cuando un chico te dice *"pero no le digas a nadie"*.

**(H5-b) La frase modelo entra DENTRO del `mission-box`**, y el `paragraph` que la llevaba suelta **se elimina, absorbido**. La razón: la frase es lo único que el adulto necesita tener a mano en el momento, y suelta en un párrafo aparte se leía como comentario. Texto:

> **No prometas secreto.** Cuando un chico dice «pero no le digas a nadie», la promesa sale sola. Y es la única de esta lista que, si la haces, te obliga después a romperla o a fallarle. Por eso la Guía la pone entre las cosas que **no** hay que hacer (ítem 9, pp. 21–22): *no hagas falsas promesas ni des falsos argumentos tranquilizadores*. La salida honesta cabe en una frase, y es esta:
>
> *«Voy a cuidar lo que me cuentes y no se lo voy a andar contando a cualquiera. Pero si hay alguien que tiene que saberlo para poder ayudarte, a esa persona sí se lo voy a decir.»*
>
> Suena a que va a cerrarse. Casi siempre pasa lo contrario: los chicos agradecen que no les mientan.

> ⚠️ **Atribución que se perdió al absorber el párrafo, y que hay que vigilar.** La versión anterior decía *"La Guía lo pone entre las cosas que no hay que hacer: no hagas falsas promesas ni des falsos argumentos tranquilizadores"*. El texto literal del informe pedagógico **no la conserva**, y con ella el curso pierde la **única atribución expresa** de la regla «no prometas secreto» a la Guía (ítem 9, pp. 21–22). La regla sigue enseñada y el `method-grid` de esta misma lección sigue saliendo de la Guía, así que **no se afirma nada sin fuente**; pero la fuente dejó de estar a la vista. **Queda señalado para el `auditor-doctrinal-asc`.**

La Lección 5 desarrolla por qué.

**(H5-a) El eco del hook, en `blockquote`**, inmediatamente después del párrafo *"Cuando un chico te cuenta algo grave…"*. El hook se enunciaba en la intro y cerraba en L7, pero **no aparecía en la lección donde el adulto lo necesita**:

> *"Tu trabajo no es descubrir qué pasó. Tu trabajo es que la persona no esté sola y que el reporte llegue."*

**(H5-d) La tarjeta de bolsillo** (`mission-box`), última sección antes de la reflexión. Es el cierre operativo de la lección más importante del curso:

> **Si pasa hoy.**
> 1 · Escucha. No preguntes.
> 2 · No prometas secreto — usa tu frase.
> 3 · Que la persona no quede sola.
> 4 · Reporta por el botón. Hoy, no cuando estés seguro.
> 5 · No se lo cuentes a nadie más que a quien deba saberlo.
>
> Cinco líneas. Si solo te llevas una pantalla de este curso, que sea esta — hazle captura.

**Bloque 5 · La fórmula** — **en dos `info-box`, no en uno** (hallazgo H5-c de la auditoría pedagógica: la caja única metía la fórmula y la salvedad del orden en el mismo bloque, y la fórmula es justo lo que hay que poder recordar bajo estrés).

**Caja 1 — qué significa cada verbo:**

> **Protege → Reporta → Acompaña sin investigar.**
>
> **Proteger** es lo inmediato: que la persona esté a salvo ahora — y que lo que hagas tú no le añada daño. **Reportar** es que el caso empiece. **Acompañar** es quedarte cerca, sin volver a preguntar.

> ✅ **La definición de «Proteger» la ajustó el `auditor-doctrinal-asc`.** A la versión pedagógica le faltaba la segunda mitad, que es justo el hook del curso: *"Evitar que nuestras acciones provoquen mayor peligro o daño"* (Guía de Prevención y Atención del Daño, 2020-2021, pp. 19–20). Sin ella, «proteger» se lee como «haz algo», que es exactamente el impulso que este curso viene a reencauzar.

**Caja 2 — los dos destinos**, con la marca de honestidad sobre el orden (§3).

**Bloque 6 · Reflexión.**

> *"Imagina que mañana un protagonista de tu unidad te dice «te voy a contar algo, pero no le digas a nadie». Escribe —y dila en voz alta si puedes— la frase exacta con la que le vas a responder. No la busques perfecta: búscala tuya. Lo que falla en el momento real no es el conocimiento, es no tener las palabras listas. **Antes de pasar, léela otra vez y comprueba tres cosas: que no prometa secreto, que no haga ninguna pregunta, y que no prometa un resultado que no depende de ti. Si falla alguna, reescríbela.**"*

> **Por qué así:** el marco metodológico exige reflexiones que fuercen un caso concreto. Esta además **hace ensayar la frase**, que es lo que falla en el momento real — no el conocimiento, sino no tener las palabras listas.
>
> **La autocomprobación final la añadió la auditoría pedagógica**, que señala esta como la reflexión más valiosa del curso. Sin ella, el adulto escribe su frase y nadie le dice si sirve: los tres chequeos —secreto, pregunta, resultado— son exactamente los tres errores que la lección acaba de nombrar, y convierten la reflexión en la única del curso que **se corrige sola**.

**Bloque 7 · Mini-quiz (2 preguntas).**

**P1.** Un protagonista te dice: *"te cuento algo si prometes no decirle a nadie."* ¿Qué haces?
- a) Prometes que no dirás nada: si no se lo prometes no va a contarte, y perderás la oportunidad de ayudarlo.
- b) **Le dices que vas a cuidar lo que te cuente, y que si alguien debe saberlo para ayudarlo, se lo dirás.** ✅
- c) Le pides que te cuente primero y después deciden entre los dos qué hacer con esa información.

> Distractor (a) = la idea vieja, y es la que más gente elige: la promesa parece el precio de la confianza.

> **Se cuida la información, no la persona** (hallazgo m7). Una versión acortada de la correcta decía *"vas a cuidarlo"*, que promete otra cosa — y más de lo que el adulto puede prometer. Se restaura *"vas a cuidar lo que te cuente"*. **Control de longitud:** al restaurarla la correcta quedó en 101 caracteres y pasaba a ser la más larga de su pregunta, así que se **alargó el distractor (a)** hasta 105 — nunca se acorta la correcta. (c) quedó en 93.

**P2.** Después de una revelación, el primer impulso de muchos adultos es preguntar detalles para entender bien qué pasó. Según esta lección, ¿por qué no?
- a) **Porque interrogar revictimiza y puede dañar la actuación de quien sí debe investigar.** ✅
- b) Porque el protocolo lo prohíbe y hay que cumplirlo, aunque uno no esté de acuerdo.
- c) Porque no es asunto suyo y podría terminar metido en un problema legal bien serio.

> **Reescritos los distractores (hallazgo R7).** El nuevo (b) es **el adversario declarado del curso**: *"no investigar es una orden burocrática que te deja de brazos cruzados"*. Es la lectura que el hito del curso (§3) tiene que derrotar, y hasta ahora no se evaluaba en ninguna pregunta. El (c) conserva el error de «esto no es asunto mío». Longitudes 85 / 82 / 82, las tres abren por «Porque».

**Bloque 8 · Logro.** 👂 *Sé qué decir*

---

### 4.6 Lección 4 — 🔴 El botón «Me Pongo A Salvo del Peligro» (5 min)

**Bloque 1 · Anclaje.** *Idea central: hay una sola puerta oficial, está abierta siempre, y no tienes que saber nada más para tocarla.*

**Bloque 2 · Cita oficial** (`policy-quote`). Política 2025, p. 44:

> *"La ruta oficial para presentar un reporte de incidentes es el botón «Me Pongo A Salvo del Peligro», el cual se encuentra ubicado en la página de Scouts de Colombia; allí se diligencia el formulario, disponible en todo momento y desde cualquier dispositivo. En eventos nacionales se dispondrá de códigos QR de fácil acceso, que remitan al formulario de reporte de incidentes."*

> ⚠️ **Nombre — y solo este.** La pieza con el código QR que publica la biblioteca aparece en la biblioteca catalogada como *"Me Siento a Salvo del Peligro"*, pero lo que la pieza imprime es *"Aquí estoy para que te sientas A Salvo del Peligro"*. Es el **título con que la biblioteca la cataloga**, no un eslogan y no el nombre del mecanismo. El curso enseña **«Me Pongo A Salvo del Peligro»**, que es como lo nombra la Política. *(Hallazgo m8 de la auditoría del plan.)*

> ⚠️ **Sobre la URL.** El proyecto tiene registrado `https://forms.gle/PPgbS1U4ip5t5Q1PA` en `../CLAUDE.md` §8, pero **ninguna fuente oficial la imprime**: la Política solo dice *"en la página de Scouts de Colombia"*. **Verificar en vivo antes de publicar.** Si no responde, el curso enseña **la ruta** —entrar por `scout.org.co` y buscar el botón— y no la URL, que puede cambiar sin avisarnos.

**Bloque 3 · Qué pasa después** (`timeline`, **3 pasos**). Es la parte que nadie explica y la que más tranquiliza al que duda si reportar. Política 2025, Anexo 3, p. 44:

1. **Análisis del incidente** — *"Por el Comité de Gestión de Incidentes"*
2. **Toma de decisiones** — *"Determinar acciones apropiadas"*
3. **Activación de rutas** — *"Implementar rutas internas/externas"*

> ⚠️ **Son tres, y ahí termina la lista.** El Anexo 3 de la p. 44 numera **exactamente tres** pasos. El párrafo de garantías **no es un cuarto paso**: empieza *"**Durante el trámite**…"* y es transversal a los tres. Y la palabra «**Seguimiento**» no aparece en la p. 44 — viene del Manual 2023 §8.4, que es otro documento y otro plano. *(Hallazgo M1 de la auditoría del curso.)*

**Bloque 3-bis · Las garantías** (`info-box`, inmediatamente debajo del `timeline`). Texto del curso:

> *"Y durante todo el trámite, tres garantías: que se respete el debido proceso, que la información se maneje con confidencialidad, y que se cuide a las víctimas."*

Respaldo textual, Política 2025, p. 44:

> *"Durante el trámite, se garantiza el respeto al debido proceso y la imparcialidad en la valoración de los hechos, se mantiene la confidencialidad en el manejo de la información, salvaguardando la dignidad de todas las personas involucradas, y se establecen estrategias de sensibilización y de cuidado de las víctimas."*

**Bloque 4 · Reformulación** (`info-box`). *"Tú llenas un formulario. A partir de ahí, el caso lo lleva gente designada para eso. No tienes que saber cómo sigue — tienes que asegurarte de que empiece."*

**Bloque 4-bis · Y no esperes a estar seguro** (`paragraph`). Se ancla en la frase más corta y más fuerte que el curso ya cita — Manual Operativo de la Política A Salvo del Peligro (2023), p. 22: *"todas las situaciones deberán reportarse"*. Se reporta lo que se identifica, no lo que se confirma.

> ⚠️ **Sin la etiqueta «principio de precaución»** (hallazgo m5). El principio existe —*Manual Operativo* §5.3, p. 9—, pero **la palabra «precaución» no aparece en la Política 2025**, y el ADR-035 obliga a citar Manual y Guía con título y año. La frase del Manual p. 22 dice lo mismo, en cristiano y con fuente.

**Bloque 5 · Reflexión.**

*(Reescrita — hallazgo H7.)*

> *"Entra ahora mismo a scout.org.co y busca el botón. No reportes nada: solo localízalo. Anota en una frase dónde está y cuánto te tomó encontrarlo, y guárdalo en los favoritos de tu teléfono. **Si a los tres minutos no aparece, para de buscar** y anota «no lo encontré»: ese dato vale tanto como el otro. La política se compromete a que estos canales estén «claramente comunicados a la membresía», así que si no lo encuentras no estás fallando tú. En ese caso escribe también a quién le vas a preguntar esta semana — tu Jefe de Grupo o tu comisionado."*

> **Por qué así:** convierte una lección informativa en un ensayo real. Y si varios estudiantes no lo encuentran, la línea se entera de algo que conviene reportar a la DNDI.
>
> **El problema que arregla H7:** la versión anterior podía **terminar en fracaso**. Un adulto que no encuentra el botón cerraba la lección del botón sintiendo que él había fallado — justo en la lección que existe para quitarle esa fricción. Ahora la reflexión (1) **pone un tope de tiempo**, (2) **le devuelve la culpa a quien le toca** y (3) **deja una acción siguiente** aunque la búsqueda falle.
>
> ✅ **Respaldo con fuente, aportado por el `auditor-doctrinal-asc`:** la Política p. 32 compromete a que los canales *"deberán estar claramente comunicados a la membresía"*. Por eso la frase «no estás fallando tú» **no es consuelo, es doctrina**: si el adulto no lo encuentra, lo que falla es algo que la política manda hacer.
>
> ⛔ **Y lo que NO se ofrece:** la mesa de ayuda `sos.scout.org.co` **no es canal ASP** y ninguna fuente la vincula al reporte. No se menciona.

**Bloque 6 · Mini-quiz (2 preguntas).**

**P1.** ¿Cuándo se reporta por el botón?
- a) Cuando ya se confirmó, con algún grado de certeza, que el hecho efectivamente ocurrió.
- b) **Cuando se identifica el incidente, sin esperar a estar seguro de lo que pasó realmente.** ✅
- c) Cuando el Jefe de Grupo lo autorice, después de revisar el caso con calma y por escrito.

> Distractor (a) = *"esperar a estar seguro"*, que es la puerta de atrás del «primero averiguo». El Manual lo cierra en cinco palabras: *"todas las situaciones deberán reportarse"* (p. 22).
>
> **Reescritas las opciones (hallazgo R9), no el enunciado ni el sentido.** La correcta empezaba por «Siempre» y las otras dos por «Cuando»: era la oveja negra más fácil del curso. Ahora **las tres abren por «Cuando»** y la afirmación doctrinal es idéntica. Longitudes 86 / 87 / 88.

**P2.** *(Reescrita — hallazgo R3.)* Después de que reportaste por el botón, tu Jefe de Grupo te dice: *"pásame lo que sepas, que yo le hago seguimiento al caso"*. ¿Qué es lo correcto?
- a) **Que el caso lo analiza el Comité de Gestión de Incidentes y el seguimiento no le toca a él.** ✅
- b) Que le pases la información, porque es el responsable de la unidad y le toca saber qué pasa.
- c) Que el seguimiento lo lleve el referente regional de A Salvo del Peligro de tu misma región.

> **Por qué se reescribió.** La versión anterior —*"¿quién analiza el incidente?"*— preguntaba un nombre. Esta pone al adulto en la situación en la que ese nombre importa: la presión de un superior, que es como el error ocurre de verdad. El distractor (c) **conserva el rol superado**, que era el valor de la pregunta vieja.
>
> ⚠️ **Advertencia doctrinal incorporada (`auditor-doctrinal-asc`).** Ningún distractor puede dejar la impresión de que **informar** al Jefe de Grupo esté prohibido: la Guía p. 15 recomienda *"acercarse de inmediato a la adulta o adulto voluntario de confianza"*, y lo que la Política prohíbe es **gestionar el reporte** (p. 29), no enterarse. Por eso la correcta dice *"el seguimiento **no le toca a él**"* y **no** «no le digas nada». Longitudes 91 / 92 / 92, las tres abren por «Que».

**Bloque 7 · Logro.** 🔴 *Sé por dónde entra*

---

### 4.7 Lección 5 — 🤐 Confidencialidad no es secreto (5 min)

**Bloque 1 · Anclaje.** *Idea central: cuidar la información y ocultarla son cosas opuestas, aunque se parezcan.*

**Bloque 2 · Desarrollo.** La confusión es honesta: el adulto que calla suele creer que está protegiendo. La Política corta por lo sano (p. 21):

> *"todas las personas en Scouts de Colombia tienen así la obligación de informar, derivar o reportar según sea el incidente, cualquier acción que represente un posible delito o vulnere la dignidad de sus miembros, a los Sistemas estatales de Salud, Protección y/o Justicia, así como a los órganos disciplinarios y de protección de Scouts de Colombia. En ese sentido, **no cabrá la posibilidad de guardar ningún secreto**, ni será permitido ocultar información, en cada una de las circunstancias anteriormente mencionadas."*

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

> *"¿Has estado en una conversación de adultos scouts donde se comentó el caso de un chico con gente que no tenía por qué saberlo? No hace falta que des nombres ni detalles. Escribe qué habrías dicho para cortar esa conversación, en una frase que puedas usar la próxima vez. **Y si nunca te ha pasado, mejor: escribe la frase igual, para tenerla lista el día que pase.**"*

> **(H11) La rama del «si nunca te ha pasado».** Sin ella, la reflexión **excluye** a quien no tiene el recuerdo —típicamente el adulto nuevo, que es justo quien más necesita ensayar la frase— y lo deja sin nada que escribir. Con ella, todo el mundo produce la misma salida: una frase lista.

**Bloque 6 · Mini-quiz (2 preguntas).**

**P1.** Un dirigente lleva un caso al consejo de grupo *"para que entre todos decidan qué hacer"*. ¿Es correcto?
- a) No, salvo que el consejo firme antes un acta de confidencialidad sobre ese caso.
- b) **No: amplía el círculo a quien no debe intervenir, y eso es ocultar mal, no cuidar.** ✅
- c) Sí: el consejo es el órgano de la unidad y debe conocer lo que pasa dentro de ella.

> **Reescritas las opciones (hallazgo R10).** Antes había dos «Sí» y un «No», y el «No» era la correcta: la polaridad delataba. Ahora hay **dos «No» y un «Sí»**, y el señuelo es el «Sí». El nuevo (a) es además un error real y frecuente —creer que un acta de confidencialidad legitima ampliar el círculo—, y no lo legitima: lo que la Guía p. 15 limita es **a quién** se informa, no con qué papel firmado. Longitudes 80 / 82 / 83.

**P2.** *(Reescrita — hallazgo R4, con la correcta que fijó el `auditor-doctrinal-asc`.)* La mamá de una protagonista te pide, llorando, que no reportes lo que te contó su hija: dice que la familia lo va a manejar en casa. ¿Qué haces?
- a) **Reportas igual. No le prometes que no lo harás: le dices que hay personas que tienen que saberlo para poder ayudar a su hija, y que eso no está en tus manos decidirlo.** ✅
- b) Respetas la decisión de la familia, que es la que tiene la patria potestad sobre la menor: si ellos dicen que lo van a manejar en casa, no te corresponde a ti pasar por encima.
- c) Esperas unos días a ver si la familia lo resuelve por su cuenta, y reportas solo si al cabo de esa semana ves que no hicieron nada y la niña sigue exactamente igual.

> **Por qué se reescribió.** La versión anterior preguntaba por la regla en abstracto (*"¿cabe guardar un secreto?"*). Esta pone la regla donde de verdad se pone a prueba: **la presión no viene de un malo, viene de una madre llorando**, que es como este error ocurre. Núcleo doctrinal confirmado en la Política p. 21 (*"no cabrá la posibilidad de guardar ningún secreto"*).
>
> ⚠️ **El ajuste del auditor doctrinal no es menor y no se puede deshacer.** La correcta que proponía la auditoría pedagógica terminaba en *"y se lo dices de frente"*. **Se quitó**: no tiene fuente; en un caso intrafamiliar anunciar el reporte **puede volverse contra la niña** (Guía §6.4); y decidir a quién se avisa es **gestión del caso**, que la p. 29 saca expresamente de la función del adulto.
>
> **Y el enunciado no dice qué contó la hija**, por la **regla 4 de la línea** (casos anonimizados y no revictimizantes): el caso es de **conducta del adulto**, nunca del relato de la víctima.
>
> **Control de longitud:** la correcta viene del dictamen y **no se toca**, así que se **alargaron los dos distractores** hasta emparejar — 167 (correcta) / 176 / 165. Queda **en medio**, ni la más larga ni la más corta. Aperturas Reportas / Respetas / Esperas, las tres distintas.

**Bloque 7 · Logro.** 🤐 *Distingo cuidar de callar*

---

### 4.8 Lección 6 — 🚧 Lo que NO te corresponde (y a quién sí) (5 min)

**Bloque 1 · Anclaje.** *Idea central: hay cinco cosas que no son tuyas, y saberlo te libera.*

**Bloque 2 · Cita oficial** (`policy-quote`). Manual Operativo ASP, p. 22 — con la lista completa de instancias:

> *"A Salvo del Peligro es una instancia de acompañamiento y garantía en los procesos de promoción, prevención, y atención de situaciones de riesgo, por ende, **NO DEBE entenderse como instancia de carácter judicial, de atención en salud mental o física o disciplinaria**, puesto que estos escenarios deberán ser asumidos por las autoridades competentes, entiéndase Policía Nacional, Fiscalía, Comisarías de Familia, ICBF, Hospitales, Clínicas, Psicóloga/o Tratante y Corte de Honor Nacional […], entre otros, no obstante, todas las situaciones deberán reportarse e independientemente del canal por el cuál ingresó el reporte deberá ser trasladado para conocimiento de las otras instancias para lo de su competencia (principio de coordinación)"*

Y el límite del rol del adulto, Política 2025, p. 29: *"clarificar alcance del rol del adulto en estos incidentes, entendiendo que **en ningún caso su función será de carácter investigativo y de gestión del reporte**."*

**Bloque 3 · Lo que NO te corresponde** (`list`):

1. **Investigar** — ni preguntar de más, ni reconstruir los hechos.
2. **Gestionar el reporte** — el caso no lo llevas tú.
3. **Diagnosticar** — ni salud mental, ni física.
4. **Disciplinar** — eso es de la Corte de Honor Nacional.
5. **Decidir si «amerita»** — esa valoración es del Comité, no tuya.

**Bloque 4 · Y ahora la parte que envejece mal** (`mission-box`) — **el corazón doctrinal de la lección**:

> **Si te formaron con los documentos de 2021 o 2023, aprendiste a llamar al «referente ASP». Ese rol ya no existe.**
>
> La Guía de Prevención (2021) todavía dice, en su p. 15, *"se recomienda contactar al **Referente ASP** para recibir la asesoría de la ruta a activar"*. **El consejo sigue siendo bueno; el destinatario cambió.** Hoy, lo que hacía aquel referente lo hacen el **Comité de Gestión de Incidentes** y el **Coordinador o Coordinadora Nacional de Gestión de Incidentes**, y se llega a ellos **por el botón** *(Política 2025, p. 39)*. Nadie distinto de los integrantes designados de la Comisión Nacional puede recibir y gestionar reportes a nombre de la Asociación.

> ✂️ **(H6) Los dos párrafos se fundieron en uno.** Es el recorte que compensa lo que crecieron la intro, la L3 y la L7. Se fueron la entradilla *"No es un detalle de nomenclatura"*, el inciso *"y lo repite en su lista de qué hacer"* y el rodeo *"La Política es explícita en que…"*.
>
> ⚠️ **Desviación consciente del texto literal del informe, y por qué.** El texto que traía el hallazgo H6 dejaba **solo** el segundo párrafo: se llevaba por delante la **cita de la Guía p. 15** y la frase *"el consejo sigue siendo bueno; el destinatario cambió"*, que es **el corazón doctrinal de esta lección** (es lo que explica por qué un adulto bien formado hace hoy lo incorrecto). «Fundir» dos párrafos es conservar los dos contenidos en uno, no borrar uno; así que **se fundieron de verdad**, conservando toda la doctrina y el mismo ahorro de lectura. La última frase va literal del informe. **Si se quería de verdad la supresión, tiene que decidirlo el `auditor-doctrinal-asc`, no el corrector.**
>
> **Y ojo con el atajo mental:** los **Referentes Regionales de Promoción** que sí crea la Política **hacen campañas de promoción, no reciben casos** *(pp. 40 y 42)*. **En 2025 no existe ningún rol regional que reciba u oriente casos.**

> 📌 **Por qué esto está en el curso y no solo en el glosario.** Es el error más caro que este curso puede evitar: mandar a un adulto a buscar a una persona que no existe, en el momento en que más falta hace que el reporte llegue. La tabla completa de vigente vs. superado está en `../../GLOSARIO-ASC.md` §C-bis, y la regla de prelación en el **ADR-035**.

**Bloque 5 · Reflexión.**

> *"De las cinco cosas que no te corresponden, ¿cuál te costaría más no hacer si mañana pasara algo en tu unidad? Sé honesto contigo mismo: escribe cuál es y por qué. Saber de antemano dónde vas a sentir la tentación es la mejor manera de no caer en ella. **Piensa en un chico o una chica concretos de tu unidad, sin escribir su nombre, y responde pensando en esa situación.**"*

> **(H12) Anclada a una persona concreta, sin nombre.** La pregunta abstracta se responde con una abstracción («investigar, supongo»). Pensando en un chico concreto, el adulto **siente** la tentación en vez de nombrarla, que es lo único que sirve para anticiparla. **Sin escribir el nombre**, por la regla 4 de la línea.

**Bloque 6 · Mini-quiz (2 preguntas).**

**P1.** Un dirigente recibe una revelación y llama al referente regional de A Salvo del Peligro de su región para pedir orientación. ¿Qué pasa con esa decisión hoy?
- a) Es correcta: el referente regional de su región es la primera instancia de orientación.
- b) **Es un rol que ya no recibe casos: hoy se entra por el botón y el caso lo toma el Comité.** ✅
- c) Es correcta si además llena el formulario del botón inmediatamente después de llamar.

> **Reescritas las opciones (hallazgo R5), no el enunciado ni la doctrina.** La correcta empezaba por «Ese» y las otras dos por «Es» —oveja negra—, y además era **la más corta por 15 caracteres**. Ahora **las tres abren por «Es»** y las longitudes son 87 / 88 / 85. Se **acortaron los distractores** y la correcta creció solo lo justo para emparejar, sin añadir ni quitar nada a lo que afirma.
>
> Esta pregunta es la que **recoge el rol superado** como distractor después de que R3 lo desplazara de L4-P2 — ver §9.

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

> 🔁 **Esa cita vive ahora en el `info-box` de H1, no en el párrafo que la precedía.** El texto del dictamen doctrinal la trae verbatim, y tenerla dos veces seguidas en el mismo módulo la desgastaba. Se quitó **del párrafo**, no de la caja: la doctrina no se pierde, cambia de sitio. El párrafo ahora arranca en *"Eso habilita cosas muy concretas…"*, apoyado directamente en el `policy-quote` de la p. 30 que va justo encima.

**Bloque 3 · Lo que esto habilita** (`info-box`). Que un adulto pueda decir *"no me siento cómodo con cómo me habla ese compañero"* sin que sea deslealtad. Que acompañar una revelación **pesa**, y que buscar apoyo después no es debilidad. Cierre con el hook, en eco:

> *"Tu trabajo no era descubrir qué pasó. Era que la persona no estuviera sola. Que tú tampoco lo estés es parte de la misma política."*

**Bloque 3-bis · Y si el curso te removió algo tuyo** (hallazgo H1 — **dos `info-box`, después del eco del hook y antes del `heading` «Tu compromiso»**).

Es el hueco que la auditoría pedagógica señaló como más grave del cierre: el curso pasa cuarenta minutos hablando de revelaciones de daño, avisa en la intro que *"si te remueve algo propio, para"*, y después **nunca vuelve a ese aviso**. El adulto que llegó al voluntariado con una historia propia termina el curso sin que nadie le diga nada.

> 🫂 **Y si este curso te removió algo tuyo.** Pasa, y pasa más de lo que se dice en voz alta: mucha gente llega al voluntariado con una historia propia. La política que acabas de leer te nombra a ti también — dice que los adultos de Scouts de Colombia deben ser «cuidadas, acompañadas y protegidas», y que tu bienestar emocional «también es una responsabilidad colectiva». Eso no lo resuelve un curso. Si algo se movió, no lo cargues solo: habla con alguien en quien confíes, dentro o fuera del grupo, y si necesitas apoyo profesional, búscalo. La Guía se lo dice a quien acompaña con estas palabras: conocer los propios límites y buscar la ayuda de otros es parte del oficio, no una falla.
>
> **Y algo que conviene no confundir con lo anterior:** si lo que te pasa a ti está ocurriendo **dentro del Movimiento** —acoso, abuso de poder, el trato de un compañero—, eso sí es un incidente, y el botón también es tuyo. La política promete canales «accesibles, confidenciales y seguros para todas las personas», y protección frente a represalias.

> ⚠️ **Dos cosas que el `auditor-doctrinal-asc` corrigió de la versión pedagógica de este texto, y que no se pueden deshacer:**
>
> 1. **No se nombra ¡Óyeme!.** La versión original remitía ahí a quien estuviera mal. **No sirve para esto:** los espacios ¡Óyeme! solo existen en eventos regionales y nacionales, y la propia Política advierte que *"no representa atención en salud mental"*. Mandar allí a un adulto removido es mandarlo a una puerta que casi nunca está abierta y que, cuando lo está, no hace lo que él necesita.
> 2. **Los dos supuestos van separados, y en este orden.** El botón **sí es del adulto**, pero solo para lo que le ocurre **dentro del Movimiento**. Fundir «me removió mi propia historia» con «un compañero me trata mal» mandaría al botón a alguien que lo que necesita es apoyo, y dejaría sin canal a quien sí tiene un incidente.

**Bloque 4 · Compromiso firmable** (`commitment_adulto-garante-entorno-seguro`). Tres campos, para que sea concreto y mostrable al consejo. **(H2) Reescrito entero: las tres frases pasan de `list` con rayas a `mission-box` numerado**, porque las rayas se leían como viñetas decorativas y nadie las copiaba:

> **Tus tres frases.** Cópialas en el cuadro de abajo y complétalas con tus palabras.
>
> **1.** Esta semana voy a… para que mi unidad o mi equipo de adultos esté más cerca de la práctica 2+1.
> **2.** Guardé el acceso al botón «Me Pongo A Salvo del Peligro» en…
> **3.** Si mañana alguien me revelara algo, mi primera frase sería…

**(H2-b) Nuevo `prompt` de la reflexión**, que dice qué hacer con cada una y **saca el compromiso del ámbito privado**:

> *"Escribe aquí tus tres frases completas, numeradas. La 1 es una conducta que puedes revisar el domingo. La 2 es un hecho: o guardaste el acceso o no. La 3 no se verifica, se ensaya — si no te sale sola, vuelve a la Lección 3 y tómala prestada hasta que la hagas tuya. Cuando las tengas, cópialas y mándaselas a tu Jefe de Grupo o llévalas al próximo consejo: un compromiso que alguien más conoce se cumple mucho más."*

**(H2-c) Último `paragraph` del módulo**, que **cierra el hueco entre el compromiso y el certificado** — el motor guarda una frase en la caja «Compromiso Personal» y hasta ahora nadie le decía al adulto cuál poner:

> *"Al final del curso, después del certificado, vas a encontrar un cuadro que dice «Compromiso Personal». Pega ahí tu frase 1 — la de esta semana. Es la que el sistema guarda aparte, y la que vas a querer volver a leer el domingo."*

> **Por qué estos tres.** Uno cambia una conducta, otro deja lista una herramienta y el tercero **ensaya la frase**, que es lo que de verdad falla en el momento real. Los **dos primeros** los puede verificar el propio adulto en una semana; **el tercero no es verificable, es un ensayo** — y es el más valioso precisamente por eso. *(Corregido — hallazgo H3-bis.)*

**Bloque 5 · Mini-quiz (2 preguntas).**
- **P1** sobre la cultura de protección entre adultos (Política p. 30), **reescrita como escenario**.
- **P2, de síntesis del curso completo:** *"un compañero te dice «entonces si me cuentan algo, ¿no hago nada?»"* — la correcta es *"hace tres cosas: protege, reporta y acompaña; lo único que no hace es investigar"*, y el distractor es *"primero confirme si el caso es grave"*.

El esquema exige mínimo dos preguntas por lección, y el build rechazó el primer intento con una.

**P1.** *(Reescrita — hallazgo R6 de la auditoría pedagógica, con la versión que impuso el `auditor-doctrinal-asc`.)* Un compañero del consejo te corrige siempre delante de los demás. Te incomoda, pero piensas que sacarlo del equipo sería exagerado. ¿Qué dice la política?
- a) Que aguantes: airear un problema entre adultos fuera del equipo desgasta al grupo sin necesidad.
- b) **Que decirlo es lo esperado: la política pide que las preocupaciones se puedan expresar de forma segura.** ✅
- c) Que hables solo si vuelve a pasar delante de los protagonistas de la unidad.

> **Por qué así y no de la otra manera.** La versión que propuso la auditoría pedagógica traía como distractor *"ahora cualquier roce hay que reportarlo"*, y el auditor doctrinal la **rechazó**: ese distractor **es defendible** —las pp. 21, 32, 42 y la p. 15 de la Guía van todas en dirección amplia, y la p. 30 crea un espacio para **expresar**, no una excepción al deber de reportar—. Marcarlo como incorrecto pondría al curso a **contradecirse tres veces**: la Lección 4 se ancla en *"todas las situaciones deberán reportarse"*, su P1 da por correcta *"sin esperar a estar seguro"*, y la Lección 6 pone *"decidir si amerita"* entre lo que **no** le toca al adulto.
>
> Esta versión desarma la creencia que sí hay que desarmar —**que decirlo es deslealtad**— sin pedirle al estudiante que juzgue qué es reportable, que es justo lo que el curso entero le quita de encima.
>
> **Control de forma:** 96 / 103 / 76 caracteres, y las tres opciones abren con «Que». Ni extremo de longitud ni oveja negra.

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

`info-box` · `paragraph` · `heading` · `policy-quote` · `method-grid` · `mission-box` · `list` · `timeline` · `blockquote`

> `blockquote` entró con el hallazgo **H5-a** (el eco del hook en la L3). Es un tipo **ya existente** en `course-schema.json` y en `build-course.js` — no se añadió nada al motor, que es lo que `../../CLAUDE.md` §7 prohíbe. El `list` del compromiso de la L7 **desapareció** al pasar a `mission-box` (H2-a), pero el tipo se sigue usando en la L6 («las cinco que no son tuyas»).

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
| **Patrón anti-definición — variante** | **Variante B en las siete lecciones**, incluida la 1. *(Corregido — hallazgo H3-bis. El acta declaraba **Variante A** en la Lección 1, y es falso: antes de la cita del Manual p. 11 van dos párrafos de contexto —«muchos adultos creen que su responsabilidad empieza cuando pasa algo» y «la ley colombiana lo ve al revés»—. Eso es Variante B. La cita **sí** es la más densa del curso, pero no entra en seco.)* Registrado por exigencia del `CREAR-CURSO` §6.2. |
| **Quizzes de escenario, no de memoria** | Cuenta como escenario la pregunta cuyo enunciado describe **una situación concreta con personas** y pide **decidir qué hacer, qué responder o juzgar la conducta de alguien en esa situación**. No cuentan las que empiezan por «según…», «¿cuándo…?» o «¿qué significa…?». Con este criterio: **11 de 14**, y las tres excepciones son L3-P2, L4-P1 y L6-P2. De esas 11, **siete piden decidir la conducta propia** y cuatro piden juzgar la ajena — la distinción que importa para la auto-eficacia (Bandura): ensayar lo propio la construye; juzgar lo ajeno, menos. *(El criterio anterior decía solo «pide decidir qué hacer o qué responder» y leído al pie de la letra daba 7, no 11: esa ambigüedad es el hueco por el que esta cifra fue 12, luego 9, luego 5.)* |
| **Un distractor = la idea vieja** | Explícito en L1-P1, L1-P2, L2-P1, L3-P1, L3-P2, L4-P1, L6-P2 y en la de síntesis de L7. **El rol superado —el «referente ASP»— se evalúa en L6-P1**, que es la lección que lo desarma, y reaparece como distractor en la nueva L4-P2. *(Corregido — hallazgo H3-bis. El acta decía «en L4-P2 el distractor es el rol superado» y **R3 reemplazó esa pregunta**; el acta estaba describiendo una pregunta que ya no existe.)* |
| **Sesgo de longitud** | **La primera versión lo tenía: en 9 de 13 preguntas la correcta era la opción más larga (69 %).** Lo detectó la verificación mecánica sobre el JSON, no la lectura. Se reescribieron 9 preguntas alargando distractores —lo que además los hace más plausibles— y acortando tres correctas: **ahora es 0 de 14**. Sin `<strong>` ni `<em>` en ninguna opción. De paso se repartió `correctIndex`, que estaba fijo en 1 en las 14. |
| **Paridad de forma** *(dos compuertas nuevas, 15-sep-2026)* | **0 de 14 en las dos.** Acortar las correctas para pasar el chequeo unilateral de arriba provocó el **péndulo** —pasaron a ser **la más corta en 8 de 14**— y dejó vivo el vector real: la **oveja negra**, la correcta como única opción que abría con otra palabra, en **6 preguntas y con acierto 6 de 6**. `build-course.js` vigila ahora las dos, y **son simétricas a propósito**: no se pueden burlar empujando hacia un lado. Regla de oficio que deja el episodio: **se emparejan alargando o acortando distractores, nunca la correcta** — la correcta la fija la doctrina. |
| **Reflexiones aterrizadas** | Las 7 piden un caso concreto, una fecha o una frase propia. Las de L3 y L4 hacen **ensayar**, no solo pensar. Tras la auditoría pedagógica, además: la de **L3 se autocorrige** (tres chequeos), la de **L4 no puede terminar en fracaso** (tope de tiempo y acción siguiente), la de **L5 incluye a quien no tiene el recuerdo** y la de **L6 se ancla a una persona concreta, sin nombre**. |
| **Compromiso firmable y mostrable** | Tres campos (L7). **Dos son verificables en una semana** —la conducta 2+1 y el acceso al botón guardado—. **El tercero no lo es: es un ensayo**, y es el más valioso precisamente por eso. *(Corregido — hallazgo H3-bis: el acta declaraba los tres «verificables en una semana», y llamar verificable a un ensayo invita a medirlo con la vara equivocada.)* |
| **Andragogía (Knowles)** | El adulto llega con experiencia: cada lección parte de algo que ya hizo o creyó, no de la norma. L6 reconoce expresamente que **su formación previa quedó desactualizada** en vez de ignorarlo. |
| **Educación por el amor, no por el temor** | La obligación se ancla en la Ley y la Promesa (L1), no en la amenaza de sanción. El «no investigar» se presenta como cuidado, no como prohibición. |

---

## 10. Riesgos de este curso y sus antídotos

| Riesgo | Antídoto |
|---|---|
| **Convertirse en manual de detección** con listas de señales que inviten a diagnosticar | Las señales se **reservan al Nivel 2** y la intro lo dice. Ninguna lección las enumera. |
| **Enseñar un rol que ya no existe** («referente ASP», «Escuchadero», «DURAS-I») | La Lección 6 lo aborda de frente, y los términos se **glosan como de 2021-2023**. El auditor doctrinal lo verifica contra `GLOSARIO-ASC.md` §C-bis. |
| **Que un quiz tenga como correcta una conducta prohibida** | Regla de la línea: **ningún quiz puede tener como respuesta correcta «averiguar», «confrontar» o «resolver internamente»**. Las 14 preguntas se revisaron contra esa regla. |
| **Presentar como norma el orden de la fórmula** | Va marcado como inferencia en §3 y en la L3, pendiente de la consulta a la Comisión Nacional ASP. |
| **Revictimizar con los ejemplos** | Sin nombres, sin detalles, sin escenas. Los casos son de **conducta del adulto**, nunca de la experiencia de la víctima. |
| **Sustituir el módulo oficial** | `info-box` fijo en la intro, con el texto de la exigencia n.º 1 del plan de línea. **Y desde la auditoría pedagógica (H13), también en el `certificate.description`:** *"Este certificado acredita haber cursado esta formación y no sustituye ni reemplaza el módulo oficial de A Salvo del Peligro que exige la Asociación."* Importa porque **el certificado es lo único que sale del curso** — se descarga, se manda, se muestra; el aviso de la intro no viaja con él. |
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


---

## ⚠️ Lo que las auditorías cambiaron (17-sep-2026) — este diseño NO se reescribió

> **Por qué se marca en vez de corregirse (ADR-057):** el diseño es **fuente histórica**. Si se
> reescribe, se pierde el rastro de qué se creyó al diseñar y qué apareció al auditar. **Lo que vale
> hoy es el JSON**, no lo de arriba.

| Dónde | Decía | Dice hoy |
|---|---|---|
| **L6** | *«En 2025 no existe ningún rol regional que reciba u oriente casos»* y *«esa puerta no existe»* | **«Ningún rol regional gestiona casos»**. El cargo **2.2.30 «Coordinador Regional del Safe From Harm»** sigue en el *Manual de cargos* (**p. 385**) y su Función 3 es *«ser el referente regional»*; **lo superado son sus funciones de gestión de casos**. **Superado ≠ inexistente** |
| **Certificado** | *«la posición de garante que le atribuyen la ley y la Promesa Scout»* | La posición la atribuye **la ley**; la Promesa funda el **compromiso**. No son la misma fuente de obligación |
| **L4** | *«tres garantías: debido proceso, confidencialidad, cuidado a las víctimas»* | **Cuatro**: entra la **imparcialidad en la valoración de los hechos** (Política, p. 44) — que es justo la que tranquiliza a quien duda si reportar |
| **L4** | *«está preguntado a la Comisión Nacional»* | **«es una pregunta que queda por hacerle»**: la consulta a la DNDI **sigue en borrador, sin enviar** |
| **L3 / L7** | dos paráfrasis presentadas como palabras de la Guía | Citadas con su ubicación y acotadas a lo que la fuente dice |
| **L3** | la tarjeta de bolsillo mandaba *«reporta por el botón»* antes de decir qué es | Se define **el botón** —nombre, dónde está, que no hay que pedir permiso— antes de mandar a usarlo |
| **L4** | ningún sitio nombraba el miedo a equivocarse | Caja propia: *«reportar no es acusar»*. Era **el miedo que más reportes frena** y el único que el curso no tocaba |
| **L6** | cinco prohibiciones y ninguna contrapartida | Entran **«las tres que sí son tuyas»** — estar, reportar, seguir siendo su dirigente — y por qué el límite **libera** en vez de paralizar |
| **Registro** | los objetivos de aprendizaje vivían **solo aquí** | El alumno los ve |
| **Duración** | 40 min estimados | **45 min medidos** (ADR-047): 6.063 palabras |

**Lo que este diseño acertó y conviene no perder:** la tesis —*tu trabajo no es descubrir qué pasó*—,
la estructura de siete lecciones, y haber puesto la línea roja en el centro. Nada de eso se tocó.


_Diseñado el 15 de septiembre de 2026. Citas verificadas contra los PDF de `DOCUMENTOS BASE/`. Ver `../Plan-de-Formacion-Linea-Politicas-Transversales.md` §3.2 (ficha del curso) y `../../DECISIONES.md` ADR-035 y ADR-038._
