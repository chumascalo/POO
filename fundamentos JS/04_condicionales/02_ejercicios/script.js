/*Crea una variable llamada
temperatura que almacene la temperatura
actual en grados Celsius.
Escribe un programa en JavaScript
que muestre un mensaje de acuerdo a
la temperatura:

Si la temperatura es menor a 0, imprime
"Hace frío".
Si la temperatura está entre 0 y 25,
imprime "La temperatura es agradable".
Si la temperatura es mayor o igual a 25,
imprime "Hace calor". Utiliza declaraciones
"if-else" para resolver este problema.*/
console.log("vinculado..")

function temperatura(){
    console.log("funcion..")
let temperatura = "";

let numTemperatura = parseInt(prompt("ingrese la temperatura"));

if (numTemperatura >= 25){ 
    temperatura= `hace calor -  <h2>${numTemperatura}°</h2> ` 
}
else if (numTemperatura < 25 && numTemperatura > 0 ){ 
    
    temperatura = `la temperatura es agradable -  <h2>${numTemperatura}</h2>`
}
else
{ console.log("condicional 3..")
    temperatura = `hace frio -  <h2>${numTemperatura}°</h2>`;
    
}
document.getElementById("lista").innerHTML = temperatura
}

