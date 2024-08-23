/**
Kehitä funktio nimeltä greaterNum, joka:

- Hyväksyy kaksi argumenttia, jotka molemmat ovat numeroita.
- Palauttaa näistä kahdesta suuremman numeron.
 */

function greaterNum(num1, num2) {
    let suurempi = 0;
    if (num1 >= num2) {
        suurempi = num1;
    }
    else if (num2 > num1) {
        suurempi = num2;
    }
    else {
        break;
    }
    return suurempi;
}

// Esimerkkikäyttö - älä muokkaa
console.log(greaterNum(5, 10));
console.log(greaterNum(2, 1));
console.log(greaterNum(4, 25));

