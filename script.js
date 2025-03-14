document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".container");

    function fadeInOnScroll() {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();
});
