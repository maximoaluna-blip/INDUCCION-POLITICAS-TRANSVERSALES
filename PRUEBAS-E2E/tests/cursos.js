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
// Desde el 18-sep-2026 la linea SI esta publicada, asi que contra la URL por defecto el
// globalSetup ya descarga el catalogo real -y trae solo los `active`-. Este espejo sigue
// haciendo falta para dos casos: correr sin red, y probar un curso en `draft` (ADR-052),
// que se hace sirviendo una COPIA con el status volteado, nunca volteando el catalogo.
//
// ⚠️ ESTA LISTA HAY QUE MANTENERLA A MANO. Decia UN curso hasta el 17-sep-2026, cuando
// ya habia dos: el Curso 01 llevaba dias sin que ninguna prueba local lo tocara, y la
// suite pasaba en verde igual. Al anadir un curso a esta linea, anadirlo tambien aqui
// -hasta que la linea se publique y el globalSetup pueda descargar el catalogo real-.
const FALLBACK = [
  {
    courseId: 'bienvenida-politicas-transversales',
    file: 'bienvenida-politicas-transversales.html',
    tituloIncluye: 'Bienvenida',
  },
  {
    courseId: 'adulto-garante-entorno-seguro',
    file: 'adulto-garante-entorno-seguro.html',
    tituloIncluye: 'Garante',
  },
  {
    courseId: 'entornos-seguros-politica-asp',
    file: 'entornos-seguros-politica-asp.html',
    tituloIncluye: 'Entornos Seguros',
  },
  {
    courseId: 'gestion-para-la-motivacion',
    file: 'gestion-para-la-motivacion.html',
    tituloIncluye: 'Motivaci',
  },
  {
    courseId: 'mi-compromiso-entornos-seguros',
    file: 'mi-compromiso-entornos-seguros.html',
    tituloIncluye: 'Compromiso',
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
