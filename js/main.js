/*----------html inicio---------*/

function saludar () {
    alert(`Bienvenid@ ${nombreUsuario}`);
}

let nombreUsuario = prompt("Escribí tu nombre");
if (nombreUsuario == "") {
    alert("No se reconocen los datos ingresados");
    nombreUsuario = prompt("Completa con tu nombre");
    saludar();
} else {
    saludar();
}

/*----------html acceso | registro ---------*/

let nombreRegistro = prompt("Para registrarte escribí tu nombre");
let apellidoRegistro = prompt("Escribí tu apellido");
let correo = prompt("Escribí tu correo electrónico");
let contraseña = prompt("Crea una contraseña");
let repContraseñia = prompt("Repetí la contraseña");
if (repContraseñia != contraseña) {
    alert("Las contraseñas no coinciden");
} else {
    alert("Tu registro fue exitoso! Vas a recibir información de Pico Deportes en tu mail");
}

/*----------html futbol ---------*/

const precioCancha6 = 5400;
const precioCancha8 = 7200;
let cantidadHoras;
let tipoCancha = parseInt(prompt("Qué tipo de cancha querés reservar? \n" +
    "1) Fútbol 6  \n" +
    "2) Fútbol 8 \n"));

switch (tipoCancha) {
    case 1:
        pedirHoras ();
        precioTotal6 ();
        break;
    case 2:
        pedirHoras ();
        precioTotal8 ();
        break;
    default:
        alert("No se reconoce el tipo de cancha seleccionado");
}

function pedirHoras () {
    cantidadHoras = parseInt(prompt("Selecciona la cantidad de horas que desea reservar la cancha"));
    return cantidadHoras;
}

function precioTotal6 () {
    if (cantidadHoras <= 3 && cantidadHoras > 0) {
        alert(`El valor total para reservar la cancha de fútbol 6 por ${cantidadHoras} horas es de : $ ${cantidadHoras * precioCancha6}`);
    } else {
        alert("La cantidad de horas no es válida")
    }
}

function precioTotal8 () {
    if (cantidadHoras <= 3 && cantidadHoras > 0) {
        alert(`El valor total para reservar la cancha de fútbol 8 por ${cantidadHoras} horas es de : $ ${cantidadHoras * precioCancha8}`);
    } else {
        alert("La cantidad de horas no es válida")
    }
}