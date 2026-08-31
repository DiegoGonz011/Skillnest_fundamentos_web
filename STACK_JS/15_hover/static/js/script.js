const boton = document.getElementById("miBoton");

boton.addEventListener("mouseover", function () {
   console.log("El ratón está sobre el botón");
   boton.style.backgroundColor = "blue";

});

boton.addEventListener("mouseout", function () {
   console.log("El ratón ha salido del botón");
   boton.style.backgroundColor = "red";
   
});


const boton1 = document.getElementById("miBoton1");
boton1.addEventListener("mouseover", function () {
        boton1.style.backgroundColor = "Black"
        boton1.innerText = "Adios"
});
boton1.addEventListener("mouseout", function () {
        boton1.style.backgroundColor = "gray"
        boton1.innerText = "Ola"
});


const boton2 = document.getElementById("miBoton1");
boton2.addEventListener("mouseover", function () {
       boton2.style.backgroundColor = "Red"
       
});
boton2.addEventListener("mouseout", function () {
        boton2.innerText = "Ola"
});





/*
Crear dos botones con evento onmouseover y onmouseout
- Cambia el texto de un boton
- cambiar el color de fondo y color de texto del segundo boton
*/