'use strict'

//arrays, arreglo, matrices

//variable normal
var nombre = "Jery"

//array
var nombres = ["Jery", "Rafael", "Helen", "Dulce", 24, 27, false];

//objeto array
var lenguajes = new Array("php", "java", "javascript");

document.write(nombres)
console.log(nombres);
//sacar un elemento de un array

console.log(lenguajes.length)
/*var elemento = parseInt(prompt("Di un numero ",0));

//si elemento es igual o menor que tamaño del array nombres
if(elemento >= nombres.length){
    
    alert("introduce el numero correcto menor que "+nombres.length)
}else{
    
    alert("El usuario seleccionado es "+nombres[elemento]);
}
*/
//recorriendo un array de forma tradicional
document.write("<h1>Lenguajes</h1>");
document.write("<ul>")
for(var i=0; i< lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");

}
document.write("</ul>");
document.write("<ul>");

//recorrer un array con forEach
//                  elementos, posicion que ocupa en el array, y nos muestra el arreglo completo
lenguajes.forEach((elemento, indice, arr)=>{
    console.log(arr);
    document.write("<li>"+indice+"-"+elemento+"</li>");
});

//otra forma de recorrer un array
document.write("<h1>Otra forma</h1>")
for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}

document.write("</ul>");


//busquedas

var busqueda1 = lenguajes.find(function(lenguaje){
    return lenguaje == "java";
});
console.log("resultado");

console.log(busqueda1);

//otra forma mas reducida de buscar

var busqueda2 = lenguajes.find(lenguaje => lenguaje == "php");

console.log(busqueda2);
//sacar el indice en que se encuentra

var busqueda3 = lenguajes.findIndex(lenguaje => lenguaje == "java");
console.log(busqueda3);

//metodo some nos permite ver si los numeros cumplen una condicion en concreto en un array exis

var precios = [10, 20, 50, 80, 21];

var busqueda = precios.some(precio =>precio >=20);
console.log(busqueda);
