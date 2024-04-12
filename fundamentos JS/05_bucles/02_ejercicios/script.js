function sumaWhile(){
let contador = 1;
let sumastr = "";
let suma = 0;

while (contador <= 10){
suma += contador;
sumastr += contador + "+";
contador ++;
}

    document.getElementById("lista").innerHTML = ` <h2>${sumastr} = ${suma}</h2> `;
}