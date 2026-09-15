// ============================================
// engine.linea.js — EXTENSIÓN de la línea Políticas Transversales
// Se concatena ANTES de engine.core.js (aquí viven las variables globales).
//
// Qué va aquí: lo que NO es idéntico en las 3 líneas — textos propios (el número
// del curso al que se remite, el pie del PDF) y componentes exclusivos de la línea.
// Lo demás está en el núcleo compartido; si tocas algo que también usan las otras
// líneas, va en _MOTOR/engine.core.js del repo raíz, no aquí.
// ============================================

// ============================================
// MOTOR DE CURSOS - PLATAFORMA DE FORMACION DE ADULTOS ASC
// Este archivo es generado automaticamente por build-course.js
// Las variables COURSE_CONFIG y QUIZ_ANSWERS son inyectadas por el builder
// ============================================

// --- Variables globales ---
let currentModule = 0;
let moduleProgress = [];
let quizScores = [];
let startTime = new Date();
let studyTime = 0;
let sessionStartTime = null;
let reflections = {};
let photos = {};
let selfAssessments = {};
let personalPlans = {};
let practicesCatalogs = {};
let userProfile = {};

// Version de la escala de grados de dominio del autodiagnostico de competencias.
// Subir este numero cuando cambien los criterios de los grados: invalida los perfiles
// ya guardados, que quedarian describiendo peldanos distintos a los que el adulto eligio.
// v2 (02-ago-2026): correccion doctrinal de los grados en 4 de las 7 competencias
// (DECISIONES.md raiz ADR-023, Fase 2). Ver ESTADO-AUDITORIA.md.
const COMPETENCY_SCALE_VERSION = 2;

// --- Escritura segura en localStorage ---
// saveProgress() no manejaba el fallo en absoluto y mostraba el indicador de "guardado"
// sin comprobar que la escritura hubiera funcionado. Si localStorage falla (cuota llena,
// modo privado de Safari, almacenamiento bloqueado por politica del navegador), el
// estudiante veia el visto verde y perdia su trabajo sin enterarse. Ahora se entera.
var _avisoAlmacenamiento = false;



// --- Inicializacion ---
window.addEventListener('DOMContentLoaded', function () {
    moduleProgress = new Array(COURSE_CONFIG.totalModules).fill(false);
    sessionStartTime = new Date();
    shuffleQuizOptions();
    loadProgress();
    prefillFromGlobalProfile();
    updateElapsedTime();
    renderCatalogDisplays();
    renderBrujulaDisplays();
    renderBrujulaActions();
    renderCoursesSuggestions();
    renderGoalPlanners();
});

window.addEventListener('beforeunload', function () {
    saveProgress();
});

// --- Persistencia ---
function saveProgress() {
    var key = 'courseProgress_' + COURSE_CONFIG.courseId;
    var progress = {
        userProfile: userProfile, moduleProgress: moduleProgress,
        quizScores: quizScores, studyTime: studyTime, reflections: reflections, photos: photos, selfAssessments: selfAssessments, personalPlans: personalPlans, practicesCatalogs: practicesCatalogs,
        currentModule: currentModule, startTime: startTime.toISOString(),
        lastSaved: new Date().toISOString(), version: '3.0'
    };
    // Solo confirmar visualmente si la escritura funciono de verdad.
    if (!guardarLocal(key, JSON.stringify(progress))) return;
    var indicator = document.getElementById('saveIndicator');
    if (indicator) { indicator.classList.add('show'); setTimeout(function () { indicator.classList.remove('show'); }, 2000); }
}

function loadProgress() {
    var key = 'courseProgress_' + COURSE_CONFIG.courseId;
    var saved = localStorage.getItem(key);
    if (saved) {
        var p = JSON.parse(saved);
        userProfile = p.userProfile || {};
        moduleProgress = p.moduleProgress || new Array(COURSE_CONFIG.totalModules).fill(false);
        quizScores = p.quizScores || [];
        studyTime = p.studyTime || 0;
        reflections = p.reflections || {};
        photos = p.photos || {};
        selfAssessments = p.selfAssessments || {};
        personalPlans = p.personalPlans || {};
        practicesCatalogs = p.practicesCatalogs || {};
        currentModule = p.currentModule || 0;
        startTime = new Date(p.startTime || new Date());
        if (userProfile.fullName) {
            showModule(currentModule);
            var welcomeEl = document.getElementById('welcomeName');
            if (welcomeEl) welcomeEl.textContent = userProfile.fullName.split(' ')[0];
            showNotification('¡Bienvenido de vuelta, ' + userProfile.fullName.split(' ')[0] + '! 👋');
        }
        Object.keys(reflections).forEach(function (k) {
            var ta = document.getElementById('reflection-' + k);
            if (ta) ta.value = reflections[k];
        });
        restoreCommitment();
        Object.keys(photos).forEach(function (k) {
            var preview = document.getElementById('photo-preview-' + k);
            var actions = document.getElementById('photo-actions-' + k);
            if (preview && photos[k] && photos[k].dataUrl) {
                preview.innerHTML = '<img src="' + photos[k].dataUrl + '" alt="Imagen guardada">';
                if (actions) actions.classList.remove('hidden');
            }
        });
        if (typeof restoreAssessmentSelections === 'function') restoreAssessmentSelections();
        if (typeof restorePlanState === 'function') restorePlanState();
        if (typeof initPlanBuilders === 'function') initPlanBuilders();
        if (typeof restorePracticesCatalogs === 'function') restorePracticesCatalogs();
        updateStats();
        updateProgress();
    }
}

// calculateAssessment eliminada (14-sep-2026, ADR-034 Fase 2): renderizaba el
// perfil de competencias del adulto con grados de dominio. Esta linea heredo el
// motor de Desarrollo Institucional el 15-sep-2026 y tampoco tiene ningun curso con
// self-assessment: la funcion no se invoca desde ninguna parte. Se deja constancia
// porque sus cadenas viajaban dentro de cada HTML compilado, que es como se detecto.

