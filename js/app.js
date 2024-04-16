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

function toggleNav() {
    MainNav.classList.toggle('hidden');
    MainNavButton.classList.toggle('active');
}

MainNavButton.addEventListener('click', toggleNav);

// --------------------- Produkte ---------------------

const ProduktButton_1 = document.getElementById('product-btn-1');
const ProduktButton_2 = document.getElementById('product-btn-2');

function toggleProdukt(e){
    if(e.target === ProduktButton_1){
        ProduktButton_1.classList.add('active');
        ProduktButton_2.classList.remove('active');
        document.getElementById('TD_1ml').classList.toggle('hidden');
        document.getElementById('TD_2ml').classList.toggle('hidden');
    }else if(e.target === ProduktButton_2){
        ProduktButton_2.classList.add('active');
        ProduktButton_1.classList.remove('active');
        document.getElementById('TD_1ml').classList.toggle('hidden');
        document.getElementById('TD_2ml').classList.toggle('hidden');
    }
}

ProduktButton_1.addEventListener('click', toggleProdukt);
ProduktButton_2.addEventListener('click', toggleProdukt);