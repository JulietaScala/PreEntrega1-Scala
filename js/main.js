
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
    btnborrar.addEventListener("click", borrar);
  });



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
                        <img src="${servicio.img}">
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