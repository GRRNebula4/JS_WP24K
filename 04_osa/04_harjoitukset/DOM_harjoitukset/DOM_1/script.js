/* 
Kirjoita JavaScript-koodi, joka valitsee sisällön tunnuksen käyttämällä getElementById-metodia.
Kirjoita funktio, joka päivittää valitun elementin tekstisisällön painamalla nappia tekstiksi "Hei, maailma!".
*/


function vaihdaTeksti() {
const text = document.getElementById("content");

text.innerHTML = "Hei, maailma!";
}