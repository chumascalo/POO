let display = document.getElementById("display");
let currentInput = "";
let firstOperand = 0; // Primer número
let secondOperand = 0; // Segundo número
let operation = 0;

function press(value) {
    currentInput += value;
    display.innerText = currentInput;
}

function clr() {
    currentInput = "";
    firstOperand = 0;
    secondOperand = 0;
    operation = 0;
    display.innerText  = "";
}

function setOP(op) {
    if (currentInput === "") return; // Evitar operaciones sin número
    if (firstOperand === 0) {
        firstOperand = parseFloat(currentInput); // Guardar el primer número
    } else if (operation) {
        calculateResult(); // Calcular si ya hay una operación
    }
    
    operation = op; // Establecer nueva operación
    currentInput = ""; // Limpiar entrada para el segundo número
}

function calculate() {
    if (currentInput === "" || operation === 0 || firstOperand === 0) return; // Validar entrada

    secondOperand = parseFloat(currentInput); // Guardar el segundo número
    
    let result;

    switch (operation) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = secondOperand !== 0 ? firstOperand / secondOperand : "Error"; // Manejo de división por cero
            break;
        default:
            return; // Si no hay operación válida
    }

    display.innerText = result; // Mostrar resultado

    // Preparar para un nuevo cálculo, pero no limpiar inmediatamente
    firstOperand = result; // Establecer el resultado como primer operando para cálculos posteriores
    currentInput = ""; // Limpiar entrada para nuevo cálculo
}