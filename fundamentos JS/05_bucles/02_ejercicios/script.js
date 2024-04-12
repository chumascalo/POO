function sumaWhile(){
let contador = 0;
let array = [];
let suma = 0;

while (contador <= 10){
array.push(contador);
contador ++;

}
    suma = array.reduce(function(a, b) {
        return a + b;
    });

    document.getElementById("lista").innerHTML = `array del 1 al 10 <h2>${array}</h2>  el total de la suma es: ${suma}`;
}