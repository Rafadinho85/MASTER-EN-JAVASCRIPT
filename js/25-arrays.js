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
document.write("<h1>Lenguajes</h1>");
document.write("<ul>")
for(var i=0; i<=lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");

}
document.write("</ul>")
