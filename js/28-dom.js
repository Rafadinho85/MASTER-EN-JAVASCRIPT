'use strict'
//conseguir elementos mediante el ID
//DOM -DOCUMENT OBJECT MODEL

function cambiarColor(color){
    caja.style.background = color;
}
//seleccionar elementos
var caja = document.getElementById("micaja");
var caja2 = document.querySelector("#micaja2");
//modicar elementos


//queryselector


//SELECIONAR VARIOS ELEMENTOS POR TAG

var todoslosDivs = document.getElementsByTagName('div');
console.log(todoslosDivs);