/**
Muokkaa funktiota lowerName, jotta se palauttaa saamansa name-parametrin kokonaan pienin kirjaimin

 */
function lowerName(name) {
    let name2 = name.toLowerCase();
    return name2;
}

// Esimerkki - älä muokkaa
console.log(lowerName('Sam')); // "sam"
console.log(lowerName('ALEX')); // "alex"



// Treenaa: Keksi itse samanlainen funktio eri nimellä

function pienillä(nimi) {
    let nimi2 = nimi.toLowerCase();
    return nimi2;
}



// Kutsu tekemääsi funktiota

console.log(pienillä("PERKELE"));