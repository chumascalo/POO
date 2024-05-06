function traerTabla(){
    let num = parseInt(document.getElementById("inputText").value);
    let string = ``;

    for (let i = 1; i <= 10; i++){
    string += `${i} * ${num} = ${ i*num}<br>`;
    }

document.getElementById("tabla").innerHTML = `tabla del ${num} <br>${string}`;
}


function invertirTabla(){
let stringInv = "";
let cadena = document.getElementById("cadenaInput").value;
for (i = cadena.length -1  ; i >= 0; i--){
    stringInv += cadena[i]; 

}
document.getElementById("cadenaInvertida").innerHTML = `${stringInv} `;
}