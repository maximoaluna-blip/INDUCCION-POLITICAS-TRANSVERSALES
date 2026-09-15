# BACKEND.md — Línea Políticas Transversales

> **Esta línea no tiene backend propio, y es correcto.**
> Creado el 15-sep-2026 al instanciar la línea.

## Qué backend usa

El mismo **Apps Script y el mismo Sheet que las otras tres líneas**. No es un descuido de la instanciación: `build-course.js` trae la URL de producción como valor por defecto cuando el JSON del curso no declara `googleScriptUrl`, y las cuatro líneas comparten deployment, Sheet y token (`ADULTOS_ASC_2026`).

La documentación viva del backend está en **`../INDUCCION-ADULTOS/BACKEND.md`**, que es donde vive el `.clasp-workspace`. No se duplica aquí para que no diverja.

## Lo que hay que saber antes de tocarlo

> ⚠️ **El deployment que usan los cursos está fijado a una versión concreta, no a `@HEAD`.** Un `clasp push` —o editar en el navegador y guardar— **no cambia lo que reciben los estudiantes**. Hay que crear una versión nueva y reapuntar el deployment.
>
> **Y el número de versión no se lee de un `.md`**, que envejece: la fuente de verdad es `npx clasp list-deployments`.

## Por qué el curso da error de CORS en local

Al abrir un curso compilado desde `http://localhost`, la llamada al Apps Script falla con CORS. **Es esperado y no es un fallo del curso**: el backend solo acepta los orígenes de GitHub Pages. Por eso la suite E2E intercepta el backend con el stub de `PRUEBAS-E2E/tests/_backend.js`, y por eso los dos tests de integración real quedan **skipped** salvo que definas `TEST_SCRIPT_URL` apuntando al despliegue de pruebas.

## Cuando esta línea se publique

No hay que crear nada: basta con que el curso salga a GitHub Pages bajo el repo de la línea. Lo que sí hay que verificar **en producción**, no en local:

1. Que el registro escriba en el Sheet.
2. Que `verificar-certificado.html` encuentre un certificado emitido desde esta línea.
3. Que el `courseId` del curso no colisione con ninguno de las otras tres líneas — el Sheet es único y los `courseId` son la llave.

> `adulto-garante-entorno-seguro` no colisiona: no existe en ninguna de las otras tres líneas (verificado el 15-sep-2026).
