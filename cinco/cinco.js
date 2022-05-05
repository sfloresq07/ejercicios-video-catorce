/* 
Escriba un programa que pida un número entero mayor que cero y calcule su factorial. 
El factorial es el resulatdo de multiplicar ese número por sus anteriores hasta la unidad.

!5 = 5*4*3*2*1 = 120
*/

/* let num = prompt("Introduzca un número entero mayor que cero")
let resul = 1
if (num < 0) {
    console.log('Error! El factorial de números negativos no existe');

}
else if (num === 0) {
    console.log(`El factorial de ${number} es 1.`);
}

{for (let i = num; i>0; i--){
resul *= i
}
}
    
    console.log(`El factorial de ${num} es ${resul}.`); */



/* let arr = [1,4,4, "lunes", "jueves", "luis", "pedro"]

for ( let i = 0; i<arr.length; i++){
    console.log(`Este items pertenece al array  ${arr[i]}`)
} */

 let num= prompt("Introduzca una cifra de al menos cuatro numeros");

/* function separator(num) {
   let str = num.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{1})+(?!\d))/g, ",");
    return str.join(".");
}s

console.log(separator(num)) 
 */
let arr = num.split("");
console.log(arr); 