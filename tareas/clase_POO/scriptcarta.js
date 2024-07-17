let count = 0;

function cc() {
    let card = document.getElementById("cardInput");
    let carta = card.value.trim();
    switch(carta) {
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
            count += 1;
            break;
        case "7":
        case "8":
        case "9":
            break;
        case "10":
        case "J":
        case "Q":
        case "K":
        case "A":
            count -= 1;
            break;
    }

    let resultCount = document.getElementById("lista");
    let li = document.createElement("li");
    
    if (count < 0) {
        li.textContent = count + " Hold";
    } else if (count > 0){
        li.textContent = count + " Bet";
    }
    else{
        alert("ingrese un caracter valido")
    }

    resultCount.appendChild(li);
    card.value = "";
}