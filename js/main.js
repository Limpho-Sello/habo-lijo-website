/* ======================================
   HABO-LIJO MAIN JAVASCRIPT
====================================== */


/* ==========================
   MOBILE MENU
========================== */

const menuToggle =
document.querySelector(".menu-toggle");

const navLinks =
document.querySelector(".nav-links");

if(menuToggle){

    menuToggle.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle(
                "mobile-active"
            );

        }
    );

}


/* ==========================
   NAVBAR SCROLL EFFECT
========================== */

const navbar =
document.querySelector(".navbar");

window.addEventListener(
    "scroll",
    () => {

        if(window.scrollY > 50){

            navbar.style.boxShadow =
            "0 10px 25px rgba(0,0,0,.08)";

        }

        else{

            navbar.style.boxShadow =
            "0 3px 10px rgba(0,0,0,.05)";

        }

    }
);


/* ==========================
   SIMPLE SCROLL REVEAL
========================== */

const revealElements =
document.querySelectorAll(
    ".feature-card, .card, .about-preview"
);

function revealOnScroll(){

    revealElements.forEach(element => {

        const top =
        element.getBoundingClientRect().top;

        const windowHeight =
        window.innerHeight;

        if(top < windowHeight - 100){

            element.classList.add(
                "show"
            );

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();