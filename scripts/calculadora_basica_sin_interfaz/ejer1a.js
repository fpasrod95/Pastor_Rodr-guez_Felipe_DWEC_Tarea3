//import { Calculadora } from './calculadora.js';      NO usado finalmente

/* Cuando creamos un objeto de tipo Calculadora, estamos ya lanzando o encendiendo la calculadora, introduciendo los valores de
los 2 números y el operador*/

do {
    var calculadora = new Calculadora();
    //Con los datos asignados y comprobada su correcta introducción, obtenemos en la consola el resultado de la operación
    calculadora.obtenerResultado();
    //Decidimos si seguir operando o queremos apagar la calculadora
} while (calculadora.seguirOperando())





