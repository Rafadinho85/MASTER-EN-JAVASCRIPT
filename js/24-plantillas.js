'use strict'

//plantillas de texto

var nombre = prompt("mete tu nombre");
var apellido = prompt("mete tu apellido");

//forma tradicional
var texto ="Mi nombre es: "+nombre+" <br/> Mis apellidos son: "+apellido
document.write(texto);

var plantillas = `
<h1>Hola que tal <h1/>
<h3>Mi nombre es: ${nombre}<h3/>
<h3>Mi apellido es: ${apellido}<h3/>
`
document.write(plantillas);