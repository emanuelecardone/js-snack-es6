// Obiettivi
//
// (V) Creare uno slider a scorrimento contenente tutti i pianeti del sistema solare (preso spunto da un esercizio a lezione)
// (V) Per ogni pianeta, verranno visualizzati: nome, temperatura, satelliti, diametro equatoriale, periodo orbitale e velocità orbitale
// (V) L'utente ha la possibilità di scorrere i pianeti e visualizzare ogni caratteristica di essi 
// (V) Vedendo anche stampata una foto in pagina che corrisponde al pianeta attivo
// (V) Ci sarà poi una lista dei pianeti più piccola in alto, e anche lì l'active sarà evidenziato
// (V) Ci saranno 3 sfondi diversi a tema spazio, l'utente potrà cambiare sfondo quando vuole
// (V) Ogni pianeta deve avere una sezione "About" 
                             

// INIZIO

// BODY
const pageBody = document.querySelector('body');

// HEADER
const pageHeader = document.querySelector('header');
// Titolo header
// Variabile
const headerTitle = document.createElement('h1');
// Classi di stile
headerTitle.classList.add('header_title', 'text-white', 'text-center', 'fw-bold', 'text-uppercase');
// Contenuto
headerTitle.innerHTML = `
    the s<img src="img/sole.png" alt="immagine del sole" class="sun_img w_50p position-relative">lar system
`;
// Inserimento in pagina
pageHeader.appendChild(headerTitle);

// MAIN
const pageMain = document.querySelector('main');
// Container change theme, change theme, container titolo, container immagini, immagini
// container keys, ul keys, container infos, container arrows, arrows
// Variabili
const changeThemeContainer = document.createElement('div');
const changeThemeTitle = document.createElement('h4');
const changeThemeColorsContainer = document.createElement('div');
const changeThemeFluidContainer = document.createElement('div');
const changeThemeColorsRow = document.createElement('div');
const changeThemeBlueButton = document.createElement('button');
const changeThemePurpleButton = document.createElement('button');
const changeThemeGreenButton = document.createElement('button');
const planetTitleContainer = document.createElement('div');
const planetImageContainer = document.createElement('div');
const planetThumbsContainer = document.createElement('div');
const planetThumbsFluidContainer = document.createElement('div');
const planetThumbsRow = document.createElement('div');
const planetKeysContainer = document.createElement('div');
const keysList = document.createElement('ul');
const planetInfosContainer = document.createElement('div');
const planetInfosTextContainer = document.createElement('div');
const planetInfosLeftScrollDown = document.createElement('i');
const planetInfosRightScrollDown = document.createElement('i');
const sliderArrowsContainer = document.createElement('div');
const sliderLeftArrow = document.createElement('i');
const sliderMiddleTitle = document.createElement('h4');
const sliderRightArrow = document.createElement('i');

