/*Problema 5: Supongamos que tienes una variable puntuación
que almacena la puntuación de un juego. Escribe un
programa en JavaScript que determine el rango de
la puntuación:

Si la puntuación es igual o mayor a 90, imprime "Excelente".
Si la puntuación está entre 70 y 89, imprime "Buen trabajo".
Si la puntuación es menor a 70, imprime "Necesitas mejorar".
Utiliza declaraciones "if-else" para resolver este problema.*/


function puntuacion(){

    let puntuacion = parseInt(prompt("ingrese su puntuacion"))
    let resultado = ""
    if ( puntuacion <= 89 && puntuacion >= 70 ){
        resultado = `<h2>! buen trabajo ¡</h2> su puntuacion es: <h2>${puntuacion}</h2>`
    }
    else if( puntuacion >= 90){
        resultado = `<h2>! excelente ¡</h2> su puntuacion es: <h2>${puntuacion}</h2>`
    }
    else{
        resultado = `<h2>! necesitas mejorar ¡</h2> su puntuacion es: <h2>${puntuacion}</h2>`
    }
    document.getElementById("lista").innerHTML = resultado
}