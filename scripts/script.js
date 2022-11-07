// JavaScript Document
const header = document.querySelector("header");
const inputChecked = document.querySelector("input:nth-of-type(2)");
const boek = document.querySelector("article:first-of-type");
// const map = document.querySelector("article:nth-of-type(2)");

inputChecked.addEventListener("click", () => {
    addClassHeader();
});

function addClassHeader() {
    if (inputChecked.checked) {
        header.classList.add("open");

        header.addEventListener("transitionend", () => {
            header.classList.add("boek-open");
        });

        boek.addEventListener("transitionend", () => {
            boek.classList.add("map");
        });
    } 
}

const button = document.querySelectorAll("li > button");
const info = document.querySelector("li > div");

// button.addEventListener("click", openInfo);

button.forEach((item) => {
    console.log(item);
    item.addEventListener("click", () => {
        item.nextElementSibling.classList.toggle("open-info");
    });
});



const radios = document.querySelectorAll("input[type='radio']");

radios.forEach( radio => {
    radio.addEventListener("change", poohsInklappen);
});

function poohsInklappen() {
    const openPoohs = document.querySelectorAll(".open-info");

    openPoohs.forEach(openPooh => {
        openPooh.classList.remove("open-info");
    });
}

// info.forEach((i) => {
//     console.log(i);
//     i.addEventListener("click", () => {
//         i.contains("open-info").classList.remove("open-info");
//     });
// });

// function openInfo() {
//     console.log("Hewwooo");
//     button.classList.add("open-info");
// }

// https://greensock.com/morphsvg/ en https://greensock.com/forums/topic/18708-reverse-a-morph-and-then-fluidly-repeat-from-the-start/
TweenMax.to("#start", 2, {morphSVG: "#eind", ease: Sine.easeInOut, yoyo:true, repeat:-1});