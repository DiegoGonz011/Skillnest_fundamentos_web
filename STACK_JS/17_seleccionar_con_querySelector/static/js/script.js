console.log("conexion con js exitosa...")

//seleccion de titulo con querySelector
let title = document.querySelector("#title");
console.log(title); // <h1 id="title">¡Hola, mundo!</h1>
console.log(`El contenido del titulo es: ${title.textContent}`);

//seleccionar un parrafo con la etiqueta
let parrafo = document.querySelector("p");
console.log(parrafo);

let logoImg = document.querySelector(".nav img");
console.log(logoImg); // <img src="logo.png" alt="logo">

//sleccionar parrafo
let parrafos = document.querySelector(".texto");
console.log(parrafos.textContent); // "Este es el primer párrafo."

//Elemento inexistente 
let boton = document.querySelector("#boton-inexistente");
console.log(boton); // null

if (boton !== null) {
   boton.textContent = "Nuevo Texto";
} else {
   console.log("El botón no existe.");
}

//Tarea:
/*Crear un boton y aplicar condicionnal igual que ejemplo...
-Debe cambiar su texto al momento de hacerle click 
-Debe activarseun hover js cambiando el color de fondo
*/

