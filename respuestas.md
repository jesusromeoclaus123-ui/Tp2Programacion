Ejercicios Teoricos
// Ejercicio 27
¿Cuál es la diferencia entre let, const y var?
let: Permite declarar variables que pueden cambiar su valor. Tiene alcance de bloque. Usaría let cuando sé que el valor de la variable va a cambiar durante el programa.
const: Declara variables y su valor no puede cambiar. Al igual que let también tiene alcance de bloque. Usaría const cuando el valor no debe cambiar.
var: Es la forma vieja de declarar variables. Tiene alcance global o de función, y puede generar errores porque se comporta de forma menos predecible. Y no lo usaria porque no respeta el alcance de bloque, puede redeclararse sin error, genera comportamientos confusos (hoisting).

// Ejercicio 28
¿Qué significa que una variable tenga “scope” o alcance?
El scope es el lugar donde una variable existe y puede usarse. Es decir que es donde la podes leer y donde la podes usar.

¿Qué se muestra primero?
Primero se muestra “Local” porque la variable se usa dentro de la función donde fue creada.

¿Qué se muestra después?
Luego se produce un error porque se intenta acceder a esa variable fuera de su alcance. 

¿Por qué?
Esto pasa porque fue declarada con let y solo existe dentro de la función.

// Ejercicio 29
¿Cuándo conviene usar un array y cuándo conviene usar un objeto?
Un array se usa para guardar una lista de elementos del mismo tipo o que tengan relacion, donde lo importante es el orden. Ejemplo: lista de objetos, enemigos, items
Un objeto se usa para guardar datos más complejos, organizados en forma de propiedades (clave: valor), donde cada dato tiene un significado específico. Ejemplo: un jugador con vida, nivel, nombre.
En un juego:
Un array puede ser el inventario del jugador (varios objetos)
Un objeto puede ser el jugador (con sus atributos)

Analisis del codigo:
const inventario = ["espada", "poción", "llave"]; 
Esto es un array que representa una lista de objetos que el jugador tiene y cada elemento es un ítem del inventario.
const jugador = {
 nombre: "Luna",
 vida: 100,
 nivel: 3
};
Esto es un objeto
Representa un jugador con sus características: nombre, vida, nivel

// Ejercicio 30
¿Qué es un evento en JavaScript?
Un evento en javaScipt es una acción que ocurre en la página y que puede detectar y responder.

¿Qué elemento escucha el evento?
El elemento que escucha el evento es el botón, representado por la variable boton. 

¿Qué evento se está escuchando?
El evento que se está escuchando es un click, es decir, cuando el usuario hace click.

¿Qué acción se ejecuta?
La acción que se ejecuta es mostrar un mensaje en la consola:
"El usuario hizo clic".

¿Dónde podríamos aplicar esto en una página web o videojuego?
Esto se puede aplicar en botones de una página web, por ejemplo para enviar un formulario o navegar a otra sección.
En un videojuego, se podría usar para iniciar una partida, pausar el juego, interactuar con menús, cambiar entre configuraciones y asi.