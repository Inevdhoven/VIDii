// JavaScript Document
// TRANSITIE HEADER EN MAP
// Hier worden variabelen aangemaakt voor de header, tweede input veld en de eerste article
const header = document.querySelector("header");
const inputChecked = document.querySelector("input:nth-of-type(2)");
const boek = document.querySelector("article:first-of-type");

// Wanneer er op het inputveld geklikt word word de functie addClassHeader opgeroepen
inputChecked.addEventListener("click", () => {
    addClassHeader();
});

function addClassHeader() {
    // Wanneer inputChecked checked is
    if (inputChecked.checked) {
        // Dan wordt de klass open aan de header toegevoegd
        header.classList.add("open");

        // Als de transitie van de header is afgelopen
        header.addEventListener("transitionend", () => {
            // Wordt de class boek-open op de header gezet
            header.classList.add("boek-open");
        });

        // Wanneer de transitie van het boek is afgelopen
        boek.addEventListener("transitionend", () => {
            // Word er een class toegevoegd op het boek
            boek.classList.add("map");
        });
    } 
}

// ZORGEN DAT INFORMATIE OVER DE WINNIE THE POOHS WORDT LATEN ZIEN
// Alle button direct in de li worden opgehaald
const button = document.querySelectorAll("li > button");

// De buttons worden los gehaald
button.forEach((item) => {
    // Wanneer je op een button klikt
    item.addEventListener("click", () => {
        // Eerst de class open-info verwijderen
        poohsInklappen();
        // Van de button waar op geklikt word op het broertje/zusje de class open-info gezet
        item.nextElementSibling.classList.toggle("open-info");
    });
});

// Haalt alle radio inputs op
const radios = document.querySelectorAll("input[type='radio']");

// Maakt de radio inputs los van elkaar
radios.forEach( radio => {
    // Wanneer de input veranderd word de functie poohsInklappen uitgevoerd
    radio.addEventListener("change", poohsInklappen);
});

function poohsInklappen() {
    // Alle elementen met de class open-info worden opgehaald
    const openPoohs = document.querySelectorAll(".open-info"); 

    // Zorgt ervoor dat het losse elementen worden
    openPoohs.forEach(openPooh => {
        // De class open-info word verwijderd
        openPooh.classList.remove("open-info");
    });
}

// ACHTERKANT HONING WORDT BLOED
// De een na laatste, laatste input en de svg ophalen
const inputAchterkant = document.querySelector("main article input:nth-of-type(3)");
const inputMap = document.querySelector("main article input:last-of-type");
const svg = document.querySelector("svg");

// Wanneer er op de inputs word geklikt word er een functie afgespeeld
inputMap.addEventListener("click", horror);
inputAchterkant.addEventListener("click", removeHorror);

// Toeveogen van de class horror
function horror() {
    svg.classList.add("horror");
}

// Verwijderen van de class horror
function removeHorror() {
    svg.classList.remove("horror");
}

// AUDIO AFSPELEN WANNEER BOEK GEOPENT IS
// Source voor audio https://stackoverflow.com/questions/9419263/how-to-play-audio
const inputKaft = document.querySelector("main article input:nth-of-type(2)");
const inputBinnen = document.querySelector("main article input:first-of-type");
const audio = new Audio("./audio/audio-film.mp3");

//Wanneer je op een van de iputs klikt word de audio op play gezet of gepauseerd
inputKaft.addEventListener("click", playAudio);
inputMap.addEventListener("click", pauseAudio);
inputBinnen.addEventListener("click", pauseAudio);
inputAchterkant.addEventListener("click", playAudio);

function playAudio() {
    // Source https://stackoverflow.com/questions/37674223/domexception-failed-to-load-because-no-supported-source-was-found
    // Wanneer de audio niet undefined is.. Verder snap ik deze niet helemaal
    if (audio.play() !== undefined) {
        audio.play().then(function() {
          // Automatic playback started!
        }).catch(function(error) {
          // Automatic playback failed.
        });
    }
}

function pauseAudio() {
    audio.pause();
}

// SVG ANIMATIE
// Dit zorgt ervoor dat er van de honing een animatie word gemaakt door het start en eind path te pakken en daartussen te animeren
// De rest zorgt ervoor dat hij elke keer opnieuw door blijft gaan
// https://greensock.com/morphsvg/ en https://greensock.com/forums/topic/18708-reverse-a-morph-and-then-fluidly-repeat-from-the-start/
TweenMax.to("#start", 2, {morphSVG: "#eind", ease: Sine.easeInOut, yoyo:true, repeat:-1});