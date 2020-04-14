'use strict'


do{
    
    var numero = parseInt (prompt("ingresa un numero ", 0));
}while (numero<=0|| isNaN(numero) )

    if(numero%2==0){
        console.log("El numero "+numero+ " es par");
        
    }
    else if(numero%2==1){
        console.log("El numero " + numero + " es impar");
        
    }
    console.log("fin");
    