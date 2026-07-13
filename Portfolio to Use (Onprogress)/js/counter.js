/* ==========================
   ANIMATED METRIC COUNTERS
========================== */

const counterElements =
document.querySelectorAll(
".metric-card h2"
);

let countersStarted = false;

function startCounters(){

if(countersStarted) return;

countersStarted = true;

counterElements.forEach(counter=>{

const target =
parseInt(
counter.dataset.target
);

let current = 0;

const speed = 30;

const increment =
target / 60;

const updateCounter = ()=>{

if(current < target){

current += increment;

counter.textContent =
Math.floor(current);

requestAnimationFrame(
updateCounter
);

}else{

counter.textContent =
target;

if(target === 98){

counter.textContent =
target + "%";

}

if(target === 6){

counter.textContent =
target + "+";

}

if(target === 10){

counter.textContent =
target + "+";

}

}

};

updateCounter();

});

}

/* ==========================
   OBSERVER
========================== */

const metricsSection =
document.querySelector(".metrics");

if(metricsSection){

const metricObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startCounters();

}

});

},

{
threshold:0.4
}

);

metricObserver.observe(
metricsSection
);

}

/* ==========================
   RESET FUNCTION
========================== */

function resetCounters(){

counterElements.forEach(counter=>{

counter.textContent = "0";

});

countersStarted = false;

}

/* ==========================
   DEBUG
========================== */

console.log(
"%cCOUNTER SYSTEM READY",
"color:#00F5FF;font-weight:bold;"
);