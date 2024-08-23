/**
Täydennä funktio getCharCount niin, että se palauttaa argumenttina str saamiensa merkkien lukumäärän.
*/

function getCharCount(str) {
    let count = 0;
    count = str.length;
    return count;
  
}

// Esimerkkikäyttö - älä muokkaa
console.log(getCharCount('Sam')); // 3
console.log(getCharCount('Alex 123')); // 8
console.log(getCharCount('Jimi was here')); // 13



// Treenaa: Keksi itse samanlainen funktio eri nimellä

function merkkimäärä(merkkijono) {
    let määrä = 0;
    määrä = merkkijono.length;
    return määrä;
}



// Kutsu tekemääsi funktiota

console.log(merkkimäärä("sanainen"));

