function agregarNombre() {
    
    let nombreInput = document.getElementById("nombreInput");
    let nombre = nombreInput.value.trim();
    if (nombre !== "" ) {
    
        let li = document.createElement("li");

        li.textContent = nombre;

    
        let listaNombres = document.getElementById("listaNombres");

    
        listaNombres.appendChild(li);

        nombreInput.value = "";
    }};