console.log("Guía JavaScript iniciada");
const nombre = "Luna";
let edad = 18;
let vida = 100;
let puntaje = 0;
let estaActivo = true;

console.log(nombre, edad, vida, puntaje, estaActivo);
let puntosBase = 100;
let bonus = 50;
let penalizacion = 20;
let puntajeTotal = puntosBase + bonus - penalizacion;
console.log("Puntaje total:", puntajeTotal);

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

  if (edad >= 13) {
    console.log("Puede jugar");
  } else {
    console.log("No puede jugar");
  }

if (vida > 70) {
    console.log("Jugador en buen estado");
} else if (vida >= 30 && (vida <= 70)) {
    console.log("Jugador herido");
}       else if (vida > 1 && (vida < 29)) {
         console.log("Jugador en peligro");
}           else if (vida <= 0) {
            console.log("GAME OVER "); }

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

for (let i = 3; i >= 1; i--) {
  console.log(i);
}

console.log("Comienza");



