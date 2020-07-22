/** 
 * 1. Pida 6 numeros por pantalla y los meta en un array
 * 2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
 * 3. ordenarlo y mostrarlo
 * 4. Invertir su orden y mostrarlo
 * 5. Mostrar cuantos elementos tiene el array
 * 6. busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
 * (se valorara el uso de funciones)
 * 
*/

function mostrarArray(elementos, textoCustem = "") {
    document.write("<h1>Contenido de un array" + textoCustem + "</h1>");
    document.write("<ul>")
    //utilizando el metodo .forEach 
    elementos.forEach((elemento, index) => {
        document.write("<li>" + elemento + "</li>")
    });
    document.write("</ul>")
}

//pedir 6  numeros
//var numeros = new Array(6);
var numeros = [];

for (var i = 0; i <= 5; i++) {
    //numeros[i] = parseInt(prompt("Introduce un numero", 0));
    numeros.push(parseInt(prompt("inserta un numero", 0)));
}
//mostrar en el cuerpo de la pagina
mostrarArray(numeros);

//mostrar array por la consola 
console.log(numeros)

//ORDENAR Y MOSTRARLO

numeros.sort();