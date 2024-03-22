function modificarMensaje() {
    let mensajeInicial = ["Hola", "a", "todos", "los", "estudiantes", "de", "programación", "de", "4to", "C"];
    let mensajeModificado = ["Somos", "nosotros", "todos", "los", "estudiantes", "de", "programación", "los", "mejores", "del mundo"];
    let eliminados = [];
    let agregados = [];

    for (let i = 0; i < mensajeInicial.length || i < mensajeModificado.length; i++) {
        if (mensajeInicial[i] !== mensajeModificado[i]) {
            if (mensajeInicial[i] === undefined) {
                agregados.push(mensajeModificado[i]);
            } else if (mensajeModificado[i] === undefined) {
                eliminados.push(mensajeInicial[i]);
            } else {
                eliminados.push(mensajeInicial[i]);
                agregados.push(mensajeModificado[i]);
            }
        }
    }

    alert(`Mensaje inicial: ${mensajeInicial.join(" ")}\nMensaje modificado: ${mensajeModificado.join(" ")}\nEliminados: ${eliminados.join(", ")}\nAgregados: ${agregados.join(", ")}`);
}
function operandoMetodos() {
    const arrInicial = Array(10).fill().map(() => Math.floor(Math.random() * 100));
    let arrFinal = [...arrInicial];
    const operaciones = [
        [() => arrFinal.push(Math.floor(Math.random() * 100))],
        [() => arrFinal.unshift(Math.floor(Math.random() * 100))],
        [() => arrFinal.shift()],
        [() => arrFinal.pop()]
    ];
    let eliminados = [];
    let agregados = [];
    let suma = 0;

    for (let operacion of operaciones) {
        operacion[0]();
        suma += arrFinal[arrFinal.length - 1];
        eliminados.push(arrFinal.shift());
        agregados.push(arrFinal.pop());
    }

    alert(`Arreglo inicial: ${arrInicial.join(", ")}\nArreglo final: ${arrFinal.join(", ")}\nValores eliminados: ${eliminados.join(", ")}\nValores agregados: ${agregados.join(", ")}\nSuma: ${suma}`);
}
