# Carpeta DER · Embajada de Suecia en Argentina

Material para la reunión presencial en la Embajada de Suecia (Olga Cossettini 731, piso 2, Puerto Madero).
Se armó a partir del portfolio corporativo 2026 (PDF) y de los casos publicados en somosder.ar.

## Qué hay

### `imprimir/`: archivos para imprenta

| Archivo | Formato | Qué es | Cómo imprimir |
|---|---|---|---|
| `01-Dossier-DER-Embajada-Suecia-ES.pdf` | A4 · 12 págs. | Dossier principal | Ilustración 150 g mate, color. Abrochado a caballete (12 págs. = 3 pliegos) o anillado |
| `02-Dossier-DER-Embassy-of-Sweden-EN.pdf` | A4 · 12 págs. | El mismo dossier en inglés, para personal sueco | Igual que el anterior |
| `03-One-pager-ES.pdf` / `04-One-pager-EN.pdf` | A4 frente y dorso | Resumen para dejar | Ilustración 250–300 g, doble faz |
| `05-Carta-de-presentacion-ES.pdf` | A4 | Carta a la Embajada | Completar los campos en naranja antes: usar el `.docx` editable, firmar a mano. Bond 90–120 g |
| `06-Tapa-carpeta-A3-con-sangrado.pdf` | 426 × 303 mm | Tapa y contratapa de la carpeta (A3 apaisado + 3 mm de sangrado) | Ilustración 300–350 g con laminado mate. Plegar al medio (lomo en 213 mm). Si la imprenta tiene troquel de carpeta con solapa, pedirle que adapte este arte a su molde |
| `07-Tarjeta-QR-85x55-con-sangrado.pdf` | 91 × 61 mm · 2 caras | Tarjeta con QR al portfolio | 350 g mate, refilar a 85 × 55 mm |
| `08-Guion-de-reunion-USO-INTERNO.pdf` | A4 · 3 págs. | Agenda, preguntas, objeciones, cifras y mail de seguimiento | **No entregar.** Solo para el equipo DER |

**Armado sugerido de cada carpeta:** tapa A3 plegada → carta firmada (adelante) → dossier ES (o EN) → one-pager → tarjeta QR en la solapa o abrochada. Imprimir 2 carpetas en español y 1 en inglés.

### `multimedia/`: presentación para pantalla

- `index.html`: presentación de 14 diapositivas en 16:9, bilingüe ES/EN, que funciona sin internet (solo las tipografías vienen de Google Fonts; si no hay conexión usa la tipografía del sistema).
  - Teclas: `→` / `Espacio` avanza, `←` retrocede, `L` cambia el idioma, `F` pantalla completa, `A` modo automático (avanza cada 9 s, sirve para dejarla corriendo en una TV).
  - En tablet: deslizar hacia los costados.
  - Atajos por URL: `index.html?lang=en`, `index.html?auto`, `index.html#7` (abre en la diapositiva 7).
- `Presentacion-16x9-ES.pdf` / `-EN.pdf`: la misma presentación en PDF, como respaldo si falla la notebook.

**Antes de la reunión:** copiar la carpeta `multimedia/` completa a la notebook o tablet, y abrir `index.html` una vez con internet para que el navegador guarde las tipografías.

## Cómo regenerar

```bash
cd presentacion-embajada-suecia
pip install jinja2 qrcode python-docx
python3 src/build.py            # todos los PDF + multimedia/index.html
python3 src/build.py dossier    # solo los dossiers
python3 src/carta_docx.py       # carta editable .docx
```

- Todos los textos (ES y EN) están en `src/content.py`. Se cambian ahí y se regenera.
- Las plantillas son `src/*.html.j2` y los estilos de impresión, `src/print.css`.
- Las fotos se recortaron del PDF del portfolio (`assets/img/`). Para mejorar la calidad de impresión, reemplazarlas por los originales en alta, con el mismo nombre de archivo.

## Notas

Ver `NOTAS.md`: cifras usadas, inconsistencias detectadas en el sitio y decisiones de contenido.