// loadProfileIntoPlan eliminada (14-sep-2026, ADR-034 Fase 1): cargaba el perfil de
// competencias del ADULTO, que ninguna leccion de esta linea produce. El plan-builder
// del Curso 06 sera propio y declarara sus labels en el JSON del curso (ADR-034 Fase 1).


// generatePlan ya no vive aqui (14-sep-2026, ADR-034 Fase 1 B): esta en el nucleo,
// y lee sus textos del HTML que deja render.plan-builder.js a partir de los `labels`
// del JSON del curso. Las 3 copias por linea diferian SOLO por vocabulario.

// --- Recovery from server ---
function recoverProgress() {
    var emailInput = document.getElementById('recoveryEmail');
    var email = emailInput.value.trim();
    var msgDiv = document.getElementById('recoveryMessage');

    if (!email) {
        showNotification('⚠️ Ingresa tu correo electronico', 'warning');
        return;
    }

    msgDiv.style.display = 'block';
    msgDiv.innerHTML = '<p style="color: #622599; font-weight: 600;">🔄 Buscando tu avance...</p>';

    var url = COURSE_CONFIG.googleScriptUrl +
        '?action=recover&email=' + encodeURIComponent(email) +
        '&course=' + encodeURIComponent(COURSE_CONFIG.courseId) +
        '&token=ADULTOS_ASC_2026';

    fetch(url, { redirect: 'follow' })
        .then(function(response) {
            if (!response.ok) throw new Error('HTTP ' + response.status);
            return response.json();
        })
        .then(function(data) {

            // El Apps Script devuelve: { success: true, data: { registration, modules, quizzes, certificates } }
            var isFound = (data && data.found) || (data && data.success && data.data);

            if (isFound) {
                var serverData = data.data || data;
                var reg = serverData.registration || data.userProfile || {};
                var mods = serverData.modules || [];
                var quizzes = serverData.quizzes || [];

                // Reconstruir userProfile desde registration
                if (reg.fullName || reg.name) {
                    userProfile = {
                        fullName: reg.fullName || reg.name || '',
                        age: reg.age || '',
                        group: reg.group || '',
                        region: reg.region || '',
                        email: reg.email || email,
                        motivation: reg.motivation || '',
                        registrationDate: reg.registrationDate || reg.timestamp || ''
                    };
                } else if (data.userProfile) {
                    userProfile = data.userProfile;
                }

                // Reconstruir moduleProgress desde modules array
                if (mods.length > 0) {
                    moduleProgress = new Array(COURSE_CONFIG.totalModules).fill(false);
                    mods.forEach(function(m) {
                        var modNum = m.moduleCompleted || m.module;
                        if (modNum !== undefined && modNum < moduleProgress.length) {
                            moduleProgress[modNum] = true;
                        }
                    });
                } else if (data.moduleProgress) {
                    moduleProgress = data.moduleProgress;
                }

                // Reconstruir quizScores desde quizzes array
                if (quizzes.length > 0) {
                    quizScores = [];
                    quizzes.forEach(function(q) {
                        var modNum = q.module;
                        var score = q.score;
                        if (modNum !== undefined && score !== undefined) {
                            quizScores[modNum] = parseInt(score);
                        }
                    });
                } else if (data.quizScores) {
                    quizScores = data.quizScores;
                }

                // StudyTime y reflections (si vienen directamente)
                if (data.studyTime) studyTime = data.studyTime;
                if (data.reflections) {
                    reflections = data.reflections;
                    Object.keys(reflections).forEach(function(k) {
                        var ta = document.getElementById('reflection-' + k);
                        if (ta) ta.value = reflections[k];
                    });
                }

                // Catálogos de buenas prácticas (Curso 5 — Línea DI): clave por catalogId
                if (serverData.catalogs && typeof serverData.catalogs === 'object') {
                    Object.keys(serverData.catalogs).forEach(function (cid) {
                        practicesCatalogs[cid] = serverData.catalogs[cid];
                        // Espejo en localStorage global para que otros cursos puedan leerlo cross-device
                        guardarLocal('politicas-transversales:' + cid, JSON.stringify(serverData.catalogs[cid]));
                    });
                    if (typeof restorePracticesCatalogs === 'function') restorePracticesCatalogs();
                    if (typeof renderCatalogDisplays === 'function') renderCatalogDisplays();
                }

                // Reflexiones por curso: hidratar el localStorage de cada curso para lectura cross-curso
                if (serverData.reflectionsByCourse && typeof serverData.reflectionsByCourse === 'object') {
                    Object.keys(serverData.reflectionsByCourse).forEach(function (cid) {
                        var courseReflections = serverData.reflectionsByCourse[cid] || {};
                        if (cid === COURSE_CONFIG.courseId) {
                            // Curso actual: aplicar al estado en memoria y a los textareas visibles
                            reflections = courseReflections;
                            Object.keys(reflections).forEach(function (k) {
                                var ta = document.getElementById('reflection-' + k);
                                if (ta) ta.value = reflections[k];
                            });
                        } else {
                            // Otros cursos: refrescar su propio courseProgress_<courseId> en localStorage
                            try {
                                var key = 'courseProgress_' + cid;
                                var raw = localStorage.getItem(key);
                                var existing = raw ? JSON.parse(raw) : {};
                                existing.reflections = courseReflections;
                                existing.lastSaved = new Date().toISOString();
                                guardarLocal(key, JSON.stringify(existing));
                            } catch (e) { /* el aviso lo da guardarLocal */ }
                        }
                    });
                }

                // Autodiagnósticos: restaurar grados de self-assessments del usuario
                if (serverData.assessments && typeof serverData.assessments === 'object') {
                    Object.keys(serverData.assessments).forEach(function (aid) {
                        var saved = serverData.assessments[aid] || {};
                        if (!selfAssessments[aid]) selfAssessments[aid] = { grades: {} };
                        if (saved.grades) selfAssessments[aid].grades = saved.grades;
                    });
                    if (typeof restoreAssessmentSelections === 'function') restoreAssessmentSelections();
                }

                // Planes personales: restaurar el plan-builder y goal-planner (Curso 6 DI)
                if (serverData.plans && typeof serverData.plans === 'object') {
                    Object.keys(serverData.plans).forEach(function (pid) {
                        var savedPlan = serverData.plans[pid] || {};
                        var contenido = savedPlan.contenido;
                        if (contenido && typeof contenido === 'object') {
                            personalPlans[pid] = contenido;
                        }
                    });
                    if (typeof restorePlanState === 'function') restorePlanState();
                    if (typeof renderGoalPlanners === 'function') renderGoalPlanners();
                }

                // Refrescar componentes del Curso 6 que dependen de datos cross-curso
                if (typeof renderBrujulaDisplays === 'function') renderBrujulaDisplays();
                if (typeof renderBrujulaActions === 'function') renderBrujulaActions();
                if (typeof renderCoursesSuggestions === 'function') renderCoursesSuggestions();

                saveProgress();
                updateStats();
                updateProgress();

                // Determinar último módulo completado
                var lastModule = data.currentModule || 0;
                if (!lastModule && moduleProgress.length > 0) {
                    for (var i = moduleProgress.length - 1; i >= 0; i--) {
                        if (moduleProgress[i]) { lastModule = i + 1; break; }
                    }
                }

                var firstName = userProfile.fullName ? userProfile.fullName.split(' ')[0] : 'Scout';
                var welcomeEl = document.getElementById('welcomeName');
                if (welcomeEl) welcomeEl.textContent = firstName;

                var completedCount = moduleProgress.filter(Boolean).length;
                showNotification('¡Avance recuperado, ' + firstName + '! ' + completedCount + ' módulos completados 🎉');
                showModule(lastModule > 0 ? lastModule : 1);
            } else {
                var reason = (data && data.message) ? data.message : 'No se encontro avance asociado a este correo.';
                msgDiv.innerHTML = '<p style="color: #FF9800; font-weight: 600;">⚠️ ' + escapeHtml(reason) + '</p>' +
                    '<p style="color: #636363; margin-top: 10px;">Puedes registrarte como nuevo usuario.</p>' +
                    '<button class="btn" style="margin-top: 10px;" onclick="toggleRegistrationMode(\'new\')">🆕 Registrarme</button>';
            }
        })
        .catch(function(err) {
            if (typeof console !== 'undefined') console.error('[Recovery] Error:', err);
            msgDiv.innerHTML = '<p style="color: #f44336; font-weight: 600;">❌ Error al conectar con el servidor.</p>' +
                '<p style="color: #636363; margin-top: 10px;">Error: ' + escapeHtml(err && err.message ? err.message : String(err)) + '</p>' +
                '<p style="color: #636363; margin-top: 5px;">Verifica tu conexion a internet e intenta de nuevo.</p>';
        });
}

