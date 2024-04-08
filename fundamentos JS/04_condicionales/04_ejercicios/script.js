// Problema 4: Crea una variable llamada numero que
// almacene un número. Escribe un programa en JavaScript
// que determine si el número es positivo, negativo o igual
// a cero. Imprime el resultado en la consola. Utiliza
// una declaración "if-else if-else" para resolver este
// problema

function positivoNegativo(){
    numero = parseInt(prompt("ingrese un numero"))
    resultado = ""

    if (numero < 0 ){
    resultado = `<h2>${numero}</h2> es negativo`
    }
    else if (numero > 0){
        resultado = `<h2>${numero}</h2> es positivo`
    }
    else{
        resultado = `el numero es <h2>${numero}</h2>`
    }
    document.getElementById("lista").innerHTML = resultado
} 