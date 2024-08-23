/* Luo toiminnallisuus, jossa syötekentän arvo näytetään jatkuvasti ja päivitetään omalla alueellaan sivulla käyttäjän kirjoittaessa, käyttäen onchange-tapahtumaa. */

/* Ohjeet:

HTML:
- Luo perus-HTML
- Sisällytä <input type="text"> -elementti, johon käyttäjä voi kirjoittaa tekstiä.
- Lisää <div> -elementti, jolla on tunniste (esim. id="displayText"), joka näyttää syötekentän arvon.
- Muista yhdistää HTML- ja JS-tiedostot

JavaScript:

Kirjoita JavaScript-koodi, joka lisää tapahtumankäsittelijän syötekentälle, erityisesti kuuntelemalla muutos-tapahtumaa.

Tapahtumankäsittelijän funktion tulisi:
- Hakea nykyinen arvo syötekentästä.
- Päivitä displayText <div>:n textContent vastaamaan syötekentän arvoa.
- Saadaksesi näytön päivittymään dynaamisemmin (käyttäjän kirjoittaessa), harkitse input-tapahtuman käyttämistä change-tapahtuman sijasta tai sen lisäksi. */



function vaihdaTeksti() {
    const text = document.getElementById("displayText");
    
    //text.appendChild(document.createTextNode(document.getElementById("text").value));
    text.textContent = document.getElementById("text").value;   
}


//addEventListener("change", (event) => {});

//onchange = (event) => {};

function initialize() {
    const text = document.getElementById("text");
    text.addEventListener("input", vaihdaTeksti);
    //text.addEventListener("change", vaihdaTeksti);


    //    const text = document.getElementById("displayText");
    
  //  text.appendChild(document.createTextNode(document.getElementById("text").value))
}

document.addEventListener("DOMContentLoaded", initialize);


/*document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("text").addEventListener("change", () => {
        document.getElementById("displayText").appendChild(document.createTextNode(
            document.getElementById("text").value
        ))
    })
})*/