// ============================================
// Smooth Scroll & Navigation
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // ============================================
    // Button Ripple Effect
    // ============================================

    const buttons = document.querySelectorAll('[data-ripple]');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // ============================================
    // Scroll Reveal Animations
    // ============================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all scroll-reveal elements
    const scrollRevealElements = document.querySelectorAll('.feature-card, .service-card, .gallery-item, .info-card');
    scrollRevealElements.forEach(el => {
        el.classList.add('scroll-reveal');
        observer.observe(el);
    });

    // ============================================
    // 3D Tilt Effect for Cards
    // ============================================

    const tiltCards = document.querySelectorAll('[data-tilt]');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
        });

        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
        });
    });

    // ============================================
    // Service Cards Hover Effect
    // ============================================

    const serviceCards = document.querySelectorAll('[data-service]');

    serviceCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px)`;
        });

        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // ============================================
    // Gallery Items Hover Effect
    // ============================================

    const galleryItems = document.querySelectorAll('[data-gallery]');

    galleryItems.forEach(item => {
        item.addEventListener('mousemove', function(e) {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.03)`;
        });

        item.addEventListener('mouseleave', function() {
            item.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
        });
    });

    // ============================================
    // Contact Form Handling
    // ============================================

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Simulate form submission
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;

            submitButton.innerHTML = '<span>Sending...</span>';
            submitButton.disabled = true;

            // Simulate API call
            setTimeout(() => {
                submitButton.innerHTML = '<span>Message Sent! ✓</span>';
                submitButton.style.background = 'linear-gradient(135deg, #00ff88 0%, #00d4ff 100%)';
                
                // Reset form
                contactForm.reset();

                // Reset button after 3 seconds
                setTimeout(() => {
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                    submitButton.style.background = '';
                }, 3000);
            }, 1500);
        });
    }

    // ============================================
    // Parallax Effect for Hero Section
    // ============================================

    const hero = document.querySelector('.hero');
    const floatingShapes = document.querySelectorAll('.floating-shape');

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;

        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }

        floatingShapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.1;
            const yPos = -(scrolled * speed);
            shape.style.transform = `translateY(${yPos}px)`;
        });
    });

    // ============================================
    // Smooth Scroll for "Explore Services" Button
    // ============================================

    const exploreButton = document.querySelector('.btn-secondary');

    if (exploreButton && exploreButton.textContent.includes('Explore Services')) {
        exploreButton.addEventListener('click', function(e) {
            e.preventDefault();
            const servicesSection = document.querySelector('#services');
            
            if (servicesSection) {
                const offsetTop = servicesSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    // ============================================
    // Smooth Scroll for "Get Quote" Button
    // ============================================

    const getQuoteButtons = document.querySelectorAll('.btn-primary');

    getQuoteButtons.forEach(button => {
        if (button.textContent.includes('Get Quote')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const contactSection = document.querySelector('#contact');
                
                if (contactSection) {
                    const offsetTop = contactSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });

    // ============================================
    // Cursor Trail Effect (Optional Enhancement)
    // ============================================

    let cursorTrail = [];
    const maxTrailLength = 10;

    document.addEventListener('mousemove', function(e) {
        // Only on desktop
        if (window.innerWidth > 768) {
            cursorTrail.push({
                x: e.clientX,
                y: e.clientY,
                timestamp: Date.now()
            });

            // Remove old trail points
            cursorTrail = cursorTrail.filter(point => {
                return Date.now() - point.timestamp < 500;
            });

            // Limit trail length
            if (cursorTrail.length > maxTrailLength) {
                cursorTrail.shift();
            }
        }
    });

    // ============================================
    // Performance Optimization
    // ============================================

    // Throttle scroll events
    let ticking = false;

    function updateOnScroll() {
        // Scroll-based animations are handled above
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });

    // ============================================
    // Loading Animation
    // ============================================

    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Animate hero content
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.animation = 'fadeInUp 1s ease-out';
        }
    });

    // ============================================
    // Console Welcome Message
    // ============================================

    console.log('%c🚀 3D Print Pro', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
    console.log('%cWelcome to our website!', 'color: #7c3aed; font-size: 14px;');
});

// ============================================
// Utility Functions
// ============================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

