function sumaArreglo(){
    let array = [];
    let limite = parseInt(prompt("ingrese cuantos numeros ingresara: "))
    let suma = 0;

    for (let i = 0; i < limite; i++){
        let num = parseInt(prompt("ingrese los numeros: "))
        array.push(num)
        suma += num
    }

document.getElementById("elemento").innerHTML = `su array es: ${array.join(" + ")} la suma es : ${suma}`
}