// --- Catálogo de buenas prácticas (Curso 5) ---
function recordPracticeState(catalogId, ambitoId, field, value) {
    if (!practicesCatalogs[catalogId]) practicesCatalogs[catalogId] = {};
    if (!practicesCatalogs[catalogId][ambitoId]) practicesCatalogs[catalogId][ambitoId] = { attributes: [] };
    practicesCatalogs[catalogId][ambitoId][field] = value;
    saveProgress();
}

function recordPracticeAttribute(catalogId, ambitoId, attrId, isChecked) {
    if (!practicesCatalogs[catalogId]) practicesCatalogs[catalogId] = {};
    if (!practicesCatalogs[catalogId][ambitoId]) practicesCatalogs[catalogId][ambitoId] = { attributes: [] };
    if (!practicesCatalogs[catalogId][ambitoId].attributes) practicesCatalogs[catalogId][ambitoId].attributes = [];
    var arr = practicesCatalogs[catalogId][ambitoId].attributes;
    var idx = arr.indexOf(attrId);
    if (isChecked && idx === -1) arr.push(attrId);
    else if (!isChecked && idx !== -1) arr.splice(idx, 1);
    saveProgress();
}

function savePracticesCatalog(catalogId) {
    var data = practicesCatalogs[catalogId] || {};
    // 1. Persistencia inmediata en localStorage (cross-curso, offline-safe)
    guardarLocal('politicas-transversales:' + catalogId, JSON.stringify(data));
    saveProgress();
    // 2. Feedback inmediato al usuario (sin esperar al backend)
    var statusEl = document.getElementById('pbc-status-' + catalogId);
    if (statusEl) {
        var ambitosMarked = Object.keys(data).filter(function (k) { return data[k].state; }).length;
        statusEl.classList.remove('hidden');
        statusEl.innerHTML = '<strong>✅ Tu catálogo se guardó.</strong> ' + ambitosMarked + ' ámbitos marcados. Puedes modificarlo y volver a guardar.';
        statusEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    showNotification('✅ Catálogo guardado');
    // 3. Sincronización en segundo plano al backend (fire-and-forget; si falla, localStorage queda como fuente).
    if (userProfile && userProfile.email) {
        var items = Object.keys(data).map(function (ambitoId) {
            var it = data[ambitoId] || {};
            return {
                ambitoId: ambitoId,
                state: it.state || '',
                description: it.description || '',
                attributes: it.attributes || []
            };
        });
        sendToGoogleSheets({
            action: 'catalog',
            name: userProfile.fullName,
            email: userProfile.email,
            course: COURSE_CONFIG.courseId,
            catalogId: catalogId,
            items: items
        });
    }
}

function restorePracticesCatalogs() {
    Object.keys(practicesCatalogs).forEach(function (catalogId) {
        var data = practicesCatalogs[catalogId];
        Object.keys(data).forEach(function (ambitoId) {
            var item = data[ambitoId];
            if (item.state) {
                var radio = document.querySelector('input[name="state-' + catalogId + '-' + ambitoId + '"][value="' + item.state + '"]');
                if (radio) radio.checked = true;
            }
            if (item.description) {
                var ta = document.querySelector('.practice-row[data-ambito="' + ambitoId + '"] .practice-desc');
                if (ta) ta.value = item.description;
            }
            (item.attributes || []).forEach(function (attrId) {
                var cb = document.querySelector('.practice-row[data-ambito="' + ambitoId + '"] input[data-attr="' + attrId + '"]');
                if (cb) cb.checked = true;
            });
        });
    });
}

// --- Catalog display (lee localStorage, opera cross-curso) ---
function getCatalogData(catalogId) {
    if (practicesCatalogs[catalogId] && Object.keys(practicesCatalogs[catalogId]).length > 0) {
        return practicesCatalogs[catalogId];
    }
    // Clave con apellido de linea desde el 14-sep-2026 (ADR-034 Fase 1 B2). MIGRACION:
    // un catalogo guardado bajo el catalogId a secas se lee una vez y se copia a la
    // clave nueva; la vieja no se borra.
    try {
        var raw = localStorage.getItem('politicas-transversales:' + catalogId);
        if (!raw) {
            var legado = localStorage.getItem(catalogId);
            if (legado) { guardarLocal('politicas-transversales:' + catalogId, legado); raw = legado; }
        }
        return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
}

function getAmbitoDisplayName(ambitoId) {
    // Vaciado el 15-sep-2026 (M4): eran los 8 ambitos de Desarrollo Institucional
    // (Gobernanza, Administracion, Recursos Economicos, Comunicaciones, Relaciones
    // Internacionales, Crecimiento, Gestion del Riesgo, Control y Reconocimiento).
    // Politicas Transversales no tiene ambitos propios: hasta que los tenga, se
    // devuelve el id crudo en vez de un nombre de otra linea.
    var names = {};
    return names[ambitoId] || ambitoId;
}

function renderCatalogDisplays() {
    document.querySelectorAll('.catalog-display').forEach(function (el) {
        var catalogId = el.getAttribute('data-catalog-id');
        var mode = el.getAttribute('data-mode') || 'full';
        var data = getCatalogData(catalogId);
        if (!data || Object.keys(data).length === 0) {
            el.innerHTML = '<div class="catalog-display-empty">⚠️ <strong>Aún no tienes catálogo guardado.</strong><br>Para que este componente se llene, primero completá antes el curso que lo alimenta y guardá tu catálogo.</div>';
            return;
        }
        var stateLabels = { si: '🟢 Sí', parcial: '🟡 Parcial', no: '🔴 No', 'no-se': '⚪ No sé' };
        var summary = { si: [], parcial: [], no: [], 'no-se': [] };
        Object.keys(data).forEach(function (aid) {
            var it = data[aid];
            if (it.state && summary[it.state]) summary[it.state].push({ id: aid, item: it });
        });
        var html = '<div class="catalog-display-content">';
        html += '<div class="catalog-summary">' +
            '<span class="catalog-summary-pill green">🟢 Sí: <strong>' + summary.si.length + '</strong></span>' +
            '<span class="catalog-summary-pill yellow">🟡 Parcial: <strong>' + summary.parcial.length + '</strong></span>' +
            '<span class="catalog-summary-pill red">🔴 No: <strong>' + summary.no.length + '</strong></span>' +
            '<span class="catalog-summary-pill gray">⚪ No sé: <strong>' + summary['no-se'].length + '</strong></span>' +
            '</div>';
        if (mode === 'full') {
            html += '<div class="catalog-detail">';
            ['si', 'parcial', 'no', 'no-se'].forEach(function (st) {
                summary[st].forEach(function (row) {
                    var attrs = (row.item.attributes || []).map(function (a) { return '<span class="attr-pill">' + a + '</span>'; }).join(' ');
                    var nAttrs = (row.item.attributes || []).length;
                    var desc = row.item.description ? '<p class="catalog-desc">"' + escapeHtml(row.item.description) + '"</p>' : '';
                    html += '<div class="catalog-item catalog-item-' + st + '">' +
                        '<h4>' + getAmbitoDisplayName(row.id) + ' — ' + stateLabels[st] + '</h4>' +
                        desc +
                        (attrs ? '<div class="catalog-attrs"><strong>Atributos cumplidos (' + nAttrs + '/5):</strong> ' + attrs + '</div>' : '') +
                        '</div>';
                });
            });
            html += '</div>';
        }
        html += '</div>';
        el.innerHTML = html;
    });
}



// ============================================================
// CURSO 6 DI — Mi Aporte al DI
// Catalogo de 24 metas-tipo (8 ambitos x 3 tipologias) + plan-builder
// ============================================================

// Vaciado el 15-sep-2026 (hallazgo M4 de la auditoria doctrinal del Curso 03):
// traia el curriculo de Desarrollo Institucional -sus 8 ambitos, sus 24 metas-tipo
// y sus Cursos 11/12/13/14/20/22- heredado al copiar el motor, y viajaba dentro de
// cada HTML compilado de ESTA linea. Politicas Transversales todavia no configura
// este componente: al construir el Curso 06 se rellena con lo propio (semaforo ASP
// de 17 items, tres compromisos) o se borra la maquinaria que no se use.
var META_TIPO_CATALOG = [];

// --- Brujula display (lee reflexion del Curso 2 L6 desde localStorage cross-curso) ---
function getBrujulaText(sourceCourseId, sourceModule) {
    try {
        var raw = localStorage.getItem('courseProgress_' + sourceCourseId);
        if (!raw) return null;
        var p = JSON.parse(raw);
        if (!p || !p.reflections) return null;
        var modKey = String(sourceModule || '6');
        return p.reflections[modKey] || p.reflections[parseInt(modKey, 10)] || null;
    } catch (e) { return null; }
}

function renderBrujulaDisplays() {
    document.querySelectorAll('.brujula-display').forEach(function (el) {
        var srcCourse = el.getAttribute('data-source-course') || '';
        var srcModule = el.getAttribute('data-source-module') || '6';
        var txt = getBrujulaText(srcCourse, srcModule);
        if (!txt || !txt.trim()) {
            el.innerHTML = '<div class="brujula-display-empty">ℹ️ <strong>Aún no registramos tu brújula personal.</strong><br>Para que este componente se llene, definí tu brújula como reflexión en el curso que la alimenta. Si ya lo hiciste en otro dispositivo, pulsá "Recuperar mi avance" en la pantalla de inicio.</div>';
            return;
        }
        el.innerHTML = '<div class="brujula-display-content">' +
            '<div class="brujula-display-label">🧭 Tu brújula personal:</div>' +
            '<blockquote class="brujula-display-text">' + escapeHtml(txt) + '</blockquote>' +
        '</div>';
    });
}

// --- Brujula action (detecta el principio elegido y sugiere accion contextual) ---
function detectarPrincipioEnBrujula(txt) {
    if (!txt) return null;
    var low = txt.toLowerCase();
    // Vaciado el 15-sep-2026 (M4): eran los principios de la PNDI de Desarrollo
    // Institucional mapeados a SUS codigos de meta (CR-fort, CT-crear, G-crear...),
    // que ya no existen aqui porque META_TIPO_CATALOG se vacio. Politicas
    // Transversales no tiene todavia un catalogo propio de principios.
    var principios = [];
    for (var i = 0; i < principios.length; i++) {
        for (var j = 0; j < principios[i].keys.length; j++) {
            if (low.indexOf(principios[i].keys[j]) !== -1) return principios[i];
        }
    }
    return null;
}

function renderBrujulaActions() {
    document.querySelectorAll('.brujula-action').forEach(function (el) {
        var srcCourse = el.getAttribute('data-source-course') || '';
        var srcModule = el.getAttribute('data-source-module') || '6';
        var txt = getBrujulaText(srcCourse, srcModule);
        var matched = detectarPrincipioEnBrujula(txt);
        if (!matched) {
            el.innerHTML = '<div class="brujula-action-empty">ℹ️ Definí tu brújula en el curso que la alimenta y volvé a esta lección para ver tu sugerencia personalizada.</div>';
            return;
        }
        el.innerHTML = '<div class="brujula-action-content">' +
            '<div class="brujula-action-label">🧭 Tu brújula es <strong>' + matched.name + '</strong>. Esto te sugiere:</div>' +
            '<p class="brujula-action-advice">' + matched.advice + '</p>' +
        '</div>';
    });
}

// --- Courses suggestion (lee catalogo y propone cursos N2 segun brechas) ---
function renderCoursesSuggestions() {
    document.querySelectorAll('.courses-suggestion').forEach(function (el) {
        var catId = el.getAttribute('data-catalog-id') || '';
        var data = getCatalogData(catId);
        if (!data || Object.keys(data).length === 0) {
            el.innerHTML = '<div class="courses-suggestion-empty">ℹ️ Para ver sugerencias personalizadas, completá antes el curso que lo alimenta.</div>';
            return;
        }
        // Vaciado el 15-sep-2026 (hallazgo M4 de la auditoria doctrinal del Curso 03):
        // traia el curriculo de Desarrollo Institucional -sus 8 ambitos, sus 24 metas-tipo
        // y sus Cursos 11/12/13/14/20/22- heredado al copiar el motor, y viajaba dentro de
        // cada HTML compilado de ESTA linea. Politicas Transversales todavia no configura
        // este componente: al construir el Curso 06 se rellena con lo propio (semaforo ASP
        // de 17 items, tres compromisos) o se borra la maquinaria que no se use.
        var coursesByAmbito = {};
        var suggestions = [];
        Object.keys(data).forEach(function (aid) {
            var state = (data[aid].state || '').toLowerCase();
            var course = coursesByAmbito[aid];
            if (course && (state === 'no' || state === 'parcial')) {
                suggestions.push({ ambito: aid, course: course, priority: state === 'no' ? 0 : 1, state: state });
            }
        });
        suggestions.sort(function (a, b) { return a.priority - b.priority; });
        var top3 = suggestions.slice(0, 3);
        if (top3.length === 0) {
            el.innerHTML = '<div class="courses-suggestion-content courses-suggestion-strong">' +
                '<p>🌟 <strong>Tu grupo es referencia.</strong> Tu catálogo no muestra ámbitos en NO o PARCIAL — seguí documentando lo que ya hacés bien para documentar y compartir tus prácticas con la región.</p>' +
            '</div>';
            return;
        }
        var html = '<div class="courses-suggestion-content"><p><strong>Sugerencias según tu catálogo:</strong></p><ul class="courses-suggestion-list">';
        top3.forEach(function (s) {
            var stLabel = s.state === 'no' ? '🔴 NO' : '🟡 PARCIAL';
            html += '<li><strong>' + s.course + '</strong> <em>(tu ámbito está en ' + stLabel + ')</em></li>';
        });
        html += '</ul><p class="courses-suggestion-disclaimer">📅 Esta sugerencia te orienta para cuando los cursos estén disponibles.</p></div>';
        el.innerHTML = html;
    });
}

// --- Goal-planner (Curso 6 L4) ---
function renderGoalPlanners() {
    document.querySelectorAll('.goal-planner').forEach(function (el) {
        var planId = el.getAttribute('data-plan-id');
        var maxAdopted = parseInt(el.getAttribute('data-max-adopted') || '5', 10);
        var slotsEl = document.getElementById('gp-slots-' + planId);
        if (!slotsEl) return;
        var html = '';
        for (var i = 0; i < maxAdopted; i++) {
            html += renderGoalSlot(planId, i);
        }
        slotsEl.innerHTML = html;
        restoreGoalPlannerState(planId);
    });
}

function renderGoalSlot(planId, idx) {
    var options = '<option value="">— Elegí una meta-tipo —</option>';
    var currentAmbito = '';
    META_TIPO_CATALOG.forEach(function (m) {
        if (m.ambito !== currentAmbito) {
            if (currentAmbito) options += '</optgroup>';
            options += '<optgroup label="' + escapeHtml(m.ambito) + '">';
            currentAmbito = m.ambito;
        }
        options += '<option value="' + m.id + '">' + escapeHtml(m.label) + '</option>';
    });
    if (currentAmbito) options += '</optgroup>';
    options += '<option value="custom">✏️ Una meta propia</option>';
    return '<div class="goal-slot" data-slot-idx="' + idx + '">' +
        '<h4 class="goal-slot-title">Meta ' + (idx + 1) + '</h4>' +
        '<label class="goal-field-label">Elegí una meta-tipo o creá una propia:</label>' +
        '<select class="goal-meta-select" aria-label="Meta-tipo para la prioridad ' + (idx + 1) + '" data-slot-idx="' + idx + '" onchange="onGoalMetaChange(\'' + planId + '\', ' + idx + ', this.value)">' + options + '</select>' +
        '<div class="goal-fields hidden" id="gf-' + planId + '-' + idx + '">' +
            '<div class="goal-custom-desc hidden">' +
                '<label class="goal-field-label">📝 Tu meta propia (descripción):</label>' +
                '<textarea class="goal-custom-textarea" placeholder="Describí tu meta en una frase…" onchange="saveGoalField(\'' + planId + '\', ' + idx + ', \'customDescription\', this.value)"></textarea>' +
            '</div>' +
            '<label class="goal-field-label">⏰ Plazo:</label>' +
            '<select class="goal-plazo-select" onchange="saveGoalField(\'' + planId + '\', ' + idx + ', \'plazo\', this.value)">' +
                '<option value="3">3 meses</option>' +
                '<option value="6" selected>6 meses</option>' +
                '<option value="12">12 meses</option>' +
            '</select>' +
            '<label class="goal-field-label">▶️ Primer paso (esta semana):</label>' +
            '<textarea class="goal-textarea goal-primer-paso" placeholder="Qué vas a hacer concretamente esta semana…" onchange="saveGoalField(\'' + planId + '\', ' + idx + ', \'primerPaso\', this.value)"></textarea>' +
            '<label class="goal-field-label">🤝 Persona con quien hablar primero:</label>' +
            '<input class="goal-input goal-persona" type="text" placeholder="Ej: Presidente del Consejo, Tesorero…" onchange="saveGoalField(\'' + planId + '\', ' + idx + ', \'persona\', this.value)">' +
            '<label class="goal-field-label">✅ Señal de cumplimiento:</label>' +
            '<textarea class="goal-textarea goal-senal" placeholder="Cómo sabrás que se cumplió esta meta…" onchange="saveGoalField(\'' + planId + '\', ' + idx + ', \'senal\', this.value)"></textarea>' +
        '</div>' +
    '</div>';
}

function onGoalMetaChange(planId, idx, value) {
    if (!personalPlans[planId]) personalPlans[planId] = { goals: [] };
    if (!personalPlans[planId].goals[idx]) personalPlans[planId].goals[idx] = {};
    personalPlans[planId].goals[idx].metaId = value;
    var fieldsEl = document.getElementById('gf-' + planId + '-' + idx);
    if (!fieldsEl) { saveProgress(); return; }
    var customDescEl = fieldsEl.querySelector('.goal-custom-desc');
    if (value) {
        fieldsEl.classList.remove('hidden');
        if (value === 'custom') {
            if (customDescEl) customDescEl.classList.remove('hidden');
        } else {
            if (customDescEl) customDescEl.classList.add('hidden');
            // Auto-preselect plazo from META_TIPO_CATALOG
            var meta = META_TIPO_CATALOG.filter(function (m) { return m.id === value; })[0];
            if (meta) {
                var plazoSel = fieldsEl.querySelector('.goal-plazo-select');
                if (plazoSel) {
                    plazoSel.value = String(meta.plazo);
                    personalPlans[planId].goals[idx].plazo = String(meta.plazo);
                }
            }
        }
    } else {
        fieldsEl.classList.add('hidden');
    }
    saveProgress();
}

function saveGoalField(planId, idx, field, value) {
    if (!personalPlans[planId]) personalPlans[planId] = { goals: [] };
    if (!personalPlans[planId].goals[idx]) personalPlans[planId].goals[idx] = {};
    personalPlans[planId].goals[idx][field] = value;
    saveProgress();
}

function restoreGoalPlannerState(planId) {
    var plan = personalPlans[planId];
    if (!plan || !plan.goals) return;
    plan.goals.forEach(function (goal, idx) {
        if (!goal) return;
        var slot = document.querySelector('#gp-slots-' + planId + ' .goal-slot[data-slot-idx="' + idx + '"]');
        if (!slot) return;
        var metaSel = slot.querySelector('.goal-meta-select');
        if (metaSel && goal.metaId) {
            metaSel.value = goal.metaId;
            // Disparar onGoalMetaChange para mostrar los campos correctos
            var fieldsEl = document.getElementById('gf-' + planId + '-' + idx);
            if (fieldsEl) {
                fieldsEl.classList.remove('hidden');
                var customDescEl = fieldsEl.querySelector('.goal-custom-desc');
                if (goal.metaId === 'custom') {
                    if (customDescEl) customDescEl.classList.remove('hidden');
                } else if (customDescEl) {
                    customDescEl.classList.add('hidden');
                }
            }
        }
        if (goal.plazo) {
            var plazoSel = slot.querySelector('.goal-plazo-select');
            if (plazoSel) plazoSel.value = String(goal.plazo);
        }
        if (goal.primerPaso) {
            var taPaso = slot.querySelector('.goal-primer-paso');
            if (taPaso) taPaso.value = goal.primerPaso;
        }
        if (goal.persona) {
            var pers = slot.querySelector('.goal-persona');
            if (pers) pers.value = goal.persona;
        }
        if (goal.senal) {
            var taSenal = slot.querySelector('.goal-senal');
            if (taSenal) taSenal.value = goal.senal;
        }
        if (goal.customDescription) {
            var taCustom = slot.querySelector('.goal-custom-textarea');
            if (taCustom) taCustom.value = goal.customDescription;
        }
    });
}

function saveGoalPlanner(planId) {
    var plan = personalPlans[planId] || { goals: [] };
    var adopted = (plan.goals || []).filter(function (g) { return g && g.metaId; });
    plan.goals = adopted;
    personalPlans[planId] = plan;
    saveProgress();
    if (userProfile && userProfile.email && typeof sendToGoogleSheets === 'function') {
        sendToGoogleSheets({
            action: 'plan',
            email: userProfile.email,
            name: userProfile.fullName,
            course: COURSE_CONFIG.courseId,
            planId: planId,
            planType: 'goal-planner-di',
            contenido: plan
        });
    }
    var statusEl = document.getElementById('gp-status-' + planId);
    if (statusEl) {
        statusEl.classList.remove('hidden');
        statusEl.innerHTML = '<strong>✅ Tu plan se guardó.</strong> Tenés <strong>' + adopted.length + '</strong> meta' + (adopted.length === 1 ? '' : 's') + ' adoptada' + (adopted.length === 1 ? '' : 's') + '. Podés modificarlo y volver a guardar cuando quieras.';
        statusEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    showNotification('✅ Plan guardado');
}

// --- PDF generator del plan personal (Curso 6 L6) ---
function generatePlanPDF(planId) {
    var content = buildPlanPrintableHTML(planId);
    var win = window.open('', '_blank');
    if (!win) {
        showNotification('⚠️ El navegador bloqueó la ventana. Permití pop-ups y volvé a intentar.', 'warning');
        return;
    }
    win.document.open();
    win.document.write(content);
    win.document.close();
    setTimeout(function () {
        try { win.focus(); win.print(); } catch (e) { /* ignore */ }
    }, 600);
}

function buildPlanPrintableHTML(planId) {
    var fullName = (userProfile && userProfile.fullName) || 'Adulto del Movimiento';
    var grupo = (userProfile && userProfile.group) || '—';
    var region = (userProfile && userProfile.region) || '—';
    var dateStr = new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' });
    var catalog = getCatalogData('') || {};
    var brujula = getBrujulaText('', '6') || '';
    var plan = personalPlans[planId] || { goals: [] };
    var adopted = (plan.goals || []).filter(function (g) { return g && g.metaId; });

    var stateLabels = { si: '🟢 Sí', parcial: '🟡 Parcial', no: '🔴 No', 'no-se': '⚪ No sé' };
    var summary = { si: 0, parcial: 0, no: 0, 'no-se': 0 };
    Object.keys(catalog).forEach(function (k) {
        var st = catalog[k].state;
        if (st && summary[st] !== undefined) summary[st]++;
    });

    var catalogHTML = '';
    Object.keys(catalog).forEach(function (aid) {
        var it = catalog[aid] || {};
        var stLabel = stateLabels[it.state] || '—';
        var aName = getAmbitoDisplayName(aid);
        var attrs = (it.attributes || []).join(', ');
        var desc = it.description || '';
        catalogHTML += '<div class="pp-cat-item"><h4>' + aName + ' — ' + stLabel + '</h4>' +
            (desc ? '<p>"' + escapeHtml(desc) + '"</p>' : '') +
            (attrs ? '<p class="pp-cat-attrs"><em>Atributos:</em> ' + escapeHtml(attrs) + '</p>' : '') +
            '</div>';
    });
    if (!catalogHTML) catalogHTML = '<p><em>Sin catálogo registrado todavía. Completá antes el curso que lo alimenta.</em></p>';

    var goalsHTML = '';
    adopted.forEach(function (g, idx) {
        var meta = META_TIPO_CATALOG.filter(function (m) { return m.id === g.metaId; })[0];
        var title = meta ? meta.label : (g.metaId === 'custom' ? '✏️ Meta propia' : g.metaId);
        var customDesc = (g.metaId === 'custom' && g.customDescription) ? '<p class="pp-goal-custom">' + escapeHtml(g.customDescription) + '</p>' : '';
        goalsHTML += '<div class="pp-goal">' +
            '<h4>' + (idx + 1) + '. ' + escapeHtml(title) + '</h4>' +
            customDesc +
            '<dl>' +
                '<dt>⏰ Plazo:</dt><dd>' + escapeHtml(String(g.plazo || '—')) + ' meses</dd>' +
                '<dt>▶️ Primer paso (esta semana):</dt><dd>' + escapeHtml(g.primerPaso || '—') + '</dd>' +
                '<dt>🤝 Persona con quien hablar primero:</dt><dd>' + escapeHtml(g.persona || '—') + '</dd>' +
                '<dt>✅ Señal de cumplimiento:</dt><dd>' + escapeHtml(g.senal || '—') + '</dd>' +
            '</dl>' +
        '</div>';
    });
    if (!goalsHTML) goalsHTML = '<p><em>Sin metas adoptadas. Volvé al plan-builder y elegí al menos una meta antes de generar el PDF.</em></p>';

    // Suggested N2 courses
    // Vaciado el 15-sep-2026 (hallazgo M4 de la auditoria doctrinal del Curso 03):
    // traia el curriculo de Desarrollo Institucional -sus 8 ambitos, sus 24 metas-tipo
    // y sus Cursos 11/12/13/14/20/22- heredado al copiar el motor, y viajaba dentro de
    // cada HTML compilado de ESTA linea. Politicas Transversales todavia no configura
    // este componente: al construir el Curso 06 se rellena con lo propio (semaforo ASP
    // de 17 items, tres compromisos) o se borra la maquinaria que no se use.
    var coursesByAmbito = {};
    var sugg = [];
    Object.keys(catalog).forEach(function (aid) {
        var state = (catalog[aid].state || '').toLowerCase();
        if (coursesByAmbito[aid] && (state === 'no' || state === 'parcial')) {
            sugg.push({ course: coursesByAmbito[aid], priority: state === 'no' ? 0 : 1 });
        }
    });
    sugg.sort(function (a, b) { return a.priority - b.priority; });
    var top3 = sugg.slice(0, 3);
    var coursesHTML = top3.length ? '<ul>' + top3.map(function (s) { return '<li>' + s.course + '</li>'; }).join('') + '</ul>' :
        '<p><em>Tu grupo está sólido — seguí documentando y compartiendo tus prácticas.</em></p>';

    return '<!DOCTYPE html><html lang="es"><head><meta charset="utf-8">' +
        '<title>Mi Aporte al DI — ' + escapeHtml(fullName) + '</title>' +
        '<style>' +
            'body{font-family:Arial,sans-serif;max-width:800px;margin:24px auto;padding:0 24px;color:#222;line-height:1.55;}' +
            'h1{color:#622599;text-align:center;margin:0 0 4px 0;}' +
            'h2{color:#622599;border-bottom:2px solid #622599;padding-bottom:4px;margin:24px 0 12px 0;}' +
            'h3{color:#4a1c75;margin:18px 0 6px 0;}' +
            'h4{color:#333;margin:10px 0 4px 0;}' +
            '.pp-meta{text-align:center;color:#666;font-style:italic;margin-bottom:18px;}' +
            '.pp-summary{display:flex;gap:10px;padding:10px;background:#f8f5fc;border-radius:6px;margin:10px 0;flex-wrap:wrap;justify-content:center;}' +
            '.pp-summary span{padding:5px 12px;background:#fff;border-radius:14px;font-size:0.92em;}' +
            '.pp-cat-item{padding:10px 14px;background:#fff;border-left:3px solid #622599;margin:8px 0;border-radius:4px;page-break-inside:avoid;}' +
            '.pp-cat-item p{margin:4px 0;}' +
            '.pp-cat-attrs{font-size:0.88em;color:#555;}' +
            '.pp-goal{background:#f8f5fc;border-left:4px solid #622599;padding:14px 18px;margin:12px 0;border-radius:6px;page-break-inside:avoid;}' +
            '.pp-goal-custom{font-style:italic;color:#555;margin:6px 0;}' +
            '.pp-goal dl{margin:6px 0;}' +
            '.pp-goal dt{font-weight:600;margin-top:6px;color:#444;}' +
            '.pp-goal dd{margin-left:20px;margin-bottom:6px;}' +
            '.pp-brujula{background:#fff8e1;padding:14px 18px;border-left:4px solid #ffa000;border-radius:6px;font-style:italic;margin:10px 0;}' +
            '.pp-signatures{display:grid;grid-template-columns:1fr 1fr;gap:30px;margin-top:60px;}' +
            '.pp-sigblock{border-top:1px solid #333;padding-top:6px;text-align:center;font-size:0.9em;}' +
            '.pp-footer{text-align:center;margin-top:40px;padding-top:10px;border-top:1px solid #eee;font-size:0.85em;color:#999;}' +
            '@media print{body{margin:0;}h1,h2{page-break-after:avoid;}}' +
        '</style></head><body>' +
        '<h1>📋 ' + escapeHtml(planTitle || 'Mi plan de compromisos') + '</h1>' +
        '<p class="pp-meta"><strong>' + escapeHtml(fullName) + '</strong> · Grupo ' + escapeHtml(grupo) + ' · Región ' + escapeHtml(region) + ' · ' + dateStr + '</p>' +
        '<h2>1. Mi catálogo</h2>' +
        '<div class="pp-summary">' +
            '<span>🟢 Sí: <strong>' + summary.si + '</strong></span>' +
            '<span>🟡 Parcial: <strong>' + summary.parcial + '</strong></span>' +
            '<span>🔴 No: <strong>' + summary.no + '</strong></span>' +
            '<span>⚪ No sé: <strong>' + summary['no-se'] + '</strong></span>' +
        '</div>' +
        catalogHTML +
        '<h2>2. Mi brújula personal</h2>' +
        (brujula ? '<div class="pp-brujula">"' + escapeHtml(brujula) + '"</div>' : '<p><em>Sin brújula registrada todavía.</em></p>') +
        '<h2>3. Mis metas adoptadas (' + adopted.length + ')</h2>' +
        goalsHTML +
        '<h2>4. Cursos sugeridos</h2>' +
        coursesHTML +
        '<h2>5. Compromiso de firma</h2>' +
        '<div class="pp-signatures">' +
            '<div class="pp-sigblock">Firma personal<br><strong>' + escapeHtml(fullName) + '</strong></div>' +
            '<div class="pp-sigblock">Firma del testigo<br><em>(opcional)</em></div>' +
        '</div>' +
        '<p class="pp-footer">Plataforma de Formación de Adultos — Asociación Scouts de Colombia · Línea Políticas Transversales</p>' +
        '</body></html>';
}
