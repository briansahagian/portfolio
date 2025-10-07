// Immediate execution to verify script is loading
console.log('script.js file loaded successfully!');

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - script.js executing'); // Debug log
    
    // Navigation functionality
    initNavigation();
    
    // Dynamic navbar height adjustment
    initDynamicNavbarPadding();
    
    // Project filtering
    initProjectFiltering();
    
    // Smooth scrolling
    initSmoothScrolling();
    
    // Contact form
    initContactForm();
    
    // Scroll animations
    initScrollAnimations();
    
    // Navbar scroll effect
    initNavbarScrollEffect();
    
    // Initialize lightbox
    initLightbox();
    
    console.log('All initialization functions called'); // Debug log
});

// Initialize Lightbox Event Listeners
function initLightbox() {
    console.log('Initializing lightbox...'); // Debug log
    
    // Add click event listeners to all work photos
    const workPhotos = document.querySelectorAll('.work-photo[data-lightbox="true"]');
    console.log('Found', workPhotos.length, 'work photos with data-lightbox="true"'); // Debug log
    
    // Also try finding all work photos regardless of data attribute
    const allWorkPhotos = document.querySelectorAll('.work-photo');
    console.log('Found', allWorkPhotos.length, 'total work photos'); // Debug log
    
    if (workPhotos.length === 0) {
        console.warn('No work photos found with data-lightbox attribute!');
        console.log('Trying to add listeners to all work photos instead...');
        
        allWorkPhotos.forEach((photo, index) => {
            console.log('Adding listener to photo', index, ':', photo.src);
            photo.addEventListener('click', function() {
                console.log('Photo clicked (fallback):', this.src, this.alt);
                openLightbox(this.src, this.alt);
            });
        });
    } else {
        workPhotos.forEach((photo, index) => {
            console.log('Adding listener to photo', index, ':', photo.src);
            photo.addEventListener('click', function() {
                console.log('Photo clicked:', this.src, this.alt);
                openLightbox(this.src, this.alt);
            });
        });
    }
}

// Global Lightbox Functions (available immediately)
function openLightbox(src, alt) {
    console.log('openLightbox called with:', src, alt); // Debug log
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    
    console.log('lightbox element:', lightbox); // Debug log
    console.log('lightboxImage element:', lightboxImage); // Debug log
    
    if (lightbox && lightboxImage) {
        lightboxImage.src = src;
        lightboxImage.alt = alt;
        lightbox.classList.add('active');
        
        // Prevent body scrolling when lightbox is open
        document.body.style.overflow = 'hidden';
        console.log('Lightbox opened successfully'); // Debug log
    } else {
        console.error('Lightbox elements not found'); // Debug log
    }
}

function closeLightbox() {
    console.log('closeLightbox called'); // Debug log
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        
        // Restore body scrolling
        document.body.style.overflow = 'auto';
        console.log('Lightbox closed successfully'); // Debug log
    }
}

// Navigation Functions
function initNavigation() {
    // Navigation is now permanently visible on all screen sizes
    // No toggle functionality needed for mobile-first approach
    console.log('Navigation initialized - permanently visible');
}

// Dynamic Navbar Height Adjustment
function initDynamicNavbarPadding() {
    function updateScrollPadding() {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            const navbarHeight = navbar.offsetHeight;
            const extraPadding = 20; // Add some extra padding for visual comfort
            const totalPadding = navbarHeight + extraPadding;
            
            // Update the scroll-padding-top for smooth scrolling
            document.documentElement.style.scrollPaddingTop = totalPadding + 'px';
            
            // Also update the hero section padding to prevent initial overlap
            const heroSection = document.querySelector('.hero');
            if (heroSection) {
                heroSection.style.paddingTop = totalPadding + 'px';
            }
            
            console.log(`Updated scroll padding to ${totalPadding}px (navbar: ${navbarHeight}px + ${extraPadding}px extra)`);
        }
    }
    
    // Update padding on load
    updateScrollPadding();
    
    // Update padding on window resize (in case navbar height changes)
    window.addEventListener('resize', updateScrollPadding);
    
    // Update padding after fonts load (in case text affects navbar height)
    document.fonts.ready.then(updateScrollPadding);
}

// Project Filtering
function initProjectFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    card.style.display = '';
                    card.style.opacity = '';
                    card.style.transform = '';
                } else {
                    card.classList.add('hidden');
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                updateActiveNavLink(targetId);
            }
        });
    });
}

