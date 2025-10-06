// Project Detail Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initPhotoGallery();
    initNavbarScrollEffect();
});

// Photo Gallery Modal Functions
function initPhotoGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (galleryItems.length === 0) return;
    
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'imageModal';
    
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <img class="modal-image" id="modalImage" src="" alt="">
        </div>
    `;
    
    document.body.appendChild(modal);
    
    const modalImage = document.getElementById('modalImage');
    const closeBtn = modal.querySelector('.modal-close');
    
    // Add click handlers to gallery items
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img) {
                modalImage.src = img.src;
                modalImage.alt = img.alt;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal handlers
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Escape key to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
    
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Navbar scroll effect for project pages
function initNavbarScrollEffect() {
    const navbar = document.getElementById('navbar');
    
    if (!navbar) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Add loading animation for images
function addImageLoadingEffects() {
    const images = document.querySelectorAll('img:not(.gallery-item img)');
    
    images.forEach(img => {
        // Only apply loading effect if image hasn't loaded yet
        if (!img.complete) {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
            
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
        } else {
            // Image already loaded, make sure it's visible
            img.style.opacity = '1';
            img.style.transition = 'opacity 0.3s ease';
        }
    });
    
    // Handle gallery images separately with better loading
    const galleryImages = document.querySelectorAll('.gallery-item img');
    galleryImages.forEach(img => {
        img.style.transition = 'opacity 0.3s ease';
        if (!img.complete) {
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
        } else {
            img.style.opacity = '1';
        }
    });
}

// Initialize image loading effects
document.addEventListener('DOMContentLoaded', addImageLoadingEffects);

// Video handling for embedded videos
function initVideoHandling() {
    const videos = document.querySelectorAll('video');
    
    videos.forEach(video => {
        // Pause video when it goes out of view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    video.pause();
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(video);
    });
}

// Initialize video handling when DOM is ready
document.addEventListener('DOMContentLoaded', initVideoHandling);