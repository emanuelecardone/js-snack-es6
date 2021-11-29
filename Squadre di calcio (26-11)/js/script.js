// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


// Array di squadre di calcio
const footballTeams = [
    {
        name: 'Roma',
        score: 0,
        foulsGot: 0
    },
    {
        name: 'Napoli',
        score: 0,
        foulsGot: 0
    },
    {
        name: 'Ascoli',
        score: 0,
        foulsGot: 0
    },
    {
        name: 'Juventus',
        score: 0,
        foulsGot: 0
    },
    {
        name: 'Milan',
        score: 0,
        foulsGot: 0
    },
    {
        name: 'Chievo',
        score: 0,
        foulsGot: 0
    },
    {
        name: 'Inter',
        score: 0,
        foulsGot: 0
    },
    {
        name: 'Venezia',
        score: 0,
        foulsGot: 0
    },
    {
        name: 'Lazio',
        score: 0,
        foulsGot: 0
    },
    {
        name: 'Torino',
        score: 0,
        foulsGot: 0
    }
];

// Creo un array vuoto in cui metterò ogni squadra con nome e falli
// Evito la copia diretta con lo spread per usare meglio la destrutturazione
const footballTeamsCopy = [];

// Ciclo che scorre ogni squadra dell'array
for(let i = 0; i < footballTeams.length; i++){

    // Assegnazione della squadra corrente ad una variabile
    const currentTeam = footballTeams[i];

    // Ciclo for in che percorre la squadra corrente e modifica
    // score e foulsGot con numeri random (0-90 per score, 0-200 per foulsGot)
    for(let key in currentTeam){
        switch(key){
            case 'score':
                currentTeam.score = Math.floor(Math.random() * 91) + 0;
                break;
            case 'foulsGot':
                currentTeam.foulsGot = Math.floor(Math.random() * 201) + 0;
                break;     
        }
    }

    // Destrutturazione oggetto originale
    const {name, score, foulsGot} = currentTeam;

    // Creazione copia oggetto senza "score"
    const currentTeamCopy = {name, foulsGot};

    // Inserimento oggetto copiato nel nuovo array
    footballTeamsCopy.push(currentTeamCopy);

}

// Stampo in console team originale e copiato
console.log(footballTeams);
console.log(footballTeamsCopy);
