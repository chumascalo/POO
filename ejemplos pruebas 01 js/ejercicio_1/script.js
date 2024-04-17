/* con HTML */
function idNegatvo() {

    let cantNum = parseInt(prompt("ingrese la cantidad de numeros a trabajar: "));
    let array = [];
let original = [];

    for (let i = 0; i < cantNum; i++) {
        let num = parseInt(prompt("ingrese numeros negativos o positivos: "));
        array.push(num);
    original.push(num);
    }

    
    for (let i = 0; i < cantNum; i++) {
        if (array[i] < 0) {
            array[i] = 0;
        }
    }
    document.getElementById("elemento").innerHTML = `arreglo original: <h3>${original}</h3> </br> arreglo modificado: <h3>${array}</h3>`;
}
