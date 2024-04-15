/*Ejercicio 6 - Bucles For: Promedio de 5 calificaciones
Desarrolla un programa utilizando un bucle for para permitir ingresar 5 calificaciones y posteriormente mostrar el promedio desde en una página HTML.
*/

function promedio(){
    let array = [];
    let promedio = 0;

    for (let i = 0; i < 5; i++){
    let notas = parseInt(prompt("ingrese sus notas: "))
    array.push(notas)
    promedio += notas;
}
promedio = promedio / 5;
    
    document.getElementById("lista").innerHTML= `el promedio de ${array.join(", ")} es: ${promedio}`;
}
