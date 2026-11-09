const anio = document.getElementById("anio");

function escribirAnio() {
  anio.textContent = new Date().getFullYear();
}

if (anio) {
  escribirAnio();
}


const botonMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");

function alternarMenu() {
  menu.classList.toggle("abierto");
  if (menu.classList.contains("abierto")) {
    botonMenu.setAttribute("aria-expanded", "true");
  } else {
    botonMenu.setAttribute("aria-expanded", "false");
  }
}

if (botonMenu && menu) {
  botonMenu.addEventListener("click", alternarMenu);
}


const botonOscuro = document.getElementById("btnOscuro");

function alternarTema() {
  document.body.classList.toggle("oscuro");
  if (document.body.classList.contains("oscuro")) {
    localStorage.setItem("tema", "oscuro");
  } else {
    localStorage.setItem("tema", "claro");
  }
}

function aplicarTemaGuardado() {
  if (localStorage.getItem("tema") === "oscuro") {
    document.body.classList.add("oscuro");
  }
}

aplicarTemaGuardado();

if (botonOscuro) {
  botonOscuro.addEventListener("click", alternarTema);
}


const botonArriba = document.createElement("button");
botonArriba.type = "button";
botonArriba.textContent = "↑ Arriba";
botonArriba.className = "volver-arriba";
document.body.appendChild(botonArriba);

function mostrarBotonArriba() {
  if (window.scrollY > 300) {
    botonArriba.classList.add("visible");
  } else {
    botonArriba.classList.remove("visible");
  }
}

function volverArriba() {
  window.scrollTo(0, 0);
}

window.addEventListener("scroll", mostrarBotonArriba);
botonArriba.addEventListener("click", volverArriba);


const servicios = [
  { nombre: "Regular, 1 habitación", categoria: "Regular", precio: 1800,
    descripcion: "Polvo, pisos, baños y cocina para un apartamento pequeño.",
    imagen: "https://placehold.co/300x180?text=Regular+1" },
  { nombre: "Regular, 2 habitaciones", categoria: "Regular", precio: 2500,
    descripcion: "Mantenimiento completo para apartamentos de dos habitaciones.",
    imagen: "https://placehold.co/300x180?text=Regular+2" },
  { nombre: "Regular, 3 habitaciones", categoria: "Regular", precio: 3300,
    descripcion: "Limpieza al día para apartamentos de tres habitaciones.",
    imagen: "https://placehold.co/300x180?text=Regular+3" },
  { nombre: "Profunda, 1 o 2 habitaciones", categoria: "Profunda", precio: 3800,
    descripcion: "Rincones, azulejos, juntas y gabinetes por dentro.",
    imagen: "https://placehold.co/300x180?text=Profunda+1-2" },
  { nombre: "Profunda, 3 habitaciones", categoria: "Profunda", precio: 5200,
    descripcion: "Limpieza detallada de todo el apartamento, incluso zonas que casi nunca se tocan.",
    imagen: "https://placehold.co/300x180?text=Profunda+3" },
  { nombre: "Ventanas y balcón", categoria: "Extras", precio: 900,
    descripcion: "Cristales sin marcas ni manchas, también por fuera del balcón.",
    imagen: "https://placehold.co/300x180?text=Ventanas" },
  { nombre: "Lavado de colchón", categoria: "Extras", precio: 1200,
    descripcion: "Lavado y desinfección de colchón para dormir mejor.",
    imagen: "https://placehold.co/300x180?text=Colchon" }
];

const catalogo = document.getElementById("catalogo");
const buscador = document.getElementById("buscador");
const filtro = document.getElementById("filtro");
const contador = document.getElementById("contador");

function pintarTarjetas(lista) {
  catalogo.textContent = "";
  contador.textContent = "Mostrando " + lista.length + " de " + servicios.length + " servicios";

  if (lista.length === 0) {
    const mensaje = document.createElement("p");
    mensaje.textContent = "No encontramos servicios con esa búsqueda. ¡Prueba con otra palabra!";
    catalogo.appendChild(mensaje);
  }

  lista.forEach(function (servicio) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta";

    const imagen = document.createElement("img");
    imagen.src = servicio.imagen;
    imagen.alt = "Imagen del servicio " + servicio.nombre;

    const titulo = document.createElement("h3");
    titulo.textContent = servicio.nombre;

    const categoria = document.createElement("p");
    categoria.className = "categoria";
    categoria.textContent = "Categoría: " + servicio.categoria;

    const descripcion = document.createElement("p");
    descripcion.textContent = servicio.descripcion;

    const precio = document.createElement("p");
    precio.className = "precio";
    precio.textContent = servicio.precio.toLocaleString("es-DO", { style: "currency", currency: "DOP" });

    tarjeta.append(imagen, titulo, categoria, descripcion, precio);
    catalogo.appendChild(tarjeta);
  });
}

function filtrarServicios() {
  const texto = buscador.value.toLowerCase();
  const categoriaElegida = filtro.value;

  const resultado = servicios.filter(function (servicio) {
    const coincideTexto = servicio.nombre.toLowerCase().includes(texto) ||
      servicio.descripcion.toLowerCase().includes(texto);
    const coincideCategoria = categoriaElegida === "todas" || servicio.categoria === categoriaElegida;
    return coincideTexto && coincideCategoria;
  });

  pintarTarjetas(resultado);
}

if (catalogo && buscador && filtro && contador) {
  pintarTarjetas(servicios);
  buscador.addEventListener("input", filtrarServicios);
  filtro.addEventListener("change", filtrarServicios);
}


const formulario = document.getElementById("formReserva");
const resultado = document.getElementById("resultado");

