document.getElementById("colorButton1").addEventListener("click", function () {
    cambiarColor1();
});

// Función que cambia el color de fondo al hacer clic
function cambiarColor1() {
    let colores = ["#ff6347", "#66cdaa", "#9370db", "#ffd700", "#4682b4", "#ffa07a"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    const elemento = document.querySelector("body");
    elemento.style.backgroundColor = colorAleatorio;
}

document.getElementById("colorButton2").addEventListener("click", function () {
    cambiarColor2();
});

// Función que cambia el color de fondo al hacer clic
function cambiarColor2() {
    let colores = ["#8c584e", "#44826e", "#604c87", "#8f844a", "#577996", "#6c3c28"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.getElementById("colorButton2").style.backgroundColor = colorAleatorio;
    const caja1 = document.querySelector("#caja1");
    caja1.style.backgroundColor = colorAleatorio;
}

document.getElementById("colorButton3").addEventListener("click", function () {
    cambiarColor3();
});

// Función que cambia el color de fondo al hacer clic
function cambiarColor3() {
    let colores1 = ["#ff4422", "#26f6b0", "#641ef1", "#6f6114", "#1688e4", "#ff8150"];
    let colores2 = ["#fc907d", "#88fcd5", "#b48eff", "#d8cb7f", "#74b5ea", "#fcb79c"];
    let colorAleatorio1 = colores1[Math.floor(Math.random() * colores1.length)];
    let colorAleatorio2 = colores1[Math.floor(Math.random() * colores1.length)];
    let colorAleatorio3 = colores2[Math.floor(Math.random() * colores2.length)];
    const elemento = document.querySelector("body");
    const caja2 = document.querySelector("#caja2");
    elemento.style.backgroundColor = colorAleatorio1;
    caja2.style.backgroundColor = colorAleatorio3;
    document.getElementById("colorButton3").style.color = colorAleatorio2;
    document.getElementById("colorButton3").style.backgroundColor = colorAleatorio3;
}