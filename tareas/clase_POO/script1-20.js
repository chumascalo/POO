



/*12. Sumar los N primeros pares. 
*/















/* 13. Sumar N números impares.
function numPares(){
    array=[];
    let suma = 0;
    let n = prompt("cuantos numeros impares sumara: ")
    for (let i = 1; i <= n * 2 ; i += 2){
    array.push(i)
        suma += i
}
console.log(`la suma de ${n} numeros impares es: ${array.join(", ")} = ${suma}`)
}

numPares()
*/






/* 11. Sumar N números pares. 


function numPares(){
    array=[];
    let suma = 0;
    let n = prompt("cuantos numeros pares sumara: ")
    for (let i = 2; i <= n * 2 ; i += 2){
    array.push(i)
        suma += i
}
console.log(`la suma de ${n} numeros pares es: ${array.join(", ")} = ${suma}`)
}

numPares()

*/



/*10. Leer 2 números y solicitar al usuario que ingrese la opción de sumarlos,
restarlos, multiplicarlos y dividirlos según elija quien ingresa.


function srmd(){
    let num1 = parseInt(prompt("ingrese el numero 1: "))
    let num2 = parseInt(prompt("ingrese el numero 2: "))
    let operacion = prompt("que operacion desea realizar? suma/resta/multiplicacion/division") ; 
    

    if (operacion == "suma"){
        resultado = num1 + num2
        console.log(`su eleccion ${operacion}`)
        console.log(`${num1} + ${num2} = ${resultado} `)
    }
    else if( operacion == "resta"){
        resultado = num1 - num2
        console.log(`su eleccion ${operacion}`)
        console.log(`${num1} - ${num2} = ${resultado} `)
    }
    else if (operacion == "multiplicacion"){
        resultado = num1 * num2
        console.log(`su eleccion ${operacion}`)
        console.log(`${num1} * ${num2} = ${resultado} `)

    }
    else if (operacion == "division"){
        resultado = num1 / num2
        console.log(`su eleccion: ${operacion}`)
        console.log(`${num1} / ${num2} = ${resultado} `)
    }
    else{
        console.log("ingrese un valor valido")
    }
};

srmd()

*/


/* 9. Modificar el anterior para que permita sumar N números. El valor de N
se debe leer previamente por teclado.

function sumaNum(){
    let suma = 0;
    let array = [];
    let n = parseInt(prompt("ingrese la cantidad de numeros que ingresara: "));
        for ( let i = 0; i < n; i++ ){
            let num = parseInt(prompt("ingrese un numero: "));
            array.push(num)
            suma += num;
        };
        console.log(`numeros ingresados ${n}`)
        console.log(`${array.join(" + ")} = ${suma} `)
    };
    
    sumaNum();
    
*/




/* 8. Sumar 5 números leídos por teclado 


function sumaNum(){
let suma = 0;
let array = [];
    for ( let i = 0; i < 5;i++ ){
        let num = parseInt(prompt("ingrese un numero: "));
        array.push(num)
        suma += num;
    };
    console.log(`${array.join(" + ")} = ${suma} `)
};

sumaNum();


*/




/* 7. Escribir los 100 primeros números impares. 


function numImpares(){
    let array = [];
    for (let i = 1; i <= 200; i += 2) {
        array.push(i);
    }
    console.log(array);
}

numImpares();


*/



/* 6. Escribir los 100 primeros números pares.



function numPares(){
    array=[];
    for (let i = 2; i <= 200; i += 2){
    array.push(i)
}
console.log(array)
}

numPares()
*/



/*  5. Calcular la suma de los N primeros números naturales. (N es ingresado
    por el usuario)

function calcularSumaNaturales() {
        let N = parseInt(prompt('Ingrese el valor de N:'), 10); // Convertir la entrada a número entero
        let suma = 0;
    
        for (let i = 1; i <= N; i++) {
            suma += i;
        }
    
        console.log(`La suma de los primeros ${N} números naturales es: ${suma}`);
    }
    
    calcularSumaNaturales();

*/






/* 4. Leer 5 números, calcular su promedio e imprimir el resultado.

function calcularPromedio() {
    let suma = 0;
    for (let i = 0; i < 5; i++) {
        let num = parseFloat(prompt('Ingrese un número:'));
        suma += num;
    }
    let promedio = suma / 5;
    console.log(`El promedio es: ${promedio}`);
}

calcularPromedio();
*/








/* 3. Leer 2 números y deducir si están en orden creciente o decreciente.

let num1 = prompt("ingrese un numero: ")
let num2 = prompt("ingrese un segundo numero: ")

function deducirOrden(num1, num2){

if (num1 < num2){
    console.log(`el orden es creciente ${num1}, ${num2}`)
}
else if( num1> num2){
    console.log(`el orden es decreciente  ${num1}, ${num2}`)
}
else{
    console.log(`los numeros son iguales`)
}
};
deducirOrden(num1, num2)
*/





/*2. Leer un número, dividirlo en 3 partes, sumar 10 y multiplicarlo por 2,
luego mostrar el resultado (por pantalla y por impresora)

num = prompt("ingrese un numero: ");

function opNum(num){
resultado = (num / 3 + 10) * 2
console.log(`al usar ${num} da como resultado: ${resultado}`)
};

opNum(num)
*/






/* 1. Leer los datos de una persona (Nombre, apellidos, edad) y mostrarlos a
través de una impresión. 





let nombre = prompt("escribir un nombre: ")
let apellido = prompt("esribir un apellido: ")
let edad = prompt("escribe tu edad")



function mostrarDatos(nombre, apellido, edad){
console.log(`el nombre completo es: ${nombre} ${apellido} `)
console.log(`edad: ${edad}`)
};

mostrarDatos(nombre, apellido, edad)

*/



























/* function nombreAE() {


    let nombre = document.getElementById("name").value;
    let apellido = document.getElementById("Apellidos").value;
    let edad = document.getElementById("edad").value;

    if (nombre !== "" && apellido !== "" && edad !== "") {
        let datos = {
            nombre: nombre,
            apellido: apellido,
            edad: edad
        };

        let li = document.createElement("li");
        li.textContent = `Nombre: ${datos.nombre}, Apellido: ${datos.apellido}, Edad: ${datos.edad}`;
        document.getElementById("datos").appendChild(li);
    }
    document.getElementById("name").value = "";
    document.getElementById("Apellidos").value = "";
    document.getElementById("edad").value = "";
} */