// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Create mobile menu
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.style.display = 'none';
    mobileMenu.style.position = 'fixed';
    mobileMenu.style.top = '70px';
    mobileMenu.style.left = '0';
    mobileMenu.style.width = '100%';
    mobileMenu.style.backgroundColor = '#2c5f2c';
    mobileMenu.style.padding = '1rem';
    mobileMenu.style.zIndex = '999';
    
    const mobileUl = document.createElement('ul');
    mobileUl.style.listStyle = 'none';
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        const li = document.createElement('li');
        li.style.margin = '15px 0';
        const a = link.cloneNode(true);
        a.style.color = 'white';
        a.style.fontSize = '1.2rem';
        li.appendChild(a);
        mobileUl.appendChild(li);
    });
    
    mobileMenu.appendChild(mobileUl);
    document.body.appendChild(mobileMenu);
    
    mobileToggle.addEventListener('click', function() {
        if (mobileMenu.style.display === 'none') {
            mobileMenu.style.display = 'block';
        } else {
            mobileMenu.style.display = 'none';
        }
    });
    
    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                    // Close mobile menu if open
                    if (mobileMenu.style.display === 'block') {
                        mobileMenu.style.display = 'none';
                    }
                }
            }
        });
    });
    
    // Contact form handling (demo)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you! Your message has been received. We will contact you shortly.');
            contactForm.reset();
        });
    }
    
    // Add some scroll animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.service-card, .testimonial-card, .about-grid > div').forEach(el => {
        el.style.transition = 'all 0.6s ease';
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
});