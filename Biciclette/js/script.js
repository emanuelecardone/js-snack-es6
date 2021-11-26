// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal nel DOM

// Creo una base molto semplice nel DOM per stampare
const textContainer = document.createElement('div');
textContainer.classList.add('w-50', 'h-50', 'border', 'border-5', 'border-success', 'd-flex', 'justify-content-center', 'align-items-center');
document.querySelector('body').classList.add('vh-100', 'd-flex', 'justify-content-center', 'align-items-center');
document.querySelector('body').appendChild(textContainer);

// Array di oggetti bike
const bicyclesArray = [
    {
        name: 'Adriatica',
        weight: 6
    },
    {
        name: 'FM-Bike',
        weight: 5
    },
    {
        name: 'Nilox',
        weight: 7.5
    },
    {
        name: 'Scout',
        weight: 9
    },
    {
        name: 'Nevi',
        weight: 4.5
    },
];

// Destrutturazione array
const [bikeOne, bikeTwo, bikeThree, bikeFour, bikeFive] = bicyclesArray;

// Variabili flag per individuare il peso minore e stampare il relativo nome
let currentLowestWeight = bikeOne.weight;
let currentBikeWithLowestWeight = bikeOne;

// Ciclo che percorre l'array e destrutturando l'oggetto, inquadra il peso minore e la bici corrispondente
for(let i = 0; i < bicyclesArray.length; i++){
    
    const currentBike = bicyclesArray[i];
    
    const {name, weight} = currentBike;

    if(weight < currentLowestWeight){
        currentLowestWeight = weight;
        currentBikeWithLowestWeight = currentBike;
    }

}

// Inserimento in pagina
textContainer.innerHTML = `
    <span class="text-success text-center fw-bold">La bici con peso minore è: ${currentBikeWithLowestWeight.name}<br>
        Peso: ${currentLowestWeight}
    </span>
`;


