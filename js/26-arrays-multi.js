'use strict'

var categorias = ['Accion', 'Terror', 'Romance'];
var peliculas = ['Advengers','la maldicion', 'la vida es bella'];

var cine = [categorias, peliculas]
//console.log(cine);
//console.log(cine[0][2]);
//console.log(cine[1][1]);

//operaciones con array

var elemento ="";
while(elemento != "ACABAR"){

    var elemento = prompt("Agregue una pelicula");
    peliculas.push(elemento);
}
//eliminar elementos con pop

peliculas.pop();
peliculas.pop();

console.log(peliculas);

//obtener posicion con idexOf SI APARECE MENOS -1 es porque no encontro el elemento
/*
var indice = peliculas.indexOf('la maldicion');
console.log(indice);
if(indice > -1){
    peliculas.splice(indice,2);
}
console.log(peliculas);
*/
//convertir un array a texto separado por comas

var pelicula_string = peliculas.join();
console.log(pelicula_string);


//convertir un string en un array

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(",");
console.log(cadena_array);
