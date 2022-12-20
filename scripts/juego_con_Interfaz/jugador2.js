export class Jugador2 {
    constructor(name) {
        this.name = name;
        this.victorias = 0;
        this.derrotas = 0;
        this.respuesta = "";
    }

//---------------------------------GETTERS Y SETTERS (POR DEFECTO)---------------------------------

    get name() {
        return this._name;
    }

    set name(valor) {
        this._name = valor;
    }

    get victorias() {
        return this._victorias;
    }

    set victorias(valor) {
        this._victorias = valor;
    }

    get derrotas() {
        return this._derrotas;
    }

    set derrotas(valor) {
        this._derrotas = valor;
    }

    get respuesta(){
        return this._respuesta;
    }

    set respuesta(valor){
        this._respuesta=valor;
    }

//---------------------------------MÉTODOS---------------------------------

    introducirRespuesta(nombre, resp) {
        if (nombre == "Jugador") {
            this.respuesta = resp;
        }

        if (nombre == "Ordenador") {
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

//---------------------------------GETTERS Y SETTERS "PROPIOS"---------------------------------

    obtenerRespuesta() {
        return this.respuesta;
    }

    obtenerNombre() {
        return this.name;
    }

    obtenerVictorias() {
        return this.victorias;
    }

    nuevaDerrota() {
        this.derrotas++;
    }

    nuevaVictoria() {
        this.victorias++;
    }

}