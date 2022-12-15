class Jugador{
    constructor(name){
        this.name=name;
        this.victorias=0;
        this.derrotas=0;
        this.respuesta="";
    }

    introducirRespuesta(nombre,resp){
        if (nombre=="Jugador"){
            this.respuesta=resp;
        }

        if (nombre=="Ordenador"){
            var aleatoria = Math.floor(Math.random() * 3);
            if (aleatoria == 0) {
                this.respuesta = "piedra";
            } else if (aleatoria == 1) {
                this.respuesta = "papel";
            } else {
                this.respuesta = "tijeras";
            }
        }
        
    }

    obtenerRespuesta(){
        return this.respuesta;
    }

    obtenerNombre(){
        return this.name;
    }

    




}

// class Jugador {
//     constructor(name) {
//         this.name = name;
//         this.victorias = 0;
//         this.derrotas = 0;
//         this.respuesta = "";
//     }

//     introducirRespuesta(name) {
//         if (name == "Jugador") {
//             do {
//                 this.respuesta = prompt("Introduzca su respuesta ( piedra / papel / tijeras ) :");

//                 if (this.respuesta.toLowerCase() != "piedra" && this.respuesta.toLowerCase() != "papel" && this.respuesta.toLowerCase() != "tijeras") {
//                     alert("Por favor, introduzca una de las opciones requeridas");
//                 }

//             } while (this.respuesta.toLowerCase() != "piedra" && this.respuesta.toLowerCase() != "papel" && this.respuesta.toLowerCase() != "tijeras")
//         }
//         if (name = "Ordenador") {
//             var aleatoria = Math.floor(Math.random() * 3);
//             if (aleatoria == 0) {

//                 this.respuesta = "piedra";

//             } else if (aleatoria == 1) {

//                 this.respuesta = "papel";

//             } else {
//                 this.respuesta = "tijeras";
//             }
//         }

//     }

//     get name(){
//         return this.name;
//     }

//     get victorias(){
//         return this.victorias;
//     }

//     get derrotas(){
//         return this.derrotas;
//     }

//     get respuesta(){
//         return this.respuesta;
//     }

//     set victorias(valor){
//         this.victorias=valor;
//     }

//     set derrotas(valor){
//         this.derrotas=valor;
//     }

//     mostrarDatosJugador(){
//         console.log(`Datos del ${this.name}: `);
//         console.log(`Victorias: ${this.victorias}`);
//         console.log(`Derrotas: ${this.derrotas}`);
//         console.log('');
//     }

//     nuevaDerrota(){
//         this.derrotas++;
//     }

//     nuevaVictoria(){
//         this.victorias++;
//     }




// }

