let count = 0;

    function cc() {
        let card = document.getElementById("cardInput");
        let cartas = card.value.trim().split(",");

        for (let carta of cartas) {
            carta = carta.trim();
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
                default:
                    alert(`${carta} no está entre las cartas válidas. Use mayúsculas para las letras.`);
                    count = "ERROR"
                    break;
            };
        };
    let resultCount = document.getElementById("resultado");
    let li = document.createElement("h3");
    
    
    if (count < 0) {
        li.textContent = count + " Hold";
    } else if (count > 0){
        li.textContent = count + " Bet";
    }
    else if (count == 0){
        li.textContent = count;
    }
    else{
        alert("ingrese un caracter valido");
    };
    resultCount.appendChild(li);
    card.value = "";
    resultCount.appendChild(li);
    card.value = "";
    
};