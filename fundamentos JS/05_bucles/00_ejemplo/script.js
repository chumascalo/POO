function decreciendoWhile(){
    let contador = 20;
    let array = [];


    while (contador >= 10 ){
        contador++;
        array.push(contador);
        contador --;
    }
    document.getElementById("lista").innerHTML = `numeros del 20 al 10: ${array}`;
}


function decreciendoWhile(){
    let array = [];

    for (let i = 20; i >= 10; i--){
        array.push(i);
    }
    document.getElementById("lista").innerHTML = `numeros del 20 al 10: ${array}`;
}