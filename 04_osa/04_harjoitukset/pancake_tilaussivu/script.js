




function laskeHinta() {

    const tulostettavaHinta = document.querySelectorAll(".totalPrice");

    let kokonaishinta = 0;

    const valittuValikosta = document.getElementById("valikko").value; 

    const valitutLisukkeet = document.querySelectorAll("input[type=checkbox]");

    kokonaishinta += parseInt(valittuValikosta);

    for (i = 0; i < valitutLisukkeet.length; i++) {
        if (valitutLisukkeet[i].checked) {
            kokonaishinta += parseInt(valitutLisukkeet[i].value);
        }
    }

    for (j = 0; j < tulostettavaHinta.length; j++) {

    tulostettavaHinta[j].innerText = kokonaishinta;
    }
}


function initialize() {

    const kuunneltavatElementit = document.querySelectorAll("input, select");

    for (i = 0; i < kuunneltavatElementit.length; i++) {
        kuunneltavatElementit[i].addEventListener("input", laskeHinta);

}
}

document.addEventListener("DOMContentLoaded", initialize);
