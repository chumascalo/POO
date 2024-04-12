/*Ejercicio 1 - Bucles While: Números creciendo de 5 en 5 desde 0 a 100 
*/




function bucleWhile(){
let contador = 0;
let array = [];

while (contador <= 100 ){
    array.push(contador);
    contador  += 5;
}
    document.getElementById("lista").innerHTML = `Números creciendo de 5 en 5 desde 0 a 100: <h2>${array}</h2>`;
}