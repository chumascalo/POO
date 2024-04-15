/*
Ejercicio 5 - Bucles For: Encontrar los N primeros números pares 
Realiza un programa que emplee un bucle for para encontrar los N primeros números pares, en donde N es ingresado por el usuario. Muestra este resultado en una página HTML.
 */



function numPares(){
let array = [];
let cantPares = parseInt(prompt("ingrese la cantidad de numeros pares que quieres ver: "));

for (let i = 1; i <= cantPares; i ++){
    array.push(i*2);

}
document.getElementById("lista").innerHTML = `<h4>los ${cantPares} primeros pares son:</h4> <h2>${array.join(", ")}</h2> `;
}