const iscritti = ["salvo@email.it", "fabiola@email.it", "mattia@email.it"]


document.getElementById(`login`).addEventListener("click", 
function() {
    let email = document.getElementById("email").value;
    let soldatino = false;
    for (let i = 0; i < iscritti.length; i++) {
        if (email == iscritti[i]) {
            soldatino = true;
            document.getElementById(`table`).style.display = "flex";
            document.querySelector(`#accesso`).innerHTML = '<h2 class="text-white">Accesso consentito</h2>';
            break;
        } 
        else {
            document.querySelector(`#accesso`).innerHTML = '<h2 class="text-white">Accesso negato</h2>';
        }
    }
    // if (email == iscritti[0] || email == iscritti[1] || email == iscritti[2]) {
    //     document.getElementById(`table`).style.display = "flex";
    //     document.querySelector(`#accesso`).innerHTML = "<h2>Accesso consentito</h2>";
    // }
    // else {
    //     document.querySelector(`#accesso`).innerHTML = "<h2>Accesso negato</h2>";
        
    // }
});

document.getElementById(`tentaLaFortuna`).addEventListener("click", 
function() {
let dadoGiocatore = Math.floor(Math.random()*6)+1;
let dadoComputer = Math.floor(Math.random()*6)+1;
document.getElementById("dadoGiocatore").innerHTML = dadoGiocatore;
document.getElementById("dadoComputer").innerHTML = dadoComputer;
if (dadoGiocatore > dadoComputer ) {
    document.querySelector(".result").innerHTML = `<h3 class="mt-5">Hai vinto!</h3>`;
}
else if (dadoGiocatore < dadoComputer ) {
    document.querySelector(".result").innerHTML = `<h3 class="mt-5">Hai perso!</h3>`;
}
else {
    document.querySelector(".result").innerHTML = `<h3 class="mt-5">Risultato pari</h3>`;
}
});

