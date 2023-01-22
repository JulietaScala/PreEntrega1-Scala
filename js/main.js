

/* function saludar () {
    alert(`Bienvenid@ ${nombreUsuario}`);
}

let nombreUsuario = prompt("Escribí tu nombre");
if (nombreUsuario == "") {
    alert("No se reconocen los datos ingresados");
    nombreUsuario = prompt("Completa con tu nombre");
    saludar();
} else {
    saludar();
} */


/* let horas = ["16hs", "17hs", "18hs", "19hs", "20hs", "21hs", "22hs", "23hs"];


const nombre = document.getElementById("inpNombre");
const apellido = document.getElementById("inpApellido");
const correo = document.getElementById("inpEmail");
const opSelect = document.getElementById("opcionSelect");


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
    if (horas.includes(hora)) {    aca se utiliza la funcionalidad del arreglo para probar si el valor de esta dentro del arreglo
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

crearReserva();
precioHora();
devolverDatos();
 */



let precioCancha6 = 0;
let precioCancha8 = 0;
let cantidadHoras = 0;
let precio = 0

const formulario = document.querySelector("#formulario");
const btnreservar = document.querySelector("#btnReservar");
const btnborrar = document.querySelector("#btnBorrar");
const divReserva = document.querySelector("#divReserva");

class ReservaDatos {
    constructor(tipoCancha, dia, horario, cantHoras, nombre, apellido, email) {
        this.tipoCancha = tipoCancha;
        this.dia = dia;
        this.horario = horario;
        this.cantHoras = cantHoras;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }   
}


//  const listaReservas = JSON.parse(localStorage.getItem("reservas")) || []; 

const nuevaReserva = () => {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let tipoCancha = document.getElementById("cancha").value;
    let email = document.getElementById("email").value;
    let dia = document.getElementById("start").value;
    let horario = document.getElementById("opcionSelect").value;
    let cantHoras = document.getElementById("cantHoras").value;

    let reservaNueva = new ReservaDatos(tipoCancha, dia, horario, cantHoras, nombre, apellido, email);

    let itemReserva = JSON.stringify(reservaNueva)
    // console.log(itemReserva)
    // listaReservas.push(reservaNueva);
    localStorage.setItem("reservas", itemReserva);

    return itemReserva;
}

formulario.onsubmit = (e) => {
    e.preventDefault();
    nuevaReserva();
    mostrarReservas();
}

const mostrarReservas = ()=> {
    const reservaGuardada = JSON.parse(localStorage.getItem("reservas"));
    let elemento = document.getElementById("idReserva")
    console.log(chequearValoresReserva(reservaGuardada))
    if (chequearValoresReserva(reservaGuardada)){
        devolverTotal(reservaGuardada)
        if (elemento == null){
            agregoDiv(reservaGuardada)
        }else{
            elemento.remove()
            agregoDiv(reservaGuardada)
        }
    }else {
        alert("Hay campos incompletos")
    }
}

const borrar = () => {
    formulario.reset();
};

document.addEventListener("DOMContentLoaded", () => {
    /* btnreservar.addEventListener("click", confirmarReserva); */
    btnborrar.addEventListener("click", borrar);
  });


// precio cancha x precio hora

const agregoDiv = (reservaGuardada) => {
    return divReserva.innerHTML += `
                        <div id="idReserva" class="classReserva">
                            <div class="tituloReserva">
                                <h2 class="h2Reserva">Tu reserva fue exitosa</h2>
                                <img src="../img/check.png">
                            </div>
                            <div class="datosReserva">
                                <h2 class="h2Reserva">Detalles de la reserva</h2>
                                <h4 class="h4Reserva">Usuario: ${reservaGuardada.nombre} ${reservaGuardada.apellido}</h4>
                                <h4 class="h4Reserva">Tu email de confirmación es el siguiente: ${reservaGuardada.email}</h4>
                                <h4 class="h4Reserva">Cancha: ${reservaGuardada.tipoCancha}</h4>
                                <h4 class="h4Reserva">Día: ${reservaGuardada.dia}</h4>
                                <h4 class="h4Reserva">Hora: ${reservaGuardada.horario}</h4>
                                <h4 class="h4Reserva">Duración: ${reservaGuardada.cantHoras}</h4>
                                <h3 class="h3Reserva">Resumen</h3>
                                <h4 class="h4Reserva">Precio: $${precio}</h4>
                                <p>Te va a llegar un mail de confirmación con los datos completos de la reserva</p>
                            </div>
                        </div>
                        `
}

const chequearValoresReserva = (reservaGuardada) => {
    return ((reservaGuardada.tipoCancha != "Sin seleccionar") && (reservaGuardada.cantHoras != "Sin seleccionar") && (reservaGuardada.horario != "Sin seleccionar") && (reservaGuardada.nombre != "") && (reservaGuardada.apellido != "") && (reservaGuardada.email != ""))
}

const devolverTotal = (reservaActual) => {
    // const reservaActual = JSON.parse(localStorage.getItem("reservas"));
    // if(reservaActual.tipoCancha == "Sin seleccionar") || (reser)
    //ver si hay tipo de cancha seleccionada y cantidad de horas, sino dar error
    //ver que tipo de cancha es y multiplicarlo por las horas
    //devolver un numero
    if((reservaActual.horario == "16hs") || (reservaActual.horario == "17hs") || (reservaActual.horario == "18hs")) {
        precioCancha8 = 4800
        precioCancha6 = 3600
    }else {
        precioCancha6 = 7200;
        precioCancha8 = 9600;
    }
    if (reservaActual.tipoCancha == "Futbol 8"){
        precio = precioCancha8 * parseInt(`${reservaActual.cantHoras}`);
    }else{
        precio = precioCancha6 * parseInt(`${reservaActual.cantHoras}`);
    }
    console.log (precio);
}


const botonFetch = document.getElementById("btnJSON");
const divFetch = document.getElementById("contFetch");

const crearServicios = () => {
    fetch("../nuevosDatos.json")
        .then(resp => resp.json())
        .then(resultado => {
            resultado.forEach(servicio => {
                divFetch.innerHTML += `
                    <div class="hijoFetch">
                        <h2>${servicio.producto}</h2>
                        <img src="${servicio.img}"/>
                        <h4>${servicio.info}</h4>
                        <h4>${servicio.otros}</h4>
                    </div>
                `
            });
        })
}


botonFetch.onclick = () => [
    crearServicios()
]