
/* Tehtävä 1
Luo JavaScript-taulukko nimeltä `kirjasto`, joka edustaa kirjojen kokoelmaa.
Jokaisella kirjalla tulisi olla ominaisuudet `otsikko`, `kirjailija` ja `julkaisuvuosi`.
Lisää ainakin kaksi kirja-oliota tähän kokoelmaan.
*/
// Sinun koodisi tähän

let kirjasto = [];

let kirja1 = {otsikko:"1984", kirjailija:"George Orwell", julkaisuvuosi: 1930};
let kirja2 = {otsikko:"Brave New World", kirjailija:"Aldous Huxley", julkaisuvuosi: 1940};

kirjasto.push(kirja1, kirja2);

console.log(kirjasto);

/* Tehtävä 2
Käytä `kirjaston` ensimmäisen kirjan `otsikko`-ominaisuutta ja tulosta se konsoliin.
Muuta toisen kirjan `julkaisuvuotta` uuteen vuoteen kokoelmassa ja kirjaa päivitetty kirja-olio konsoliin.
*/
// Sinun koodisi tähän

let otsikko1 = kirjasto[0].otsikko;

console.log(otsikko1);

/* Tehtävä 3
Käytä pistenotaatiota lisätäksesi uuden ominaisuuden `lajityypit` (merkkijonotaulukko) ensimmäiseen kirjaan `kirjasto`-taulukossa.
Käytä hakasulkunotaatiota lisätäksesi boolean-ominaisuuden `onSaatavilla` samaan kirjaan, ilmaisten sen saatavuuden.
*/
// Sinun koodisi tähän

kirjasto[0].lajityypit

/* Tehtävä 4
Määritä konstruktorifunktio nimeltä `Kirja`, joka voi luoda uusia kirja-olioita ominaisuuksilla `otsikko`, `kirjailija`, `julkaisuvuosi` ja `lajityypit`.
Käyttäen `Kirja`-konstruktoria, luo uusi kirja-olio annetuilla syöttöarvoilla ja lisää se `kirjasto`-kokoelmaan.
*/
// Sinun koodisi tähän

function Kirja(otsikko, kirjailija, julkaisuvuosi, lajityypit){
    this.otsikko = otsikko;
    this.kirjailija = kirjailija;
    this.julkaisuvuosi = julkaisuvuosi;
    this.lajityypit = lajityypit;
}

let kirja3 = new Kirja("otsikko", "kirjailija", 2002, ["jännitys", "thrilleri"]);
kirjasto.push(kirja3);
console.log(kirjasto);

/* Tehtävä 5
Kirjoita funktio nimeltä `luoKirja`, joka ottaa parametrit `otsikko`, `kirjailija`, `julkaisuvuosi` ja `lajityypit` (taulukko).
Funktion tulisi palauttaa uusi kirja-olio näillä ominaisuuksilla.
Testaa `luoKirja`-funktiota luomalla uusi kirja-olio käyttäjän antamilla syötteillä ja kirjaa uusi kirja-olio konsoliin.
*/
// Sinun koodisi tähän

function luoKirja(otsikko, kirjailija, julkaisuvuosi, lajityypit) {
let kirja = new Kirja(otsikko, kirjailija, julkaisuvuosi, lajityypit);
return kirja;
}

/* Tehtävä 6
Muunna `kirjasto`-kokoelma JSON-merkkijonoksi ja kirjaa se konsoliin.
Tee JSON-merkkijonosta JavaScript-olio ja kirjaa ensimmäisen kirjan otsikko konsoliin.
*/
// Sinun koodisi tähän

let kirjastoMerkkijonona = JSON.stringify(kirjasto);

console.log(kirjastoMerkkijonona);

let kirjastoOlio = JSON.parse(kirjastoMerkkijonona);

console.log("ensimmäisen kirjan otsikko: " + kirjastoOlio[0].otsikko);