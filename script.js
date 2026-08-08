/*=========================================
       STICKY NAVBAR
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(10,10,10,.95)";
        header.style.backdropFilter = "blur(18px)";
        header.style.transition = ".35s";

    } else {

        header.style.background = "transparent";

    }

});


/*=========================================
        SMOOTH ACTIVE MENU
=========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (window.pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=========================================
        FADE UP ANIMATION
=========================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: .2
});

document.querySelectorAll(

    ".hero-card,.service-card,.highlight-card,.why-card,.process-box,.stat-box,.office-box,.about-image,.about-content"

).forEach(el => {

    el.classList.add("fade-up");

    observer.observe(el);

});


/*=========================================
        COUNTER
=========================================*/

const counters = document.querySelectorAll(".stat-box h2");

const speed = 200;

counters.forEach(counter => {

    const update = () => {

        const target = counter.innerText.replace(/\D/g, '');

        const count = +counter.innerText.replace(/\D/g, '');

        const inc = target / speed;

        if (count < target) {

            counter.innerText = Math.ceil(count + inc) + "+";

            setTimeout(update, 20);

        }

    }

    update();

});


/*=========================================
        CONTACT FORM
=========================================*/

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        alert("Thank You! Your enquiry has been received.");

        form.reset();

    });

}


/*=========================================
        BUTTON RIPPLE
=========================================*/

document.querySelectorAll("button,.gold-btn,.call-btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-4px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0px)";

    });

});


/*=========================================
        IMAGE PARALLAX
=========================================*/

window.addEventListener("mousemove", (e) => {

    const img = document.querySelector(".hero-image img");

    if (!img) return;

    let x = (window.innerWidth / 2 - e.pageX) / 40;

    let y = (window.innerHeight / 2 - e.pageY) / 40;

    img.style.transform = `translate(${x}px,${y}px) scale(1.02)`;

});

/*==================================================
            SCROLL TO TOP BUTTON
==================================================*/

const scrollTopBtn = document.createElement("div");

scrollTopBtn.className = "scroll-top";

scrollTopBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*==================================================
            HERO TYPING EFFECT
==================================================*/

const typingElement = document.querySelector(".hero-left h3");

if (typingElement) {

    const text = typingElement.innerText;

    typingElement.innerHTML = "";

    let i = 0;

    function typing() {

        if (i < text.length) {

            typingElement.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing, 60);

        }

    }

    typing();

}


/*==================================================
            SERVICE CARD HOVER GLOW
==================================================*/

document.querySelectorAll(".service-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const x = e.offsetX;
        const y = e.offsetY;

        card.style.background = `radial-gradient(circle at ${x}px ${y}px,
        rgba(212,175,55,.18),
        #151515 60%)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "#151515";

    });

});


/*==================================================
            HERO IMAGE FLOAT
==================================================*/

const heroImg = document.querySelector(".hero-image");

if (heroImg) {

    let up = true;

    setInterval(() => {

        heroImg.style.transform = up
            ? "translateY(-10px)"
            : "translateY(0px)";

        up = !up;

    }, 1800);

}


/*==================================================
            NAVBAR SHADOW
==================================================*/

window.addEventListener("scroll", () => {

    const nav = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        nav.style.boxShadow =
            "0 10px 40px rgba(0,0,0,.45)";

    } else {

        nav.style.boxShadow = "none";

    }

});


/*==================================================
            SECTION REVEAL
==================================================*/

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(60px)";

    section.style.transition = ".9s ease";

    revealObserver.observe(section);

});


/*==================================================
            BUTTON RIPPLE EFFECT
==================================================*/

document.querySelectorAll(".gold-btn,.call-btn,.contact-form button").forEach(btn => {

    btn.addEventListener("click", function(e) {

        const circle = document.createElement("span");

        const d = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = circle.style.height = d + "px";

        circle.style.left = e.offsetX - d / 2 + "px";

        circle.style.top = e.offsetY - d / 2 + "px";

        circle.classList.add("ripple");

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        }, 700);

    });

});


/*==================================================
            LOADER
==================================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/*==================================================
            CONSOLE MESSAGE
==================================================*/

console.log(

"⚖️ Advocate Ankit Tyagi & Associates Website Loaded Successfully"

);