/* ==========================
   LIVE CYBER CLOCK
========================== */

function updateClock() {

    const clockElement =
        document.getElementById("liveClock");

    if (!clockElement) return;

    const now = new Date();

    const hours =
        String(now.getHours())
        .padStart(2, "0");

    const minutes =
        String(now.getMinutes())
        .padStart(2, "0");

    const seconds =
        String(now.getSeconds())
        .padStart(2, "0");

    clockElement.textContent =
        `${hours}:${minutes}:${seconds}`;

}

/* ==========================
   INITIALIZE CLOCK
========================== */

updateClock();

setInterval(
    updateClock,
    1000
);

/* ==========================
   OPTIONAL DATE SUPPORT
========================== */

function getCurrentDate() {

    const now = new Date();

    return now.toLocaleDateString(
        "en-US",
        {

            year: "numeric",
            month: "short",
            day: "numeric"

        }

    );

}

console.log(
    "System Date:",
    getCurrentDate()
);

/* ==========================
   STATUS CHECK
========================== */

window.addEventListener(
    "online",
    () => {

        console.log(
            "%cSYSTEM ONLINE",
            "color:#00FF88;font-weight:bold;"
        );

    }
);

window.addEventListener(
    "offline",
    () => {

        console.log(
            "%cSYSTEM OFFLINE",
            "color:red;font-weight:bold;"
        );

    }
);
function updateDate() {

    const dateElement =
        document.getElementById("liveDate");

    if (!dateElement) return;

    const now = new Date();

    dateElement.textContent =
        now.toLocaleDateString(
            "en-US",
            {

                year: "numeric",
                month: "short",
                day: "numeric"

            }
        );

}

updateDate();