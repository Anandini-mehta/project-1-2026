/* =========================
   CUSTOM CURSOR
========================= */

const cursor = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (event) => {

    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";

});


/* =========================
   SCROLL REVEAL
========================= */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },

    {
        threshold: 0.15
    }

);

sections.forEach((section) => {
    observer.observe(section);
});


/* =========================
   CHARACTER PARALLAX
========================= */

const character = document.querySelector(".character-area");

document.addEventListener("mousemove", (event) => {

    if (!character) return;

    const x = (window.innerWidth / 2 - event.clientX) / 80;
    const y = (window.innerHeight / 2 - event.clientY) / 80;

    character.style.transform =
        `translate(${x}px, ${y}px)`;

});


/* =========================
   PROJECT CARD TILT
========================= */

const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 30;
        const rotateY = (centerX - x) / 30;

        card.style.transform =
            `perspective(700px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =========================
   SMOOTH NAVIGATION
========================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* =========================
   BLINKING CHARACTER
========================= */

const eyes = document.querySelectorAll(".eye");

function blink() {

    eyes.forEach((eye) => {
        eye.style.height = "1px";
    });

    setTimeout(() => {

        eyes.forEach((eye) => {
            eye.style.height = "8px";
        });

    }, 150);

}

setInterval(blink, 4000);
