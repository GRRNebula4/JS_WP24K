// Määrittele funktio, joka muuntaa lämpötilan Fahrenheit-asteista Celsius-asteiksi.
// Tämä funktio käyttää kaavaa (Fahrenheit - 32) * 5/9
// Saatu lämpötila pyöristetään yhteen desimaaliin tarkkuuden vuoksi.


function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    celsius = Math.round(celsius*10);
    celsius = celsius/10;
    return celsius;

 
}



// Esimerkki - älä muokkaa
console.log(fahrenheitToCelsius(21)); // haluttu tulos: "-6,1"
