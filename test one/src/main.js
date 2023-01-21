const buttonL= document.getElementById("about");
const outputL = document.getElementById("left");
buttonL.addEventListener('click', function (){
outputL.classList.toggle('hadden');
});
const buttonR= document.getElementById("contact");
const outputR = document.getElementById("right");
buttonR.addEventListener('click', function (){
outputR.classList.toggle('hadden');
});