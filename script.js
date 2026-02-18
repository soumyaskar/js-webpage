
//browser alert
const ctabutton=document.getElementById("ctaButton");
ctabutton.addEventListener('click' ,function(){
    alert("Welcome To My Website");

});
//nav bar

const menuToggle= document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click',function(){
    navLinks.classList.toggle('active');
})
//card sliding
const cardsContainer=document.getElementById('cardsContainer');
const scrollLeft= document.getElementById('scrollLeft');
const scrollRight= document.getElementById('scrollRirgt');

scrollLeft.addEventListener('click', function(){
cardsContainer.scrollBy({left:-320, behaviour: 'smooth'})
})
scrollRight.addEventListener('click', function(){
    cardsContainer.scrollBy({right:320, behaviour: 'smooth'})
    
})

// Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');
const dotsContainer = document.getElementById('carouselDots');

// Create dots
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', function() {
        goToSlide(i);
    });
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });
    
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentSlide) {
            dot.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlides();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlides();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlides();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);