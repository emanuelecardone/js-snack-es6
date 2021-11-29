const sunGlassesBrands = ['Ray-Ban', 'Armani', 'Polaroid', 'Oakley', 'VonZipper'];
// Lunghezza array
const arraySize = 100;
const modelsNumbers = getHundredNumbers(arraySize);

console.log(modelsNumbers);

// Array di oggetti (prezzi random da 100 a 500)
 const sunGlasses = modelsNumbers.map((element, index, array) => {
     console.log(index);
    return{
        brand: sunGlassesBrands[Math.floor(Math.random() * 5) + 0],
        model: `Model ${modelsNumbers[index]}`,
        price: Math.floor(Math.random() * 400 + 1) + 100     
    }; 
});

console.log(sunGlasses);

const rayBanGlasses = sunGlasses.filter((element, index, array) => {
    const {brand} = element;
    return brand === 'Ray-Ban';
});
const armaniGlasses = sunGlasses.filter((element, index, array) => {
    const {brand} = element;
    return brand === 'Armani';
});
const polaroidGlasses = sunGlasses.filter((element, index, array) => {
    const {brand} = element;
    return brand === 'Polaroid';
});
const oakleyGlasses = sunGlasses.filter((element, index, array) => {
    const {brand} = element;
    return brand === 'Oakley';
});
const vonZipperGlasses = sunGlasses.filter((element, index, array) => {
    const {brand} = element;
    return brand === 'VonZipper';
});

const glassesArraysList = [];
glassesArraysList.push(rayBanGlasses, armaniGlasses, polaroidGlasses, oakleyGlasses, vonZipperGlasses);

console.log(glassesArraysList);

// Variabile body
const pageBody = document.querySelector('body');

// Variabile header, timer container, main, object container, timer e footer 
const pageHeader = document.createElement('header');
const timerContainer = document.createElement('div');
const timer = document.createElement('div');
const timerMinutes = document.createElement('span');

const pageMain = document.createElement('main');
const objectContainer = document.createElement('div');    

const pageFooter = document.createElement('footer');

// Classi di stile header, timer container, main, object container, timer e footer
pageHeader.classList.add('w-100', 'h_100p');
timerContainer.classList.add('w-100', 'h-100', 'd-flex', 'justify-content-center', 'align-items-center');
timer.classList.add('timer', 'h-100', 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center', 'fw-bold', 'fs-1', 'rounded');
timerMinutes.classList.add('minute_text', 'p-5');

pageMain.classList.add('w-100', 'd-flex', 'justify-content-center', 'align-items-center');
objectContainer.classList.add('object_wrapper', 'w-50', 'h-50', 'd-flex', 'justify-content-center', 'align-items-center', 'text-center', 'fs-1');

pageFooter.classList.add('w-100', 'h_100p');

// Variabile active item
let activeObject = 0;

// Contatore per testo main
let myCounter = 0;



// Contenuto object wrapper
objectContainer.innerHTML = `<span class="object_text">
Brand: ${glassesArraysList[activeObject][activeObject].brand}<br>
Model: ${glassesArraysList[activeObject][activeObject].model}<br>
Price: ${glassesArraysList[activeObject][activeObject].price}         
</span>`;

// Inserimento in pagina header, timer container, main, object container, timer e footer
pageBody.append(pageHeader, pageMain, pageFooter);

pageHeader.appendChild(timerContainer);
timerContainer.appendChild(timer);
timer.appendChild(timerMinutes);

pageMain.appendChild(objectContainer);





// Richiamo alla funzione che triggera il timer
getTimeInLoop(activeObject, myCounter, glassesArraysList);



// Funzione che genera un array ordinato di numeri da 1 a 100
function getHundredNumbers(arrayLength){
    const numbersArray = []
    for(let i = 0; i < arrayLength; i++){
        numbersArray.push(i);
    }
    return (numbersArray);
}



// Funzione che triggera il timer e cambia activeObject ogni 5s
// Questa funzione si richiama da sola creando un loop ma con il ritardo di 1s
// Ogni secondo, riempio l'innerText del timer con l'ora attuale, quindi
// Ogni secondo che passa l'innerText con l'orario aumenterà di un secondo
function getTimeInLoop(thisActive, thisCounter, thisArray){

    
    
    
    // Contenuto timer
    const thisDate = new Date();
    let dateHour = thisDate.getHours();
    let dateMinute = thisDate.getMinutes();
    let dateSecond = thisDate.getSeconds();

    // Fix per i numeri inferiori a 10 (esempio:   10:5 -> 10:05 )
    dateHour = (dateHour < 10) ? dateHour = `0${dateHour}` : dateHour = dateHour;
    dateMinute = (dateMinute < 10) ? dateMinute = `0${dateMinute}` : dateMinute = dateMinute;
    dateSecond = (dateSecond < 10) ? dateSecond = `0${dateSecond}` : dateSecond = dateSecond;

    // Contenuto degli span
    document.querySelector('.minute_text').innerText = `${dateHour} : ${dateMinute} : ${dateSecond}`;
    
    if(thisCounter % 3 === 0){
         
        console.log(thisActive);
        
        const {brand, name, price} = thisArray[thisActive];

        const indexRandom = Math.floor(Math.random() * thisArray.length) + 0;
                                                                                                                                                              
        document.querySelector('.object_wrapper').innerHTML = `<span class="object_text">
        Brand: ${thisArray[indexRandom][Math.floor(Math.random() * thisArray[indexRandom].length) + 0].brand}<br>
        Model: ${thisArray[indexRandom][Math.floor(Math.random() * thisArray[indexRandom].length) + 0].model}<br>
        Price: ${thisArray[indexRandom][Math.floor(Math.random() * thisArray[indexRandom].length) + 0].price}         
        </span>`;
    }

    thisCounter++;
   
    setTimeout(function(){getTimeInLoop(thisActive, thisCounter, thisArray)}, 1000);
}