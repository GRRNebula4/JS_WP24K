/** Tehtävä: Ostoskori
 * Kuvitellaan, että olet kehittämässä yksinkertaista verkkokauppasovellusta. Sinun tehtäväsi on luoda ohjelma, joka laskee ostoskorissa olevien tuotteiden yhteishinnan ja tulostaa sen.
 * - Määrittele muuttujat kullekin ostoskorissa olevalle tuotteelle ja niiden hinnoille.
 * - Laske tuotteiden yhteishinta ja tallenna se muuttujaan, esimerkiksi yhteishinta.
 * - Tulosta yhteishinta konsoliin.
 */

let laa = {tuote: "banaani", hinta: 2};
let laalaa = {tuote: "omena", hinta: 1};
let lalalaa = {tuote: "juusto", hinta: 4};

let ostoskori = [laa, laalaa, lalalaa];

//console.log(laa);

//console.log(laa.hinta);

//console.log(ostoskori[0].hinta);
//console.log(ostoskori[0][hinta]);

//console.log(ostoskori.length);

function ostoskorinHinta(kori) {
    let korinHinta = 0;
    for(i=0; i<kori.length; i++) {
        korinHinta += kori[i].hinta;
    }

    return korinHinta;
}

let summa = ostoskorinHinta(ostoskori);

console.log(summa);