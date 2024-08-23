/**
Kirjoita funktio nimeltä pluralize, joka:

Hyväksyy kaksi argumenttia: substantiivin ja numeron.
Palauttaa merkkijonon, joka yhdistää numeron ja sopivasti taipuvan muodon substantiivista, kuten '5 kissaa' tai '1 koira'.

 */

function pluralize(substantiivi, määrä) {
    let merkkijono = "";
    if (määrä == 1) {
        return `1 ${substantiivi}`;
    }
    else {
        return `${määrä} ${substantiivi}a`;
    }
    return merkkijono;
}

// Esimerkkikäyttö - älä muokkaa
console.log('Minulla on ' + pluralize('kala', 0));
console.log('Minulla on ' + pluralize('koira', 1));
console.log('Minulla on ' + pluralize('papukaija', 7));


// Treenaa: Keksi itse samanlainen funktio eri nimellä.


function monikkoituta(substantiivi, määrä) {
    let merkkijono = "";
    if (määrä == 1) {
        return `1 ${substantiivi}`;
    }
    else {
        return `${määrä} ${substantiivi}a`;
    }
    return merkkijono;
}


// Kutsu tekemääsi funktiota

console.log('Minulla on ' + monikkoituta('kissa', 0));
console.log('Minulla on ' + pluralize('hamsteri', 1));
console.log('Minulla on ' + pluralize('rotta', 8));