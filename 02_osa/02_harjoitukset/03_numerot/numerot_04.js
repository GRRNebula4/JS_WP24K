/**Tehtävä: Jakolasku
 * Kuvitellaan, että olet matematiikan opettaja, ja haluat laatia yksinkertaisen tehtävän oppilaillesi. Tehtäväsi on luoda ohjelma, joka laskee kahden luvun jakolaskun ja tulostaa tuloksen.
 * - Luo kaksi muuttujaa, ja anna niille arvot.
 * - Laske näiden kahden numeron jakolaskun tulos ja tallenna se uuteen muuttujaan
 * - Tulosta vastaus konsoliin.
 */

let muuttuja1 = 8;
let muuttuja2 = 2;

function jakolasku(num1, num2) {
    let tulos = num1/num2;
    return tulos;
}

let jaettu = jakolasku(muuttuja1, muuttuja2);

console.log(jaettu);