// Classi di stile
changeThemeContainer.classList.add('change_theme_wrapper',  'd-flex', 'flex-column', 'justify-content-around', 'justify-content-md-between', 'align-items-center', 'position-absolute')
changeThemeTitle.classList.add('change_theme_title', 'text-white', 'text-center', 'text-uppercase', 'mb-0', 'fw-bolder');
changeThemeColorsContainer.classList.add('change_theme_colors_wrapper', 'w_80', 'h-50', 'd-flex', 'justify-content-center', 'align-items-center');
changeThemeFluidContainer.classList.add('container-fluid', 'h-100');
changeThemeColorsRow.classList.add('row', 'row-cols-3', 'h-100');
changeThemeBlueButton.classList.add('btn', 'border', 'border-1', 'border-white', 'blue_button', 'w-100', 'h-100', 'p-0', 'text-white', 'fw-bolder', 'text-uppercase', 'text-center', 'blue_sky_bg');
changeThemePurpleButton.classList.add('btn', 'border', 'border-1', 'border-white', 'purple_button', 'w-100', 'h-100', 'p-0', 'text-white', 'fw-bolder', 'text-uppercase', 'text-center', 'purple_sky_bg');
changeThemeGreenButton.classList.add('btn', 'border', 'border-1', 'border-white', 'green_button', 'w-100', 'h-100', 'p-0', 'text-white', 'fw-bolder', 'text-uppercase', 'text-center', 'green_sky_bg');
sliderLeftArrow.classList.add('fs-1', 'text-white', 'fw-bolder', 'fas', 'fa-arrow-circle-left');
sliderMiddleTitle.classList.add('fs-4', 'text-white', 'fw-bolder', 'text-uppercase', 'mb-0', 'text-center');
sliderRightArrow.classList.add('fs-1', 'text-white', 'fw-bolder', 'fas', 'fa-arrow-circle-right');
sliderArrowsContainer.classList.add('slider_arrows_wrapper', 'h_10', 'd-flex', 'justify-content-between', 'align-items-center', 'position-absolute');
planetTitleContainer.classList.add('planet_title_wrapper', 'w-25', 'h_10', 'd-flex', 'justify-content-center', 'align-items-center', 'position-absolute', 'fs-1', 'text-white', 'fw-bolder');
planetImageContainer.classList.add('big_img_wrapper','d-flex', 'justify-content-center', 'align-items-center');
planetThumbsContainer.classList.add('planet_thumbs_wrapper', 'h_10', 'position-absolute');
planetThumbsFluidContainer.classList.add('container-fluid', 'h-100')
planetThumbsRow.classList.add('row', 'row-cols-8', 'h-100', );
planetKeysContainer.classList.add('planet_keys_wrapper', 'd-flex', 'justify-content-center', 'align-items-center');
keysList.classList.add('ps-0', 'mb-0', 'text-center', 'text-white', 'fw-bold');
planetInfosContainer.classList.add('planet_infos_wrapper', 'd-flex', 'justify-content-between', 'align-items-center');
planetInfosTextContainer.classList.add('planet_infos_text_wrapper', 'h-100', 'd-flex', 'justify-content-center', 'text-center', 'text-white', 'fw-bolder');
planetInfosLeftScrollDown.classList.add('left_info_scroll_down', 'text-white', 'fs-2', 'fw-bold', 'fas', 'fa-angle-double-down');
planetInfosRightScrollDown.classList.add('right_info_scroll_down', 'text-white', 'fs-2', 'fw-bold', 'fas', 'fa-angle-double-down');

// Contenuto
changeThemeTitle.innerText = 'change theme';
sliderMiddleTitle.innerText = 'see more';
changeThemeBlueButton.innerText = 'blue';
changeThemePurpleButton.innerText = 'purple';
changeThemeGreenButton.innerText = 'green';

// Inserimento in pagina
pageMain.append(changeThemeContainer, planetInfosContainer, planetTitleContainer, planetImageContainer, sliderArrowsContainer, planetThumbsContainer, planetKeysContainer);
changeThemeContainer.append(changeThemeTitle, changeThemeColorsContainer);
changeThemeColorsContainer.appendChild(changeThemeFluidContainer);
changeThemeFluidContainer.appendChild(changeThemeColorsRow);
planetThumbsContainer.appendChild(planetThumbsFluidContainer);
planetThumbsFluidContainer.appendChild(planetThumbsRow);
planetInfosContainer.append(planetInfosLeftScrollDown, planetInfosTextContainer, planetInfosRightScrollDown);

for(let i = 0; i < 8; i++){

    if(i < 3){
        const currentThemeCol = document.createElement('div');
        const currentButtonContainer = document.createElement('div');
        currentThemeCol.classList.add('col');
        currentButtonContainer.classList.add('w-100', 'h-100','d-flex', 'justify-content-center', 'align-items-center');
        changeThemeColorsRow.appendChild(currentThemeCol);
        currentThemeCol.appendChild(currentButtonContainer);
        switch(i){
            case 0:
                currentButtonContainer.appendChild(changeThemeBlueButton);
                break;
            case 1:
                currentButtonContainer.appendChild(changeThemePurpleButton);
                break;
            case 2:
                currentButtonContainer.appendChild(changeThemeGreenButton);        
                break;
        }
    }

    const currentThumbsCol = document.createElement('div');
    const currentSingleThumbContainer = document.createElement('div');
    currentThumbsCol.classList.add('col');
    currentSingleThumbContainer.classList.add('single_thumb_wrapper','w-100', 'h-100', 'd-flex', 'justify-content-center', 'align-items-center');
    planetThumbsRow.appendChild(currentThumbsCol);
    currentThumbsCol.appendChild(currentSingleThumbContainer);
    
}
planetKeysContainer.appendChild(keysList);
sliderArrowsContainer.append(sliderLeftArrow, sliderMiddleTitle, sliderRightArrow);

