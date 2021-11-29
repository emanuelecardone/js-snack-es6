// Snack 2
// Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
// let students = [
//     { name: 'Marco', id: 213, grades: 78 },
//     { name: 'Paola', id: 110, grades: 96 },
//     { name: 'Andrea', id: 250, grades: 48 },
//     { name: 'Gaia', id: 145, grades: 74 },
//     { name: 'Luigi', id: 196, grades: 68 },
//     { name: 'Piero', id: 102, grades: 50 },
//     { name: 'Francesca', id: 120, grades: 84 },
//   ];

// 1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. 
    // Ci serve quindi un nuovo array di stringhe. 
    // Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
// 2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
// 3-  Dobbiamo creare un nuovo array di tutti gli studenti 
    // che hanno un totale di voti superiore a 70 e id superiore a 120


let students = [
  { name: 'Marco', id: 213, grades: 78 },
  { name: 'Paola', id: 110, grades: 96 },
  { name: 'Andrea', id: 250, grades: 48 },
  { name: 'Gaia', id: 145, grades: 74 },
  { name: 'Luigi', id: 196, grades: 68 },
  { name: 'Piero', id: 102, grades: 50 },
  { name: 'Francesca', id: 120, grades: 84 },
];

// 1
const studentsNames = students.map((element, index, array) => {
    const {name} = element;
    return name.toUpperCase();
});

console.log(studentsNames);

// 2
const over70Grades = students.filter((element, index, array) => {
    const {grades} = element;
    return grades > 70;
});

console.log(over70Grades);

// 3 
// lavoro copiando dal secondo array, ma potrei copiare dal primo
// lavorando col secondo array ho già una selezione per voti over 70
// Quindi impongo come condizione solo l'id
// Se lavoravo col primo array dovevo imporre grades > 70 && id > 120
const over70Grades120Id = over70Grades.filter((element, index, array) => {
    const {id} = element;
    return id > 120;
});

console.log(over70Grades120Id);