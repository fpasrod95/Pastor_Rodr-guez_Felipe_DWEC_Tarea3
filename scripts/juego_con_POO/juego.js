class Juego {
    constructor() {
        this.ronda = 1;
        //this.ganador = "";
        this.partida = 1;
    }

    iniciarJuego() {
        var opc;
        console.log("Bienvenida/o al juego de piedra, papel o tijeras");
        var jugador = new Jugador("Jugador");
        var ordenador = new Jugador("Ordenador");
        do {
            alert(`Comienza la partida nº ${this.partida}`);
            do {

                console.log('');
                alert(`Comienza la ronda ${this.ronda}`);
                console.log(`Comienza la ronda ${this.ronda}`);
                jugador.introducirRespuesta(jugador.name);
                ordenador.introducirRespuesta(jugador.name);
                this.obtenerResultadoRonda();

            } while (jugador.victorias < 5 && ordenador.victorias < 5)

            //comprobarGanador();
            this.mostrarDatosPartida();
            this.seguirJugando();

        } while (opc == "si")
    }

    obtenerResultadoRonda() {
        if (jugador.respuesta.toLowerCase() == "piedra") {
            if (ordenador.respuesta == "papel") {
                this.RondaDerrota();

            } else if (ordenador.respuesta == "tijeras") {
                this.RondaVictoria();
            } else { //Estos "else" hacen referencia a que haya un empate
                this.RondaEmpate();

            }
        } else if (jugador.respuesta.toLowerCase() == "papel") {
            if (ordenador.respuesta == "tijeras") {
                this.RondaDerrota();
            } else if (ordenador.respuesta == "piedra") {
                this.RondaVictoria();
            } else {
                this.RondaEmpate();
            }
        } else if (jugador.respuesta.toLowerCase() == "tijeras") {
            if (ordenador.respuesta == "piedra") {
                this.RondaDerrota();
            } else if (ordenador.respuesta == "papel") {
                this.RondaVictoria();
            } else {
                this.RondaEmpate();
            }
        }
    }

    RondaEmpate() {
        this.ronda++;

        console.log(`El jugador ha sacado ${jugador.respuesta} y el ordenador ${ordenador.respuesta}`);
        console.log("Ha habido un empate esta ronda");
        console.log(`Victorias del jugador : ${victorias_jugador}`);
        console.log(`Victorias del ordenador : ${victorias_ordenador}`);
        console.log('');
    }

    RondaDerrota() {
        this.ronda++;
        jugador.nuevaDerrota();
        ordenador.nuevaVictoria();

        console.log(`El jugador ha sacado ${jugador.respuesta} y el ordenador ${ordenador.respuesta}`);
        console.log("Has perdido esta ronda");
        console.log(`Victorias del jugador : ${victorias_jugador}`);
        console.log(`Victorias del ordenador : ${victorias_ordenador}`);
        console.log('');
    }

    RondaVictoria() {
        this.ronda++;
        jugador.nuevaVictoria();
        ordenador.nuevaDerrota();

        console.log(`El jugador ha sacado ${jugador.respuesta} y el ordenador ${ordenador.respuesta}`);
        console.log("Has ganado esta ronda");
        console.log(`Victorias del jugador : ${victorias_jugador}`);
        console.log(`Victorias del ordenador : ${victorias_ordenador}`);
        console.log('');
    }

    comprobarGanador() {
        if (jugador.victorias == 5) {
            console.log(`¡ El ${jugador.name} ha ganado la partida !`);
        }
    
        if (ordenador.victorias == 5) {
            console.log(`¡ El ${ordenador.name} ha ganado la partida !`);
        }
    }

    mostrarDatosPartida() {
        this.comprobarGanador();
        console.log('');
        console.log(`Datos de la partida nº ${this.partida}: `);
        console.log('');
        jugador.mostrarDatosJugador();
        ordenador.mostrarDatosJugador();
    }
    
    //Se decide si seguir jugando o finalizar el juego
    seguirJugando() {
    
        do {
            opc = prompt("¿Desea comenzar una nueva partida (si/no)?");
            if (opc.toLowerCase() != "si" && opc.toLowerCase() != "no") {
                alert(`Por favor, introduzca una opción válida (si/no)`);
            }
        } while (opc.toLowerCase() != "si" && opc.toLowerCase() != "no")
    
        if (opc.toLowerCase() == "no") {
            alert("El juego ha finalizado");
            console.log("El juego ha finalizado");
        }
    
        //Tenemos que resetear variables para poder volver a jugar, y añadir una partida más
        if (opc.toLowerCase() == "si") {
            this.resetDatos();
        }
    }

    resetDatos(){
        this.partida++;
        this.ronda=1;

        jugador.victorias(0);
        ordenador.victorias(0);
        jugador.derrotas(0);
        ordenador.derrotas(0);
    }

    


}




