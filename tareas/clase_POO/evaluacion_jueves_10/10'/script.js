let display = document.getElementById("display");
let currentInput = "";
let firstOperand = 0; // Primer número
let secondOperand = 0; // Segundo número
let operation = 0;
let array = [];
function press(value) {
    currentInput += value; //current agarra el valor que salga en el html osea si sale press(7) agarra el 7
    display.innerText = currentInput;
    //display deja de ser "0" para ser los/el numero/s elegido/s

}

function clr() {
    currentInput = "";
    firstOperand = 0;
    secondOperand = 0;
    operation = 0;
    display.innerText  = "0";
    //Limpia todo
}

function setOP(op) {
    if (currentInput === "") return; // Evitar operaciones sin número
    if (firstOperand === 0) {
        firstOperand = parseFloat(currentInput); // Guardar el primer número
    } else if (operation) {
        calculate(); // Calcular si ya hay una operación
    }
    operation = op; // Establecer nueva operación
    display.innerText = firstOperand; // Mostrar la operación en el display
    display.innerText = operation;
    array = [firstOperand, operation,]
    currentInput = ""; // Limpiar entrada para el segundo número pero mantener la operación visible
}

function calculate() {
    if (currentInput === "" || operation === 0 || firstOperand === 0) return; // Validar entrada

    secondOperand = parseFloat(currentInput); // Guardar el segundo número

    array = [firstOperand, operation, secondOperand]
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
    firstOperand = 0;
    secondOperand = 0;
    operation = 0;
    // Preparar para un nuevo cálculo, pero no limpiar inmediatamente
    
    let anteriorResult = document.getElementById("anteriorResult");
    anteriorResult.innerText = "anterior = " + array.join("");
    currentInput = ""; // Limpiar entrada para nuevo cálculo
}