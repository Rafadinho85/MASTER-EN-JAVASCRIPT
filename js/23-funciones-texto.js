'use strict'

//transformacion de textos

var numero = 444;
var texto1 = "mi mama me mima";
var texto2 = "kathy mi amor";

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