// Update Active Navigation Link
function updateActiveNavLink(targetId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
        }
    });
}

// Contact Form
function initContactForm() {
    // Initialize EmailJS
    emailjs.init("1EKSBATuQW3NbT3hr");
    
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Get submit button
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Send email using EmailJS with proper template parameters
            const templateParams = {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message
            };
            
            console.log('Sending email with params:', templateParams);
            
            emailjs.send('service_0d23sae', 'template_bolx0oo', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                    contactForm.reset();
                })
                .catch(function(error) {
                    console.error('EmailJS Error:', error);
                    // More detailed error message
                    let errorMsg = 'Failed to send message. ';
                    if (error.text) {
                        errorMsg += 'Error: ' + error.text;
                    } else if (error.status) {
                        errorMsg += 'Status: ' + error.status;
                    } else {
                        errorMsg += 'Please check your internet connection and try again.';
                    }
                    showNotification(errorMsg, 'error');
                })
                .finally(function() {
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                });
        });
    }
}

// Email Validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show Notification
function showNotification(message, type) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">
                ${type === 'success' ? '✓' : '✕'}
            </span>
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                ×
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 10000;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    const notificationContent = notification.querySelector('.notification-content');
    notificationContent.style.cssText = `
        display: flex;
        align-items: center;
        gap: 10px;
    `;
    
    const closeButton = notification.querySelector('.notification-close');
    closeButton.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 18px;
        cursor: pointer;
        margin-left: auto;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

// Scroll Animations
function initScrollAnimations() {
    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.01, // Reduced from 0.05 to trigger even earlier
        rootMargin: '150px 0px 0px 0px' // Increased from 50px to 150px - trigger much earlier
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
    
    // Observe project cards with faster animations
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = `${index * 0.04}s`; // Reduced from 0.07s to 0.04s for faster appearance
        observer.observe(card);
    });
    
    // Observe skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.classList.add('fade-in');
        item.style.transitionDelay = `${index * 0.02}s`; // Reduced from 0.04s to 0.02s for faster appearance
        observer.observe(item);
    });
}

// Navbar Scroll Effect
function initNavbarScrollEffect() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavOnScroll();
    });
}

// Update Active Nav Link on Scroll
function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;
        
        if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Utility Functions
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

// Typing Effect for Hero Section
function initTypingEffect() {
    const texts = [
        'Engineering Student',
        'Problem Solver',
        'Innovation Enthusiast',
        'Tech Explorer'
    ];
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (!heroSubtitle) return;
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentText = '';
    
    function typeEffect() {
        const fullText = texts[textIndex];
        
        if (isDeleting) {
            currentText = fullText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            currentText = fullText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        heroSubtitle.textContent = currentText;
        
        let typeSpeed = isDeleting ? 100 : 150;
        
        if (!isDeleting && charIndex === fullText.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500; // Pause before next word
        }
        
        setTimeout(typeEffect, typeSpeed);
    }
    
    // Start typing effect after page loads
    setTimeout(typeEffect, 1000);
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initTypingEffect, 500);
});

// Particle Background Effect (Optional)
function initParticleBackground() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Create canvas for particles
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.opacity = '0.1';
    hero.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    function resizeCanvas() {
        canvas.width = hero.offsetWidth;
        canvas.height = hero.offsetHeight;
    }
    
    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1
        };
    }
    
    function initParticles() {
        particles = [];
        for (let i = 0; i < 50; i++) {
            particles.push(createParticle());
        }
    }
    
    function updateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Wrap around edges
            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;
            
            // Draw particle
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = '#667eea';
            ctx.fill();
        });
        
        requestAnimationFrame(updateParticles);
    }
    
    resizeCanvas();
    initParticles();
    updateParticles();
    
    window.addEventListener('resize', resizeCanvas);
}

// Initialize particle background (commented out by default for performance)
// document.addEventListener('DOMContentLoaded', initParticleBackground);

// Performance optimization: Lazy load images when they're implemented
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Close lightbox when clicking outside the image
document.addEventListener('click', function(e) {
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.querySelector('.lightbox-content');
    
    if (lightbox && lightbox.classList.contains('active') && 
        lightboxContent && !lightboxContent.contains(e.target)) {
        closeLightbox();
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const lightbox = document.getElementById('lightbox');
        if (lightbox && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    }
});

// Call lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', initLazyLoading);