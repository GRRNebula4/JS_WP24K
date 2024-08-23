/**
Muokkaa funktio getFirstCharacter palauttamaan saamansa merkkijonon ensimmäinen merkki
 */

function getFirstCharacter(name) {

    let char = name.charAt(0);
    return char;
}

// Esimerkki - älä muokkaa
console.log(getFirstCharacter('Amsterdam')); // "A"
console.log(getFirstCharacter('Japan')); // "J"




// Treenaa: Keksi itse samanlainen funktio eri nimellä

function ekaMerkki(nimi) {
    let merkki = nimi.charAt(0);
    return merkki;
}


// Kutsu tekemääsi funktiota

console.log(ekaMerkki("Sana"));