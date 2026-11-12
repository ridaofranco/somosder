# Notas de contenido

## Criterio de cifras
Los clientes institucionales verifican lo que se les entrega. Por eso se usaron **solo** las cifras del portfolio PDF 2026 y, cuando no estaban ahí, la versión más conservadora de las fichas de caso del sitio.

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
Conviene corregirlas antes de entregar la carpeta (el QR de la carpeta lleva a `/portfolio`):

- **Año de fundación:** `components/schema-org.tsx` y el layout dicen 2013 / "más de 10 años"; Nosotros y la home dicen 2023 / 2 años.
- **Mail:** el PDF usa `contacto@somosder.com.ar`; el sitio usa `contacto@somosder.ar`; el footer usa `contacto@derp.com.ar`. En la carpeta quedó el del PDF. **Confirmar cuál es el correcto** y, si cambia, editarlo en `src/content.py` y regenerar.
- **Teléfono placeholder:** `+54 9 11 1234-5678` en contacto, nosotros y cotizador.
- **Cifras que no coinciden entre el índice del portfolio y las fichas:** Man City (15K / 1.000 / 2.000+), Wave (2.500 / 5.000+), Expo Autos (50.000 / 4.000+), Buenos Aires Trap (15.000 / 120.000), Saint Mary (torneo internacional / torneo escolar ad honorem), Shell (1.300 / 1.500).
- **Imágenes placeholder** en varias fichas (Abel Pintos, Wave, Indie Dev, Fiesta de la Manzana) y testimonios genéricos en `/servicios`.
- **"MIGOR" / "MIRGOR"**: el logo del PDF dice Mirgor.

## Decisiones
- **Carpeta genérica:** ningún texto, nombre de archivo ni metadato menciona al destinatario. Los formatos institucionales (congresos, recepciones, misiones, delegaciones, pabellones país) apuntan a gobiernos y representaciones en general.
- **Caso Asturias:** V Congreso Mundial de Asturianía (Centro Asturiano de Buenos Aires, 7 y 8 de octubre de 2026). Alcance de DER: producción y montaje, staff y mobiliario. Datos públicos: 35 centros y casas de Asturias, cerca de un centenar de participantes, primera edición fuera de España. Si hay fotos, se guardan como `assets/img/asturias-1.jpg`, `-2.jpg`, `-3.jpg` y la página pasa sola al diseño con fotos.
- **Imágenes:** ninguna foto se repite dentro del dossier ni entre el dossier, la tapa y el one-pager. La tapa y el one-pager usan un diseño gráfico sin foto.
- **Compromisos de sostenibilidad e inclusión:** están redactados como compromisos operativos que DER asume, no como certificaciones. Revisar que el equipo pueda cumplirlos (paridad en staff, menú sin TACC, relevamiento de accesibilidad).
- **Casos que quedaron afuera:** conciertos (Anuel AA, Myke Towers, Buenos Aires Trap), porque no suman al perfil institucional, y el Mundial Sub-17 de Halterofilia, porque no se pudo verificar.
- **Fotos:** el sitio está bloqueado desde el entorno de trabajo y Cloudinary también, así que las fotos se recortaron del PDF (resolución de pantalla). Alcanzan para impresión digital A4. Para offset o tamaños grandes, reemplazarlas por los originales.