// FOOTER
const pageFooter = document.querySelector('footer');
// Sezione social
// Variabili
const socialContainer = document.createElement('div');
const socialFluidContainer = document.createElement('div');
const socialRow = document.createElement('div');
const twitterLink = document.createElement('a');
twitterLink.href = '#';
const facebookLink = document.createElement('a');
facebookLink.href = '#';
const instagramLink = document.createElement('a');
instagramLink.href = '#';
const linkedinLink = document.createElement('a');
linkedinLink.href = '#';
const twitterLogo = document.createElement('i');
const facebookLogo = document.createElement('i');
const instagramLogo = document.createElement('i');
const linkedinLogo = document.createElement('i');

// Classi di stile
socialContainer.classList.add('social_wrapper', 'h-50');
socialFluidContainer.classList.add('container-fluid', 'h-100');
socialRow.classList.add('row', 'row-cols-4', 'h-100');
twitterLogo.classList.add('fab', 'fa-twitter', 'text-white', 'fs-3');
facebookLogo.classList.add('fab', 'fa-facebook', 'text-white', 'fs-3');
instagramLogo.classList.add('fab', 'fa-instagram', 'text-white', 'fs-3');
linkedinLogo.classList.add('fab', 'fa-linkedin-in', 'text-white', 'fs-3');

// Inserimento in pagina
pageFooter.appendChild(socialContainer);
socialContainer.appendChild(socialFluidContainer);
socialFluidContainer.appendChild(socialRow);
for(let i = 0; i < 4; i++){
    const currentSocialCol = document.createElement('div');
    const currentSocialWrapper = document.createElement('div');

    currentSocialCol.classList.add('col');
    currentSocialWrapper.classList.add('w-100', 'h-100', 'd-flex', 'justify-content-center', 'align-items-center');

    currentSocialCol.appendChild(currentSocialWrapper);

    switch(i){
        case 0:
            currentSocialWrapper.appendChild(twitterLink);
            twitterLink.appendChild(twitterLogo);
            break;
        case 1:
            currentSocialWrapper.appendChild(facebookLink);
            facebookLink.appendChild(facebookLogo);
            break;
        case 2:
            currentSocialWrapper.appendChild(instagramLink);
            instagramLink.appendChild(instagramLogo);
            break;
        case 3:
            currentSocialWrapper.appendChild(linkedinLink);
            linkedinLink.appendChild(linkedinLogo);
            break;    
    }
    socialRow.appendChild(currentSocialCol);
    
}


// ARRAY SOLAR SYSTEM
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

// TESTI PER LA SEZIONE INFOS
const infosArray = [];
// Mercurio
const mercuryInfo = `
    <span class="info_text">
        Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun\'s planets. It is named after the Roman god Mercurius (Mercury), god of commerce, messenger of the gods, and mediator between gods and mortals, corresponding to the Greek god Hermes.
    </span>
`;
// Venere
const venusInfo = `
    <span class="info_text">
        Venus is the second closest planet to the Sun. It is referred to as Earth's sister planet due to its similar strcuture, size and mass. Although Venus is not the closest planet to the Sun (in which the title goes to Mercury), it is in fact the hottest. That's because Venus has a thick and dense atmosphere of carbon dioxide and sulphuric acid.
    </span>
`;
// Terra
const earthInfo = `
    <span class="info_text">
        Earth (often referred to as "the earth" and in Latin known as Tellus) is third planet in the Solar System in terms of distance from the Sun, and the fifth in order of size. It is the only planet in the universe known to man to harbour life of any kind, as it is the mass of land and sea that humans live in. It is the only structure of it's kind known in the universe. 
    </span>
`;
// Marte
const marsInfo = `
    <span class="info_text">
        Mars is a terrestrial planet, and is the fourth planet from the Sun. The high amounts of iron in its soil causes a red-orange color, which is why it is known as "the red planet". In Roman mythology, Mars was the god of war (taken from Greek mythology, Ares, the god of war) it is thought that the planet received this god's name because of its red color. 
    </span>
`;
// Giove
const jupiterInfo = `
    <span class="info_text">
        Jupiter is the fifth planet from the Sun and the largest within the solar system. Jupiter and the other gas giants—Saturn, Uranus, and Neptune—are sometimes referred to as "Jovian planets." Jupiter is usually the fourth brightest object in the sky (after the Sun, the Moon and Venus); however at times Mars appears brighter than Jupiter.
    </span>
`;
// Saturno
const saturnInfo = `
    <span class="info_text">
        Saturn is the sixth planet from the Sun. It is a gas giant (also known as a Jovian planet, after the planet Jupiter), the second-largest planet in the Solar System after Jupiter. Saturn has a prominent system of rings, consisting mostly of ice particles with a smaller amount of rocky debris and dust. It was named after the Roman God Saturn (the Greek mythology equivalent is Kronos, father of Zeus).
    </span>
`;
// Urano
const uranusInfo = `
    <span class="info_text">
        Uranus is the seventh planet from the Sun. It is a gas giant, the third largest by diameter and fourth largest by mass. It is named after Uranus, the Greek god of the sky and progenitor of the other gods. Uranus is unique in that it was the first planet discovered in modern times.
    </span>
`;
// Nettuno
const neptuneInfo = `
    <span class="info_text">
        Neptune is the eighth and last planet from the Sun in our solar system. It is an ice giant, as it has an outer layer of hydrogen, helium, methane, ammonia and water. Beneath this layer lies a thick mantle of chemical ices and a small core of rocky material. The atmosphere of Neptune is much stormier than Uranus' with winds up to 1,250 mph (2,000 km/h). It's color is blue.
    </span>
`;
infosArray.push(mercuryInfo, venusInfo, earthInfo, marsInfo, jupiterInfo, saturnInfo, uranusInfo, neptuneInfo);
        
        


