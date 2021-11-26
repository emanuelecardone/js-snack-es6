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



