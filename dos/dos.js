/* 
Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo.
En primer lugar pregunta de qué figura se quiere calcular el área,
después solicita los datos que necesites para calcularlo.
triángulo = b*h/2
rectángulo = b*h
círculo = π * r2 (pi * radio al cuadrado)
*/
const solucion = document.getElementById("solucion");

let figure = parseInt(prompt("Selecciona la figura de la que desees calcular su área:  Triángulo : 1  Rectángulo: 2  Círculo 3 "));

let area;


if (figure === 1) {
    let base = parseInt(prompt("¿Cuál es la base del Triángulo?"));
    let height = parseInt(prompt("¿Cuál es la altura del Triángulo?"));
    area = (base * height) / 2;
    solucion.textContent = ` El área del triángulo es : ${area}`

}
else if (figure === 2) {
    let base = parseInt(prompt("¿Cuál es la base del Rectángulo?"));
    let height = parseInt(prompt("¿Cuál es la altura del Rectángulo?"));
    area = base * height;
    solucion.textContent = ` El área del rectágulo es : ${area}`
}
else if (figure === 3) {
    let radio = parseInt(prompt("¿Cuál es el radio del Círculo?"));

    area = Math.PI * (Math.pow(radio, 2));
    solucion.textContent = ` El área del círculo es : ${area}`
}
else {
    console.log(prompt('Error Puede que hayas introducido un número mal'));
}
