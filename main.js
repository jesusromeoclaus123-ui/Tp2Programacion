console.log("Guía JavaScript iniciada");

// Ejercicio 1 
const nombre = "Luna";
let edad = 18;
let vida = 100;
let puntaje = 0;
let estaActivo = true;
console.log(nombre, edad, vida, puntaje, estaActivo);

// Ejercicio 2
let puntosBase = 100;
let bonus = 50;
let penalizacion = 20;
let puntajeTotal = puntosBase + bonus - penalizacion;
console.log("Puntaje total:", puntajeTotal);

// Ejercicio 3
const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
  const valor = input.value;
  // Convertir a número
  const numero = Number(valor);
  // Sumar 10
  const resultado = numero + 10;
  // Mostrar en pantalla
  mensaje.textContent = resultado;
});

// Ejercicio 4
if (edad >= 13) {
console.log("Puede jugar");
} else {
  console.log("No puede jugar");
}

// Ejercicio 5
if (vida > 70) {
    console.log("Jugador en buen estado");
} else if (vida >= 30 && (vida <= 70)) {
    console.log("Jugador herido");
}       else if (vida > 1 && (vida < 29)) {
         console.log("Jugador en peligro");
}           else if (vida <= 0) {
            console.log("GAME OVER "); }

// Ejercicio 6         
boton.addEventListener("click", function () {
  const opcion = input.value.toLowerCase().trim();

  switch (opcion) {
    case "iniciar":
      console.log("Iniciando el juego");
      break;

    case "configuracion":
      console.log("Abriendo configuración");
      break;

    case "creditos":
      console.log("Mostrando créditos");
      break;

    case "salir":
      console.log("Saliendo del juego");
      break;

    default:
      console.log("Opción no válida");
  }
});

// Ejercicio 7
for (let i = 3; i >= 1; i--) {
  console.log(i);
}
console.log("Comienza");

// Ejercicio 8
let puntajeTotalRondas = 0;
for (let ronda = 1; ronda <= 5; ronda++) {
  puntajeTotalRondas += 10;
}
console.log(puntajeTotalRondas);

// Ejercicio 9
const inventario = ["espada", "poción", "llave", "escudo", "mapa"];
console.log("Primer objeto:", inventario[0]);
console.log("Último objeto:", inventario[inventario.length - 1]);
console.log("Cantidad total:", inventario.length);

// Ejercicio 10
for (let i = 0; i < inventario.length; i++) {
  console.log(inventario[i]);
}

// Ejercicio 11
let mochila = [];
// Paso 1
mochila.push("linterna");
// Paso 2
mochila.push("comida");
// Paso 3
mochila.push("mapa");
// Paso 4 (quitar el último)
mochila.pop();
// Mostrar resultado final
console.log(mochila);

// Ejercicio 12
if (inventario.includes("llave")) {
  console.log("La puerta se abre");
} else {
  console.log("Necesitas una llave");
}
// Ejercicio 13
function saludarUsuario(nombre) {
  console.log("Bienvenido/a " + nombre);
}
saludarUsuario("Milo");

// Ejercicio 14
function calcularVidaRestante(vida, danio) {
  return vida - danio;
}
let resultado = calcularVidaRestante(100, 30);
console.log(resultado);

// Ejercicio 15
const sumar = (a, b) => {
  return a + b;
};
console.log(sumar(10, 5));

// Ejercicio 16
const jugador = {
  nombre: "Luna",
  vida: 100,
  energia: 80,
  nivel: 1,
  inventario: ["espada", "poción"]
};
console.log("Nombre:", jugador.nombre);
console.log("Vida:", jugador.vida);
console.log("Energía:", jugador.energia);
console.log("Nivel:", jugador.nivel);
console.log("Inventario:", jugador.inventario);

// Ejercicio 17
const jugadorKai = {
  nombre: "Kai",
  nivel: 1,
  monedas: 0
};
// Actualizar datos
jugadorKai.nivel += 1;
jugadorKai.monedas += 50;
// Mostrar resultado final
console.log("Jugador actualizado:", jugadorKai);

// Ejercicio 18
const listaPersonajes = [
  { nombre: "Luna", vida: 100, tipo: "maga", nivel: 3 },
  { nombre: "Kai", vida: 120, tipo: "guerrero", nivel: 4 },
  { nombre: "Nina", vida: 90, tipo: "arquera", nivel: 2 }
];
for (let i = 0; i < listaPersonajes.length; i++) {
  let personaje = listaPersonajes[i];
  console.log(
    personaje.nombre + " es " + personaje.tipo + " y está en nivel " + personaje.nivel
  );
}

// Ejercicio 19
const personajesFuertes = listaPersonajes.filter((personaje) => {
  return personaje.nivel >= 3;
});
console.log(personajesFuertes);

// Ejercicio 20
const nombres = listaPersonajes.map((personaje) => {
  return personaje.nombre;
});
console.log(nombres);

// Ejercicio 21
const personajeEncontrado = listaPersonajes.find((personaje) => {
  return personaje.nombre === "Kai";
});
console.log(personajeEncontrado);

// Ejercicio 22
const vidaTotal = listaPersonajes.reduce((acumulador, personaje) => {
  return acumulador + personaje.vida;
}, 0);
console.log(vidaTotal);

// Ejercicio 23
document.addEventListener("DOMContentLoaded", function () {
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = "Bienvenido a la guía de JavaScript";
  mensaje.style.color = "blue";
});

// Ejercicio 24
document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("btn");
  const mensaje = document.getElementById("mensaje");

  let puntos = 0;

  boton.addEventListener("click", function () {
    puntos += 10;
    mensaje.textContent = "Puntos: " + puntos;
  });
});

// Ejercicio 25
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("dato");
  const boton = document.getElementById("btn");
  const mensaje = document.getElementById("mensaje");
  let puntos = 0;
  boton.addEventListener("click", function () {
    const nombre = input.value.trim();
    // sumar puntos siempre
    puntos += 10;
    if (nombre === "") {
      mensaje.textContent = "Puntos: " + puntos + " | Ingresá un nombre para continuar";
    } else {
      mensaje.textContent = "Puntos: " + puntos + " | Bienvenido/a " + nombre;
    }
  });
});

// Ejercicio 26
const jugadorStorage = {
  nombre: "Luna",
  puntaje: 1500
};
// guardar
localStorage.setItem("jugador", JSON.stringify(jugadorStorage));
// recuperar
const jugadorRecuperado = JSON.parse(localStorage.getItem("jugador"));
// mostrar
console.log(jugadorRecuperado);
// mejora 2
