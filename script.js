// script.js
let currentSlide = 0;
const slides = document.getElementsByClassName("slide");

// Show the first slide initially
slides[currentSlide].style.display = "block";

// Function to change slide
function changeSlide(step) {
    slides[currentSlide].style.display = "none"; // Hide current slide
    currentSlide = (currentSlide + step + slides.length) % slides.length; // Update index
    slides[currentSlide].style.display = "block"; // Show new slide
}

// Automatic slideshow transition
setInterval(() => {
    changeSlide(1);
}, 5000); // Change slide every 5 seconds
