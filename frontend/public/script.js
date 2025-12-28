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

// Gallery Lightbox Functions
const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1642541070065-3912f347e7c6?w=1200&q=80', caption: 'Deluxe Room' },
    { src: 'https://images.unsplash.com/photo-1604580040660-f0a7f9abaea6?w=1200&q=80', caption: 'Standard Room' },
    { src: 'https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?w=1200&q=80', caption: 'Premium Room' },
    { src: 'https://images.pexels.com/photos/35189674/pexels-photo-35189674.jpeg?w=1200&q=80', caption: 'Cozy Bedroom' },
    { src: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=1200&q=80', caption: 'Shared Kitchen' },
    { src: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=1200&q=80', caption: 'Kitchen Facilities' },
    { src: 'https://images.unsplash.com/photo-1638799869566-b17fa794c4de?w=1200&q=80', caption: 'Private Bathroom' },
    { src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=80', caption: 'Bathroom Facilities' }
];

let currentImageIndex = 0;

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    lightboxImg.src = galleryImages[index].src;
    lightboxCaption.textContent = galleryImages[index].caption;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    } else if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }
    
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    lightboxImg.src = galleryImages[currentImageIndex].src;
    lightboxCaption.textContent = galleryImages[currentImageIndex].caption;
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeImage(1);
        }
    }
});

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