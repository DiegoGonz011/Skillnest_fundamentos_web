console.log(`hola :3`)

function filtrarVideojuegos() {
    let videojuegos = [
        { nombre: "Minecraft", edadRecomendada: 7 },
        { nombre: "FIFA 23", edadRecomendada: 3 }, //me decepciona el hecho que tenga que ir en contra de mis principios como jugador
        { nombre: "Call of Duty", edadRecomendada: 18 },
        { nombre: "Fortnite", edadRecomendada: 12 }
    ];
    let edadMinima = 12;
    let recomendados = [];
    for (let i = 0; i < videojuegos.length; i++) {
        if (videojuegos[i].edadRecomendada <= edadMinima) {
            recomendados.push(videojuegos[i].nombre);
        }
    }
    alert(`Juegos recomendados:  ${recomendados.join(' - ')}`);
}

//🎵 Contador de canciones favoritas
function contadorMusica() {
    let historialReproduccion = [
        "Shallow",
        "Blinding Lights",
        "Shallow",
        "Anti-Hero",
        "Shallow",
        "Bad Habits",
    ];
    let cancionBuscada = "Shallow";
    let contador = 0;
    for (let i = 0; i < historialReproduccion.length; i++) {
        if (historialReproduccion[i] === cancionBuscada) {
            contador++;
        }
    }
    alert(`La canción ${cancionBuscada} se reprodujo ${contador} veces.`);
}

//🕹️ Organizadores de torneo de videojuegos
function torneo() {
    let jugadores = [
        "Luis",
        "Andrea",
        "Carlos",
        "Sofía",
        "Pedro",
        "Martina",
        "Javier",
        "Valentina",
    ];
    let tamanoGrupo = 3;
    let grupos = [];
    let grupoActual = [];
    for (let i = 0; i < jugadores.length; i++) {
        grupoActual.push(jugadores[i]);
        if (grupoActual.length === tamanoGrupo || i === jugadores.length - 1) {
            grupos.push(grupoActual);
            grupoActual = [];
        }
    }
    alert(`Grupos formados: ${grupos.join(' - ')}`);
}