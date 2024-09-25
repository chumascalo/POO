let n = parseInt(prompt("cuantos multiplos de 3 quiere sumar: "));
function nMultiplos(n){
    let suma = 0;
    let array = [];
    let multiplos = 0;
    for (let i = 0; i < n; i++){
        multiplos += 3;
        suma += multiplos;
        array.push(multiplos);
    }
    return (` ${array.join(" + ")} = ${suma}`);
};
console.log(nMultiplos(n));