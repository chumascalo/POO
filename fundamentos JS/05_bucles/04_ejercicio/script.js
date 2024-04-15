/* Ejercicio 4 - Bucles For: Ingresar 5 números y verificar cuál es el número mayor.
Escribe un programa que utilice un bucle for para mostrar el número mayor en una página HTML. */

function numMayor(){

let arrayNum = [];
let mayor = 0;

for (let i = 0; i < 5; i++){
let num = parseInt(prompt("ingrese un numero para determinar mayor "))
arrayNum.push(num);

// if (mayor < num) mayor = num;
mayor = (mayor < num) ? num : mayor;

}


document.getElementById("lista").innerHTML = `el mayor entre ${arrayNum.join(", " )} es: <h2>${mayor}</h2> `

}