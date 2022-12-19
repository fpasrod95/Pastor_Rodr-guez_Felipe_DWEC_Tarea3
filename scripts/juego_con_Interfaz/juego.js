//import { Jugador } from '../juego_con_Interfaz/jugador.js'
class Juego{
    constructor(){
        this.ronda = 1;
        this.partida = 1;
    }

    // get jugador(){
    //     this.jugador;
    // }

    // get ordenador(){
    //     this.ordenador;
    // }


}


// class Juego {
//     constructor() {
//         this.ronda = 1;
//         //this.ganador = "";
//         this.partida = 1;
//     }

//     iniciarJuego() {
//         var opc;
//         console.log("Bienvenida/o al juego de piedra, papel o tijeras");
//         var jugador = new Jugador("Jugador");
//         var ordenador = new Jugador("Ordenador");
//         do {
//             alert(`Comienza la partida nº ${this.partida}`);
//             do {

//                 console.log('');
//                 alert(`Comienza la ronda ${this.ronda}`);
//                 console.log(`Comienza la ronda ${this.ronda}`);
//                 jugador.introducirRespuesta(jugador.name);
//                 ordenador.introducirRespuesta(jugador.name);
//                 this.obtenerResultadoRonda();

//             } while (jugador.victorias < 5 && ordenador.victorias < 5)

//             //comprobarGanador();
//             this.mostrarDatosPartida();
//             this.seguirJugando();

//         } while (opc == "si")
//     }

//     obtenerResultadoRonda() {
//         if (jugador.respuesta.toLowerCase() == "piedra") {
//             if (ordenador.respuesta == "papel") {
//                 this.RondaDerrota();

//             } else if (ordenador.respuesta == "tijeras") {
//                 this.RondaVictoria();
//             } else { //Estos "else" hacen referencia a que haya un empate
//                 this.RondaEmpate();

//             }
//         } else if (jugador.respuesta.toLowerCase() == "papel") {
//             if (ordenador.respuesta == "tijeras") {
//                 this.RondaDerrota();
//             } else if (ordenador.respuesta == "piedra") {
//                 this.RondaVictoria();
//             } else {
//                 this.RondaEmpate();
//             }
//         } else if (jugador.respuesta.toLowerCase() == "tijeras") {
//             if (ordenador.respuesta == "piedra") {
//                 this.RondaDerrota();
//             } else if (ordenador.respuesta == "papel") {
//                 this.RondaVictoria();
//             } else {
//                 this.RondaEmpate();
//             }
//         }
//     }

//     RondaEmpate() {
//         this.ronda++;

//         console.log(`El jugador ha sacado ${jugador.respuesta} y el ordenador ${ordenador.respuesta}`);
//         console.log("Ha habido un empate esta ronda");
//         console.log(`Victorias del jugador : ${victorias_jugador}`);
//         console.log(`Victorias del ordenador : ${victorias_ordenador}`);
//         console.log('');
//     }

//     RondaDerrota() {
//         this.ronda++;
//         jugador.nuevaDerrota();
//         ordenador.nuevaVictoria();

//         console.log(`El jugador ha sacado ${jugador.respuesta} y el ordenador ${ordenador.respuesta}`);
//         console.log("Has perdido esta ronda");
//         console.log(`Victorias del jugador : ${victorias_jugador}`);
//         console.log(`Victorias del ordenador : ${victorias_ordenador}`);
//         console.log('');
//     }

//     RondaVictoria() {
//         this.ronda++;
//         jugador.nuevaVictoria();
//         ordenador.nuevaDerrota();

//         console.log(`El jugador ha sacado ${jugador.respuesta} y el ordenador ${ordenador.respuesta}`);
//         console.log("Has ganado esta ronda");
//         console.log(`Victorias del jugador : ${victorias_jugador}`);
//         console.log(`Victorias del ordenador : ${victorias_ordenador}`);
//         console.log('');
//     }

//     comprobarGanador() {
//         if (jugador.victorias == 5) {
//             console.log(`¡ El ${jugador.name} ha ganado la partida !`);
//         }
    
//         if (ordenador.victorias == 5) {
//             console.log(`¡ El ${ordenador.name} ha ganado la partida !`);
//         }
//     }

//     mostrarDatosPartida() {
//         this.comprobarGanador();
//         console.log('');
//         console.log(`Datos de la partida nº ${this.partida}: `);
//         console.log('');
//         jugador.mostrarDatosJugador();
//         ordenador.mostrarDatosJugador();
//     }
    
//     //Se decide si seguir jugando o finalizar el juego
//     seguirJugando() {
    
//         do {
//             opc = prompt("¿Desea comenzar una nueva partida (si/no)?");
//             if (opc.toLowerCase() != "si" && opc.toLowerCase() != "no") {
//                 alert(`Por favor, introduzca una opción válida (si/no)`);
//             }
//         } while (opc.toLowerCase() != "si" && opc.toLowerCase() != "no")
    
//         if (opc.toLowerCase() == "no") {
//             alert("El juego ha finalizado");
//             console.log("El juego ha finalizado");
//         }
    
//         //Tenemos que resetear variables para poder volver a jugar, y añadir una partida más
//         if (opc.toLowerCase() == "si") {
//             this.resetDatos();
//         }
//     }

//     resetDatos(){
//         this.partida++;
//         this.ronda=1;

//         jugador.victorias(0);
//         ordenador.victorias(0);
//         jugador.derrotas(0);
//         ordenador.derrotas(0);
//     }

    


// }

