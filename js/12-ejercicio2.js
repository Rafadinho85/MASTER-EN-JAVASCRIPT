'use strict'
    var num = parseInt (prompt("Ingrese un numero"));
    var suma =  0;
    var promedio = 0;
    var contador = 0;
    while (num>0) {

    console.log(num); 
    suma = suma+num;
    contador++
    num = parseInt (prompt("Ingrese un numero"));
    
}


console.log("fin del ciclo");
console.log("La suma es: " + suma);
console.log("El promedio es: " + (suma/contador));
