/* 
Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo.
En primer lugar pregunta de qué figura se quiere calcular el área,
después solicita los datos que necesites para calcularlo.
triángulo = b*h/2
rectángulo = b*h
círculo = π * r2 (pi * radio al cuadrado)
*/

const solucion = document.getElementById("solucion");

/* et triangulo = 1;
let rectangulo = 2;
let circulo = 3; */

let figure = prompt(`Selecciona la figura del área que deseas calcular: 1. triángulo 2. rectángulo  3 .círculo`);

switch(figure)
{
    case triangulo: 
    let base = prompt("Introduce la base del triángulo");
    let height = prompt("Introduce la altura del triángulo");
    
    let areat = base*height/2;
solucion.textContent = `El área del triángulo es:  ${areat}`
    break;


}