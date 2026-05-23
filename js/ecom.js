
    // Scroll reveal animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card, .engine-card, .why-card, .pillar-card').forEach(el => {
        el.classList.add('fade-in-up');
        observer.observe(el);
    });

    // Form submission handler
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = this.querySelector('.btn-submit span');
        btn.textContent = 'Sending...';
        setTimeout(() => { btn.textContent = 'Sent! ✓'; }, 1500);
    });

    // Animated stats counter
    function animateCounter(el, target) {
        let count = 0;
        const step = target / 60;
        const timer = setInterval(() => {
            count += step;
            if (count >= target) { count = target; clearInterval(timer); }
            el.textContent = Math.floor(count) + (el.dataset.suffix || '');
        }, 20);
    }
