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
// Container titolo, container immagini, immagini, container keys, container infos, container arrows, arrows
// Variabili
const planetTitleContainer = document.createElement('div');
const planetImageContainer = document.createElement('div');
const planetKeysContainer = document.createElement('div');
const planetInfosContainer = document.createElement('div');
const sliderArrowsContainer = document.createElement('div');
const sliderLeftArrow = document.createElement('i');
const sliderMiddleTitle = document.createElement('h4');
const sliderRightArrow = document.createElement('i');



// Classi di stile
sliderLeftArrow.classList.add('fs-1', 'text-white', 'fw-bolder', 'fas', 'fa-arrow-circle-left');
sliderMiddleTitle.classList.add('fs-4', 'text-white', 'fw-bolder', 'text-uppercase', 'mb-0');
sliderRightArrow.classList.add('fs-1', 'text-white', 'fw-bolder', 'fas', 'fa-arrow-circle-right');
sliderArrowsContainer.classList.add('slider_arrows_wrapper', 'w-25', 'h_10', 'd-flex', 'justify-content-between', 'align-items-center', 'position-absolute');
planetTitleContainer.classList.add('planet_title_wrapper', 'w-25', 'h_10', 'd-flex', 'justify-content-center', 'align-items-center', 'position-absolute', 'fs-1', 'text-white', 'fw-bolder');
planetImageContainer.classList.add('w-25', 'h-50', 'd-flex', 'justify-content-center', 'align-items-center');
planetKeysContainer.classList.add('w-25', 'h-50', 'd-flex', 'justify-content-center', 'align-items-center');
planetInfosContainer.classList.add('planet_infos_wrapper', 'w-25', 'h-50', 'd-flex', 'justify-content-center', 'align-items-center', 'text-center', 'text-white', 'fw-bolder')

// Contenuto
sliderMiddleTitle.innerHTML = 'see more';

// Inserimento in pagina
pageMain.append(planetInfosContainer, planetTitleContainer, planetImageContainer, sliderArrowsContainer, planetKeysContainer);

sliderArrowsContainer.append(sliderLeftArrow, sliderMiddleTitle, sliderRightArrow);

// FOOTER
const pageFooter = document.querySelector('footer');


// Array del Sistema Solare contenente i pianeti (oggetti)
const solarSystem = [
    {
        name: 'Mercury',
        temperature: 166.85,
        satellites: 0,
        equatorialDiameter: 4879.4,
        orbitalPeriod: 87.96,
        orbitalSpeed: 47.36
    },
    {
        name: 'Venus',
        temperature: 463.85,
        satellites: 0,
        equatorialDiameter: 12103.7,
        orbitalPeriod: 	224.70,
        orbitalSpeed: 35.02	
    },
    {
        name: 'Earth',
        temperature: 19.85,
        satellites: 1,
        equatorialDiameter: 12756.2,
        orbitalPeriod: 365.25,
        orbitalSpeed: 29.786
    },
    {
        name: 'Mars',
        temperature: -87.15,
        satellites: 2,
        equatorialDiameter: 6804.9,
        orbitalPeriod: 686.96,
        orbitalSpeed: 24.131
    },
    {
        name: 'Jupiter',
        temperature: -121.15,
        satellites: 79,
        equatorialDiameter: 142984,
        orbitalPeriod: 11.86,
        orbitalSpeed: 13.070
    },
    {
        name: 'Saturn',
        temperature: -130.15,
        satellites: 82,
        equatorialDiameter: 120536,
        orbitalPeriod: 29.45,
        orbitalSpeed: 9.672
    },
    {
        name: 'Uranus',
        temperature: -205.15,
        satellites: 27,
        equatorialDiameter: 51118,
        orbitalPeriod: 84.07,
        orbitalSpeed: 6.836
    },
    {
        name: 'Neptune',
        temperature: -220.15,
        satellites: 14,
        equatorialDiameter: 49528,
        orbitalPeriod: 164.88,
        orbitalSpeed: 5.478
    }
];


// TEST


// Richiamo funzione per immagini
fillingContainersUp(solarSystem);





// Questa funzione aggiungerà anche il resto delle cose più avanti)
function fillingContainersUp(ListOfPlanets){



    // Aggiunta immagini
    for(let i = 0; i < ListOfPlanets.length; i++){

        let currentSourceName;
        const currentPlanetImage = document.createElement('img');
        switch(i){
            case 0:
                currentSourceName = 'mercurio';
                break;
            case 1:
                currentSourceName = 'venere';
                break;
            case 2:
                currentSourceName = 'terra';
                break;
            case 3:
                currentSourceName = 'marte';
                break;
            case 4:
                currentSourceName = 'giove';
                break;
            case 5:
                currentSourceName = 'saturno';
                break;
            case 6:
                currentSourceName = 'urano';
                break;
            case 7:
                currentSourceName = 'nettuno';
                break;                            
        }
        currentPlanetImage.src = `img/${currentSourceName}.png`;
        currentPlanetImage.alt = `Immagine di ${currentSourceName}`;
        currentPlanetImage.classList.add('img-fluid', 'big_img', `${currentSourceName}_img`);
        planetImageContainer.appendChild(currentPlanetImage);
    }



    let activeObject = 0;
    const currentPlanet = solarSystem[activeObject];
    planetTitleContainer.innerHTML = currentPlanet.name;

    // Immagine active
    document.getElementsByClassName('big_img')[activeObject].classList.add('active');

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
            currentKeyListObject.classList.add('mb-2');
            const currentFixedName = fixedNamesList[fixedNamesCounter]; 
            currentKeyListObject.innerHTML = `${currentFixedName}: ${currentKey}`;
            keysList.appendChild(currentKeyListObject);
            fixedNamesCounter++;
        }
    }

    // Riempimento sezione infos (da rendere invisibile e disponibile solo al click più tardi)
    planetInfosContainer.innerHTML = `
    <span>
        Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun\'s planets. It is named after the Roman god Mercurius (Mercury), god of commerce, messenger of the gods, and mediator between gods and mortals, corresponding to the Greek god Hermes.
    </span>
    `;

    
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

