/* ==========================
   CYBER NAVIGATION SYSTEM
========================== */

document.addEventListener(
"DOMContentLoaded",
() => {

initializeMobileNavigation();

}
);

/* ==========================
   INITIALIZE
========================== */

function initializeMobileNavigation(){

createHamburgerButton();

createOverlay();

attachEvents();

}

/* ==========================
   CREATE HAMBURGER
========================== */

function createHamburgerButton(){

const sidebar =
document.querySelector(".sidebar");

if(!sidebar) return;

const button =
document.createElement("button");

button.id = "menuToggle";

button.innerHTML = `

<span></span>
<span></span>
<span></span>

`;

document.body.appendChild(
button
);

}

/* ==========================
   CREATE OVERLAY
========================== */

function createOverlay(){

const overlay =
document.createElement("div");

overlay.id = "mobileOverlay";

document.body.appendChild(
overlay
);

}

/* ==========================
   EVENTS
========================== */

function attachEvents(){

const toggle =
document.getElementById(
"menuToggle"
);

const overlay =
document.getElementById(
"mobileOverlay"
);

const sidebar =
document.querySelector(
".sidebar"
);

if(!toggle || !overlay || !sidebar)
return;

toggle.addEventListener(
"click",
() => {

sidebar.classList.toggle(
"mobile-open"
);

overlay.classList.toggle(
"active"
);

toggle.classList.toggle(
"active"
);

}
);

overlay.addEventListener(
"click",
closeMenu
);

document.addEventListener(
"keydown",
(event)=>{

if(event.key === "Escape"){

closeMenu();

}

}
);

const links =
document.querySelectorAll(
".sidebar nav a"
);

links.forEach(link=>{

link.addEventListener(
"click",
()=>{

if(window.innerWidth <= 992){

closeMenu();

}

}
);

});

}

/* ==========================
   CLOSE MENU
========================== */

function closeMenu(){

const sidebar =
document.querySelector(
".sidebar"
);

const overlay =
document.getElementById(
"mobileOverlay"
);

const toggle =
document.getElementById(
"menuToggle"
);

if(sidebar){

sidebar.classList.remove(
"mobile-open"
);

}

if(overlay){

overlay.classList.remove(
"active"
);

}

if(toggle){

toggle.classList.remove(
"active"
);

}

}

/* ==========================
   RESIZE HANDLER
========================== */

window.addEventListener(
"resize",
()=>{

if(window.innerWidth > 992){

closeMenu();

}

}
);

/* ==========================
   DEBUG
========================== */

console.log(
"%cNAVIGATION MODULE READY",
"color:#8B5CF6;font-weight:bold;"
);