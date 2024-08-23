/**
Täydennä funktio evenOrOdd siten, että se palauttaa merkkijonon "even", kun se saa parametriksi parillisen luvun, ja muuten "odd".
 */

function evenOrOdd(number) {
    if (number%2==0) {
        return "even";
    }
    else {
        return "odd";
    }
  
}

// Esimerkkikäyttö - älä muokkaa
console.log(evenOrOdd(25)); // "odd"
console.log(evenOrOdd(18)); // "even"
console.log(evenOrOdd(-17)); // "odd"

// Treenaa: Keksi itse samanlainen funktio eri nimellä

function parillinenko(numero) {
    if (numero%2==0) {
        return "parillinen";
    }
    else {
        return "pariton";
    }
}


// Kutsu tekemääsi funktiota

console.log(parillinenko(5));