'use strict'

//condicional if
//condicional nos permitira comparar dos valores y si sucede que el codigo haga algo

var edad1 = 30;
var edad2 = 12;

//si pasa esto
if(edad1 > edad2){
    //ejecuta esto
    console.log("La edad es mayor que edad2");
    
}else{
    console.log("La edad uno es inferior");
    
}

//operadores logicos 
//AND &&
//OR ||
//NEGACION !

var year = 2018;
if(year != 2016)
{
    console.log("no es 2016");
    
}

//and 
if(year >=2000 && year <=2020){
    console.log("Estamos en la era actual");
    
}else{
    console.log("Estamos en la era post moderna");
    
}

//or
if(year == 2008 || (year >= 2018 && year == 2018)){
    console.log("El año acaba en 8");
    
}else{
    console.log("año no registrado");
    
}