

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

    let tcancha = tipoCancha()
    let datos = {}
    if(tcancha == 1 || tcancha == 2){
        datos = devolverDatos()
    }   
    
    const nuevaReserva = new ReservaDatos (tcancha, datos.dia, datos.hora, datos.nombreReserva, datos.apellidoReserva, datos.correoReserva)
    console.log(nuevaReserva)
    return nuevaReserva;
}

const precioCancha6 = 5400;
const precioCancha8 = 7200;
function precioHora () {
    let datos = obtenerDatos()
    let total = datos.cantidadHoras * datos.precio
    console.log(total)
    console.log(`El precio total es de ${(total)}`);
    return total;
}

function obtenerDatos() {
    let cantidadHoras = 0;
    let precio = 0 
    switch (tipoCancha()) {
        case 1:
            cantidadHoras = pedirHoras ();
            if (cantidadHoras <= 3 && cantidadHoras > 0) {
                precio = precioCancha8;
            } else {
                console.log("La cantidad de horas no es válida")
            }
            break;
        case 2:
            cantidadHoras = pedirHoras ();
            if (cantidadHoras <= 3 && cantidadHoras > 0) {
                precio = precioCancha6;
            } else {
                console.log("La cantidad de horas no es válida")
            }
            break;
        default:
            console.log("No se reconoce el tipo de cancha seleccionada");
    }
    return {
        precio:precio,
        cantidadHoras:cantidadHoras
    }
}

function pedirHoras () {
    cantidadHoras = parseInt(prompt("Selecciona la cantidad de horas que desea reservar la cancha"));
    return cantidadHoras;
}

function tipoCancha () {
    let canchaIngresada = parseInt(prompt("Qué tipo de cancha querés reservar?\n" +
    "Opción 1: Fútbol 8 \n" +
    "Opción 2: Fútbol 6  \n"));
    if (canchaIngresada == 1 || canchaIngresada == 2) {
        return canchaIngresada;
    }else{
        return 0;
    }
}

function devolverDatos(){
    let dia = prompt("Qué día querés reservar?");
    let hora = prompt("A qué hora querés reservar la cancha?");
    if (horas.includes(hora)) { //aca se utiliza la funcionalidad del arreglo para probar si el valor de esta dentro del arreglo
        let nombreReserva = prompt("Completá con tu nombre");
            while (nombreReserva == " " || nombreReserva == "") {
                nombreReserva = prompt("Completá con tu nombre");
            }
        let apellidoReserva = prompt("Completá con tu apellido");
            while (apellidoReserva == " " || apellidoReserva == "") {
                apellidoReserva = prompt("Completá con tu apellido");
            }
        let correoReserva = prompt("Escribí tu correo electrónico");
            while (!correoReserva.includes("@")) {
                correoReserva = prompt("Escribí tu correo electrónico");
            }
        return {
            dia:dia,
            hora:hora,
            nombreReserva:nombreReserva,
            apellidoReserva:apellidoReserva,
            correoReserva:correoReserva
        }
    } else {
        alert("La hora seleccionada no es válida")
        return null;
    }
}