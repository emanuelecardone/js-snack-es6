// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


// Creo una base molto semplice nel DOM per stampare
const textContainer = document.createElement('div');
textContainer.classList.add('w-50', 'h-50', 'border', 'border-5', 'border-info', 'd-flex', 'justify-content-center', 'align-items-center');
document.querySelector('body').classList.add('vh-100', 'd-flex', 'justify-content-center', 'align-items-center');
document.querySelector('body').appendChild(textContainer);


// Array di squadre di calcio
const footballTeams = [
    {
        name: 'Roma',
        score: 0,
        fouls: 0
    },
    {
        name: 'Napoli',
        score: 0,
        fouls: 0
    },
    {
        name: 'Ascoli',
        score: 0,
        fouls: 0
    },
    {
        name: 'Juventus',
        score: 0,
        fouls: 0
    },
    {
        name: 'Milan',
        score: 0,
        fouls: 0
    },
    {
        name: 'Chievo',
        score: 0,
        fouls: 0
    },
    {
        name: 'Inter',
        score: 0,
        fouls: 0
    },
    {
        name: 'Venezia',
        score: 0,
        fouls: 0
    },
    {
        name: 'Lazio',
        score: 0,
        fouls: 0
    },
    {
        name: 'Torino',
        score: 0,
        fouls: 0
    }
];

// Ciclo che scorre ogni squadra dell'array
for(let i = 0; i < footballTeams.length; i++){

    // Assegnazione della squadra corrente ad una variabile
    const currentTeam = footballTeams[i];

    // Ciclo for in che percorre la squadra corrente e modifica
    // score e fouls con numeri random (0-90 per score, 0-200 per fouls)
    for(let key in currentTeam){
        switch(key){
            case 'score':
                currentTeam.score = Math.floor(Math.random() * 91) + 0;
                break;
            case 'fouls':
                currentTeam.fouls = Math.floor(Math.random() * 201) + 0;
                break;     
        }
    }
}

// Test
console.log(footballTeams);