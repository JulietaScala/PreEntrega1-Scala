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

/*----------html acceso | REGISTRO ---------*/

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

/*----------html ACCESO | registro ---------*/

let nombreAcceso = prompt("Escribí tu nombre de usuario");
let contraseñaGuardada = 1111;
let password = parseInt(prompt("cual es la clave?"));
let intentos = 3;

while (password != contraseñaGuardada && intentos > 0) {
    intentos = intentos - 1;
    alert(`La clave es incorrecta, te quedan ${intentos} intentos`);
    if (intentos != 0) {
        password = parseInt(prompt("cual es la clave?"))
    } else {
        alert("Cuenta bloqueada");
    }
}
alert("Ingreso válido");

/*----------html futbol ---------*/

let horas = ["16hs", "17hs", "18hs", "19hs", "20hs", "21hs", "22hs", "23hs"];



class ReservaDatos {
    constructor(tipoCancha, día, hora, nombre, apellido, correoElectronico) {
        this.tipoCancha = tipoCancha;
        this.día = día;
        this.hora = hora;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correoElectronico = correoElectronico;
    }
}
function crearReserva() {
    let tipoCancha = prompt("Escribí tu correo electrónico");
    let dia = prompt("Escribí tu correo electrónico");
    let hora = prompt("Escribí tu correo electrónico");
    let nombreReserva = prompt("Completá con tu nombre");
    let apellidoReserva = prompt("Completá con tu apellido");
    let correoReserva = prompt("Escribí tu correo electrónico");
    
    const nuevaReserva = new ReservaDatos (tipoCancha, dia, hora, nombreReserva, apellidoReserva, correoReserva)
    console.log(nuevaReserva)
    return nuevaReserva;
}

const precioCancha6 = 5400;
const precioCancha8 = 7200;
function precioHora (num) {
    return (num2) => num2 * num;
}
let tipoCancha = parseInt(prompt("Qué tipo de cancha querés reservar? \n" +
    "1) Fútbol 6  \n" +
    "2) Fútbol 8 \n"));

switch (tipoCancha) {
    case 1:
        pedirHoras ();
        if (cantidadHoras <= 3 && cantidadHoras > 0) {
            const precioTotal8 = precioHora(precioCancha8);
            alert(`El precio total es de $${precioTotal8(cantidadHoras)}`);
        } else {
            alert("La cantidad de horas no es válida")
        }
        break;
    case 2:
        pedirHoras ();
        if (cantidadHoras <= 3 && cantidadHoras > 0) {
            const precioTotal6 = precioHora(precioCancha6);
            alert(`El precio total es de $${precioTotal6(cantidadHoras)}`);
        } else {
            alert("La cantidad de horas no es válida")
        }
        break;
    default:
        alert("No se reconoce el tipo de cancha seleccionada");
}

function pedirHoras () {
    cantidadHoras = parseInt(prompt("Selecciona la cantidad de horas que desea reservar la cancha"));
    return cantidadHoras;
}