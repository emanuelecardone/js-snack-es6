// Variabile body
const pageBody = document.querySelector('body');

// Variabile header, main, timer container, timer e footer 
const pageHeader = document.createElement('header');

const pageMain = document.createElement('main');
const timerContainer = document.createElement('div');
const timer = document.createElement('div');
const timerDay = document.createElement('span');
const timerMinutes = document.createElement('span');

const pageFooter = document.createElement('footer');

// Classi di stile header, main, timer container, timer e footer
pageHeader.classList.add('w-100', 'h_100p');

pageMain.classList.add('w-100', 'd-flex', 'justify-content-center', 'align-items-center');
timerContainer.classList.add('w-75', 'h-75', 'd-flex', 'justify-content-center', 'align-items-center');
timer.classList.add('timer', 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center', 'fw-bold', 'fs-1');
timerDay.classList.add('day_text');
timerMinutes.classList.add('minute_text');

pageFooter.classList.add('w-100', 'h_100p');


 

// Inserimento in pagina header, main, timer container, timer e footer
pageBody.append(pageHeader, pageMain, pageFooter);
pageMain.appendChild(timerContainer);
timerContainer.appendChild(timer);
timer.append(timerDay, timerMinutes);


// Richiamo alla funzione che triggera il timer
getTimeInLoop();



// Funzione che triggera il timer
// Questa funzione si richiama da sola creando un loop ma con il ritardo di 1s
// Ogni secondo, riempio l'innerText del timer con l'ora attuale, quindi
// Ogni secondo che passa l'innerText con l'orario aumenterà di un secondo
function getTimeInLoop(){

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
    
    setTimeout(function(){getTimeInLoop()}, 1000);
}