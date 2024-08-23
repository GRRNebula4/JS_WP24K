/**Luo Magic 8-Ball -ohjelma, joka matkii klassista kohtalon ennustamisen lelua. Käyttäjä syöttää kyllä-tai-ei -kysymyksen, ja ohjelma
 * antaa satunnaisen vastauksen 8-pallosta. Toteuta ohjelma käyttämällä ehtolauseita valitsemaan ja näyttämään yksi useista ennalta määritellyistä vastauksista. */ 

let vastaukset = ["vastaus1", "vastaus2", "vastaus3", "vastaus4"];

function annaVastaus() {
    
const text = document.getElementById("vastausPaikka");

    let arvo = Math.random();
    console.log(arvo);
    arvo *= vastaukset.length;
    console.log(arvo);
    arvo = Math.trunc(arvo);
    console.log(arvo);
    text.innerHTML = vastaukset[arvo];
}


document.addEventListener("DOMContentLoaded", function() {annaVastaus()});

//annaVastaus();






