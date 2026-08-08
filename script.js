/* =========================================
   MOBILE MENU TOGGLE
========================================= */
const menuToggle = document.getElementById("menu-toggle");
const navLinksContainer = document.querySelector(".nav-links");

if (menuToggle && navLinksContainer) {
    menuToggle.addEventListener("click", () => {
        navLinksContainer.classList.toggle("active");
        const icon = menuToggle.querySelector("i");
        if (icon) {
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-xmark");
        }
    });

    // Close menu when clicking link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinksContainer.classList.remove("active");
            const icon = menuToggle.querySelector("i");
            if (icon) {
                icon.classList.add("fa-bars");
                icon.classList.remove("fa-xmark");
            }
        });
    });
}

/* =========================================
   STICKY NAVBAR
========================================= */
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(11, 17, 32, 0.95)";
    } else {
        header.style.background = "transparent";
    }
});

/* =========================================
   SMOOTH ACTIVE MENU
========================================= */
const sections = document.querySelectorAll("section[id]");
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
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/* =========================================
   COUNTER ANIMATION
========================================= */
const counters = document.querySelectorAll(".stat-box h2");
let animated = false;

const startCounter = () => {
    counters.forEach(counter => {
        const target = +counter.innerText.replace(/\D/g, '');
        let count = 0;
        const inc = Math.ceil(target / 80);

        const update = () => {
            count += inc;
            if (count < target) {
                counter.innerText = count + "+";
                setTimeout(update, 25);
            } else {
                counter.innerText = target + "+";
            }
        };
        update();
    });
};

window.addEventListener("scroll", () => {
    const statsSection = document.querySelector(".stats");
    if (statsSection && !animated) {
        const pos = statsSection.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            startCounter();
            animated = true;
        }
    }
});

/* =========================================
   CONTACT FORM HANDLER
========================================= */
const form = document.querySelector(".contact-form");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank You! Your enquiry has been received.");
        form.reset();
    });
}

/* =========================================
   BUTTON RIPPLE EFFECT
========================================= */
document.querySelectorAll(".gold-btn, .call-btn, .contact-form button, .outline-btn").forEach(btn => {
    btn.addEventListener("click", function (e) {
        const circle = document.createElement("span");
        const d = Math.max(this.clientWidth, this.clientHeight);
        circle.style.width = circle.style.height = d + "px";
        circle.style.left = e.offsetX - d / 2 + "px";
        circle.style.top = e.offsetY - d / 2 + "px";
        circle.classList.add("ripple");
        this.appendChild(circle);

        setTimeout(() => {
            circle.remove();
        }, 600);
    });
});

/* =========================================
   SCROLL TO TOP BUTTON
========================================= */
const scrollTopBtn = document.createElement("div");
scrollTopBtn.className = "scroll-top";
scrollTopBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* =========================================
   SERVICE CARD HOVER GLOW
========================================= */
document.querySelectorAll(".service-card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(59, 130, 246, 0.15), #151515 70%)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.background = "#151515";
    });
});

/* =========================================
   SECTION REVEAL Test
========================================= */
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll("section").forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    revealObserver.observe(section);
});