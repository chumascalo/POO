console.log("vinculado correctamente....")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables() {
    let ahora=2024;
    let fecha_nac=2006;
    let resultado = ahora - fecha_nac;
    alert(`mi edad es:  ${resultado}` );
}

// Ejercicio 2: Asignación de valores
// Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
    function asignarValores() {
    let var1 ="hola mundo";
    let var2=var1;
    alert(`el valor de var2 es:  ${var2}` );
    // Tu código aquí
    }
    
    // Ejercicio 3: Operaciones matemáticas
    // Instrucciones: Completa la función para realizar las siguientes operaciones:
    // Suma 'num1', 'num2' y 'num3' resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
    // Muestra los resultados en un mensaje.
    function realizarOperaciones() {
    let num1=7;
    let num2=22;
    let num3=2;
    let suma= num1 + num2 + num3;
    let resta= num1 - num3;
    let multiplicaciom= num2 * num3;
    let division= num1 / 120;
    alert(`suma: ${suma}  \nresta: ${resta}  \nmultiplicacion: ${multiplicaciom} \ndivision: ${division}`);
    // Tu código aquí
    }
    
// Ejercicio 4: Manipulación de cadenas
// Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'n_casa'.
// Luego, muestra la longitud del mensaje y el antepenultimo carácter en el mensaje. (.length) 
function manipularCadenas() {
    let direccion = "Av. Alameda";
    let n_casa="2300";
    let mensaje= `la direccion es: ${direccion}  ${n_casa}`;
    let longitud = mensaje.length;
    alert(`La lognitud del mensaje es: ${mensaje.length} \nCaracter antepenultimo: ${mensaje[mensaje.length-3]}`)
    
    }

/*•    Crear una función llamada “Suma_indices()”
•    Crear un arreglo  de largo 7 (1,2,3,4,5,6,7)
•    Sumar el ultimo valor, con el penúltimo más el 1 valor de las posiciones
•    Mostrar el resultado en el HTML con un Alert
*/

function sumarIndices(){
    let valor = [1,2,3,4,5,,6,7];
    let ultimoValor = valor[valor.length - 1];
    let penultimoValor = valor[valor.length -2];
    let primerValor= valor[0];
    let resultado = ultimoValor + penultimoValor + primerValor;
    
    alert(`el resultado es : ${resultado}`);
    }