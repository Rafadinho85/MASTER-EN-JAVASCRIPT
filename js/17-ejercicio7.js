'use strict'

//tabla de multiplicar de un numero introducido por pantalla 

var numero = parseInt (prompt("Hola dame un numero ",0));4

document.write("<h1>Tabla del numero"+numero+"</h1>")
for (var i=1; i<=10; i++){
    var multiplicar = numero*i;
    document.write(i + "x" + numero + "=" + multiplicar + "<br>");

}

document.write("<h1>Todas las tablas</h1>")

for(var i = 1; i<=10; i++){

    document.write("<h1> Tabla del "+i+"</h1>");
   
    for(var a = 1; a<=10; a++){
       
       document.write(i + "x" + a + "=" + (i*a)+"<br>");
   }

}