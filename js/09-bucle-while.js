'use strict'
//bucle while

var year = 2018;

while(year != 1991){
    //ejecuta esto
    console.log("Estamos en el año: "+ year);
 
    if(year == 2000){
        break;
    }
    year--;
}

//do while nos permite ejecutar un bloque de instrucciones y despues evaluar la condicion
var years = 20;

do {
    alert("solo cuando sea diferente a 20");
    years = 20;
}while(years!=20)

