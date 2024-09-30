function message(){
    alert("me gusta");
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