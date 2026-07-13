/* ==========================
   CYBER DASHBOARD APP
========================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeNavigation();

});

/* ==========================
   NAVIGATION
========================== */

function initializeNavigation() {

    const navLinks =
        document.querySelectorAll(".sidebar nav a");

    navLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId =
                this.getAttribute("href");

            if (!targetId.startsWith("#")) return;

            e.preventDefault();

            const targetSection =
                document.querySelector(targetId);

            if (!targetSection) return;

            targetSection.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

            updateActiveLink(this);

        });

    });

}

/* ==========================
   ACTIVE LINK
========================== */

function updateActiveLink(activeLink) {

    const navLinks =
        document.querySelectorAll(".sidebar nav a");

    navLinks.forEach(link => {

        link.classList.remove("active");

    });

    activeLink.classList.add("active");

}

/* ==========================
   SCROLL SPY
========================== */

const sections =
    document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (

            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight

        ) {

            currentSection =
                section.getAttribute("id");

        }

    });

    const navLinks =
        document.querySelectorAll(".sidebar nav a");

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (href === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});

/* ==========================
   REVEAL ON SCROLL
========================== */

const revealElements =
    document.querySelectorAll(
        ".section-card, .metric-card, .analysis-panel"
    );

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "revealed"
                    );

                }

            });

        },

        {
            threshold: 0.1
        }

    );

revealElements.forEach(element => {

    observer.observe(element);

});

/* ==========================
   FUTURE MODAL SUPPORT
========================== */

function openModal() {

    console.log("Modal Open");

}

function closeModal() {

    console.log("Modal Close");

}

/* ==========================
   FUTURE CERTIFICATE VIEWER
========================== */

function openCertificate(name) {

    console.log(
        "Viewing Certificate:",
        name
    );

}

/* ==========================
   FUTURE PROJECT VIEWER
========================== */

function openProject(name) {

    console.log(
        "Viewing Project:",
        name
    );

}

/* ==========================
   DEBUG MESSAGE
========================== */

console.log(
    "%cMY PORTFOLIO SYSTEM ONLINE",
    "color:#00F5FF;font-size:16px;font-weight:bold;"
);