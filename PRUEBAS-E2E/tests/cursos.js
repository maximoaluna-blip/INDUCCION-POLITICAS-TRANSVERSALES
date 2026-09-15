// Catalogo de cursos del target bajo prueba.
// Por defecto lo provee el globalSetup (_setup-cursos.js), que descarga el
// cursos.json del ASC_BASE_URL y lo escribe en .cursos.json -> la suite es
// AGNOSTICA DE LINEA (Adultos, PJ, DI, Politicas Transversales).
//
// El fallback de abajo solo se usa si el globalSetup no pudo descargar el catalogo
// (sin red, o la linea todavia no esta publicada). OJO: esta linea NO esta publicada
// —su repo es privado y no tiene GitHub Pages—, asi que contra la URL por defecto el
// globalSetup no encuentra nada. Para correr en local:
//
//   ASC_BASE_URL="http://localhost:8131/02-Plataforma-Web/" npx playwright test
//
// (el servidor local se levanta con la configuracion "politicas-transversales" de
// .claude/launch.json, en el directorio de trabajo del proyecto).
const fs = require('fs');
const path = require('path');

const GENERADO = path.join(__dirname, '.cursos.json');

// Fallback: espejo de INDUCCION-POLITICAS-TRANSVERSALES/02-Plataforma-Web/cursos.json.
// Hoy la linea tiene UN curso y esta en `draft`, no `active`: es el vertical slice.
// Se lista igual para que la suite tenga algo que probar en local antes de publicar.
const FALLBACK = [
  {
    courseId: 'adulto-garante-entorno-seguro',
    file: 'adulto-garante-entorno-seguro.html',
    tituloIncluye: 'Garante',
  },
];

let CURSOS = FALLBACK;
try {
  if (fs.existsSync(GENERADO)) {
    const cargados = JSON.parse(fs.readFileSync(GENERADO, 'utf8'));
    if (Array.isArray(cargados) && cargados.length) CURSOS = cargados;
  }
} catch (e) {
  // JSON corrupto o ilegible: usar fallback.
}

module.exports = { CURSOS };
