/* Crea una función en JavaScript que reciba un array de números y devuelva el número mayor de ese array. La
función debe usar un bucle for para recorrer el array y encontrar el número más grande. */

function encontrarMayorYmenor(array) {
    let mayor = array[0];
    let menor = array[0];
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
        if (array[i] < menor) {
            menor = array[i];
        }
    }

    let resultado = `mayor: ${mayor}  menor: ${menor}`;
    return resultado;
}

alert(encontrarMayorYmenor([2, 3, 4, 2, 2, 323, 545, 2, 4]));