document.addEventListener('DOMContentLoaded', function() {
    
    // Animate software progress bars when they come into view
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.software-progress-bar');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const level = progressBar.getAttribute('data-level');
                    
                    // Animate the progress bar
                    setTimeout(() => {
                        progressBar.style.width = level + '%';
                    }, 500);
                    
                    // Stop observing this element
                    observer.unobserve(progressBar);
                }
            });
        }, {
            threshold: 0.5
        });
        
        progressBars.forEach(bar => {
            observer.observe(bar);
        });
    }
    
    // Add smooth scrolling for internal links
    function addSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // Add parallax effect to background decorations
    function addParallaxEffect() {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.bg-circle, .hello-bg-circle, .experience-bg-circle');
            
            parallaxElements.forEach((element, index) => {
                const speed = 0.2 + (index * 0.1);
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
    
    // Add fade-in animation for sections
    function addFadeInAnimations() {
        const sections = document.querySelectorAll('section');
        
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
        
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(section);
        });
    }
    
    // Add hover effects to project cards
    function addProjectCardEffects() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                // Add a subtle rotation effect
                this.style.transform = 'translateY(-0.5rem) rotate(1deg)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) rotate(0deg)';
            });
        });
    }
    
    // Add typing effect to the main title
    function addTypingEffect() {
        const titleElements = document.querySelectorAll('.title-port, .title-folio');
        
        titleElements.forEach((element, index) => {
            const text = element.textContent;
            element.textContent = '';
            element.style.borderRight = '3px solid var(--coral)';
            
            let i = 0;
            const typeInterval = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typeInterval);
                    // Remove cursor after typing is complete
                    setTimeout(() => {
                        element.style.borderRight = 'none';
                    }, 500);
                }
            }, 100 + (index * 2000)); // Delay second title
        });
    }
    
    // Add floating animation to decorative dots
    function addFloatingAnimation() {
        const dots = document.querySelectorAll('.dot');
        
        dots.forEach((dot, index) => {
            // Add random floating movement
            setInterval(() => {
                const randomX = (Math.random() - 0.5) * 10;
                const randomY = (Math.random() - 0.5) * 10;
                
                dot.style.transform = `translate(${randomX}px, ${randomY}px)`;
            }, 3000 + (index * 500));
        });
    }
    
    // Add click handlers for contact items
    function addContactHandlers() {
        const contactItems = document.querySelectorAll('.contact-item');
        
        contactItems.forEach(item => {
            item.addEventListener('click', function() {
                const text = this.querySelector('span').textContent;
                
                if (text.includes('@')) {
                    // Email
                    window.open(`mailto:${text}`, '_blank');
                } else if (text.includes('behance')) {
                    // Website
                    window.open(`https://${text}`, '_blank');
                } else if (text.match(/^\d+$/)) {
                    // Phone number
                    window.open(`tel:${text}`, '_blank');
                }
            });
            
            // Add cursor pointer
            item.style.cursor = 'pointer';
        });
    }
    
    // Add loading animation
    function addLoadingAnimation() {
        // Fade in the page content
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    }
    
    // Initialize all animations and effects
    function init() {
        addLoadingAnimation();
        animateProgressBars();
        addSmoothScrolling();
        addParallaxEffect();
        addFadeInAnimations();
        addProjectCardEffects();
        addFloatingAnimation();
        addContactHandlers();
        
        // Add typing effect with delay
        setTimeout(() => {
            addTypingEffect();
        }, 1000);
    }
    
    // Start the initialization
    init();
    
    // Add some interactive features
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown' || e.key === ' ') {
            e.preventDefault();
            window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            window.scrollBy({
                top: -window.innerHeight,
                behavior: 'smooth'
            });
        } else if (e.key === 'Home') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else if (e.key === 'End') {
            e.preventDefault();
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        }
    });
    
    // Add scroll indicator
    function addScrollIndicator() {
        const scrollIndicator = document.createElement('div');
        scrollIndicator.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 4px;
            background: var(--coral);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(scrollIndicator);
        
        window.addEventListener('scroll', function() {
            const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            scrollIndicator.style.width = scrollPercentage + '%';
        });
    }
    
    addScrollIndicator();
    
    // Add performance optimization
    let ticking = false;
    
    function optimizeScrollEvents() {
        if (!ticking) {
            requestAnimationFrame(() => {
                // Throttled scroll events
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', optimizeScrollEvents);
    
    // Add easter egg
    let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                // Activate rainbow mode
                document.body.style.filter = 'hue-rotate(0deg)';
                let hue = 0;
                setInterval(() => {
                    hue = (hue + 1) % 360;
                    document.body.style.filter = `hue-rotate(${hue}deg)`;
                }, 50);
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
    
    console.log('🎨 Portfolio loaded successfully! Try the Konami Code for a surprise!');
});