'use strict'

//transformacion de textos

var numero = 444;
var texto1 = "mi mama me mima";
var texto2 = "kathy mi amor kathy mi amor";

//convertir un numero a un string
var dato = numero.toString;
console.log(typeof dato)

//convertir a minusculas
var dato = texto1.toLowerCase();
console.log(dato);

//convertir a mayusculas

var dato = texto1.toUpperCase();
console.log(dato);

//calcular la longitud de un texto

var nombre = "";
//con la propidad length nos sirve para contar cosas. Por ejemplo los caracteres de un string
//o los elementos de un array
console.log(nombre.length);

//nos permite saber cuantos elementos tiene un array
var num = ["uno", "dos"];
console.log(num.length);

//concatenar texto -unir textos

var textoTotal = texto1+" "+texto2;
console.log(textoTotal);

var textoConcat = texto1.concat(" " +texto2);
console.log(textoConcat);

//buscar texto

var buscar = texto1.lastIndexOf("mama")
console.log("buscar posicion");
console.log(buscar);

var buscar2 = texto2.search("kathy");
console.log(buscar2);

var buscar3 = texto2.match("mi");
console.log(buscar3);
//si queremos que nos haga una busqueda global para encontrar 
//todas las concidencias
var expresionregular = texto2.match(/kathy/g);
console.log(expresionregular);

//metodo substr

var busqueda5 = texto2.substr(9,4);
console.log(busqueda5);

//sacar una letra en especifico 

var busqueda6 = texto2.charAt(4)
console.log(busqueda6);

//buscar una palabra y devolver true o false al principio

var busqueda = texto2.startsWith("kathy");
console.log(busqueda);
//buscar al final
var busqueda = texto2.endsWith("amor");
console.log(busqueda);
//buscar la palabra y devolver un true o un false
var busqueda = texto2.includes("Mi");
console.log(busqueda);
