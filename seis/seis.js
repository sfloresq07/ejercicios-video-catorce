/* 
Escribe un programa que permita ir introduciendo una serie indetermianda de números, mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el valor de cuantos números  se ha introducido.
*/

let suma=0
let cont=0

while(suma<=50){
    suma += parseInt(prompt("Introduce un número para sumar"))
    cont++
}
console.log(`La suma total es de: ${suma}`)
console.log(`El total de los números introducidos es: ${cont}`)

