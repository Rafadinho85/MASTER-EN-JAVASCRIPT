'use strict'
//switch

var edad = 40;
var imprime = ""
switch(edad){
    case 18:
        imprime = "Acaba de cumplir la mayoria de edad";
    break;
    case 25:
        imprime = "ya eres un adulto";
    break;
    case 40:
        imprime = "crisis de los cuarenta";
    break;
    case 75:
        imprime = "Eres ya un anciano";
    break;
    default:
        imprime = "Tu edad es neutra";
    break;
}
console.log(imprime);