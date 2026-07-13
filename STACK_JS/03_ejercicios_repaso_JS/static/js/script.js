console.log("Conexion con JS correcta...")

// EJERCICIO 1
// Calculadora de envio segun el peso del paquete

function ejercicio1() {
let nombre = prompt("Ingresa el nombre del cliente:");
let peso = prompt("Ingresa el peso del paquete en kg:");
peso = Number(peso);

let categoria = "";
let valor = 0;

if (peso <= 2) {
    categoria = "Liviano";
    valor = 2000;
} else if (peso <= 5) {
    categoria = "Mediano";
    valor = 3500;
} else if (peso <= 10) {
    categoria = "Pesado";
    valor = 5000;
} else {
    categoria = "Extra pesado";
    valor = 7000;
}

let mensaje = `Cliente: ${nombre}, categoria: ${categoria}, valor del envio: $${valor}`;
document.getElementById("resultado1").innerHTML = mensaje;
alert(mensaje);
}


// EJERCICIO 2
// Acceso a biblioteca segun tipo de usuario

function ejercicio2() {
let tipo = prompt("Ingresa el tipo de usuario, Estudiante o Profesor:");
let cantidad = prompt("Ingresa la cantidad de libros solicitados:");
cantidad = Number(cantidad);
tipo = tipo.toLowerCase();

let mensaje = "";

if (tipo == "estudiante") {
    if (cantidad <= 3) {
        mensaje = `Prestamo permitido, pediste ${cantidad} libros y el limite de estudiante es 3`;
    } else {
        mensaje = "Prestamo no permitido, superaste el limite de 3 libros";
    }
} else if (tipo == "profesor") {
    if (cantidad <= 8) {
        mensaje = `Prestamo permitido, pediste ${cantidad} libros y el limite de profesor es 8`;
    } else {
        mensaje = "Prestamo no permitido, superaste el limite de 8 libros";
    }
} else {
    mensaje = "Ese tipo de usuario no existe, prueba con Estudiante o Profesor";
}

document.getElementById("resultado2").innerHTML = mensaje;
alert(mensaje);
}


// EJERCICIO 3
// Clasificacion deportiva segun la edad

function ejercicio3() {
let nombre = prompt("Ingresa el nombre del participante:");
let edad = prompt("Ingresa la edad del participante:");
edad = Number(edad);

let categoria = "";

if (edad < 12) {
    categoria = "Infantil";
} else if (edad <= 17) {
    categoria = "Juvenil";
} else if (edad <= 59) {
    categoria = "Adulto";
} else {
    categoria = "Adulto Mayor";
}

let mensaje = `Nombre: ${nombre}, edad: ${edad}, categoria: ${categoria}`;
document.getElementById("resultado3").innerHTML = mensaje;
alert(mensaje);
}


// EJERCICIO 4
// Sistema de bonificacion segun años de servicio

function ejercicio4() {
let nombre = prompt("Ingresa el nombre del trabajador:");
let anios = prompt("Ingresa los años de servicio:");
anios = Number(anios);

let nivel = "";
let bono = "";

if (anios < 2) {
    nivel = "Junior";
    bono = "no recibe bonificacion";
} else if (anios <= 5) {
    nivel = "Intermedio";
    bono = "recibe bonificacion basica";
} else if (anios <= 10) {
    nivel = "Senior";
    bono = "recibe bonificacion media";
} else {
    nivel = "Experto";
    bono = "recibe bonificacion alta";
}

let mensaje = `Trabajador: ${nombre}, nivel: ${nivel}, ${bono}`;
document.getElementById("resultado4").innerHTML = mensaje;
alert(mensaje);
}


// EJERCICIO 5
// Evaluacion de velocidad de un conductor

function ejercicio5() {
let nombre = prompt("Ingresa el nombre del conductor:");
let velocidad = prompt("Ingresa la velocidad registrada en km/h:");
velocidad = Number(velocidad);
let limite = 120;

let clasificacion = "";

if (velocidad <= 40) {
    clasificacion = "Baja";
} else if (velocidad <= 80) {
    clasificacion = "Moderada";
} else if (velocidad <= 120) {
    clasificacion = "Alta";
} else {
    clasificacion = "Muy alta";
}

let mensaje = `Conductor: ${nombre}, velocidad: ${velocidad} km/h, clasificacion: ${clasificacion}`;

if (velocidad > limite) {
    mensaje = mensaje + `. Excediste el limite permitido de ${limite} km/h`;
}

document.getElementById("resultado5").innerHTML = mensaje;
alert(mensaje);
}