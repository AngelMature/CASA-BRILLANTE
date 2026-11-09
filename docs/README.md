# Casa Brillante – Limpieza de apartamentos a domicilio

Sitio de tres páginas en HTML5 para la tarea de ISW-311 (Tecnologías de Internet I).
Casa Brillante es el negocio de mi proyecto integrador: una empresa que va a los apartamentos a hacer limpieza regular, limpieza profunda y servicios extra.

- **Autor:** Angel David Mature Caraballo (matrícula 2024-2048)


| Página | De qué trata |
|---|---|
| `index.html` | Portada: quiénes somos, qué ofrecemos, una novedad y preguntas frecuentes |
| `servicios.html` | Servicios, qué incluye, cómo funciona, tabla de tarifas, audio y mapa |
| `contacto.html` | Datos de contacto, enlaces y el formulario de reserva |

**Carpetas:** `css/` (estilos), `audio/` (sonido de confirmación) y `docs/` (archivo para descargar).

## Mapa de etiquetas

| Familia | Página y sección | Etiquetas usadas | ¿Por qué esa etiqueta? |
|---|---|---|---|
| Cimientos | Las tres páginas, en el `head` | `doctype`, `html lang="es"`, `meta charset`, `meta viewport`, `meta description`, `title`, `link` | El `doctype` le dice al navegador que es HTML5. Puse `lang="es"` porque todo el sitio está en español y así los lectores de pantalla pronuncian bien. El `charset` UTF-8 es para que se vean las tildes y la ñ. El `viewport` es para que la página se vea bien en el celular. El `title` y la `description` son distintos en cada página porque cada una trata de algo diferente. |
| Encabezados y párrafos | Las tres páginas | `h1`, `h2`, `h3`, `p`, `hr`, `br` | Cada página tiene un solo `h1` y de ahí bajo a `h2` y `h3` sin saltarme niveles, así la página tiene un orden como el de un libro. Usé `p` para todo el texto normal. El `hr` lo puse en la portada para separar lo que ofrecemos de las novedades, que ya son otro tema. El `br` lo usé dentro de la dirección para cortar las líneas sin crear párrafos aparte. |
| Texto, citas y código | `index.html`, secciones "Quiénes somos" y "Qué ofrecemos" | `strong`, `em`, `q`, `blockquote`, `cite`, `mark`, `del`, `ins`, `abbr`, `sup`, `sub`, `small`, `code`, `kbd`, `pre` | Usé `strong` y `em` porque quiero dar importancia o énfasis, no solo ponerlo en negrita o cursiva. `blockquote` y `cite` son para la reseña de una clienta y de dónde salió. `mark` resalta el descuento del mes. `del` e `ins` muestran el precio viejo tachado y el nuevo. `abbr` explica qué significa ITBIS. `code` es el código de cliente, `kbd` son las teclas Ctrl + P y `pre` mantiene el formato del comprobante de ejemplo. |
| Listas | `servicios.html`, secciones "Qué incluye la limpieza regular", "Cómo funciona", "Los más pedidos" y "Glosario de limpieza" | `ul`, `ol` con `start` y `reversed`, `li`, `dl`, `dt`, `dd` | La `ul` es para lo que incluye la limpieza porque no tiene orden, y le metí sublistas dentro de cada `li` (cocina, baños, habitaciones). Los pasos sí tienen orden, por eso son `ol`; la segunda lista usa `start="4"` para seguir la numeración de la primera. El ranking usa `reversed` para contar del 3 al 1. El glosario es una `dl` porque son términos con su definición. |
| Enlaces | `contacto.html`, sección "Dónde y cuándo encontrarnos" (y el menú de las tres páginas) | `a` con `href` interno, `#id`, externo con `target="_blank"` y `rel="noopener"`, `mailto:`, `tel:` y `download` | El menú enlaza las tres páginas entre sí. El `#formulario` lleva a la parte de abajo de la misma página. El enlace externo abre en pestaña nueva y le puse `rel="noopener"` por seguridad. `mailto:` y `tel:` dejan que el cliente escriba o llame con un clic desde el celular. El `download` hace que se baje el archivo de condiciones en vez de abrirse. |
| Imágenes y multimedia | `servicios.html`, secciones "Servicios destacados" y "Escucha y ubícanos" | `img` con `alt`, `figure`, `figcaption`, `audio` con `controls` y `source`, `iframe` con `title` | Cada `img` tiene un `alt` que dice lo que representa, para quien no pueda verla. La `figure` con `figcaption` junta la imagen con su descripción. El `audio` lleva `controls` para que el usuario le dé play. El `iframe` es el mapa de OpenStreetMap y tiene `title` para que los lectores de pantalla sepan qué es. |
| Tablas | `servicios.html`, sección "Tabla de tarifas" | `table`, `caption`, `thead`, `tbody`, `tfoot`, `tr`, `th` con `scope`, `td`, `colspan`, `rowspan` | Los precios y las duraciones son datos con filas y columnas, por eso es una tabla. El `caption` dice de qué trata. `thead`, `tbody` y `tfoot` separan encabezado, datos y nota final. Los `th` con `scope` dicen si son encabezado de columna o de fila. El `rowspan` agrupa los servicios por categoría y el `colspan` está en la última fila para unir celdas. |
| Formularios | `contacto.html`, sección "Reserva tu limpieza" | `form`, `fieldset`, `legend`, `label`, `input` (12 tipos), `select`, `optgroup`, `textarea`, `button`, atributos `required`, `minlength`, `maxlength`, `pattern`, `min`, `max` | Dividí el formulario en dos `fieldset` con su `legend`: mis datos y mi servicio. Cada campo tiene su `label` unido con `for` e `id`, para poder hacer clic en el texto. Usé el tipo de `input` que corresponde a cada dato (email, tel, date, time, number, etc.) para que el navegador valide y muestre el teclado correcto en el celular. El `select` usa `optgroup` para separar limpieza del hogar y extras. La validación es nativa, sin JavaScript. |
| Semántica y div/span | Las tres páginas | `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, `time`, `address`, `details`, `summary`, `div`, `span` | Prefiero etiquetas con significado antes que `div`. `header` y `nav` son la cabecera y el menú, `main` es el contenido principal (uno por página), `section` agrupa temas con su título, `article` es la novedad y cada servicio porque se entienden solos, `aside` tiene datos extra. `time` con `datetime` es la fecha y las horas, `address` es la dirección de contacto y `details` con `summary` hace las preguntas desplegables. El `div` solo lo usé para agrupar las tarjetas de servicios y darles estilo, porque no hay otra etiqueta que sirva ahí. El `span` envuelve el precio para darle color. |

## Validación
Las tres páginas las pasé por [validator.w3.org](https://validator.w3.org/) y no dieron errores.
