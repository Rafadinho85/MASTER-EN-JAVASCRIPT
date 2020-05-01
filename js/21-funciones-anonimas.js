'use strict'
//funciones anonimas es una funcion que no tiene un nombre y que se puede guardar en una variable
//se utilza para hacer calvas una funcion que se ejectua en otra funcion.

function sumame (num1, num2, sumaYmuestra, sumaPorDos){
    var suma = num1 + num2;
    sumaYmuestra(suma);
    sumaPorDos(suma);


}

sumame(5,7, function(dato){
    console.log("La suma es: ", dato);
},
function(dato){
    console.log("La suma por dos es: ",(dato*2));

})