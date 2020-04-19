'use strict'


var num1 = parseInt (prompt("Ingresa primer numero"));
var num2 = parseInt (prompt("Ingresa segundo numero"));

while(num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)){

 
        num1 = parseInt (prompt("Ingresa primer numero"));
        num2 = parseInt (prompt("Ingresa segundo numero"));
  
}
var suma = num1 + num2;
var resta = num1 - num2;
var multi = num1 * num2;
var div = num1 / num2;

alert("la suma es: " + suma)
alert("la resta es: " + resta)
alert("la multiplicacion es: " + multi)
alert("la division es: " + div)

document.write("<h1>Bien hecho</h1>")