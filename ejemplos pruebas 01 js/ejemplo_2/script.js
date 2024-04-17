/* solo script */
function reemplazarNegatvo(arr){

    for (let i = 0; i < cantNum; i++){
    let num = parseInt(prompt("ingrese los numeros"))
    array.push(num)
    }

    for(let i = 0; i < arr.length; i++){
        
        arr[i] = (arr[i]< 0) ? 0 : arr[i];

    }
    return arr;

}
let cantNum = parseInt(prompt("indique la cantida de numeros que ingresara: "));
let array = [];
alert(reemplazarNegatvo(array));