
    function message(buttonId) {
        // Seleccionar el botón usando querySelector
        var button = document.querySelector("#" + buttonId);
        
        // Obtener el número de likes desde el texto del botón
        var likes = button.innerText.split(" ")[0];
        
        // Convertir el número de likes a un número entero
        var likeCount = parseInt(likes);
        
        // Incrementar el número de likes
        likeCount++;
        
        // Actualizar el texto del botón con el nuevo número de likes
        button.innerText = likeCount + " likes";
    };
//llamada desde el HTML



function login(element){
    if(element.innerText == "Login"){
    
        element.innerText = "Logout";
    }
    else {
        element.innerText = "Login";
    };
};

function hide(el){ 
el.remove();
}