let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('.navbar a');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !navbar.contains(e.target)) {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// Update active link on scroll
window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.navbar a');
    
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize ScrollReveal
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    reset: true
});

// Reveal animations
sr.reveal('.home-text', {delay: 200, origin: 'top'});
sr.reveal('.home-img', {delay: 400, origin: 'top'});
sr.reveal('.about, .services, .contact, .resume, .projetos, .copyright', {delay: 200, origin: 'top'});
