/**
* Tätä ohjelmaa varten tarvitaan verkkosivua, eli se ei toimi pelkästään konsolissa.
* Joten tee ensin html sivu ja linkkaa tämä tiedosto siihen. Prompt-ikkuna aukeaa sivulle, testaa Live serverin avulla.
* Luo ohjelma getTemperature, joka kysyy käyttäjältä lämpötilaa Celsius-asteina ja sitten tulostaa, pitäisikö heidän pukea takki päälle (jos lämpötila on alle 15°C) vai ei.
*/



function getTemperature(temp) {
 
const text = document.querySelector("p");
    if (temp < 15) {
        text.innerHTML = "Pue takki päälle";
}
  
}

function klikkaus() {
    
const arvo = document.getElementById("lämpötila").value;
    getTemperature(arvo);

}
// Treenaa: Keksi itse samanlainen funktio eri nimellä

function onkoKylmä(lämpötila) {
    
const text = document.getElementById("vastaus2");

    if (lämpötila<0) {
        text.innerHTML = "Vesi jäätyy"
    }
    else if(lämpötila>=0) {

    text.innerHTML = "Jää sulaa"
}
}

// Kutsu tekemääsi funktiota


document.addEventListener("DOMContentLoaded", function() {onkoKylmä(-5)});