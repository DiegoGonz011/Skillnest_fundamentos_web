console.log(`hola :v`)
let hamburguesaEspecial = {
    pan: "Pan brioche",
    carne: "Pollo crujiente",
    queso: "Suizo",
    extras: [
        "Lechuga",
        "Pepinos",
        "Miel"
    ],
    mostrarIngredientes: function () {
        alert("Pan:", this.pan);
        alert("Carne:", this.carne);
        alert("Queso:", this.queso);
        alert("Extras:", this.extras.join(", ")
        );
    }
};

//acceder al pan
console.log(hamburguesaEspecial.mostrarIngredientes())

//Variable\Objeto con metodo

let jojos = {
    nombre: "jose",
    apellido: "jose",
    edad: "sepa la bola",
    mostrarNombre: function () {
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Apellido: ${this.apellido}`)
        console.log(`Edad: ${this.edad}`)
    },
    mostrarNombreAlert: function () {
        alert(`Nombre: ${this.nombre}`)
        alert(`Apellido: ${this.apellido}`)
        alert(`Edad: ${this.edad}`)
    }
}


let corsa = {
    marca: "Chevrolet",
    modelo: "el corsa",
    ano: 2002,
    potencia: "92 hp",
    traccion: "Delantera",
    transmicion: "5 velocidades",
    caracteristicasCorsa: function () {
        console.log(`Marca: ${this.marca}`)
        console.log(`Modelo: ${this.modelo}`)
        console.log(`Año: ${this.ano}`)
        console.log(`Potencia: ${this.potencia}`)
        console.log(`Tracción: ${this.traccion}`)
        console.log(`Transmición: ${this.transmicion}`)
    },
    caracteristicasCorsaAlert: function () {
        alert(`Marca: ${this.marca}`)
        alert(`Modelo: ${this.modelo}`)
        alert(`Año: ${this.ano}`)
        alert(`Potencia: ${this.potencia}`)
        alert(`Tracción: ${this.traccion}`)
        alert(`Transmición: ${this.transmicion}`)
    }
}

let casa = {
    calle: "Av.libertador Bernando O'Higgins",
    numero: 1987,
    habitaciones: 3,
    mostrarCasa: function () {
        console.log(`Dirección: ${this.calle}`)
        console.log(`Numero: ${this.numero}`)
        console.log(`Habitaciones: ${this.habitaciones}`)
    },
    mostrarCasaAlert: function () {
        alert(`Dirección: ${this.calle}`)
        alert(`Numero: ${this.numero}`)
        alert(`Habitaciones: ${this.habitaciones}`)
    }
},

