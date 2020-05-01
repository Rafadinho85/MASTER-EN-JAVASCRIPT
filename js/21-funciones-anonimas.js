'use strict'
//funciones anonimas es una funcion que no tiene un nombre y que se puede guardar en una variable
//se utilza para hacer callback que es una funcion que se pasa a otra funcion como un argumento que luego
//se invoca dentro de la funcion externa para completar algún tipo de rutina o acción.

function sumame (num1, num2, sumaYmuestra, sumaPorDos){
    var suma = num1 + num2;
    sumaYmuestra(suma);
    sumaPorDos(suma);


}

sumame(5,7, dato => {
    console.log("La suma es: ", dato);
},
dato => {
    console.log("La suma por dos es: ",(dato*2));

})