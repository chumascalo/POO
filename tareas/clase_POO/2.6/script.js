
function message(buttonId) {
        
    var button = document.querySelector("#" + buttonId);
    
    var likes = button.innerText.split(" ")[0];
    
    var likeCount = parseInt(likes);
    
    likeCount++;
    
    button.innerText = likeCount + " likes";
};



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