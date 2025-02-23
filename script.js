document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section");
    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 0;

    function showSection(sectionId) {
        sections.forEach(section => section.classList.remove("active"));

        const targetSection = document.querySelector(sectionId);
        if (targetSection) {
            targetSection.classList.add("active");
            window.scrollTo({
                top: targetSection.offsetTop - headerHeight,
                behavior: "smooth"
            });
            console.log("Navigating to:", sectionId);

            // Remove active class from all tabs
            navLinks.forEach(link => link.classList.remove("active"));

            // Add active class to the clicked tab
            document.querySelector(`.nav-links a[href="${sectionId}"]`)?.classList.add("active");
        } else {
            console.warn("Section not found:", sectionId);
        }
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href");
            showSection(sectionId);
        });
    });

    showSection("#home"); // Show home section by default

    // Debugging Core Values Section
    const coreValuesSection = document.querySelector(".core-values");
    if (coreValuesSection) {
        console.log("Core Values Section Found!");
        coreValuesSection.style.display = "block"; // Ensure it is visible
    } else {
        console.warn("Core Values Section NOT found in DOM.");
    }
});


 // Dropdown menu for "Services"
document.addEventListener("DOMContentLoaded", function () {
    const servicesBtn = document.getElementById("services-btn");
    const dropdownMenu = document.getElementById("dropdown-menu");

    if (servicesBtn && dropdownMenu) {
        servicesBtn.addEventListener("click", function (event) {
            event.preventDefault();
            dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
        });

        document.addEventListener("click", function (event) {
            if (!servicesBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.style.display = "none";
            }
        });
    } else {
        console.warn("Dropdown elements not found.");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const licensesBtn = document.getElementById("licenses-btn");
    const dropdownMenu = document.getElementById("dropdown");

    if (licensesBtn && dropdownMenu) {
        licensesBtn.addEventListener("click", function (event) {
            event.preventDefault();
            dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
        });

        document.addEventListener("click", function (event) {
            if (!licensesBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.style.display = "none";
            }
        });
    } else {
        console.warn("Dropdown elements not found.");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
