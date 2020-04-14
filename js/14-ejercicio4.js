'use strict'

var num1 = parseInt (prompt("ingrese primer numero ",0));
var num2 = parseInt (prompt("ingrese segundo numero ",0));

    document.write("<h1> De "+num1+" a "+num2+" estan estos numeros impares:</h1>")
for(var i=num1; i<num2; i++){
    var resultado = i;
    if(resultado%2!=0){
        
        document.write(resultado+"</br>");
    }
  
}