function ponerError(id, mensaje) {
  document.getElementById("error-" + id).textContent = mensaje;
  const campo = document.getElementById(id);
  if (campo) {
    campo.classList.add("invalido");
  }
}

function quitarError(id) {
  const error = document.getElementById("error-" + id);
  if (error) {
    error.textContent = "";
  }
  const campo = document.getElementById(id);
  if (campo) {
    campo.classList.remove("invalido");
  }
}

function validarNombre() {
  const nombre = document.getElementById("nombre");
  if (nombre.value.trim().length < 5) {
    ponerError("nombre", "El nombre debe tener al menos 5 letras.");
    return false;
  }
  return true;
}

function validarCorreo() {
  const correo = document.getElementById("correo");
  if (!correo.value.includes("@") || !correo.value.includes(".")) {
    ponerError("correo", "Escribe un correo válido, por ejemplo nombre@correo.com.");
    return false;
  }
  return true;
}

function validarCorreo2() {
  const correo = document.getElementById("correo");
  const correo2 = document.getElementById("correo2");
  if (correo2.value !== correo.value || correo2.value === "") {
    ponerError("correo2", "Los dos correos deben ser iguales.");
    return false;
  }
  return true;
}

function validarTelefono() {
  const telefono = document.getElementById("telefono");
  const numero = telefono.value.split("-").join("");
  const prefijo = numero.slice(0, 3);
  if (numero.length !== 10) {
    ponerError("telefono", "El teléfono debe tener 10 dígitos.");
    return false;
  }
  if (isNaN(numero)) {
    ponerError("telefono", "El teléfono solo puede tener números.");
    return false;
  }
  if (prefijo !== "809" && prefijo !== "829" && prefijo !== "849") {
    ponerError("telefono", "El teléfono debe empezar con 809, 829 o 849.");
    return false;
  }
  return true;
}

function validarPin() {
  const pin = document.getElementById("pin");
  if (pin.value.length !== 4 || isNaN(pin.value)) {
    ponerError("pin", "El PIN debe tener exactamente 4 números.");
    return false;
  }
  return true;
}

function validarServicio() {
  const servicioElegido = document.getElementById("servicio");
  if (servicioElegido.value === "") {
    ponerError("servicio", "Escoge un tipo de servicio.");
    return false;
  }
  return true;
}

function validarHabitaciones() {
  const habitaciones = document.getElementById("habitaciones");
  const cantidad = Number(habitaciones.value);
  if (habitaciones.value === "" || cantidad < 1 || cantidad > 5) {
    ponerError("habitaciones", "Escribe un número de habitaciones entre 1 y 5.");
    return false;
  }
  return true;
}

function validarFecha() {
  const fecha = document.getElementById("fecha");
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  const elegida = new Date(fecha.value + "T00:00:00");
  if (fecha.value === "") {
    ponerError("fecha", "Escoge la fecha del servicio.");
    return false;
  }
  if (elegida < hoy) {
    ponerError("fecha", "La fecha no puede estar en el pasado.");
    return false;
  }
  return true;
}

function validarHorario() {
  const horario = document.querySelector('input[name="horario"]:checked');
  if (horario === null) {
    ponerError("horario", "Escoge un horario: mañana o tarde.");
    return false;
  }
  return true;
}

function validarTerminos() {
  const terminos = document.getElementById("terminos");
  if (!terminos.checked) {
    ponerError("terminos", "Debes aceptar las condiciones del servicio.");
    return false;
  }
  return true;
}

function validarFormulario(evento) {
  evento.preventDefault();
  resultado.textContent = "";

  let todoBien = true;
  if (!validarNombre()) { todoBien = false; }
  if (!validarCorreo()) { todoBien = false; }
  if (!validarCorreo2()) { todoBien = false; }
  if (!validarTelefono()) { todoBien = false; }
  if (!validarPin()) { todoBien = false; }
  if (!validarServicio()) { todoBien = false; }
  if (!validarHabitaciones()) { todoBien = false; }
  if (!validarFecha()) { todoBien = false; }
  if (!validarHorario()) { todoBien = false; }
  if (!validarTerminos()) { todoBien = false; }

  if (todoBien) {
    mostrarResumen();
    formulario.reset();
  }
}

function mostrarResumen() {
  const nombre = document.getElementById("nombre").value;
  const servicioElegido = document.getElementById("servicio");
  const textoServicio = servicioElegido.options[servicioElegido.selectedIndex].text;
  const habitaciones = document.getElementById("habitaciones").value;
  const fecha = document.getElementById("fecha").value;
  const horario = document.querySelector('input[name="horario"]:checked').value;

  resultado.textContent = "¡Gracias, " + nombre + "! Recibimos tu reserva: " + textoServicio +
    ", " + habitaciones + " habitación(es), el " + fecha + " en la " + horario + ".";
}

function alCorregir(evento) {
  let id = evento.target.id;
  if (evento.target.type === "radio") {
    id = evento.target.name;
  }
  quitarError(id);
}

if (formulario && resultado) {
  formulario.addEventListener("submit", validarFormulario);
  formulario.addEventListener("input", alCorregir);
  formulario.addEventListener("change", alCorregir);
}


const numeros = document.querySelectorAll(".numero");

function contarNumero(elemento) {
  const meta = Number(elemento.getAttribute("data-meta"));
  let actual = 0;
  elemento.textContent = 0;

  const reloj = setInterval(function () {
    actual = actual + 1;
    elemento.textContent = actual;
    if (actual >= meta) {
      clearInterval(reloj);
    }
  }, 120);
}

function animarNumeros() {
  numeros.forEach(contarNumero);
}

if (numeros.length > 0) {
  animarNumeros();
}