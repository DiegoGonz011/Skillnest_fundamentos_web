console.log(`hola :3`)
//variables a ARRAY

let nombre1 = "pedrito"
let nombre2 = "juanita"
let nombre3 = "jonathan"
let nombre4 = "diego"

//transformar en array y mostrar

let nombres = ["pedrito", "juanita", "jonathan", "diego"]

//mostrar a maria (2) en una alerta
function carga() {
    alert(`${nombres[2]}`)
}

let compras = [5000, 2300, 12000, 4500, 3000]
let alumnos = ["Ana", "Pedro", "María", "José"]
let datos = ["Carlos", 18, true]
let frutas = ["Manzana", "Pera", "Kiwi", "Sandía"]

//La propiedad .length devuelve la cantidad de elementos.

console.log(frutas.length); // 4 --> conteo de elementos
let ultima = frutas[frutas.length - 1]
console.log(ultima)
//variable.length -1 siempre trae el ultimo elemento

function interacciones() {
    alert(`${alumnos[0]} fue a comprar una ${frutas[3]} donde el ${datos[0]} a $${compras[2]}`)
}

let cosas = ["hola", "a", "todos", "los", "programadores"]

function descuento() {
    alert(`${cosas[cosas.length - 2]} ${cosas[cosas.length - 1]}`)
}

function notificaciones() {
    let edades = [12, 15, 18, 20, 25];
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] >= 18) {
            console.log(edades[i]);
        }
    }
}
let tareas = ["barrer", "cocinar", "realizar compras"]
function manipulacion() {
    //modificar
    tareas[1] = "construir"
    //añadir al final
    tareas.push("hacer commit al server")
    //eliminar al final
    let eliminar = tareas.pop()
    //añadir al inico
    tareas.unshift("Boxear")
    //eleminar al inicio
    eliminar += " " + tareas.shift()
    //juntar
    alert(tareas.join(" - "))
}

function edades() {
    let edades = [15, 18, 20, 14, 25];
    let cantidadEdades = edades.length
    alert(`${edades[0]} ${edades[4]} ${cantidadEdades}`)
}

function nombresJojo() {
    let nombres2 = ["pedrito", "juanita", "jonathan", "diego", "carlitos", "martin"]
    for (let i = 0; i <= 5; i++) {
        alert(`hola ${nombres2[i]}`)
    }
}

function notas() {
    let notas = [6.2, 5.8, 4.1, 7.0, 5.9];
    let promedio = 0;
    for (let i = 0; i < notas.length; i++) {
        promedio += notas[i]
    }
    alert(`Promedio: \n${promedio / 5}`)
}

function temperatura() {
    let temperatura = [18, 20, 15, 22, 19, 25, 17]
    let tempura = 0;
    for (let i = 0; i < temperatura.length; i++) {
        if (temperatura[i] > 20) {
            tempura++
            alert(temperatura[i])
        }
        else { }
    }
    alert(`hay un total de ${tempura} temperaturas mayores a 20`)
}

function clasificador() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for (let i = 0; i < numeros.length; i++) {
        let clasificador = numeros[i] % 2
        if (clasificador == 0) {
            alert(`${numeros[i]} es par`)
        }
        else {
            alert(`${numeros[i]} es impar`)
        }
    }
}

function ventas() {
    let ventas = [5000, 12000, 3000, 4500, 7000]
    let ventaMayor = ventas[0]
    let ventaMenor = ventas[0]
    let totalVentas = 0
    for (let i = 0; i < ventas.length; i++) {
        if (ventas[i] < ventaMenor) {
            ventaMenor = ventas[i]
        }
        else if (ventas[i] > ventaMayor) {
            ventaMayor = ventas[i]
        }
        else {
            console.log(`valor skipeado: ${ventas[i]}`)
        }
        totalVentas += ventas[i];
    }
    alert(`Mayor venta: ${ventaMayor}\nMenor venta: ${ventaMenor}\nTotal: ${totalVentas}`)
}

function nombres4Letras() {
    let nombres3 = ["Ana", "Pedro", "María", "Juan", "Camila", "Tomás"]
    for (let i = 0; i < nombres3.length; i++) {
        if (nombres3[i].length > 4) {
            alert(nombres3[i])
        }
    }
}

function sumarVentasTotales() {
    let ventas = [10000, 5000, 12000, 8000];
    let total = 0;
    for (let i = 0; i < ventas.length; i++) {
        total += ventas[i];
    }
    console.log(total);
}

function integrador() {
    let ventas = [5000 , 8000 , 12000 , 3000 , 10000 , 9000 , 4000];
    let total = 0;
    let mayor = ventas[0];
    let mayoresDe10000 = 0
    let mayores = []
    let borrado = ventas.pop()
    ventas.push(parseInt(prompt(`ingresa un valor para agregar a la cuenta`)))
    ventas.push(parseInt(prompt(`ingresa un valor para agregar a la cuenta`)))
    alert(`${ventas}`)
    for (let i = 0; i < ventas.length; i++) {
        total += ventas[i];
        if (ventas[i] > mayor) {
            mayor = ventas[i];
            if (ventas[i] >= 10000) {
                mayores.push(ventas[i])
                mayoresDe10000++
            }
        }
    }
    alert(`Valor eliminado: ${borrado}
Total: ${total}
Mayor: ${mayor}
Promedio: ${total / ventas.length}
Todas las ventas mayores a 10.000: ${mayoresDe10000} (${mayores.join(' - ')})`)
}
