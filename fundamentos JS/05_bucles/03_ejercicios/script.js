/* Ejercicio 3 - Bucles While: Primeros 10 números pares.
Crea un programa utilizando un bucle while para almacenar en un arreglo los primeros 10 pares. */

function paresWhile(){
    let array = [];
    let contador = 0;
    let pares = 0;
    while (contador <= 10){
    
        array.push(pares)
        pares += 2;
        contador ++;
    
    

}
document.getElementById("lista").innerHTML = `los primeros 10 numeros pares son <h2>${array}</h2>`
}