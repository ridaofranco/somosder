# -*- coding: utf-8 -*-
"""Genera los HTML de impresión y los PDF finales.

Uso:  python3 src/build.py            (desde presentacion-embajada-suecia/)
Requiere: jinja2, Node + Playwright (Chromium) y acceso a Google Fonts.
"""
import json, os, subprocess, sys
from jinja2 import Environment, FileSystemLoader

sys.path.insert(0, os.path.dirname(__file__))
from content import T, CONTACT, LOGOS

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC, BUILD, OUT = (os.path.join(ROOT, d) for d in ("src", "build", "imprimir"))
os.makedirs(BUILD, exist_ok=True); os.makedirs(OUT, exist_ok=True)
env = Environment(loader=FileSystemLoader(SRC), autoescape=False)

# (plantilla, idioma, html de salida, pdf de salida, formato)
JOBS = [
    ("dossier.html.j2", "es", "dossier-es.html", "01-Dossier-DER-Embajada-Suecia-ES.pdf", "A4"),
    ("dossier.html.j2", "en", "dossier-en.html", "02-Dossier-DER-Embassy-of-Sweden-EN.pdf", "A4"),
    ("onepager.html.j2", "es", "onepager-es.html", "03-One-pager-ES.pdf", "A4"),
    ("onepager.html.j2", "en", "onepager-en.html", "04-One-pager-EN.pdf", "A4"),
    ("carta.html.j2", "es", "carta-es.html", "05-Carta-de-presentacion-ES.pdf", "A4"),
    ("tapa.html.j2", "es", "tapa.html", "06-Tapa-carpeta-A3-con-sangrado.pdf", "tapa"),
    ("tarjeta.html.j2", "es", "tarjeta.html", "07-Tarjeta-QR-85x55-con-sangrado.pdf", "tarjeta"),
    ("guion.html.j2", "es", "guion.html", "08-Guion-de-reunion-USO-INTERNO.pdf", "A4"),
]

only = sys.argv[1:]
jobs = []
for tpl, lang, html, pdf, fmt in JOBS:
    if only and not any(o in html for o in only):
        continue
    if not os.path.exists(os.path.join(SRC, tpl)):
        print("skip (sin plantilla):", tpl); continue
    out = env.get_template(tpl).render(t=T[lang], c=CONTACT, logos=LOGOS, other=T["en" if lang == "es" else "es"])
    with open(os.path.join(BUILD, html), "w", encoding="utf-8") as f:
        f.write(out)
    jobs.append({"html": os.path.join(BUILD, html), "pdf": os.path.join(OUT, pdf), "fmt": fmt})

# Presentación multimedia (un solo HTML bilingüe)
if not only or "deck" in only:
    MM = os.path.join(ROOT, "multimedia")
    out = env.get_template("deck.html.j2").render(es=T["es"], en=T["en"], c=CONTACT, logos=LOGOS)
    with open(os.path.join(MM, "index.html"), "w", encoding="utf-8") as f:
        f.write(out)
    for lg in ("es", "en"):
        jobs.append({"html": os.path.join(MM, "index.html") + "?lang=" + lg,
                     "pdf": os.path.join(MM, f"Presentacion-16x9-{lg.upper()}.pdf"), "fmt": "deck"})

subprocess.run(["node", os.path.join(SRC, "render.js"), json.dumps(jobs)], check=True)
