// -------------------------- Preloader ----------------------------

document.addEventListener("DOMContentLoaded", function() {
    // Simulate content loading delay
    setTimeout(function() {
      // Hide the preloader
      document.getElementById('preloader').classList.add('hidden');
    }, 1000); // Adjust the delay time as needed
});

// ---------------------Slogan Rotate on Scroll ---------------------

// Select the SVG element
const slogan = document.getElementById('slogan-outer');

// Function to handle scroll event
function handleScroll() {
    // Calculate the rotation angle based on the scroll position
    let rotationAngle = window.scrollY * 0.15 % 360; // Adjust the multiplier to control the rotation speed
  
    // Apply the rotation to the SVG element
    slogan.style.transform = `rotate(${rotationAngle}deg)`;
  }

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// --------------------- Navigation ---------------------

const MainNavButton = document.getElementById('main-nav-btn');
const MainNav = document.getElementById('main-nav');
const Body = document.querySelector('body');
const MainNavLinks = document.querySelectorAll('.main-nav a');

for(let i = 0; i < MainNavLinks.length; i++){
    MainNavLinks[i].addEventListener('click', toggleNav);
}

function toggleNav() {
    MainNav.classList.toggle('active');
    MainNavButton.classList.toggle('active');
    Body.classList.toggle('no-scroll');
}

MainNavButton.addEventListener('click', toggleNav);

// --------------------- Produkte ---------------------

const ProduktButton_1 = document.getElementById('product-btn-1');
const ProduktButton_2 = document.getElementById('product-btn-2');

function toggleProdukt(e){
    if(e.target === ProduktButton_1){
        ProduktButton_1.classList.add('active');
        ProduktButton_2.classList.remove('active');
        document.getElementById('TD_1ml').classList.remove('hidden');
        document.getElementById('TD_2ml').classList.add('hidden');
    }else if(e.target === ProduktButton_2){
        ProduktButton_2.classList.add('active');
        ProduktButton_1.classList.remove('active');
        document.getElementById('TD_1ml').classList.add('hidden');
        document.getElementById('TD_2ml').classList.remove('hidden');
    }
}

ProduktButton_1.addEventListener('click', toggleProdukt);
ProduktButton_2.addEventListener('click', toggleProdukt);

// --------------------- Slider ---------------------


const Slider = document.querySelectorAll('.slider');

function changeSlide(e){
    const sliderLength = e.target.scrollWidth; // Länge des Sliders
    const sliderPosition = e.target.scrollLeft; // Scollposition des Sliders
    const sliderElementCount = e.target.children.length; // Anzahl der Elemente im Slider
    const x =  (sliderPosition / sliderLength) * sliderElementCount; // Berechnung des aktuellen Slides

    for (let i = 0; i < sliderElementCount; i++){
        if(i == x){
            e.target.nextElementSibling.children[i].classList.add('active');
        }else{
            e.target.nextElementSibling.children[i].classList.remove('active');
        }
    }
}

for(let i = 0; i < Slider.length; i++){
    Slider[i].addEventListener('scroll', changeSlide);
}

// Slider Arrows

const sliderContainer = document.querySelectorAll('.slider-container');

function slideLeft(e){
    const slider = e.target.parentElement.parentElement.children[1];
    const sliderWidth = slider.children[0].clientWidth;

    slider.scrollLeft -= sliderWidth;
}

function slideRight(e){
    const slider = e.target.parentElement.parentElement.children[1];
    const sliderWidth = slider.children[0].clientWidth;

    slider.scrollLeft += sliderWidth;
}

for(let i = 0; i < sliderContainer.length; i++){
    // Linker Pfeil
    sliderContainer[i].children[0].children[0].addEventListener('click', slideLeft);

    if(sliderContainer[i].children[1].scrollLeft == 0){
        sliderContainer[i].children[0].children[0].style.opacity = 0.3;
    }
    
    // Rechter Pfeil
    sliderContainer[i].children[0].children[1].addEventListener('click', slideRight);
}



