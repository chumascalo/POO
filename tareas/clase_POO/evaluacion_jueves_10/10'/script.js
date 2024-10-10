let display = document.getElementById("display");
let calculando = document.getElementById("calculando");
let currentInput = "";
let firstOperand = 0; // Primer número
let secondOperand = 0; // Segundo número
let operation = 0;

let array = [];
function press(value) {
    currentInput += value; // Concatenar el valor presionado
    display.innerText = currentInput; // Mostrar en pantalla el valor ingresado
}

function clr() {
    currentInput = "";
    firstOperand = 0;
    secondOperand = 0;
    operation = 0;
    display.innerText = "0";
    calculando.innerText = "calculando con = ";
}

function setOP(op) {
    if (currentInput === "") return; // Evitar operaciones sin número

    if (firstOperand === 0) {
        // Si es el primer operando, guardarlo
        firstOperand = parseFloat(currentInput);
    } 
    operation = op; // Establecer nueva operación
    display.innerText = firstOperand + " " + operation; // Mostrar el número y la operación juntos
    currentInput = "";
}

function calculate() {
    if (currentInput === "" || operation === 0 || firstOperand === 0) return; // Validar entrada

    secondOperand = parseFloat(currentInput); // Guardar el segundo número
    
    
        array = [firstOperand, operation, secondOperand];
    
    
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
    calculando.innerText = "calculando con = " + result ;
    display.innerText = result; // Mostrar resultado
    firstOperand = result; // Mantener el resultado para el siguiente cálculo
    secondOperand = 0;
    operation = 0;

    let anteriorResult = document.getElementById("anteriorResult");
    anteriorResult.innerText = "anterior "+ array.join(" ") + "= " + result;
}
