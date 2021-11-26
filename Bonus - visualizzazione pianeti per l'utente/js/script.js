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
