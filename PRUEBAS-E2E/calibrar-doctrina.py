# -*- coding: utf-8 -*-
"""Calibración de las tres compuertas nuevas ANTES de escribirlas.

La regla de la casa (comentario de codigo.spec.js): «automatizar el DAÑO MEDIBLE,
no su proxy». Un primer intento de barrer la prosa de los cursos con lexico.json
produjo puro ruido. Así que aquí se mide el ruido primero, contra el corpus real.
"""
import glob
import io
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8")
os.chdir(r"C:/Users/Principal/Documents/APP APRENDIZAJE/APP PARA APRENDIZAJE")

LINEAS = {
    "PT": "INDUCCION-POLITICAS-TRANSVERSALES",
    "PJ": "INDUCCION-PROGRAMA-JOVENES",
    "PA": "INDUCCION-ADULTOS",
    "DI": "INDUCCION-DESARROLLO-INSTITUCIONAL",
}


def cursos(linea):
    for f in sorted(glob.glob(f"{LINEAS[linea]}/05-Generador-Cursos/borradores/*.json")):
        yield os.path.basename(f)[:-5], json.load(io.open(f, encoding="utf-8"))


def prosa(d):
    """Todo el texto visible del curso, con su ubicación."""
    out = []
    for m in d.get("modules", []):
        for s in m.get("sections", []):
            for k in ("text", "label", "source"):
                if isinstance(s.get(k), str):
                    out.append((f"M{m['id']}.{s['type']}.{k}", s[k]))
            for it in s.get("items", []):
                if isinstance(it, str):
                    out.append((f"M{m['id']}.{s['type']}.item", it))
                elif isinstance(it, dict):
                    for k in ("title", "description"):
                        if isinstance(it.get(k), str):
                            out.append((f"M{m['id']}.{s['type']}.{k}", it[k]))
        if m.get("reflection", {}).get("prompt"):
            out.append((f"M{m['id']}.reflection", m["reflection"]["prompt"]))
    return out


limpio = lambda t: re.sub(r"<[^>]+>", " ", t)

# ══════════ REGLA 1 · términos ASP superados por la Política 2025
SUPERADOS = [
    (r"\bEscuchadero\b", "espacios ¡Óyeme!"),
    (r"\bDURAS-?I\b(?!D)", "DURASLID"),
    (r"referente(s)? ASP\b", "Comité de Gestión de Incidentes"),
    (r"Bot[oó]n de Denuncias", "botón «Me Pongo A Salvo del Peligro»"),
    (r"Me Siento a Salvo del Peligro", "«Me Pongo A Salvo del Peligro»"),
]
print("═" * 78)
print("REGLA 1 · términos ASP superados — barriendo la PROSA de los cursos")
print("═" * 78)
MARCA = r"(ya no|superad|no es el nombre|se llamaba|aprendiste a|202[0-3]|antes se|todavia|todavía|cambi[oó]|paso a|pas[oó] a|obsolet|de entonces|en su p[aá]gina|si te formaron|la edici[oó]n anterior|version anterior|versi[oó]n anterior)"
for ln in LINEAS:
    for cid, d in cursos(ln):
        for donde, txt in prosa(d):
            t = limpio(txt)
            for pat, ok in SUPERADOS:
                m = re.search(pat, t, re.I)
                if not m:
                    continue
                i = m.start()
                ctx = t[max(0, i - 260):i + 260]
                marcado = bool(re.search(MARCA, ctx, re.I))
                print(f"  [{ln}/{cid}] {donde} {'(glosado, OK)' if marcado else '*** SIN GLOSAR ***'}")
                print(f"       …{t[max(0,i-70):i+90].strip()}…  -> vigente: {ok}")

# ══════════ REGLA 2 · la línea roja en la OPCIÓN CORRECTA de un quiz
VERBOS = r"\b(investigar|investigue|investigues|investigando|averiguar|averigües|averigua|confrontar|confronta|confrontes|indagar|indaga|interrogar|interroga|resolverlo internamente|resolver internamente)\b"
MARCADOR = r"\b(no|nunca|jam[aá]s|sin|ni|evita|evitar|abstente|revictimiza\w*|da[nñ]a\w*|perjudic\w*|quien s[ií]|corresponde|autoridad\w*)\b"
print()
print("═" * 78)
print("REGLA 2 · verbos de la línea roja en la opción CORRECTA de un quiz")
print("═" * 78)
for ln in LINEAS:
    for cid, d in cursos(ln):
        for m in d.get("modules", []):
            for qi, q in enumerate(m.get("quiz", {}).get("questions", [])):
                c = limpio(q["options"][q["correctIndex"]])
                m2 = re.search(VERBOS, c, re.I)
                if not m2:
                    continue
                # (a) la opcion ARRANCA con el verbo -> es una instruccion
                arranca = bool(re.match(r"\s*[«\"']?" + VERBOS, c, re.I))
                # (b) hay negacion o consecuencia en cualquier parte de la opcion
                salvado = bool(re.search(MARCADOR, c, re.I))
                mal = arranca or not salvado
                print(f"  [{ln}/{cid}] M{m['id']}Q{qi+1} {'*** INSTRUYE INVESTIGAR ***' if mal else '(glosado/negado, OK)'}")
                print(f"       correcta: {c.strip()}")

# ══════════ REGLA 3 · el antídoto de no-sustitución
MENCIONA = r"(m[oó]dulo (oficial |nacional )?de A Salvo del Peligro|curso o m[oó]dulo de A Salvo|cursos? SFH|cursos de A Salvo del Peligro)"
ANTIDOTO = r"(no (lo )?(sustituye|reemplaza)|no sustituye|no reemplaza|esta plataforma no reemplaza|no certifica)"
print()
print("═" * 78)
print("REGLA 3 · cursos de PT que mencionan el módulo oficial sin el antídoto")
print("═" * 78)
for cid, d in cursos("PT"):
    todo = " ".join(limpio(t) for _, t in prosa(d))
    menc = len(re.findall(MENCIONA, todo, re.I))
    anti = len(re.findall(ANTIDOTO, todo, re.I))
    estado = "OK" if (menc == 0 or anti > 0) else "*** FALTA EL ANTÍDOTO ***"
    print(f"  [{cid}] menciones={menc}  antídoto={anti}  -> {estado}")
