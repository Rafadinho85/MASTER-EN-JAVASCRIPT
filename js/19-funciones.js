'use strict'

//funciones
//una funcion es una agrupacion reutilizable de un conjunto de instrucciones

//defino la funcion

function calculadora(num1, num2, mostrar=false){
    //conjunto de instrucciones a ejectar
    if(mostrar==false){
    
        console.log("Suma: " + (num1+num2));
        console.log("Resta: " + (num1-num2));
        console.log("Division: " + (num1/num2));
        console.log("Multi: " + (num1*num2));
        
    }else{
       document.write("Suma: " + (num1+num2)+"<br>");
       document.write("Resta: " + (num1-num2)+"<br>");
       document.write("Division: " + (num1/num2)+"<br>");
       document.write("Multi: " + (num1*num2)+"<br>");
    
    }
    
}
//invocar o llamar a la funcion
calculadora(8, 5);
calculadora(888, 555,true);

//parametros opcionales

