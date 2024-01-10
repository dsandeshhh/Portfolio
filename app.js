document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".hbjhdh-slider");
    const sliderNav = document.querySelector(".hbjhdh-slider-nav");

    let currentIndex = 0;
    const totalSlides = document.querySelectorAll(".hbjhdh-slider img").length;

    function showSlide(index) {
        currentIndex = index;
        const offset = -index * 100 + "%";
        slider.style.transform = "translateX(" + offset + ")";
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function createNavLinks() {
        for (let i = 1; i <= totalSlides; i++) {
            const link = document.createElement("a");
            link.href = "#slide-" + i;
            sliderNav.appendChild(link);
        }
    }

    createNavLinks();
    startAutoSlide();

    function startAutoSlide() {
        setInterval(nextSlide, 2000); // Change slide every 2000 milliseconds (2 seconds)
    }
});
