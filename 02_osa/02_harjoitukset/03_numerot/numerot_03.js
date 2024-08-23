/*
- Luo muuttuja nimeltä 'num1' ja anna sille liukulukuarvo.
- Luo muuttuja nimeltä 'num2' ja anna sille eri liukulukuarvo.

- Pyöristä sekä 'num1' että 'num2' lähimpään kokonaislukuun ja tallenna tulokset muuttujiin 'roundedNum1' ja 'roundedNum2'.
- Laske neliöjuuri 'roundedNum1':stä ja tallenna se muuttujaan nimeltä 'sqrtNum1'.
- Etsi suurempi numero 'roundedNum1':n ja 'roundedNum2':n välillä ja tallenna se muuttujaan nimeltä 'maxNum'.

- Käytä console.log() -funktiota tulostamaan 'roundedNum1', 'roundedNum2', 'sqrtNum1' ja 'maxNum' konsoliin.
- Käytä typeof operaattoria tarkistaaksesi jokaisen uuden muuttujan tietotyypin ja tulosta tulos käyttäen console.log().
*/

let num1 = 3.2;
let num2 = 5.6;

let roundedNum1 = Math.round(num1);
let roundedNum2 = Math.round(num2);

let sqrtNum1 = Math.sqrt(roundedNum1);

function suurempi(luku1, luku2) {
let suurin = 0;
if (roundedNum1 <= roundedNum2) {
    suurin = roundedNum2;
}
else if (roundedNum2 < roundedNum1) {
    suurin = roundedNum1;
}

return suurin;

}

let maxNum = suurempi(roundedNum1, roundedNum2);

console.log(roundedNum1, roundedNum2, sqrtNum1, maxNum);
console.log(typeof(roundedNum1), typeof(roundedNum2), typeof(sqrtNum1), typeof(maxNum));


