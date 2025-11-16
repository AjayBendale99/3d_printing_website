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
    // Contact Form Handling with EmailJS
    // ============================================

    // EmailJS Configuration
    // IMPORTANT: Replace these with your actual EmailJS credentials
    const EMAILJS_CONFIG = {
        PUBLIC_KEY: "rljC3g0prIXFwPL-p",        // Get from EmailJS Account → General
        SERVICE_ID: "service_a9u4qxl",       // Get from EmailJS Email Services
        TEMPLATE_ID: "template_choiqrb",      // Get from EmailJS Email Templates (Main contact form)
        AUTO_REPLY_TEMPLATE_ID: "template_wqsor8q", // Get from EmailJS Email Templates (Auto-reply)
        TO_EMAIL: "ajaybendale1999@gmail.com", // Your email address
        FROM_NAME: "PrintBox 3D"              // Your business name for auto-reply
    };

    // Check if EmailJS is loaded
    function isEmailJSLoaded() {
        return typeof emailjs !== 'undefined';
    }

    // Check if credentials are configured
    function areCredentialsConfigured() {
        return EMAILJS_CONFIG.PUBLIC_KEY !== "YOUR_PUBLIC_KEY" &&
               EMAILJS_CONFIG.SERVICE_ID !== "YOUR_SERVICE_ID" &&
               EMAILJS_CONFIG.TEMPLATE_ID !== "YOUR_TEMPLATE_ID";
    }

    // Initialize EmailJS if credentials are configured
    if (isEmailJSLoaded() && areCredentialsConfigured()) {
        try {
            emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
            console.log('✅ EmailJS initialized successfully');
        } catch (error) {
            console.error('❌ EmailJS initialization failed:', error);
        }
    } else {
        if (!isEmailJSLoaded()) {
            console.warn('⚠️ EmailJS library not loaded. Check if the script is included in HTML.');
        }
        if (!areCredentialsConfigured()) {
            console.warn('⚠️ EmailJS credentials not configured. Please update EMAILJS_CONFIG in js/script.js');
            console.warn('📖 See EMAILJS_SETUP.md for setup instructions');
        }
    }

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Validate EmailJS setup
            if (!isEmailJSLoaded()) {
                showNotification('Email service not available. Please contact us directly at ajaybendale1999@gmail.com', 'error');
                return;
            }

            if (!areCredentialsConfigured()) {
                showNotification('Email service not configured. Please contact us directly at ajaybendale1999@gmail.com', 'error');
                console.error('EmailJS credentials not configured. Please update EMAILJS_CONFIG in js/script.js');
                return;
            }

            // Get form data
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validate form fields
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }

            const formData = {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message,
                to_email: EMAILJS_CONFIG.TO_EMAIL
            };

            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;

            // Show loading state
            submitButton.innerHTML = '<span>Sending...</span>';
            submitButton.disabled = true;

            // Send email to business using EmailJS
            emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                formData
            )
            .then(function(response) {
                console.log('✅ Email sent successfully to business:', response.status, response.text);
                
                // Send auto-reply to user
                sendAutoReply(name, email, subject);
                
                // Success
                submitButton.innerHTML = '<span>Message Sent! ✓</span>';
                submitButton.style.background = 'linear-gradient(135deg, #ffb700 0%, #ff9500 100%)';
                
                // Reset form
                contactForm.reset();

                // Show success message
                showNotification('Message sent successfully! Check your email for confirmation.', 'success');

                // Reset button after 3 seconds
                setTimeout(() => {
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                    submitButton.style.background = '';
                }, 3000);
            }, function(error) {
                // Error handling with detailed messages
                console.error('❌ EmailJS Error:', error);
                
                let errorMessage = 'Failed to send message. ';
                
                // Provide specific error messages
                if (error.status === 400) {
                    errorMessage += 'Invalid request. Please check your form data.';
                } else if (error.status === 401) {
                    errorMessage += 'Authentication failed. Please check your EmailJS Public Key.';
                } else if (error.status === 404) {
                    errorMessage += 'Service or Template not found. Please check your Service ID and Template ID.';
                } else if (error.status === 429) {
                    errorMessage += 'Too many requests. Please try again later.';
                } else if (error.status === 500) {
                    errorMessage += 'Server error. Please try again later.';
                } else {
                    errorMessage += 'Please try again or contact us directly at ' + EMAILJS_CONFIG.TO_EMAIL;
                }

                submitButton.innerHTML = '<span>Failed to Send</span>';
                submitButton.style.background = 'linear-gradient(135deg, #ff006e 0%, #ff4444 100%)';
                
                // Show detailed error message
                showNotification(errorMessage, 'error');

                // Reset button after 5 seconds
                setTimeout(() => {
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                    submitButton.style.background = '';
                }, 5000);
            });
        });
    }

    // ============================================
    // Auto-Reply Function
    // ============================================

    function sendAutoReply(userName, userEmail, userSubject) {
        // Check if auto-reply template is configured
        if (EMAILJS_CONFIG.AUTO_REPLY_TEMPLATE_ID === "YOUR_AUTO_REPLY_TEMPLATE_ID") {
            console.warn('⚠️ Auto-reply template not configured. Skipping auto-reply.');
            return;
        }

        const autoReplyData = {
            to_name: userName,
            to_email: userEmail,
            from_name: EMAILJS_CONFIG.FROM_NAME,
            subject: userSubject,
            reply_to: EMAILJS_CONFIG.TO_EMAIL
        };

        // Send auto-reply email
        emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.AUTO_REPLY_TEMPLATE_ID,
            autoReplyData
        )
        .then(function(response) {
            console.log('✅ Auto-reply sent successfully:', response.status, response.text);
        }, function(error) {
            // Log error but don't show to user (auto-reply failure shouldn't affect main form)
            console.warn('⚠️ Auto-reply failed (non-critical):', error);
        });
    }

    // ============================================
    // Notification Function
    // ============================================

    function showNotification(message, type) {
        // Remove existing notification if any
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? 'linear-gradient(135deg, #ffb700 0%, #ff9500 100%)' : 'linear-gradient(135deg, #ff4444 0%, #ff006e 100%)'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            animation: slideInRight 0.3s ease-out;
            max-width: 400px;
            font-weight: 500;
        `;

        document.body.appendChild(notification);

        // Remove notification after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
    }

    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

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

    console.log('%c🚀 PrintBox 3D', 'color: #ff7b00; font-size: 20px; font-weight: bold;');
    console.log('%cWelcome to our website!', 'color: #ffb700; font-size: 14px;');
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

