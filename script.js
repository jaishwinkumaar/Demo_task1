
// =====================================
// ZENORA - JAVASCRIPT
// =====================================

// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", isOpen);
});

// CLOSE MENU AFTER CLICKING A LINK

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// CONTACT FORM VALIDATION

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const classType = document.getElementById("classType").value;

    if (name === "" || email === "" || classType === "") {
        formMessage.textContent = "Please fill in all the fields.";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    formMessage.textContent =
        `Thank you, ${name}! Your ${classType} trial request has been received.`;

    contactForm.reset();
});

// AUTOMATIC FOOTER YEAR

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();
