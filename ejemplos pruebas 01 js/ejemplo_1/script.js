/* Recibir un arreglo numerico con numeros negativos y positivos.
todos los valores negativos reemplazarlos por 0 */


function noNegativo(arr){
    for (let i = 0; i < arr.length; i++){
        arr[i] = (arr[i] < 0) ? 0 : arr[i];
    }      
    return arr;
};
let array =[-2,5,-6,10];
alert( noNegativo(array));