// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal nel DOM

// Creo una base molto semplice nel DOM per stampare
const textContainer = document.createElement('div');
textContainer.classList.add('w-50', 'h-50', 'border', 'border-5', 'border-success', 'd-flex', 'justify-content-center', 'align-items-center');
document.querySelector('body').classList.add('vh-100', 'd-flex', 'justify-content-center', 'align-items-center');
document.querySelector('body').appendChild(textContainer);

