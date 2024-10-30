
/*21. Ingresar N valores e imprimir solo los pares.
EJ: Ingreso→ 2,20,45,6,9,1. Imprime: 2, 20, 6


function identificarPar(valores) {
    let pares = [];
    for (const valor of valores) {
        if (valor % 2 === 0) {
            pares.push(valor);
        }
    }
    return pares;
}

let input = prompt("Ingrese los valores, separados por comas: ");
let valoresArray = input.split(',').map(Number);

console.log(identificarPar(valoresArray));
*/

/* 20. Contador de caracteres: Escribe una función que reciba como
parámetro una cadena de texto y que retorne un objeto con la cantidad
de veces que aparece cada carácter en la cadena. 



let cadenaTexto = prompt("Ingrese una cadena de texto");

function contarCaracteres(cadena) {
    const conteo = {}; 

    for (const caracter of cadena) {
        
        if (conteo[caracter]) {
            conteo[caracter]++;
        } else {
            conteo[caracter] = 1;
        }
    }

    return conteo;
}
resultado = contarCaracteres(cadenaTexto);
console.log(`palabra: ${cadenaTexto}`);
console.log(contarCaracteres(cadenaTexto));

*/















/*19. Impresión de números primos: Escribe un algoritmo que permita
imprimir todos los números primos menores o iguales a un número
dado.





let n = parseInt(prompt("Ingrese cuántos números primos quiere"));
let array = [];

function esPrimo(num){
    for (let i = 2 ; i < num; i++){
if (num <= 1){return false;
}
if (num % i === 0){return false;
}
return true;
}};


function numPrimos(n){
    let contador = 0;
    let num = 2;
    while (contador < n){
        if (esPrimo(num)){
            
        array.push(num)
        contador++;
    };
    num++;
};
return array;
};
let resultado = numPrimos(n);
console.log(`los ${n} numeros primos son: `)
console.log(resultado)

*/
















/*18. Búsqueda de la palabra más larga en una frase: Escribe un algoritmo
que permita buscar la palabra más larga en una frase dada.



let frase = prompt("ingrese una frase");
function palabraMasLarga(frase) {
    const palabras = frase.split(' ');
    
    let palabraLarga = '';
    
    for (const palabra of palabras) {

        if (palabra.length > palabraLarga.length) {

            palabraLarga = palabra;
        }
    }
    
    return palabraLarga;
}

console.log("La palabra más larga es:", palabraMasLarga(frase));


*/













/*17. Conversión de grados Celsius a Fahrenheit: Escribe un algoritmo que
permita convertir una temperatura en grados Celsius a Fahrenheit.
formula: 
(0 °C × 9/5) + 32 = 32 °F


function conversionGrado(celsius){
    return (celsius * 9/5) + 32;
    }   

const celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));
const fahrenheit = conversionGrado(celsius);

console.log(`${celsius}°C es igual a ${fahrenheit}°F.`);

 */














/*16. Hacer el diagrama de flujo para calcular el factorial de N
(N!=1·2·3·...·N).


function calFactorial(){
    let n = parseInt(prompt("ingrese a que numero desea calcular su factorial"));
    let array = []
    let suma = 1;
for (let i = 1;i <= n; i++){
    array.push(i)
    suma *= i;
    
}
console.log(`el factorial de ${n} es:`)
console.log(`${array.join(" * ")} = ${suma}`);
}

calFactorial();

*/

/*15. Sumar los N primeros múltiplos de 3.

let n = prompt("¿Cuántos múltiplos de 3 desea sumar?");
function sumarMultiplos(n) {
    let array = [];
    let suma = 0;
    for(let i = 1; i <= n; i++) {
        array.push(i * 3);
        suma += i * 3;
    }
    
    console.log(`has sumado ${n} multiplos de 3`)
    console.log(`La suma de ${array} = ${suma}`);
};
sumarMultiplos(n);

*/

/*14. Sumar los N primeros impares.
let array = [];
function sumarNPares(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
    array.push(2* i + 1);
        suma += 2 * i + 1; 
    }
    return suma;
}

let n = parseInt(prompt("Ingrese la cantidad de números impares que quiere sumar: "));
let resultado = sumarNPares(n);
console.log(`la cantidad de numeros impares que quiere sumar es: ${n}`)
console.log(`la suma de ${array.join(", ")} = ${resultado}`);

*/



/* 13. Sumar N números impares.

let n =  parseInt(prompt("indicar cantidad de numeros a ingresar: "))
function sumarImpares(limite){
    let suma = 0;
    array=[];
    for (let i = 1; i<= limite; i++){
        let input = parseInt(prompt(`ingrese ${i} par: `))
    array.push(input);
    }
    for (let i = 0; i < array.length; i++){
        if(array[i] % 2 ==! 0){
            suma += array[i];
        }
    }
    return suma;
}
console.log(`resultado de suma pares es: ${sumarImpares(n)}`);



.....
function numImpares(){
    array=[];
    let suma = 0;
    let n = prompt("cuantos numeros impares sumara: ")
    for (let i = 1; i <= n * 2 ; i += 2){
    array.push(i)
        suma += i
}
console.log(`la suma de ${n} numeros impares es: ${array.join(" + ")} = ${suma}`)
}

numImpares()

*/



/*12. Sumar los N primeros pares.
let array = [];
function sumarNPares(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
    array.push(i * 2);
        suma += 2 * i; 
    }
    return suma;
}

let n = parseInt(prompt("Ingrese la cantidad de primeros números pares: "));
let resultado = sumarNPares(n);
console.log(`la suma de ${array.join(" + ")} = ${resultado}`);
*/





/* 11. Sumar N números pares.

let n =  parseInt(prompt("indicar cantidad de numeros a ingresar: "))
function sumarPares(limite){
    let suma = 0;
    array=[];
    for (let i = 1; i<= limite; i++){
        let input = parseInt(prompt(`ingrese ${i} par: `))
    array.push(input);
    }
    for (let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            suma += array[i];
        }
    }
    return suma;
}
console.log(`resultado de suma pares es: ${sumarPares(n)}`);
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