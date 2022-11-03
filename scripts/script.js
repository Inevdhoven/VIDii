// JavaScript Document
console.log("Howdy!");

// https://greensock.com/morphsvg/ en https://greensock.com/forums/topic/18708-reverse-a-morph-and-then-fluidly-repeat-from-the-start/
TweenMax.to("#start", 2, {morphSVG: "#eind", ease: Sine.easeInOut, yoyo:true, repeat:-1});