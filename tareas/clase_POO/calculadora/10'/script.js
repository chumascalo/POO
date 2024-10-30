// Variables globales
let display = document.getElementById("display");
let currentInput = "";
let operationArray = [];

// Función para manejar el ingreso de números y operadores
function press(value) {
    currentInput += value;
    display.innerText = currentInput; 
}

// Función para limpiar la calculadora
function clr() {
    currentInput = ""; 
    operationArray = []; 
    display.innerText = "0"; 
}

// Función para configurar el operador matemático
function setOP(op) {
    if (currentInput === "") return; 

    operationArray.push(parseFloat(currentInput)); 
    operationArray.push(op); 
    currentInput = ""; 
    display.innerText = operationArray.join(" "); 
}

// Función para calcular el resultado final
function calculate() {

    if (currentInput !== "") {
        operationArray.push(parseFloat(currentInput));
    }
    if (currentInput === "") return; 

    // Paso 2: Procesar multiplicación y división primero
    let tempArray = [];

    for (let i = 0; i < operationArray.length; i++) {
        if (operationArray[i] === '*' || operationArray[i] === '/') {
            let operator = operationArray[i];
            let leftOperand = tempArray.pop(); 
            let rightOperand = operationArray[i + 1];
            let result;

            // Realizar la operación
            if (operator === '*') {
                result = leftOperand * rightOperand;
            } else if (operator === '/') {
                result = rightOperand !== 0 ? leftOperand / rightOperand : "Error"; 
            }

            tempArray.push(result); 
            i++; 
        } else {
            tempArray.push(operationArray[i]); 
        }
    }

    // Paso 3: Procesar suma y resta
    let finalResult = tempArray[0]; 
    for (let i = 1; i < tempArray.length; i += 2) {
        let operator = tempArray[i];
        let rightOperand = tempArray[i + 1];

        // Realizar la operación de suma o resta
        if (operator === '+') {
            finalResult += rightOperand;
        } else if (operator === '-') {
            finalResult -= rightOperand;
        }
    }

    // Paso 4: Mostrar el resultado y reiniciar los valores
    display.innerText = finalResult; 
    currentInput = ""; 
    operationArray = []; 
}