// /*
// 1. Implemente la aplicación en JavaScript sobre la Consola sin utilizar la POO
// */

// // ----------------------------------VARIABLES----------------------------------
// //Variables del jugador
// //let respuesta_jugador;
// //var respuesta_jugador;
// let victorias_jugador = 0;
// let derrotas_jugador = 0;

// //Variables del ordenador
// var respuesta_ordenador;
// let victorias_ordenador = 0;
// let derrotas_ordenador = 0;

// let cont = 1;
// let aleatoria = 0;
// let ganador;
// let numero_partida = 1;
// var opc;

// // ----------------------------------EJECUCIÓN----------------------------------

// console.log("Bienvenida/o al juego de piedra, papel o tijeras");
// do {
//     alert(`Comienza la partida nº ${numero_partida}`);
//     do {

//         console.log('');
//         alert(`Comienza la ronda ${cont}`);
//         console.log(`Comienza la ronda ${cont}`);
//         introducirRespuesta();
//         generarRespuestaOrdenador();
//         obtenerResultadoRonda();

//     } while (victorias_jugador < 5 && victorias_ordenador < 5)

//     comprobarGanador();
//     mostrarDatosPartida();
//     seguirJugando();

// } while (opc == "si")

// // // ----------------------------------FUNCIONES----------------------------------

// //Se encarga de leer la respuesta del usuario
// function introducirRespuesta() {
//     do {
//         respuesta_jugador = prompt("Introduzca su respuesta ( piedra / papel / tijeras ) :");

//         if (respuesta_jugador.toLowerCase() != "piedra" && respuesta_jugador.toLowerCase() != "papel" && respuesta_jugador.toLowerCase() != "tijeras") {
//             alert("Por favor, introduzca una de las opciones requeridas");
//         }

//     } while (respuesta_jugador.toLowerCase() != "piedra" && respuesta_jugador.toLowerCase() != "papel" && respuesta_jugador.toLowerCase() != "tijeras")
// }

// //Se encarga de leer la respuesta del ordenador, generada aleatoriamente
// function generarRespuestaOrdenador() {
//     aleatoria = Math.floor(Math.random() * 3);
//     if (aleatoria == 0) {

//         respuesta_ordenador = "piedra";

//     } else if (aleatoria == 1) {

//         respuesta_ordenador = "papel";

//     } else {
//         respuesta_ordenador = "tijeras";
//     }
// }

// //Actualiza datos y muestra los resultados de cada ronda
// function obtenerResultadoRonda() {
//     if (respuesta_jugador.toLowerCase() == "piedra") {
//         if (respuesta_ordenador == "papel") {
//             victorias_ordenador++;
//             derrotas_jugador++;
//             cont++;

//             console.log(`El jugador ha sacado ${respuesta_jugador} y el ordenador ${respuesta_ordenador}`);
//             console.log("Has perdido esta ronda");
//             console.log(`Victorias del jugador : ${victorias_jugador}`);
//             console.log(`Victorias del ordenador : ${victorias_ordenador}`);
//             console.log('');

//         } else if (respuesta_ordenador == "tijeras") {
//             victorias_jugador++;
//             derrotas_ordenador++;
//             cont++;

//             console.log(`El jugador ha sacado ${respuesta_jugador} y el ordenador ${respuesta_ordenador}`);
//             console.log("Has ganado esta ronda");
//             console.log(`Victorias del jugador : ${victorias_jugador}`);
//             console.log(`Victorias del ordenador : ${victorias_ordenador}`);
//             console.log('');
//         } else { //Estos "else" hacen referencia a que haya un empate
//             cont++;
//             console.log(`El jugador ha sacado ${respuesta_jugador} y el ordenador ${respuesta_ordenador}`);
//             console.log("Ha habido un empate esta ronda");
//             console.log(`Victorias del jugador : ${victorias_jugador}`);
//             console.log(`Victorias del ordenador : ${victorias_ordenador}`);
//             console.log('');

//         }
//     } else if (respuesta_jugador.toLowerCase() == "papel") {
//         if (respuesta_ordenador == "tijeras") {
//             victorias_ordenador++;
//             derrotas_jugador++;
//             cont++;

