/**
Muokkaa funktio getLastCharacter palauttamaan saamansa merkkijonon viimeinen merkki
 */

function getLastCharacter(name) {
  let char = name.charAt(name.length -1);

  return char;
}

// Esimerkki - älä muokkaa
console.log(getLastCharacter('Sam')); // "m"
console.log(getLastCharacter('Alex')); // "x"
console.log(getLastCharacter('Charley')); // "y"



// Treenaa: Keksi itse samanlainen funktio eri nimellä

function vikaMerkki(merkkijono) {
  let merkki = merkkijono.charAt(merkkijono.length -1);
  return merkki;
}


// Kutsu tekemääsi funktiota

console.log(vikaMerkki("tralalaa"));