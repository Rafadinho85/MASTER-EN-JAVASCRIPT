'use strict'

//parametros rest y spread

function listadoFrutas (fruta1, fruta2, ...frutas){
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(frutas);
    

}
var frutas = ["banano", "sandia"]
listadoFrutas(...frutas,"naranja", "manzana", "pera", "mandarina");