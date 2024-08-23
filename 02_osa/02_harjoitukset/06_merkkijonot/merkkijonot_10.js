/**
Muokkaa funktio capitalize palauttamaan saamansa sana kirjoitettuna vain isolla alkukirjaimella
 */

function capitalize(word) {
  let word3 = word.toUpperCase();
  let char1 = "";
  char1 = word3.charAt(0);
  // console.log(char1);
  let word2 = "";
  word2 += char1;
  let word4 = word3.toLowerCase();
  for (i=1; i<word.length; i++) {
    word2 += word.charAt(i).toLowerCase();
    //console.log(word2);
  }

  return word2;

}

// Esimerkki - älä muokkaa
console.log(capitalize('sam')); // "Sam"
console.log(capitalize('ALEX')); // "Alex"
console.log(capitalize('chARLie')); // "Charlie"



// Treenaa: Keksi itse samanlainen funktio eri nimellä


function ekaIsolla(sana) {
    let merkki1 = "";
    merkki1 = sana.charAt(0).toUpperCase();
    let sana2 = "";
    sana2 += merkki1;
    for (i=1; i<sana.length; i++) {
      sana2 += sana.charAt(i).toLowerCase();
    }
  
    return sana2;
}
  


// Kutsu tekemääsi funktiota
console.log(ekaIsolla("aBrAkAdabRa"));