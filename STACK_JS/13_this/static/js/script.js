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

boton2.addEventListener("click", function () {
    // Cambia el texto del botón usando `this`
    if (this.innerText === "Haz clic en mí") {
        this.innerText = "Weno dia";
    } else {
        this.innerText = "Haz clic en mí"
    }
});

boton3.addEventListener("click", function () {
    // Cambia el texto del botón usando `this`
    if (this.innerText === "Haz clic en mí") {
        this.innerText = "Adio";
    } else {
        this.innerText = "Haz clic en mí"
    }
});