(function() {
    if (!window.IntersectionObserver) return;
    const els = document.querySelectorAll('.process-card, .feature-card, .testimonial-card');
    const obs = new IntersectionObserver(e => e.forEach(en => { if (en.isIntersecting) { en.target.style.opacity='1'; obs.unobserve(en.target); }}), {threshold: 0.1});
    els.forEach(el => { el.style.opacity = '0'; obs.observe(el); });
})();
