// Función para alternar el estado del botón entre activado y desactivado
function activarButton(button) {
    // Verifica si el botón tiene la clase 'inactivo'
    if (button.classList.contains('inactivo')) {
        // Si es así, elimina la clase 'inactivo' y añade la clase 'activo'
        button.classList.remove('inactivo');
        button.classList.add('activo');
        // Cambia el texto del botón a 'Activado'
        button.textContent = 'Activado';
    } else {
        // Si el botón no tiene la clase 'inactivo', se supone que está activado
        // Elimina la clase 'activo' y añade la clase 'inactivo'
        button.classList.remove('activo');
        button.classList.add('inactivo');
        // Cambia el texto del botón a 'Desactivado'
        button.textContent = 'Desactivado';
    }
}


// Función para eliminar un botón del DOM
function removeButton(button) {
    // Elimina el botón del DOM referenciando a su nodo padre y eliminando el hijo (el botón mismo)
    button.parentNode.removeChild(button);
}