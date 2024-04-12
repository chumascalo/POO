/* Ejercicio 4 - Bucles For: Ingresar 5 números y verificar cuál es el número mayor.
Escribe un programa que utilice un bucle for para mostrar el número mayor en una página HTML. */

function numMayor(){

let array = [1,7,21,8,1];
let mayor = array[0];

for (let i = 1; i < array.length; i++){

    if (array[i] > mayor){
        mayor = array[i];
    }
}

document.getElementById("lista").innerHTML = `el mayor entre ${array} es: ${mayor} `

}