//             console.log(`El jugador ha sacado ${respuesta_jugador} y el ordenador ${respuesta_ordenador}`);
//             console.log("Has perdido esta ronda");
//             console.log(`Victorias del jugador : ${victorias_jugador}`);
//             console.log(`Victorias del ordenador : ${victorias_ordenador}`);
//             console.log('');
//         } else if (respuesta_ordenador == "piedra") {
//             victorias_jugador++;
//             derrotas_ordenador++;
//             cont++;

//             console.log(`El jugador ha sacado ${respuesta_jugador} y el ordenador ${respuesta_ordenador}`);
//             console.log("Has ganado esta ronda");
//             console.log(`Victorias del jugador : ${victorias_jugador}`);
//             console.log(`Victorias del ordenador : ${victorias_ordenador}`);
//             console.log('');
//         } else {
//             cont++;
//             console.log(`El jugador ha sacado ${respuesta_jugador} y el ordenador ${respuesta_ordenador}`);
//             console.log("Ha habido un empate esta ronda");
//             console.log(`Victorias del jugador : ${victorias_jugador}`);
//             console.log(`Victorias del ordenador : ${victorias_ordenador}`);
//             console.log('');
//         }
//     } else if (respuesta_jugador.toLowerCase() == "tijeras") {
//         if (respuesta_ordenador == "piedra") {
//             victorias_ordenador++;
//             derrotas_jugador++;
//             cont++;

//             console.log(`El jugador ha sacado ${respuesta_jugador} y el ordenador ${respuesta_ordenador}`);
//             console.log("Has perdido esta ronda");
//             console.log(`Victorias del jugador : ${victorias_jugador}`);
//             console.log(`Victorias del ordenador : ${victorias_ordenador}`);
//             console.log('');
//         } else if (respuesta_ordenador == "papel") {
//             victorias_jugador++;
//             derrotas_ordenador++;
//             cont++;

//             console.log(`El jugador ha sacado ${respuesta_jugador} y el ordenador ${respuesta_ordenador}`);
//             console.log("Has ganado esta ronda");
//             console.log(`Victorias del jugador : ${victorias_jugador}`);
//             console.log(`Victorias del ordenador : ${victorias_ordenador}`);
//             console.log('');
//         } else {
//             cont++;
//             console.log(`El jugador ha sacado ${respuesta_jugador} y el ordenador ${respuesta_ordenador}`);
//             console.log("Ha habido un empate esta ronda");
//             console.log(`Victorias del jugador : ${victorias_jugador}`);
//             console.log(`Victorias del ordenador : ${victorias_ordenador}`);
//             console.log('');
//         }
//     }
// }
// //Asigna el ganador
// function comprobarGanador() {
//     if (victorias_jugador == 5) {
//         ganador = "Jugador";
//     }

//     if (victorias_ordenador == 5) {
//         ganador = "Ordenador";
//     }
// }

// //Muestra los datos tras finalizar la partida
// function mostrarDatosPartida() {
//     console.log(`¡ El ${ganador} ha ganado la partida !`);
//     console.log('');
//     console.log("Datos de la partida: ");
//     console.log('');
//     console.log("Datos del jugador: ");
//     console.log(`Victorias: ${victorias_jugador}`);
//     console.log(`Derrotas: ${derrotas_jugador}`);
//     console.log('');
//     console.log("Datos del ordenador: ");
//     console.log(`Victorias: ${victorias_ordenador}`);
//     console.log(`Derrotas: ${derrotas_ordenador}`);
//     console.log('');
// }

// //Se decide si seguir jugando o finalizar el juego
// function seguirJugando() {

//     do {
//         opc = prompt("¿Desea comenzar una nueva partida (si/no)?");
//         if (opc.toLowerCase() != "si" && opc.toLowerCase() != "no") {
//             alert(`Por favor, introduzca una opción válida (si/no)`);
//         }
//     } while (opc.toLowerCase() != "si" && opc.toLowerCase() != "no")

//     if (opc.toLowerCase() == "no") {
//         alert("El juego ha finalizado");
//         console.log("El juego ha finalizado");
//     }

//     //Tenemos que resetear variables para poder volver a jugar, y añadir una partida más
//     if (opc.toLowerCase() == "si") {
//         numero_partida++;
//         cont = 1;
//         //ganador="";
//         victorias_jugador = 0;
//         victorias_ordenador = 0;
//         derrotas_jugador = 0;
//         derrotas_ordenador = 0;
//     }
// }