// Oggetto attivo
let activeObject = 0;

// Richiamo alla macro funzione inserimento content iniziale
fillingContainersUp(solarSystem, activeObject);


// Richiamo alla funzione che inquadra il numero di keys
const numberOfKeys = getKeysAmount(solarSystem[activeObject]);
    
// Immagine grande active
document.getElementsByClassName('big_img')[activeObject].classList.add('active');
// Immagine piccola active
document.getElementsByClassName('thumb_img')[activeObject].classList.add('active');
// Titolo nome pianeta active
document.getElementsByClassName('main_planet_title')[activeObject].classList.add('active');
// "li" active
for(let i = 0; i < numberOfKeys - 1; i++){
    document.getElementsByClassName(`li_${activeObject}`)[i].classList.add('active');
}
// Info active
document.getElementsByClassName('info_text')[activeObject].classList.add('active');



// SEZIONE CHANGE THEME
// Blue button 
changeThemeBlueButton.addEventListener('click', function(){
    pageBody.classList.remove('purple_sky_bg', 'green_sky_bg');
    pageBody.classList.add('blue_sky_bg');
});
// Purple button
changeThemePurpleButton.addEventListener('click', function(){
    pageBody.classList.remove('blue_sky_bg', 'green_sky_bg');
    pageBody.classList.add('purple_sky_bg');
});
// Green button
changeThemeGreenButton.addEventListener('click', function(){
    pageBody.classList.remove('purple_sky_bg', 'blue_sky_bg');
    pageBody.classList.add('green_sky_bg');
});





// SEZIONE SLIDER
// Left arrow
sliderLeftArrow.addEventListener('click', function(){

    document.getElementsByClassName('big_img')[activeObject].classList.remove('active');
    document.getElementsByClassName('thumb_img')[activeObject].classList.remove('active');
    document.getElementsByClassName('main_planet_title')[activeObject].classList.remove('active');
    for(let i = 0; i < numberOfKeys - 1; i++){
        document.getElementsByClassName(`li_${activeObject}`)[i].classList.remove('active');
    }
    document.getElementsByClassName('info_text')[activeObject].classList.remove('active');

    activeObject = (activeObject > 0) ? activeObject - 1 : solarSystem.length - 1;
    
    document.getElementsByClassName('big_img')[activeObject].classList.add('active');
    document.getElementsByClassName('thumb_img')[activeObject].classList.add('active');
    document.getElementsByClassName('main_planet_title')[activeObject].classList.add('active');
    for(let i = 0; i < numberOfKeys - 1; i++){
        document.getElementsByClassName(`li_${activeObject}`)[i].classList.add('active');
    }
    document.getElementsByClassName('info_text')[activeObject].classList.add('active');
    
});

