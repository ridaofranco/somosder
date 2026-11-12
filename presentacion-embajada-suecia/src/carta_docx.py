# Genera la carta de presentación editable (.docx)
import os
from docx import Document
from docx.shared import Pt, Mm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
d = Document()
s = d.sections[0]; s.page_width, s.page_height = Mm(210), Mm(297)
s.left_margin = s.right_margin = Mm(22); s.top_margin = Mm(18); s.bottom_margin = Mm(18)
st = d.styles["Normal"]; st.font.name = "Jost"; st.font.size = Pt(10.5)
d.add_picture(os.path.join(ROOT, "assets/img/der-logo-black.png"), height=Mm(9))
h = d.add_paragraph("Aráoz 1146, Palermo · CABA · contacto@somosder.com.ar · +54 9 11 7154-0675 · somosder.ar"); h.runs[0].font.size = Pt(8); h.runs[0].font.color.rgb = RGBColor(0x6b, 0x6b, 0x6b)
OR = RGBColor(0xff, 0x5c, 0x00)
def par(parts, align=None, space=8):
    p = d.add_paragraph(); p.paragraph_format.space_after = Pt(space)
    if align: p.alignment = align
    for txt, kind in parts:
        r = p.add_run(txt)
        if kind == "b": r.bold = True
        if kind == "f": r.font.color.rgb = OR
    return p
par([("Buenos Aires, ", ""), ("[día]", "f"), (" de noviembre de 2026", "")], WD_ALIGN_PARAGRAPH.RIGHT, 18)
par([("Embajada de Suecia en la República Argentina\n", "b"), ("At. ", ""), ("[Nombre y cargo del/de la interlocutor/a]", "f"), ("\nOlga Cossettini 731, piso 2 · Puerto Madero · CABA", "")], space=18)
for t in [
 "De nuestra mayor consideración:",
 "Agradecemos la oportunidad de presentarles a DER, productora de eventos institucionales, corporativos y masivos con base en Buenos Aires. Acompañamos a marcas globales, gobiernos y agencias internacionales con un mismo equipo que resuelve montaje, logística, gastronomía, staff, acreditación y control de accesos, con plataformas tecnológicas propias.",
 "Entre nuestros trabajos recientes se destacan la gastronomía del stand de República Dominicana como país invitado de honor en la FIT 2026, la producción local del Treble Trophy Tour del Manchester City junto a la agencia británica Beyond 90, el operativo de acreditación del foro Camondo WWR coordinado con la seguridad presidencial y los lanzamientos de DiDi en tres ciudades del país.",
 "Creemos que esa experiencia puede ser de valor para la agenda de la Embajada: recepciones oficiales como el Día Nacional, fechas culturales, foros comerciales y de innovación, visitas de delegaciones y acciones de diplomacia pública. Nos comprometemos a trabajar con criterios de sostenibilidad, inclusión, accesibilidad y confidencialidad, en español e inglés.",
 "Adjuntamos nuestra carpeta institucional y una propuesta de formatos. Quedamos a disposición para una reunión de relevamiento y para preparar, sin compromiso, un plan operativo y un presupuesto para el próximo evento que estén planificando.",
 "Saludamos a ustedes muy atentamente."]:
    par([(t, "")])
d.add_paragraph("\n\n")
par([("[Nombre y apellido]", "f"), ("\n", ""), ("[Cargo]", "f"), (" · DER", "")])
d.save(os.path.join(ROOT, "imprimir", "05-Carta-de-presentacion-ES-EDITABLE.docx"))
print("DOCX ok")
