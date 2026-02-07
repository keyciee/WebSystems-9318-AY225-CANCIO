// ===== SHARED FUNCTIONALITY FOR ALL PAGES =====

// ===== NAVIGATION =====

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = navMenu?.contains(event.target) || navToggle?.contains(event.target);
        
        if (!isClickInside && navMenu?.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle?.classList.remove('active');
        }
    });
    
    // Initialize other shared features
    initializeScrollEffects();
    loadUserPreferences();
    trackVisit();
});

// ===== SCROLL EFFECTS =====

function initializeScrollEffects() {
    let lastScroll = 0;
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

// ===== LOCALSTORAGE & USER PREFERENCES =====

function loadUserPreferences() {
    // Load any saved user preferences
    const preferences = JSON.parse(localStorage.getItem('userPreferences') || '{}');
    
    // Apply preferences (can be extended)
    if (preferences.theme) {
        document.body.classList.add(preferences.theme);
    }
}

function trackVisit() {
    // Track number of visits
    let visits = parseInt(localStorage.getItem('visitCount') || '0');
    visits++;
    localStorage.setItem('visitCount', visits.toString());
    localStorage.setItem('lastVisit', new Date().toISOString());
}

// ===== UTILITY FUNCTIONS =====

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// ===== KEYBOARD NAVIGATION =====

document.addEventListener('keydown', function(e) {
    // ESC key closes modals
    if (e.key === 'Escape') {
        if (typeof closeProgramModal === 'function') {
            closeProgramModal();
        }
        if (typeof closeSuccessModal === 'function') {
            closeSuccessModal();
        }
    }
});

// ===== RESPONSIVE BEHAVIOR =====

function handleResize() {
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.getElementById('navToggle');
    
    if (window.innerWidth > 768 && navMenu) {
        navMenu.classList.remove('active');
        if (navToggle) {
            navToggle.classList.remove('active');
        }
    }
}

window.addEventListener('resize', handleResize);

// ===== ANALYTICS TRACKING (LocalStorage-based) =====

function trackPageView(pageName) {
    let pageViews = JSON.parse(localStorage.getItem('pageViews') || '{}');
    pageViews[pageName] = (pageViews[pageName] || 0) + 1;
    localStorage.setItem('pageViews', JSON.stringify(pageViews));
}

console.log('College of Computer Studies Website - Common JS Loaded');