// Right arrow
sliderRightArrow.addEventListener('click', function(){

    document.getElementsByClassName('big_img')[activeObject].classList.remove('active');
    document.getElementsByClassName('thumb_img')[activeObject].classList.remove('active');
    document.getElementsByClassName('main_planet_title')[activeObject].classList.remove('active');
    for(let i = 0; i < numberOfKeys - 1; i++){
        document.getElementsByClassName(`li_${activeObject}`)[i].classList.remove('active');
    }
    document.getElementsByClassName('info_text')[activeObject].classList.remove('active');

    activeObject = (activeObject < solarSystem.length - 1) ? activeObject + 1 : 0;
    
    document.getElementsByClassName('big_img')[activeObject].classList.add('active');
    document.getElementsByClassName('thumb_img')[activeObject].classList.add('active');
    document.getElementsByClassName('main_planet_title')[activeObject].classList.add('active');
    for(let i = 0; i < numberOfKeys - 1; i++){
        document.getElementsByClassName(`li_${activeObject}`)[i].classList.add('active');
    }
    document.getElementsByClassName('info_text')[activeObject].classList.add('active');
});









// Macro funzione
// Funzione inserimento content
// Questa funzione aggiungerà anche il resto delle cose più avanti)
function fillingContainersUp(ListOfPlanets, thisObject){

    // Variabile per il pianeta corrente
    const currentActivePlanet = ListOfPlanets[thisObject];

    // AGGIUNTA IMMAGINI (grandi e thumbs)
    for(let i = 0; i < ListOfPlanets.length; i++){

        let currentSourceName;
        const currentPlanetImage = document.createElement('img');
        // Necessarie le 2 immagini diverse opppure non le aggiunge in entrambi i containers
        const currentSingleThumbContainer = document.getElementsByClassName('single_thumb_wrapper')[i];
        const currentPlanetThumb = document.createElement('img');
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
        currentPlanetThumb.src = `img/${currentSourceName}.png`;
        currentPlanetThumb.alt = `Immagine di ${currentSourceName}`;

        currentPlanetImage.classList.add('big_img', `${currentSourceName}_img`);
        currentPlanetThumb.classList.add('thumb_img', `${currentSourceName}_img`, 'position-relative');

        planetImageContainer.appendChild(currentPlanetImage);
        currentSingleThumbContainer.appendChild(currentPlanetThumb);
        
        // Variabile per il pianeta attuale
        const currentPlanet = ListOfPlanets[i];
        // Destrutturazione oggetto pianeta (Mi serve solo per il nome)
        const {name} = currentPlanet;

        // AGGIUNTA TITOLO NOME PIANETA
        const currentPlanetTitle = document.createElement('h2');
        currentPlanetTitle.classList.add('main_planet_title', 'fw-bold');
        currentPlanetTitle.innerText = name;
        planetTitleContainer.appendChild(currentPlanetTitle);
            
    
        // AGGIUNTA KEYS NELLA UL 
        
        // Richiamo alla funzione che fixa il camelCase nei nomi delle keys
        const fixedNamesList = getKeysLayoutName(currentActivePlanet);
        // Il giro parte da dopo name perché il name non fa parte della ul quindi deve saltarlo
        // mi serve un counter parallelo per gestire anche l'array di nomi fixati
        // Il counter dell'array può partire da 0 perché non contiene "name"
        let fixedNamesCounter = 0;
        for(let key in currentActivePlanet){
            if(!(key === 'name')){

                const currentKey = currentPlanet[key];
                const currentKeyListObject = document.createElement('li');
                const currentFixedName = fixedNamesList[fixedNamesCounter]; 
                currentKeyListObject.innerHTML = `${currentFixedName}: ${currentKey}`;
                currentKeyListObject.classList.add('mb-2', 'list_key_item', `li_${i}`);
                keysList.appendChild(currentKeyListObject);
                fixedNamesCounter++;
            }
        }

        // AGGIUNTA TESTI NELLA SEZIONE INFOS
        planetInfosTextContainer.innerHTML += infosArray[i];
        
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
                currentName = 'Equatorial Diameter';
                break;
            case 'orbitalPeriod':
                currentName = 'Orbital period';
                break;
            case 'orbitalSpeed':
                currentName = 'Orbital speed';
                break;            
        }
        if(!(key === 'name')){
            fixedNames.push(currentName);
        }
    }
    return fixedNames;
}

