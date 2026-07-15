console.log("Conexion exitosa...");
/*ejemplo bucle for*/
function contarHasta2() {
    for (let i = 0; i < 3; i++) {
        alert(i);
    }
}
function cuentaRegresiva() {
    for (let i = 10; i > 0; i--) {
        alert(i);
    }
}
function recorrerLista() {
    let usuarios = ["Ana", "Luis", "María"];

    for (let i = 0; i < usuarios.length; i++) {
        alert("Bienvenido, " + usuarios[i]);
    }
}

/*ejemplo bucle while*/
function reproducciónMusica() {
    let reproduciendo = true;

    while (reproduciendo) {
        alert("La canción sigue sonando...");
        // Simulación de una acción que detendría la reproducción
        reproduciendo = false;
    }
}
function datos() {
    let datosPendientes = 5;

    while (datosPendientes > 0) {
        alert(`Cargando datos..  ${datosPendientes} de 5`);
        datosPendientes--;
    }
}
function validarContrasena() {
    let contraseñaCorrecta = false;

    while (!contraseñaCorrecta) {
        let intento = prompt("Ingresa tu contraseña:");
        if (intento === "1234") {
            contraseñaCorrecta = true;
            alert("Acceso concedido.");
        } else {
            alert("Contraseña incorrecta, intenta de nuevo.");
        }
    }
}