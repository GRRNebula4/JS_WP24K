// Alkuperäinen joukko tiimin jäseniä
let teamMembers = ['Jukka', 'Emilia', 'Miikka', 'Saara'];

// Harjoitus 1: Käy läpi `teamMembers` ja kirjaa jokainen nimi konsoliin.
// Kirjoita koodisi tähän:


let txt = "";
teamMembers.forEach(myFunction);


function myFunction(value, index, array) {
    txt += value + " ";
}

console.log(txt);

// Harjoitus 2: Poista ensimmäinen jäsen taulukosta.
// Kirjoita koodisi tähän:

teamMembers.splice(0, 1);

// Harjoitus 3: Poista taulukon viimeinen jäsen.
// Kirjoita koodisi tähän:

teamMembers.pop();

// Harjoitus 4: Lisää uusi jäsen "Aleksi" taulukon alkuun.
// Kirjoita koodisi tähän:

teamMembers.unshift("Aleksi");

// Harjoitus 5: Lisää uusi jäsen "Linda" taulukon loppuun.
// Kirjoita koodisi tähän:

teamMembers.push("Linda");

// Harjoitus 6: Luo uusi taulukko, joka ei sisällä kahta ensimmäistä jäsentä.
// Kirjoita koodisi tähän:

const teamMembers2 = teamMembers.slice(2);


// Harjoitus 7: Etsi "Miikka" indeksi taulukossa.
// Kirjoita koodisi tähän:

let miikanIndeksi = teamMembers.indexOf("Miikka");

// Harjoitus 8: Yritä löytää "Jaakko" indeksi (joka ei ole taulukossa).
// Kirjoita koodisi tähän:

let jaakonIndeksi = teamMembers.indexOf("Jaakko");

// Harjoitus 9: Käytä `splice` poistaaksesi "Miikka" ja lisätäksesi "Karoliina" ja "Bettina" hänen tilalleen.
// Kirjoita koodisi tähän:

teamMembers.splice(miikanIndeksi, 1, "Karoliina", "Bettina");

// Harjoitus 10: Liitä uusi jäsen "Hemmo" taulukon loppuun ja luo uusi taulukko.
// Kirjoita koodisi tähän:

teamMembers.push("Hemmo");
let teamMembers3 = teamMembers.toSpliced(0,0);

// Harjoitus 11: Käyttäen `slice` kopioidaksesi koko taulukon
// Kirjoita koodisi tähän:

let teamMembers4 = teamMembers.slice(0,0);

// Harjoitus 12: Yhdistä taulukot käyttäen `concat`
// Oletetaan, että `newMembers`-taulukko on määritelty
let newMembers = ['Tiina', 'Daniel'];
// Kirjoita koodisi tähän:

teamMembers.concat(newMembers);

// Harjoitus 13: Etsi kaikki Jukan esiintymät
// Kirjoita koodisi tähän:

let jukat = [];

for (let i = 0; i<teamMembers.length; i++) {
    let x = teamMembers.indexOf("Jukka");
    jukat.push(x);
}
console.log(jukat);

// Harjoitus 14: Muuta jäsenet `map` avulla kirjoitettavaksi ISOILLA KIRJAIMILLA
// Kirjoita koodisi tähän:

let tiimiIsoilla = teamMembers.map(isoilla);

function isoilla(sana) {
    let sanaIsoilla = sana.toUpperCase();
    return sanaIsoilla;
}

console.log(tiimiIsoilla);