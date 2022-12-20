import { Jugador2 } from "./jugador2.js";

export class Juego2 {
    constructor() {
        this.ronda = 1;
        this.partida = 1;
        this.jugador = new Jugador2("Jugador");
        this.ordenador = new Jugador2("Ordenador");
    }

//-------------------------GETTERS Y SETTERS (POR DEFECTO)-------------------------

    get ronda(){
        return this._ronda;
    }

    set ronda(valor){
        this._ronda=valor;
    }

    get partida(){
        return this._partida;
    }

    set partida(valor){
        this._partida=valor;
    }

    get jugador(){
        return this._jugador;
    }

    set jugador(nuevo){
        this._jugador=nuevo;
    }

    get ordenador(){
        return this._ordenador;
    }

    set ordenador(nuevo){
        this._ordenador=nuevo;
    }

//-------------------------MÉTODOS-------------------------
    // Recoge los resultados de la ronda
    obtenerResultadoRonda(resultado, texto_jugador, texto_ordenador) {
        if (this.jugador.obtenerRespuesta() == "piedra") {
            if (this.ordenador.obtenerRespuesta() == "papel") {
                this.RondaDerrota(resultado, texto_jugador, texto_ordenador);
            } else if (this.ordenador.obtenerRespuesta() == "tijeras") {
                this.RondaVictoria(resultado, texto_jugador, texto_ordenador);
            } else {
                //Estos "else" hacen referencia a que haya un empate
                this.RondaEmpate(resultado, texto_jugador, texto_ordenador);
            }
        } else if (this.jugador.obtenerRespuesta() == "papel") {
            if (this.ordenador.obtenerRespuesta() == "tijeras") {
                this.RondaDerrota(resultado, texto_jugador, texto_ordenador);
            } else if (this.ordenador.obtenerRespuesta() == "piedra") {
                this.RondaVictoria(resultado, texto_jugador, texto_ordenador);
            } else {
                this.RondaEmpate(resultado, texto_jugador, texto_ordenador);
            }
        } else if (this.jugador.obtenerRespuesta() == "tijeras") {
            if (this.ordenador.obtenerRespuesta() == "piedra") {
                this.RondaDerrota(resultado, texto_jugador, texto_ordenador);
            } else if (this.ordenador.obtenerRespuesta() == "papel") {
                this.RondaVictoria(resultado, texto_jugador, texto_ordenador);
            } else {
                this.RondaEmpate(resultado, texto_jugador, texto_ordenador);
            }
        }
    }
    
    RondaEmpate(resultado, texto_jugador, texto_ordenador) {
        this.ronda++;
        resultado.innerHTML = "Ha habido un empate!";
        this.actualizarPuntuaciones(texto_jugador, texto_ordenador);
    }

    RondaDerrota(resultado, texto_jugador, texto_ordenador) {
        this.ronda++;
        this.jugador.nuevaDerrota();
        this.ordenador.nuevaVictoria();
        resultado.innerHTML = "El Ordenador ha ganado la ronda!";
        this.actualizarPuntuaciones(texto_jugador, texto_ordenador);
    }

    RondaVictoria(resultado, texto_jugador, texto_ordenador) {
        this.ronda++;
        this.jugador.nuevaVictoria();
        this.ordenador.nuevaDerrota();
        resultado.innerHTML = "El jugador ha ganado la ronda!";
        this.actualizarPuntuaciones(texto_jugador, texto_ordenador);
    }
    // Actualiza las puntuaciones de jugador y ordenador
    actualizarPuntuaciones(texto_jugador, texto_ordenador) {
        texto_jugador.innerHTML = this.jugador.obtenerVictorias();
        texto_ordenador.innerHTML = this.ordenador.obtenerVictorias();
    }
    // Cambia entre las 3 imágenes disponibles dependiendo de la respuesta de Ordenador
    elegirImagenOrdenador(imagen_ordenador) {

        if (this.ordenador.obtenerRespuesta() == "piedra") {
            imagen_ordenador.src = "../imagenes/piedra.png";
        }

        if (this.ordenador.obtenerRespuesta() == "papel") {
            imagen_ordenador.src = "../imagenes/papel.png";
        }

        if (this.ordenador.obtenerRespuesta() == "tijeras") {
            imagen_ordenador.src = "../imagenes/tijeras.png";
        }

    }

    comprobarGanador(resultado) {
        if (this.jugador.victorias == 5) {
            resultado.innerHTML = "El Jugador ha ganado la partida!";
        }

        if (this.ordenador.victorias == 5) {
            resultado.innerHTML = "El Ordenador ha ganado la partida!";
        }
    }

//-------------------------GETTERS Y SETTERS "PROPIOS"-------------------------
    // La diferencia con los getter y setters es que estos son métodos llamados, mientras get() y set() ya están creados y 
    // acceden a la propiedad sin la necesidad de llamarlos (evitando el uso de paréntesis "()" )
    obtenerJugador() {
        return this.jugador;
    }

    obtenerOrdenador() {
        return this.ordenador;
    }
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
