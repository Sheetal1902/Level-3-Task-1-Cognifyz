// script.js

// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Get modal elements
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

// Get all thumbnails
const thumbnails = document.querySelectorAll('.thumbnail');

// Add click event to each thumbnail to open the modal and display the clicked image
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        modal.style.display = 'flex';
        modalImg.src = this.src;
    });
});

// Add click event to the close button to close the modal
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Add click event to the window to close the modal when clicking outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
