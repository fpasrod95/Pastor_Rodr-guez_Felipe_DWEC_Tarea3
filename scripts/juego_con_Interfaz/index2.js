import { Juego2 } from './juego2.js'

/*
Ejercicio 3. Juego Piedra, Papel y Tijeras .
Piedra, Papel y Tijeras es un juego de manos para dos personas. Ambos jugadores deben decir “piedra, papel, tijeras” 
y simultáneamente formar uno de los tres objetos (piedra, papel o tijeras) con una mano extendida. 
El ganador se determina por las formaciones de las manos. Las tijeras le ganan al papel, el papel le gana a la piedra,
y la piedra le gana a las tijeras. Si ambos jugadores presentan la misma formación de manos, se considera un empate. 
Escribiremos una aplicación javascript que simule el juego en el que un jugador es el usuario y el otro es el ordenador.

El rival a batir será el ordenador.
Se mostrará en cada partida quién es el ganador (Ordenador o Jugador) así como las puntuaciones de cada jugador.
Se jugará hasta que uno de los participantes alcance 5 puntos (5 victorias), momento en el que se preguntará 
al usuario si desea jugar otra partida. o bien salir del juego.
Mediante el botón Inicializar, el usuario podrá dar por finalizada la partida actual e iniciar una nueva.
*/

//-------------------------VARIABLES DE ELEMENTOS DEL DOM-------------------------

const botonPiedra = document.getElementById('piedra');
const botonPapel = document.getElementById('papel');
const botonTijeras = document.getElementById('tijeras');
const botonInicializar = document.getElementById('inicializar');
var imagen_ordenador = document.getElementById('imagen_ordenador');
var imagen_jugador = document.getElementById('imagen_jugador');
var resultado = document.getElementById('resultado');
var texto_jugador = document.getElementById('texto_jugador');
var texto_ordenador = document.getElementById('texto_ordenador');

//-------------------------CREACION JUEGO Y VARIABLES DE "REFERENCIA"-------------------------

var juego = new Juego2();

//Usamos dos variables que simplemente referencien a la propiedad "jugador" y "ordenador", 2 objetos definidos en la clase "Juego2"
var jugador = juego.obtenerJugador();
var ordenador = juego.obtenerOrdenador();
texto_jugador.innerHTML += jugador.obtenerVictorias();
texto_ordenador.innerHTML += ordenador.obtenerVictorias();

//-------------------------FUNCIONALIDAD DE LOS BOTONES-------------------------

botonPiedra.addEventListener('click', () => {
    //Obtener respuesta del jugador y la imagen asociada
    jugador.introducirRespuesta(jugador.obtenerNombre(), botonPiedra.id.toString());
    imagen_jugador.src = "../imagenes/piedra.png";
    //logs
    console.log(jugador.obtenerNombre());
    console.log(jugador.obtenerRespuesta());
    console.log("");
    //Obtener la respuesta del ordenador y su imagen 
    ordenador.introducirRespuesta(ordenador.obtenerNombre());
    juego.elegirImagenOrdenador(imagen_ordenador);
    //Actualizar resultado de la ronda y puntuaciones
    juego.obtenerResultadoRonda(resultado, texto_jugador, texto_ordenador);
    //logs
    console.log(ordenador.obtenerNombre())
    console.log(ordenador.obtenerRespuesta());
    console.log("");
    //Comprueba quién ha ganado el juego (5 victorias )
    juego.comprobarGanador(resultado);
})

botonPapel.addEventListener('click', () => {
    //Obtener respuesta del jugador y la imagen asociada
    jugador.introducirRespuesta(jugador.obtenerNombre(), botonPiedra.id.toString());
    imagen_jugador.src = "../imagenes/papel.png";
    //logs
    console.log(jugador.obtenerNombre());
    console.log(jugador.obtenerRespuesta());
    console.log("");
    //Obtener la respuesta del ordenador y su imagen 
    ordenador.introducirRespuesta(ordenador.obtenerNombre());
    juego.elegirImagenOrdenador(imagen_ordenador);
    //Actualizar resultado de la ronda y puntuaciones
    juego.obtenerResultadoRonda(resultado, texto_jugador, texto_ordenador);
    //logs
    console.log(ordenador.obtenerNombre())
    console.log(ordenador.obtenerRespuesta());
    console.log("");
    //Comprueba quién ha ganado el juego (5 victorias )
    juego.comprobarGanador(resultado);
})

botonTijeras.addEventListener('click', () => {
    //Obtener respuesta del jugador y la imagen asociada
    jugador.introducirRespuesta(jugador.obtenerNombre(), botonPiedra.id.toString());
    imagen_jugador.src = "../imagenes/tijeras.png";
    //logs
    console.log(jugador.obtenerNombre());
    console.log(jugador.obtenerRespuesta());
    console.log("");
    //Obtener la respuesta del ordenador y su imagen 
    ordenador.introducirRespuesta(ordenador.obtenerNombre());
    juego.elegirImagenOrdenador(imagen_ordenador);
    //Actualizar resultado de la ronda y puntuaciones
    juego.obtenerResultadoRonda(resultado, texto_jugador, texto_ordenador);
    //logs
    console.log(ordenador.obtenerNombre())
    console.log(ordenador.obtenerRespuesta());
    console.log("");
    //Comprueba quién ha ganado el juego (5 victorias )
    juego.comprobarGanador(resultado);
})

botonInicializar.addEventListener('click', () => {

})


