// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileMenu.style.display === 'flex') {
        mobileMenu.style.display = 'none';
        menuBtn.classList.remove('active');
    } else {
        mobileMenu.style.display = 'flex';
        menuBtn.classList.add('active');
    }
}

// WhatsApp Function
function openWhatsApp() {
    const phoneNumber = '6281229679188';
    const message = encodeURIComponent('Hi, I\'m interested in renting a room at Kost Griya Inggil Limpung');
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
}

// Call Function
function callNow() {
    window.location.href = 'tel:+6281229679188';
}

// Google Maps Function
function openGoogleMaps() {
    const address = encodeURIComponent('Jl. Raya, RT.01/RW.03, Perak, Sempu, Limpung, Batang Regency, Central Java 51271');
    const mapsURL = `https://maps.google.com/?q=${address}`;
    window.open(mapsURL, '_blank');
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header Scroll Effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.highlight-card, .facility-card, .room-card, .review-card, .nearby-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileMenu.style.display === 'flex' && !mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        mobileMenu.style.display = 'none';
        menuBtn.classList.remove('active');
    }
});