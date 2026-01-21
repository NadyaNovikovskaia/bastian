// ===== APP CAROUSEL (HERO SECTION) =====

let currentSlide = 0;

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    initializeCarousel();
    initializeTabSwitching();
    initializeCTAButtons();
});

// ===== CAROUSEL FUNCTIONS =====
function initializeCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length === 0) return;
    
    // Show first slide
    slides[0].classList.add('active');
    
    // Auto-advance carousel every 5 seconds
    setInterval(() => {
        nextSlide();
    }, 5000);
}

function nextSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    
    if (slides.length === 0) return;
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide + 1) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function prevSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    
    if (slides.length === 0) return;
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    
    if (slides.length === 0) return;
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// ===== REVIEWS CAROUSEL =====
let currentReview = 0;

function nextReview() {
    const reviews = document.querySelectorAll('.review-card');
    const dots = document.querySelectorAll('.reviews-dots .dot');
    
    if (reviews.length === 0) return;
    
    reviews[currentReview].classList.remove('active');
    if (dots[currentReview]) dots[currentReview].classList.remove('active');
    
    currentReview = (currentReview + 1) % reviews.length;
    
    reviews[currentReview].classList.add('active');
    if (dots[currentReview]) dots[currentReview].classList.add('active');
}

function prevReview() {
    const reviews = document.querySelectorAll('.review-card');
    const dots = document.querySelectorAll('.reviews-dots .dot');
    
    if (reviews.length === 0) return;
    
    reviews[currentReview].classList.remove('active');
    if (dots[currentReview]) dots[currentReview].classList.remove('active');
    
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    
    reviews[currentReview].classList.add('active');
    if (dots[currentReview]) dots[currentReview].classList.add('active');
}

function goToReview(index) {
    const reviews = document.querySelectorAll('.review-card');
    const dots = document.querySelectorAll('.reviews-dots .dot');
    
    if (reviews.length === 0) return;
    
    reviews[currentReview].classList.remove('active');
    if (dots[currentReview]) dots[currentReview].classList.remove('active');
    
    currentReview = index;
    
    reviews[currentReview].classList.add('active');
    if (dots[currentReview]) dots[currentReview].classList.add('active');
}

// ===== SCROLL TO DEMO =====
function scrollToDemo() {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
        demoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ===== TAB SWITCHING =====
function initializeTabSwitching() {
    const tabs = document.querySelectorAll('.tabs .tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active to clicked tab
            this.classList.add('active');
        });
    });
}

// ===== SCROLL TO CTA =====
function scrollToCTA() {
    const ctaSection = document.querySelector('.cta-section');
    if (ctaSection) {
        ctaSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// ===== CTA BUTTONS =====
function initializeCTAButtons() {
    const ctaButtons = document.querySelectorAll('.btn-primary-small, .btn-download');
    
    ctaButtons.forEach(button => {
        if (!button.onclick && button.textContent.includes('Download')) {
            button.addEventListener('click', function() {
                // Here you can add App Store/Google Play links
                alert('App will be available soon! Thank you for your interest.');
            });
        }
    });
}

// ===== SMOOTH SCROLL FOR ALL ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards and guide cards
document.querySelectorAll('.feature-card, .guide-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ===== CONSOLE WELCOME MESSAGE =====
console.log(`
%c✨ Welcome to Bastian ✨
%cSee the city through the stories you love.

%cInterested in our API or partnership opportunities?
Contact us at: hello@bastian.app
`, 
'color: #6B4CE6; font-size: 24px; font-weight: bold;',
'color: #4A4A4A; font-size: 14px;',
'color: #757575; font-size: 12px;'
);

// ===== ANALYTICS SIMULATION (Replace with real analytics) =====
function trackPageView() {
    console.log('Page view tracked');
}

function trackCTAClick(ctaType) {
    console.log(`CTA clicked: ${ctaType}`);
}

function trackAudioPlay(guideTitle) {
    console.log(`Audio played: ${guideTitle}`);
}

// Track initial page view
trackPageView();
