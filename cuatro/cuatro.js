/* 
Escriba un programa que pida un número entero mayor que 1 y que escriba si el número es primo o no.

    Un número primo es aquel que solo es divisible por sí mismo y la unidad.
*/

let num = parseInt(
  prompt("Ingrese un número entero mayor que uno, para determinar si es primo")
);
/* 
if (num <= 1) {
  console.log(`El número debe ser mayor que uno`);
} else {
  if (num % 2 === 0) {
    console.log(`${num} no es primo`);
  } else {
    console.log(`${num} es primo`);
  }
} */


/* if (num <= 1) {
    console.log(`El número debe ser mayor que uno`);
}else{
    (num % 2 === 0) ? console.log(`${num} no es primo`) : console.log(`${num} es primo`)
} */

if(num <= 1) {
    console.log('el número ingresado debe ser un natural mayor a 1')
} else {

    if(num === 2) {
        console.log(`${num} es un número primo`)
    } else {

        if(num % 2 === 0){
            console.log(`${num} es un número primo`)
        }else {

            console.log(`${num} no es un número primo`)
        }
    }

} 
