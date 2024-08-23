/**
Kehitä funktio nimeltä assignGrade, joka:

Hyväksyy yhden argumentin, numeerisen pistemäärän.
Palauttaa kirjainarvosanan pistemäärän perusteella seuraavasti:
- 'A' pistemäärille 90 tai enemmän.
- 'B' pistemäärille 80-89.
- 'C' pistemäärille 70-79.
- 'D' pistemäärille 60-69.
- 'F' pistemäärille alle 60.

*/

function assignGrade(pistemäärä) {
    let arvosana = "";
    if (pistemäärä >= 90) {
        arvosana = "A";
    }
    else if(pistemäärä >= 80 && pistemäärä < 90) {
        arvosana = "B";
    }
    else if(pistemäärä >= 70 && pistemäärä < 80) {
        arvosana = "C";
    }
    else if(pistemäärä >= 60 && pistemäärä < 69) {
        arvosana = "D";
    }
    else if(pistemäärä < 60) {
        arvosana = "F";
    }
    return arvosana;

}



// Esimerkkikäyttö - älä muokkaa
console.log('Sinä sait ' + assignGrade(95)); // Sinä sait A
console.log('Sinä sait ' + assignGrade(81)); // Sinä sait B
console.log('Sinä sait ' + assignGrade(72)); // Sinä sait C
console.log('Sinä sait ' + assignGrade(64)); // Sinä sait D
console.log('Sinä sait ' + assignGrade(42)); // Sinä sait F



// Treenaa: Keksi itse samanlainen funktio eri nimellä. Pisterajoja voi olla vähemmän kuin yllä.


function arvostele(pistemäärä) {
    let arvosana = "";
    if (pistemäärä >= 90) {
        arvosana = "A";
    }
    else if(pistemäärä >= 80 && pistemäärä < 90) {
        arvosana = "B";
    }
    else if(pistemäärä >= 70 && pistemäärä < 80) {
        arvosana = "C";
    }
    else if(pistemäärä >= 60 && pistemäärä < 69) {
        arvosana = "D";
    }
    else if(pistemäärä < 60) {
        arvosana = "F";
    }
    return arvosana;

}



// Kutsu tekemääsi funktiota

console.log(arvostele(68));