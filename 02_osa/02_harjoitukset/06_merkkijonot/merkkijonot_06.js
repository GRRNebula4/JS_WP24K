/**
Muokkaa funktio skipFirstCharacter  palauttamaan merkkijono, jossa on saamansa merkkijono ilman sen ensimmäistä merkkiä

 */
function skipFirstCharacter(text) {
    let text2 = "";
    for (i=1; i<text.length; i++){
        text2 += text.charAt(i);
    }
    return text2;

}


// Esimerkki - älä muokkaa
console.log(skipFirstCharacter('Xcode')); // "code"
console.log(skipFirstCharacter('Hello')); // "ello"



// Treenaa: Keksi itse samanlainen funktio eri nimellä

function ekamerkitön(teksti) {
    let teksti2 = "";
    for (i=1; i<teksti.length; i++){
        teksti2 += teksti.charAt(i);
    }
    return teksti2;
}


// Kutsu tekemääsi funktiota

console.log(ekamerkitön("aabrakadabra"));