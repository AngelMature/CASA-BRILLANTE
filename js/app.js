const anio = document.getElementById("anio");
function escribirAnio() {
  if (anio) {
    anio.textContent = new Date().getFullYear();
  }
}
escribirAnio();

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
  { 
    nombre: "Regular, 1 habitación", 
    categoria: "Regular", 
    precio: 1800, 
    descripcion: "Polvo, pisos, baños y cocina para un apartamento pequeño.", 
    imagen: "img/regular1.jpg" /* <-- AQUÍ PONES LA RUTA DE TU FOTO */
  },
  { 
    nombre: "Regular, 2 habitaciones", 
    categoria: "Regular", 
    precio: 2500, 
    descripcion: "Mantenimiento completo para apartamentos de dos habitaciones.", 
    imagen: "img/regular2.jpg" 
  },
  { 
    nombre: "Regular, 3 habitaciones", 
    categoria: "Regular", 
    precio: 3300, 
    descripcion: "Limpieza al día para apartamentos de tres habitaciones.", 
    imagen: "img/regular3.jpg" 
  },
  { 
    nombre: "Profunda, 1 o 2 habitaciones", 
    categoria: "Profunda", 
    precio: 3800, 
    descripcion: "Rincones, azulejos, juntas y gabinetes por dentro.", 
    imagen: "img/profunda1.png" 
  },
  { 
    nombre: "Profunda, 3 habitaciones", 
    categoria: "Profunda", 
    precio: 5200, 
    descripcion: "Limpieza detallada de todo el apartamento, incluso zonas.", 
    imagen: "img/profunda2.jpg" 
  },
  { 
    nombre: "Ventanas y balcón", 
    categoria: "Extras", 
    precio: 900, 
    descripcion: "Cristales sin marcas ni manchas, también por fuera del balcón.", 
    imagen: "img/ventanas.jpg" 
  },
  { 
    nombre: "Lavado de colchón", 
    categoria: "Extras", 
    precio: 1200, 
    descripcion: "Lavado y desinfección de colchón para dormir mejor.", 
    imagen: "img/colchon.jpg" 
  }
];

const catalogo = document.getElementById("catalogo");
const buscador = document.getElementById("buscador");
const filtro = document.getElementById("filtro");
const contador = document.getElementById("contador");

function pintarTarjetas(lista) {
  catalogo.innerHTML = "";
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
    const coincideTexto = servicio.nombre.toLowerCase().includes(texto) || servicio.descripcion.toLowerCase().includes(texto);
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
  if (campo) { campo.classList.add("invalido"); }
}

function quitarError(id) {
  const error = document.getElementById("error-" + id);
  if (error) { error.textContent = ""; }
  const campo = document.getElementById(id);
  if (campo) { campo.classList.remove("invalido"); }
}

function validarFormulario(evento) {
  evento.preventDefault();
  resultado.textContent = "";
  let todoBien = true;

  const nombre = document.getElementById("nombre");
  if (nombre.value.trim().length < 5) {
    ponerError("nombre", "El nombre debe tener al menos 5 letras.");
    todoBien = false;
  }

  const correo = document.getElementById("correo");
  if (!correo.value.includes("@") || !correo.value.includes(".")) {
    ponerError("correo", "Escribe un correo válido, por ejemplo nombre@correo.com.");
    todoBien = false;
  }

  const correo2 = document.getElementById("correo2");
  if (correo2.value !== correo.value || correo2.value === "") {
    ponerError("correo2", "Los dos correos deben ser iguales.");
    todoBien = false;
  }

  const telefono = document.getElementById("telefono");
  const numero = telefono.value.split("-").join("");
  const prefijo = numero.slice(0, 3);
  if (numero.length !== 10 || isNaN(numero) || (prefijo !== "809" && prefijo !== "829" && prefijo !== "849")) {
    ponerError("telefono", "Debe ser un celular válido (ej. 809-555-0187).");
    todoBien = false;
  }

  const pin = document.getElementById("pin");
  if (pin.value.length !== 4 || isNaN(pin.value)) {
    ponerError("pin", "El PIN debe tener exactamente 4 números.");
    todoBien = false;
  }

  const servicio = document.getElementById("servicio");
  if (servicio.value === "") {
    ponerError("servicio", "Escoge un tipo de servicio.");
    todoBien = false;
  }

  const habitaciones = document.getElementById("habitaciones");
  if (habitaciones.value === "" || Number(habitaciones.value) < 1 || Number(habitaciones.value) > 5) {
    ponerError("habitaciones", "Escribe un número de habitaciones entre 1 y 5.");
    todoBien = false;
  }

  const fecha = document.getElementById("fecha");
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  const elegida = new Date(fecha.value + "T00:00:00");
  if (fecha.value === "" || elegida < hoy) {
    ponerError("fecha", "La fecha no puede estar en el pasado.");
    todoBien = false;
  }

  const horario = document.querySelector('input[name="horario"]:checked');
  if (horario === null) {
    ponerError("horario", "Escoge un horario: mañana o tarde.");
    todoBien = false;
  }

  const terminos = document.getElementById("terminos");
  if (!terminos.checked) {
    ponerError("terminos", "Debes aceptar las condiciones del servicio.");
    todoBien = false;
  }

  if (todoBien) {
    const textoServicio = servicio.options[servicio.selectedIndex].text;
    resultado.textContent = "¡Gracias, " + nombre.value + "! Recibimos tu reserva: " + textoServicio +
      ", " + habitaciones.value + " habitación(es), el " + fecha.value + " en la " + horario.value + ".";
    formulario.reset();
  }
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
    if (actual >= meta) { clearInterval(reloj); }
  }, 120);
}

if (numeros.length > 0) {
  numeros.forEach(contarNumero);
}