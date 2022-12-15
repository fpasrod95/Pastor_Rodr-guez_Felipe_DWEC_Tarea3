const botonNumeros = document.getElementsByName('numeros');
const botonOperadores = document.getElementsByName('operadores');
const botonIgual = document.getElementsByName('igual')[0];
const botonLimpiar = document.getElementsByName('limpiar')[0];
const botonSigno = document.getElementsByName('signo')[0];
var resultado = document.getElementById('resultado');

var calculadora1 = new Calculadora();

botonNumeros.forEach(function (boton) {
    boton.addEventListener('click', function () {
        calculadora1.agregarNumero(boton.innerText);
        calculadora1.actualizarPantalla(resultado);
        //calculadora1.mostrarN1();
    })
})

botonOperadores.forEach(function (boton) {
    boton.addEventListener('click', function () {
        console.log(calculadora1);
        calculadora1.agregarOp(boton.innerText,resultado);
        //calculadora1.obtenerOperacion(resultado);
        //calculadora1.mostrarOp();
    })
})


botonIgual.addEventListener('click', function () {
    calculadora1.calcular();
    calculadora1.actualizarPantalla(resultado);
})



botonLimpiar.addEventListener('click', function () {
    calculadora1.limpiar();
    calculadora1.actualizarPantalla(resultado);
})
