function traerTabla(){
    let num = parseInt(document.getElementById("inputText").value);
    let string = ``;

    for (let i = 1; i <= 10; i++){
    string += `${i} * ${num} = ${ i*num}<br>`

}
document.getElementById("tabla").innerHTML = `tabla del ${num} <br>${string}`;
}