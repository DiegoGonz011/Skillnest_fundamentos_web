function pizzaOven(corteza, salsas, queso, ingredientes) {
    let pizza = {};
    pizza.corteza = corteza;
    pizza.salsas = salsas;
    pizza.queso = queso;
    pizza.ingredientes = ingredientes;
    return pizza;
}

let pizzaChicago = pizzaOven(
    "Tradicional",
    "Salsa tradicional",
    "Mozzarella",
    ["Pepperoni", "Salchicha"],
);

let pizzaLanzada = pizzaOven(
    "Tradicional",
    "Salsa marinada",
    ["Mozzarella", "feta"],
    ["Champiñiones", "Aceitunas", "Cebolla"],
);

let pizza3Carnes = pizzaOven(
    "Tradicional",
    "Salsa tradicional",
    "Mozzarella",
    ["Carne de res", "Choricillo", "Pollo"],
);

let pizzaPiña = pizzaOven(
    "Tradicional",
    "Salsa tradicional",
    "Mozzarella",
    ["Piña", "Salchicha", "Cerdo"],
);

function mostrarPizza() {
    alert(`Pizza estilo Chicago
        \nCorteza: ${pizzaChicago.corteza}
        \nSalsa: ${pizzaChicago.salsas}
        \nQueso: ${pizzaChicago.queso}
        \nIngredientes: ${pizzaChicago.ingredientes.join('-')}`)
    alert(`Pizza lanzada a mano
        \nCorteza: ${pizzaLanzada.corteza}
        \nSalsa: ${pizzaLanzada.salsas}
        \nQueso: ${pizzaLanzada.queso.join('-')}
        \nIngredientes: ${pizzaLanzada.ingredientes.join('-')}`)
    alert(`Pizza 3 carnes
        \nCorteza: ${pizza3Carnes.corteza}
        \nSalsa: ${pizza3Carnes.salsas}
        \nQueso: ${pizza3Carnes.queso}
        \nIngredientes: ${pizza3Carnes.ingredientes.join('-')}`)
    alert(`Pizza hawaiana
        \nCorteza: ${pizzaPiña.corteza}
        \nSalsa: ${pizzaPiña.salsas}
        \nQueso: ${pizzaPiña.queso}
        \nIngredientes: ${pizzaPiña.ingredientes.join('-')}`)
}