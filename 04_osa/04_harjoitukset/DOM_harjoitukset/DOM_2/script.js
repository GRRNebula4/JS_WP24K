/* 
Kirjoita JavaScript-koodi, joka lisää tapahtumankäsittelijän napille.

Kun nappia klikataan, funktion tulisi:
- Hakea arvo syötekentästä.
- Luoda uusi <li> elementti ja asettaa sen tekstisisältö syötekentän arvoksi.
- Lisätä uusi <li> elementti hedelmälistan <ul>-elementtiin.

Varmista, että syötekenttä tyhjennetään hedelmän lisäämisen jälkeen.
*/

function klikkaus(){
    const hedelmä = document.getElementById("fruitInput").value;
    let ul = document.getElementById("fruitList");
    let li= document.createElement("li");
    li.appendChild(document.createTextNode(hedelmä));
    //li.innerText = hedelmä;
    ul.appendChild(li);

}