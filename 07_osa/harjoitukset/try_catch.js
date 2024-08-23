'use strict';

// Tehtävä 1: Perus Try-Catch käyttö
/*
Kääri koodi try-catch-lohkoon mahdollisten virheiden käsittelyä varten.
Tulosta 'Hups, jotain meni pieleen!' catch-lohkossa konsoliin.
*/

//function task1() {
  // Simuloi virhe
try {
  let muuttuja = epämuuttuja;
}
  catch {
    console.log('Hups, jotain meni pieleen!');
}

// Tehtävä 2: ReferenceErrorin käsittely
/*
Yritä käyttää määrittelemätöntä muuttujaa try-lohkossa.
Käsittele ReferenceError ja tulosta se konsoliin.
*/

//function task2() {
 try {
  let muuttuja = määrittelemätonMuuttuja;
 }
catch (ReferenceError) {
  console.log('ReferenceError:');
  console.log("error");
}
 
  // Koodi tässä


//}

// Tehtävä 3: Finallyn käyttö
/*
Käytä try-catch-finally-lohkoa. Finally-lohkossa tulosta 'Suoritus päättyi'.
*/



//function task3() {
  // Koodi tässä
try {
  let muuttuja = eiMuuttuja;
}
catch (error) {
  console.log(error.message);
}
finally {
  console.log("Suoritus päättyi");
}

//}

// Tehtävä 4: Sisäkkäinen Try-Catch
/*
Sisäkkäisessä try-lohkossa on toinen try-catch-lohko.
Simuloi virhe sisäkkäisessä try-lohkossa ja käsittele se sisäkkäisessä catch-lohkossa.
*/

try {
  console.log("eka try");
  
  try {
    let muuttuja = epämuuttuja;

  }
  catch (error) {
    console.log(error);
    console.log("sisäkkäisen tryn sisempi catch")
  }
}
catch(error) {
  console.log("sisäkkäisen tryn ulompi lohko");
}


//function task4() {
  // Koodi tässä

// Tehtävä 5: Funktio Try-Catchilla
/*
Luo funktio, joka käyttää try-catchia käsittellessään taulukon indeksin ulkopuolista virhettä.
*/

function task5(taulukko, indeksi) {
  // Koodi tässä
  try {
    let muuttuja = taulukko[taulukko.length + 2];
  }
  catch (error){
    console.log(error);
  }
}

let lista = ["Antti", "Karpo", "listaOlio"];

task5(lista, 6);
task6(lista, 6);


function task6(taulukko, indeksi) {
  // Koodi tässä
  try {
    let muuttuja = taulukko[indeksi];
  }
  catch (error){
    console.log(error);
  }
}
