// Obiettivi
//
// Creare uno slider a scorrimento contenente tutti i pianeti del sistema solare (preso spunto da un esercizio a lezione)
// Per ogni pianeta, verranno visualizzati: nome, temperatura, satelliti, diametro equatoriale, periodo orbitale e velocità orbitale
// L'utente ha la possibilità di scorrere i pianeti e visualizzare ogni caratteristica di essi 
// Vedendo anche stampata una foto in pagina che corrisponde al pianeta attivo
// Ci sarà poi una lista dei pianeti più piccola in alto, e anche lì l'active sarà evidenziato
// Ci saranno 3 sfondi diversi a tema spazio, l'utente potrà cambiare sfondo quando vuole
// Ogni pianeta deve avere una sezione "About" che appare/scompare al click nella quale si parla del pianeta con info aggiunte
// L'utente può cambiare nome a ciascun pianeta attivo quando vuole
                                

// INIZIO 

// HEADER
const pageHeader = document.querySelector('header');

// MAIN
const pageMain = document.querySelector('main');
// Container titolo, container immagine, immagine, container keys, container infos, container arrows, arrows
// Variabili
const planetTitleContainer = document.createElement('div');
const planetImageContainer = document.createElement('div');
const planetKeysContainer = document.createElement('div');
const planetInfosContainer = document.createElement('div');
const sliderArrowsContainer = document.createElement('div');
const sliderLeftArrow = document.createElement('i');
const sliderRightArrow = document.createElement('i');
const planetImage = document.createElement('img');

// Attributi immagine (da completare dopo quando aggiungo le altre)
planetImage.src = 'img/mercurio.png';
planetImage.alt = 'Immagine di Mercurio';

// Classi di stile
sliderLeftArrow.classList.add('fs-1', 'text-white', 'fw-bolder', 'fas', 'fa-arrow-circle-left');
sliderRightArrow.classList.add('fs-1', 'text-white', 'fw-bolder', 'fas', 'fa-arrow-circle-right');
sliderArrowsContainer.classList.add('slider_arrows_wrapper', 'border', 'border-5', 'border-white', 'w-25', 'h_10', 'd-flex', 'justify-content-between', 'align-items-center', 'position-absolute');
planetTitleContainer.classList.add('planet_title_wrapper', 'border', 'border-5', 'border-white', 'w-25', 'h_10', 'd-flex', 'justify-content-center', 'align-items-center', 'position-absolute', 'fs-1', 'text-white', 'fw-bolder');
planetImageContainer.classList.add('w-25', 'h-50', 'd-flex', 'justify-content-center', 'align-items-center');
planetImage.classList.add('img-fluid');
planetKeysContainer.classList.add('border', 'border-5', 'border-white', 'w-25', 'h-50', 'd-flex', 'justify-content-center', 'align-items-center');
planetInfosContainer.classList.add('border', 'border-5', 'border-white', 'w-25', 'h-25', 'd-flex', 'justify-content-center', 'align-items-center')

// Inserimento in pagina
pageMain.append(planetInfosContainer, planetTitleContainer, planetImageContainer, sliderArrowsContainer, planetKeysContainer);
planetImageContainer.appendChild(planetImage);
sliderArrowsContainer.append(sliderLeftArrow, sliderRightArrow);

// FOOTER
const pageFooter = document.querySelector('footer');


// Array del Sistema Solare contenente i pianeti (oggetti)
const solarSystem = [
    {
        name: 'Mercurio',
        temperature: 166.85,
        satellites: 0,
        equatorialDiameter: 4879.4,
        orbitalPeriod: 87.96,
        orbitalSpeed: 47.36
    },
    {
        name: 'Venere',
        temperature: 463.85,
        satellites: 0,
        equatorialDiameter: 12103.7,
        orbitalPeriod: 	224.70,
        orbitalSpeed: 35.02	
    },
    {
        name: 'Terra',
        temperature: 19.85,
        satellites: 1,
        equatorialDiameter: 12756.2,
        orbitalPeriod: 365.25,
        orbitalSpeed: 29.786
    },
    {
        name: 'Marte',
        temperature: -87.15,
        satellites: 2,
        equatorialDiameter: 6804.9,
        orbitalPeriod: 686.96,
        orbitalSpeed: 24.131
    },
    {
        name: 'Giove',
        temperature: -121.15,
        satellites: 79,
        equatorialDiameter: 142984,
        orbitalPeriod: 11.86,
        orbitalSpeed: 13.070
    },
    {
        name: 'Saturno',
        temperature: -130.15,
        satellites: 82,
        equatorialDiameter: 120536,
        orbitalPeriod: 29.45,
        orbitalSpeed: 9.672
    },
    {
        name: 'Urano',
        temperature: -205.15,
        satellites: 27,
        equatorialDiameter: 51118,
        orbitalPeriod: 84.07,
        orbitalSpeed: 6.836
    },
    {
        name: 'Nettuno',
        temperature: -220.15,
        satellites: 14,
        equatorialDiameter: 49528,
        orbitalPeriod: 164.88,
        orbitalSpeed: 5.478
    }
];


// TEST
let activeObject = 0;
const currentPlanet = solarSystem[activeObject];
planetTitleContainer.innerHTML = currentPlanet.name;

const numberOfKeys = getKeysAmount(currentPlanet);
console.log(numberOfKeys);

const keysList = document.createElement('ul');
keysList.classList.add('ps-0', 'mb-0', 'text-center', 'text-white', 'fw-bold');
planetKeysContainer.appendChild(keysList);

const fixedNamesList = getKeysLayoutName(currentPlanet);


// Il giro parte da dopo name perché il name non fa parte della ul quindi deve saltarlo
// mi serve un counter parallelo per gestire anche l'array di nomi fixati
// Il counter dell'array può partire da 0 perché non contiene "name"
let fixedNamesCounter = 0;
for(let key in currentPlanet){
    if(!(key === 'name')){

        const currentKey = currentPlanet[key];
        const currentKeyListObject = document.createElement('li');
        const currentFixedName = fixedNamesList[fixedNamesCounter]; 
        currentKeyListObject.innerHTML = `${currentFixedName}: ${currentKey}`;
        keysList.appendChild(currentKeyListObject);
        fixedNamesCounter++;
    }
}


// Ritorna numero chiavi (da descrivere bene dopo)
function getKeysAmount (currentObject){
    let keysAmount = 0;
    for(let key in currentObject){
        keysAmount++;
    }
    return keysAmount;
}

// Fixa il nome delle keys per evitare il camelCase in pagina (da descrivere bene dopo)
// Il name non serve
function getKeysLayoutName (currentObject){
    const fixedNames = [];
    for(let key in currentObject){
        let currentName; 
        switch(key){
            case 'temperature':
                currentName = 'Temperature';
                break;
            case 'satellites':
                currentName = 'Satellites';
                break;
            case 'equatorialDiameter':
                currentName = 'Equatorial Diameter'
                break;
            case 'orbitalPeriod':
                currentName = 'Orbital period'
                break;
            case 'orbitalSpeed':
                currentName = 'Orbital speed'
                break;            
        }
        if(!(key === 'name')){
            fixedNames.push(currentName);
        }
    }
    return fixedNames;
}

