// Immediate execution to verify script is loading
console.log('script.js file loaded successfully!');

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - script.js executing'); // Debug log
    
    // Navigation functionality
    initNavigation();
    
    // Dynamic navbar height adjustment
    initDynamicNavbarPadding();
    
    // Smooth scrolling
    initSmoothScrolling();
    
    // Contact form
    initContactForm();
    
    
    // Navbar scroll effect
    initNavbarScrollEffect();
    
    // Initialize lightbox
    initLightbox();

    // Project detail modal
    initProjectModal();

    console.log('All initialization functions called'); // Debug log
});

// Project Detail Modal
function initProjectModal() {
    const overlay = document.getElementById('projectModal');
    const iframe = document.getElementById('projectModalIframe');
    const closeBtn = document.getElementById('projectModalClose');

    function openModal(url) {
        iframe.src = url;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    iframe.addEventListener('load', function() {
        try {
            const doc = iframe.contentDocument || iframe.contentWindow.document;
            const style = doc.createElement('style');
            style.textContent = 'html { font-size: 11px !important; } p, li { font-size: 1.4rem !important; line-height: 1.7 !important; } img { max-width: 100% !important; } .hero-img { max-height: 460px !important; width: auto !important; height: auto !important; object-fit: contain !important; } .gallery-img, .project-img { max-height: 280px !important; object-fit: cover !important; } .navbar { display: none !important; } .project-hero-image-section { margin-top: 0 !important; padding-top: 16px !important; }';
            doc.head.appendChild(style);
        } catch(e) {}
    });

    function closeProjectModal() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(function() { iframe.src = ''; }, 300);
    }

    document.querySelectorAll('.see-more-btn, .project-link').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            openModal(this.getAttribute('href'));
        });
    });

    closeBtn.addEventListener('click', closeProjectModal);

    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) closeProjectModal();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && overlay.classList.contains('active')) closeProjectModal();
    });
}

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
    
    // Also update when navbar visibility changes
    const navbar = document.getElementById('navbar');
    if (navbar) {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    // Small delay to ensure transition is complete
                    setTimeout(updateScrollPadding, 50);
                }
            });
        });
        
        observer.observe(navbar, {
            attributes: true,
            attributeFilter: ['class']
        });
    }
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


// Navbar Scroll Effect
function initNavbarScrollEffect() {
    const navbar = document.getElementById('navbar');
    const navIndicator = document.getElementById('nav-indicator');
    const navIndicatorBtn = document.getElementById('nav-indicator-btn');
    let lastScrollY = 0;
    let ticking = false;
    
    // Handle nav indicator click
    if (navIndicatorBtn) {
        navIndicatorBtn.addEventListener('click', function() {
            // Show navbar
            navbar.classList.remove('navbar-hidden');
            // Hide indicator
            navIndicator.classList.remove('visible');
        });
    }
    
    function updateNavbar() {
        const currentScrollY = window.scrollY;
        const scrollingDown = currentScrollY > lastScrollY;
        const scrollingUp = currentScrollY < lastScrollY;
        
        // Standard scrolled effect (background change)
        if (currentScrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Mobile scroll direction behavior
        if (window.innerWidth <= 768) {
            if (scrollingDown && currentScrollY > 100) {
                // Scrolling down - hide navbar, show indicator
                navbar.classList.add('navbar-hidden');
                if (navIndicator) {
                    navIndicator.classList.add('visible');
                }
            } else if (scrollingUp || currentScrollY <= 100) {
                // Scrolling up or near top - show navbar, hide indicator
                navbar.classList.remove('navbar-hidden');
                if (navIndicator) {
                    navIndicator.classList.remove('visible');
                }
            }
        } else {
            // Desktop - always show navbar, hide indicator
            navbar.classList.remove('navbar-hidden');
            if (navIndicator) {
                navIndicator.classList.remove('visible');
            }
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
        
        // Update active nav link based on scroll position
        updateActiveNavOnScroll();
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
    
    // Also check on resize in case screen size changes
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navbar.classList.remove('navbar-hidden');
            if (navIndicator) {
                navIndicator.classList.remove('visible');
            }
        }
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

// Typing effect removed - static hero subtitle is now displayed

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