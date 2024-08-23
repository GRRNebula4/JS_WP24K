/**
Muokkaa funktio shoutMyName palauttamaan saamansa name-parametri isolla kirjaimilla.
 */

function shoutMyName(name) {
    let name2 = name.toUpperCase();
    return name2;

}

// Esimerkki - älä muokkaa
console.log(shoutMyName('Sam')); // "SAM"
console.log(shoutMyName('Charley')); // "CHARLEY"
console.log(shoutMyName('alex')); // "ALEX"



// Treenaa: Keksi itse samanlainen funktio eri nimellä

function isoilla(nimi) {
    let nimi2 = nimi.toUpperCase();
    return nimi2;
}


// Kutsu tekemääsi funktiota

console.log(isoilla("perkele"));