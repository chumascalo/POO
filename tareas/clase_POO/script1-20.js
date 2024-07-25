/* 1. Leer los datos de una persona (Nombre, apellidos, edad) y mostrarlos a
través de una impresión. */

function nombreAE(event) {
    event.preventDefault();

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
}