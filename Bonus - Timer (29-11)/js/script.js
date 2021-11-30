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

// Contenuto timer iniziale
timerMinutes.innerText = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;

// Index random iniziale
const myIndexRandom = Math.floor(Math.random() * glassesArraysList.length) + 0;

// Contenuto object wrapper iniziale
objectContainer.innerHTML = `
    <span class="object_text">
        Brand: ${glassesArraysList[myIndexRandom][Math.floor(Math.random() * glassesArraysList[myIndexRandom].length) + 0].brand}<br>
        Model: ${glassesArraysList[myIndexRandom][Math.floor(Math.random() * glassesArraysList[myIndexRandom].length) + 0].model}<br>
        Price: ${glassesArraysList[myIndexRandom][Math.floor(Math.random() * glassesArraysList[myIndexRandom].length) + 0].price}         
    </span>
`;

// Inserimento in pagina header, timer container, main, object container, timer e footer
pageBody.append(pageHeader, pageMain, pageFooter);

pageHeader.appendChild(timerContainer);
timerContainer.appendChild(timer);
timer.appendChild(timerMinutes);

pageMain.appendChild(objectContainer);






// Funzione che triggera il timer
setInterval(function() {

    myCounter++;

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
    
    if(myCounter % 3 === 0){
         
        console.log(activeObject);
        
        const {brand, name, price} = glassesArraysList[activeObject];

        const indexRandom = Math.floor(Math.random() * glassesArraysList.length) + 0;
                                                                                                                                                              
        document.querySelector('.object_wrapper').innerHTML = `<span class="object_text">
            Brand: ${glassesArraysList[indexRandom][Math.floor(Math.random() * glassesArraysList[indexRandom].length) + 0].brand}<br>
            Model: ${glassesArraysList[indexRandom][Math.floor(Math.random() * glassesArraysList[indexRandom].length) + 0].model}<br>
            Price: ${glassesArraysList[indexRandom][Math.floor(Math.random() * glassesArraysList[indexRandom].length) + 0].price}         
        </span>`;
    }
}, 1000);



// Funzione che genera un array ordinato di numeri da 1 a 100
function getHundredNumbers(arrayLength){
    const numbersArray = []
    for(let i = 0; i < arrayLength; i++){
        numbersArray.push(i);
    }
    return (numbersArray);
}



