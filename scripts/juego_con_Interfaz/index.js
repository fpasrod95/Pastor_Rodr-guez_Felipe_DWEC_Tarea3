const botonPiedra=document.getElementById('piedra');
const botonPapel=document.getElementById('papel');
const botonTijeras=document.getElementById('tijeras');
const botonInicializar=document.getElementById('inicializar');
var resultado=document.getElementById('resultado');

var juego= new Juego();
var jugador=new Jugador("Jugador");
var ordenador= new Jugador("Ordenador");

botonPiedra.addEventListener('click' , () => {
    jugador.introducirRespuesta(jugador.obtenerNombre(),botonPiedra.id.toString());
    console.log(jugador.obtenerNombre());
    console.log(jugador.obtenerRespuesta());
    ordenador.introducirRespuesta(ordenador.obtenerNombre(),botonPiedra.name);
    console.log(ordenador.obtenerNombre())
    console.log(ordenador.obtenerRespuesta());
})

botonPapel.addEventListener('click' , () => {
    jugador.introducirRespuesta(jugador.obtenerNombre(),botonPapel.id.toString());
    console.log(jugador.obtenerNombre());
    console.log(jugador.obtenerRespuesta());
    ordenador.introducirRespuesta(ordenador.obtenerNombre(),botonPapel.name);
    console.log(ordenador.obtenerNombre())
    console.log(ordenador.obtenerRespuesta());
})

botonTijeras.addEventListener('click' , () => {
    jugador.introducirRespuesta(jugador.obtenerNombre(),botonTijeras.id.toString());
    console.log(jugador.obtenerNombre());
    console.log(jugador.obtenerRespuesta());
    ordenador.introducirRespuesta(ordenador.obtenerNombre(),botonTijeras.name);
    console.log(ordenador.obtenerNombre())
    console.log(ordenador.obtenerRespuesta());
})

botonInicializar.addEventListener('click' , () => {
    
})