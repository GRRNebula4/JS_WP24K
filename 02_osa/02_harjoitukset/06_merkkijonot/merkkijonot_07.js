/**
Moukkaa funktio concatInitials palauttamaan merkkijono, joka yhdistää parametrit firstNameInitial ja lastNameInitial.
 */

function concatInitials(firstNameInitial, lastNameInitial) {
    let heltnamn = "";
    heltnamn = firstNameInitial + lastNameInitial;
    return heltnamn;
}

// Esimerkki - älä muokkaa
console.log(concatInitials('J', 'D')); // "JD"
console.log(concatInitials('S', 'B')); // "SB"



// Treenaa: Keksi itse samanlainen funktio eri nimellä
function yhdistäNimet(ekanimi, tokanimi) {
    let kokonimi = "";
    kokonimi = ekanimi + tokanimi;
    return kokonimi;
}



// Kutsu tekemääsi funktiota

console.log(yhdistäNimet("Petteri", "Punakuono"));