# Notas de contenido

## Criterio de cifras
Una embajada verifica lo que se le entrega. Por eso se usaron **solo** las cifras del portfolio PDF 2026 y, cuando no estaban ahí, la versión más conservadora de las fichas de caso del sitio.

| Caso | Cifra usada | Fuente |
|---|---|---|
| Escala | 300 a +30.000 personas | PDF |
| Rep. Dominicana FIT 2026 | 400 m², 4 jornadas, +7.000 porciones/día | PDF |
| Manchester City | +2.000 fans | PDF y ficha de caso |
| DiDi | 3 lanzamientos, 1 contrato marco internacional | PDF |
| Camondo WWR | +300 empresarios, 6 sectores, ingreso < 30 s | Ficha de caso |
| Campus Party Entre Ríos | +13.000 registros, +5.000 asistentes | Ficha de caso |
| Espacio Shell | +1.300 ejecutivos (Face ID) | Ficha de caso (otra página dice 1.500) |
| Leyendas de México | +25.000, 2 ediciones | Ficha de caso |
| Abel Pintos | 30 funciones, 8 ciudades | Ficha de caso (se evitó el total de asistentes porque la suma no cierra) |

## Inconsistencias del sitio somosder.ar para corregir
Conviene corregirlas antes de que la Embajada visite la web (el QR de la carpeta lleva a `/portfolio`):

- **Año de fundación:** `components/schema-org.tsx` y el layout dicen 2013 / "más de 10 años"; Nosotros y la home dicen 2023 / 2 años.
- **Mail:** el PDF usa `contacto@somosder.com.ar`; el sitio usa `contacto@somosder.ar`; el footer usa `contacto@derp.com.ar`. En la carpeta quedó el del PDF. **Confirmar cuál es el correcto** y, si cambia, editarlo en `src/content.py` y regenerar.
- **Teléfono placeholder:** `+54 9 11 1234-5678` en contacto, nosotros y cotizador.
- **Cifras que no coinciden entre el índice del portfolio y las fichas:** Man City (15K / 1.000 / 2.000+), Wave (2.500 / 5.000+), Expo Autos (50.000 / 4.000+), Buenos Aires Trap (15.000 / 120.000), Saint Mary (torneo internacional / torneo escolar ad honorem), Shell (1.300 / 1.500).
- **Imágenes placeholder** en varias fichas (Abel Pintos, Wave, Indie Dev, Fiesta de la Manzana) y testimonios genéricos en `/servicios`.
- **"MIGOR" / "MIRGOR"**: el logo del PDF dice Mirgor.

## Decisiones
- **Marca país:** no se usó el escudo ni logos oficiales del Gobierno de Suecia. Solo una franja azul y amarilla como acento, más el saludo "Hej!" y el cierre "Tack för er tid" ("Gracias por su tiempo").
- **Formatos propuestos** (Día Nacional 6/6, Nobel, Lucia, Midsommar, Team Sweden): se presentan como formatos posibles de la agenda sueca, sin afirmar que la Embajada los organiza ni con qué alcance. Confirmarlo en la reunión.
- **Compromisos de sostenibilidad e inclusión:** están redactados como compromisos operativos que DER asume, no como certificaciones. Revisar que el equipo pueda cumplirlos (paridad en staff, menú sin TACC, relevamiento de accesibilidad).
- **Casos que quedaron afuera:** conciertos (Anuel AA, Myke Towers, Buenos Aires Trap), porque no suman al perfil institucional, y el Mundial Sub-17 de Halterofilia, porque no se pudo verificar.
- **Fotos:** el sitio está bloqueado desde el entorno de trabajo y Cloudinary también, así que las fotos se recortaron del PDF (resolución de pantalla). Alcanzan para impresión digital A4. Para offset o tamaños grandes, reemplazarlas por los originales.
