// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileOverlay = document.getElementById('mobile-overlay');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
let isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('open');
        mobileOverlay.classList.remove('hidden');
        mobileOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        
        menuIcon.classList.add('opacity-0', 'rotate-90');
        menuIcon.classList.remove('rotate-0');
        closeIcon.classList.remove('opacity-0', 'rotate-90');
        closeIcon.classList.add('opacity-100', 'rotate-0');
    } else {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('open');
        mobileOverlay.classList.add('hidden');
        mobileOverlay.classList.remove('open');
        document.body.style.overflow = '';
        
        menuIcon.classList.remove('opacity-0', 'rotate-90');
        menuIcon.classList.add('rotate-0');
        closeIcon.classList.add('opacity-0', 'rotate-90');
        closeIcon.classList.remove('opacity-100', 'rotate-0');
    }
}

mobileMenuBtn.addEventListener('click', toggleMenu);
mobileOverlay.addEventListener('click', toggleMenu);

// Close menu when clicking on links
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (isMenuOpen) toggleMenu();
    });
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        header.classList.add('bg-white', 'shadow-sm', 'py-4');
        header.classList.remove('bg-white/95', 'py-6');
    } else {
        header.classList.remove('bg-white', 'shadow-sm', 'py-4');
        header.classList.add('bg-white/95', 'py-6');
    }
});