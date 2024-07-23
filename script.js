// Navbar toggler icon
let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuicon.onclick = () => {
    menuicon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Smooth scrolling for navigation links
let navlinks = document.querySelectorAll("header nav a");

navlinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});

// Add 'active' class to navbar links based on scroll position
window.addEventListener('scroll', () => {
    let fromTop = window.scrollY;

    navlinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if (section.offsetTop - 100 <= fromTop && section.offsetTop + section.offsetHeight - 100 > fromTop) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Toggle 'sticky' class on header based on scroll position
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close navbar when clicking on a link
    navbar.classList.remove('active');
    menuicon.classList.remove('fa-xmark');
});

// ScrollReveal animations
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .project-img, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.about-img', { origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });

// Typed.js initialization
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', 'Python Developer', 'AI Machine Learning'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});


