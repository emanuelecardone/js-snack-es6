// Snack 1
// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.

// Creo 2 numeri random dal min al max dell'array, il secondo più grande del primo
// (l'if è per assicurarmi che num2 sia più grande al 100%)
// L'array nuovo comprende tutti i numeri compresi tra num1 e num2 (esclusi)
// se num1 e num2 sono consecutivi, l'array nuovo sarà vuoto

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

const num1 = Math.floor(Math.random() * (myArray.length - 1)) + 0;
let num2 = Math.floor(Math.random() * myArray.length) + 0;
if(!(num1 < num2)){
    num2 = num1 + 1;
} 
console.log(num1, num2);

// forEach
const myNewArray = [];
myArray.forEach((element, index, array) => {
    if(index > num1 && index < num2){
        myNewArray.push(element);
    }
});

console.log(myNewArray);

// filter
const myNewArray2 = myArray.filter((element, index, array) => {
    return index > num1 && index < num2;
});

console.log(myNewArray2);
