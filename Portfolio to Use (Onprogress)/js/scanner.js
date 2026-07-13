/* ==========================
   CYBER STARTUP SCANNER
========================== */

document.addEventListener(
"DOMContentLoaded",
() => {

initializeScanner();

}
);

/* ==========================
   INITIALIZE
========================== */

function initializeScanner(){

const loader =
document.getElementById("loader");

const progressBar =
document.querySelector(".loader-progress");

const percentText =
document.getElementById("loadingPercent");

if(
!loader ||
!progressBar ||
!percentText
){
return;
}

let progress = 0;

const bootSequence =
setInterval(() => {

progress += Math.floor(
Math.random() * 8
) + 2;

if(progress > 100){

progress = 100;

}

progressBar.style.width =
progress + "%";

percentText.textContent =
progress + "%";

if(progress >= 100){

clearInterval(
bootSequence
);

accessGranted(
loader,
percentText
);

}

}, 120);

}

/* ==========================
   ACCESS GRANTED
========================== */

function accessGranted(
loader,
percentText
){

percentText.innerHTML =

`
<span style="
color:#00FF88;
font-weight:bold;
letter-spacing:2px;
">
ACCESS GRANTED
</span>
`;

setTimeout(() => {

loader.style.opacity = "0";

loader.style.pointerEvents =
"none";

setTimeout(() => {

loader.style.display = "none";

}, 1000);

}, 1200);

}

/* ==========================
   OPTIONAL CONSOLE BOOT LOG
========================== */

const systemMessages = [

"SYSTEM ONLINE",
"LOADING MODULES",
"VERIFYING ASSETS",
"INITIALIZING UI",
"LOADING COMMAND CENTER",
"READY"

];

let delay = 0;

systemMessages.forEach(msg => {

setTimeout(() => {

console.log(
`%c${msg}`,
"color:#00F5FF;font-weight:bold;"
);

}, delay);

delay += 500;

});

/* ==========================
   OPTIONAL SOUND SUPPORT
========================== */

function playBootSound(){

// Future boot sound

console.log(
"Boot sound ready"
);

}

/* ==========================
   READY MESSAGE
========================== */

window.addEventListener(
"load",
() => {

console.log(
"%cACCESS GRANTED",
"color:#00FF88;font-size:18px;font-weight:bold;"
);

}
);