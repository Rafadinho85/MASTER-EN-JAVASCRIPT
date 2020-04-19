'use strict'

//funciones
//una funcion es una agrupacion reutilizable de un conjunto de instrucciones

//defino la funcion

function porpantalla (num1,num2){
    console.log("Suma: " + (num1+num2));
    console.log("Resta: " + (num1-num2));
    console.log("Division: " + (num1/num2));
    console.log("Multi: " + (num1*num2));
    
}
function porconsola (num1, num2){
    document.write("Suma: " + (num1+num2)+"<br>");
    document.write("Resta: " + (num1-num2)+"<br>");
    document.write("Division: " + (num1/num2)+"<br>");
    document.write("Multi: " + (num1*num2)+"<br>");
}


function calculadora(num1, num2, mostrar=false){
    //conjunto de instrucciones a ejectar
    if(mostrar==false){
    porconsola(num1, num2);
     
    }else{
     porpantalla(num1, num2);
    
    }
    
}
//invocar o llamar a la funcion
calculadora(8, 5, true);
calculadora(888, 555);

//parametros opcionales

