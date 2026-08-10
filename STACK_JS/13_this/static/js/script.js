// Seleccionamos el botón por su id
let boton1 = document.getElementById("cambiarTexto1");
let boton2 = document.getElementById("cambiarTexto2");
let boton3 = document.getElementById("cambiarTexto3");

// Agregamos un evento 'click' al botón
boton1.addEventListener("click", function () {
    // Cambia el texto del botón usando `this`
    if (this.innerText === "Haz clic en mí") {
        this.innerText = "Ola";
    } else {
        this.innerText = "Haz clic en mí"
    }
});

// Seleccionamos todas las imágenes con la clase 'imagenEliminar'
let imagenes = document.querySelectorAll(".imagenEliminar");

// Agregamos un evento 'click' a cada imagen
imagenes.forEach(function (imagen) {
   imagen.addEventListener("click", function () {
       // Eliminamos la imagen al hacer clic
       this.remove();
   });
});