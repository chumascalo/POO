//ejercicio creacion de variables

//variable global
var global="Global";
// variable local
let local="Local";
// variable constante
const constante="constante";

console.log("variable: Global: " + global + " -local: " + local + " -constante: " + constante );


//entero
let numEntero=5;
//decimal
let decimal=7.7;
//cadena de texto
let cadenaTexto="hola mundo";
//booleano
let booleano="true";
//arreglo
let arreglo=["gato",7, "gato"]; 
//objeto
let objeto={ 
    comida: "pure",
    chef: "juan",
    edad: 70 
            };
//indefinida
let indefinida;
//nulo
let nulo=null;

//operacion
function suma(num1, num2){ 
    return num1 + num2;
};

console.log("variables: \nEntero: " + numEntero 
+ "\ndecimal: " + decimal
+ "\nCadena de texto: " + cadenaTexto 
+ "\nBooleano: " + booleano 
+ "\nArreglo: " + arreglo 
+ "\nObjeto: " + JSON.stringify(objeto) 
+ "\nIndefinida: " + indefinida
+ "\nNula: " + nulo 
+ "\nResultado de funcion: " + suma(10,5) );

console.log(suma(10,5) );