'use strict'

/*Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales*/

var num1 = parseInt (prompt("Ingreso un numero"));

var num2 = parseInt (prompt("Ingresa un segundo número"));
while(num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)){
    num1 = parseInt (prompt("Ingreso un numero"));
    num2 = parseInt (prompt("Ingresa un segundo número"));

}
if(num1>num2){
    alert("El" + num1 + "es mayor que " + num2);
    
}if(num1<num2){
    alert("El" + num2 + "es mayor que " + num1);
}else{
    alert("Los dos numeros son iguales");
}






