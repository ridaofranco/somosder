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
par([("Buenos Aires, ", ""), ("[fecha]", "f")], WD_ALIGN_PARAGRAPH.RIGHT, 18)
par([("[Institución]", "f"), ("\nAt. ", ""), ("[Nombre y cargo]", "f"), ("\n", ""), ("[Dirección]", "f")], space=18)
for t in [
 "De nuestra mayor consideración:",
 "Tenemos el agrado de presentarles a DER, productora de eventos institucionales, corporativos y masivos con base en Buenos Aires. Acompañamos a gobiernos, organismos internacionales y marcas globales con un mismo equipo que resuelve producción, montaje, mobiliario, logística, gastronomía, staff, acreditación y control de accesos, con plataformas tecnológicas propias.",
 "Entre nuestros trabajos recientes se destacan la producción del V Congreso Mundial de Asturianía para el Principado de Asturias, la gastronomía del stand de República Dominicana como país invitado de honor en la FIT 2026, la producción local del Treble Trophy Tour del Manchester City junto a la agencia británica Beyond 90 y el operativo de acreditación del foro Camondo WWR, coordinado con la seguridad presidencial.",
 "Producimos congresos, recepciones oficiales, foros y misiones comerciales, visitas de delegaciones y acciones culturales, con criterios de sostenibilidad, inclusión, accesibilidad y confidencialidad, y con atención en español e inglés.",
 "Adjuntamos nuestro portfolio institucional. Quedamos a disposición para conocer su agenda de eventos y preparar, sin compromiso, un plan operativo y un presupuesto a medida.",
 "Saludamos a ustedes muy atentamente."]:
    par([(t, "")])
d.add_paragraph("\n\n")
par([("[Nombre y apellido]", "f"), ("\n", ""), ("[Cargo]", "f"), (" · DER", "")])
d.save(os.path.join(ROOT, "imprimir", "05-Carta-de-presentacion-ES-EDITABLE.docx"))
print("DOCX ok")
