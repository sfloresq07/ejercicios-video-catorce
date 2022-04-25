/* Solicita un nombre, la edad y muestra por consola el mensaje "Hola_________, tienes ___________ años y el año que viene tendrás _______ años"
Realiza el ejercicio con promt (mensaje) y haz uso de los template strings */
const solucion = document.getElementById("solucion");

let n = prompt("Introduce tu nombre");
console.log(n);
let a = prompt("Introduce tu edad");
console.log(a);

solucion.textContent = `Hola ${n}, tienes ${a} años y el año que viene tendrás ${parseInt(a)+1} años.`