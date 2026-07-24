//Sumar en un bucle
function sumarElementos(){
    let ventas= [10000,5000,12000,8000];
    let total= 0;

    for (let i = 0; i< ventas.length; i++){
        total += ventas[i];
    }
    alert(`El resultado final es: ${total}`)
}

//calcular un promedio
let numeros = [10,35,7,90,22];
let mayor = numeros[0];
for(let i=1;i<numeros.length;i++){
    if(numeros[i] > mayor){
        mayor = numeros[i];
    }
}
console.log(mayor);

function calcularVentas(){
    let ventas = [5000, 8000, 12000, 3000, 10000, 9000, 400]
    let total = 0
    let mayor= ventas[0]
    let valorEliminado = ventas.pop()
    let valor1 = parseInt(promt("ingresar primer valor: "))
    let valor2 = parseInt(prompt("ingresar segundo valor: "))
    ventas.push(valor1, valor2)
    for (let i = 0; i < ventas.length; i++){
        total += ventas[i]
    }
}