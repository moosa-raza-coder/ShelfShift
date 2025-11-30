/**
 * Wholesale Funding - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    // Lead capture form
    const leadForms = document.querySelectorAll('.lead-form');
    leadForms.forEach(form => {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            try {
                const response = await fetch('/wp-json/wholesale/v1/leads', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                
                if (response.ok) {
                    // Show success message
                    this.style.display = 'none';
                    const successMsg = document.createElement('div');
                    successMsg.textContent = 'Thank you! Check your email for next steps.';
                    successMsg.className = 'success-message';
                    this.parentElement.appendChild(successMsg);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });
    });
    
    // Video gating
    const videoGates = document.querySelectorAll('.video-gate');
    videoGates.forEach(gate => {
        const video = gate.querySelector('video');
        const overlay = gate.querySelector('.video-overlay');
        
        if (overlay && video) {
            overlay.addEventListener('click', function() {
                // Show lead capture modal
                const modal = document.querySelector('.lead-modal');
                if (modal) modal.classList.add('active');
            });
        }
    });
    
    // Performance: Lazy load iframes
    const iframes = document.querySelectorAll('iframe[data-src]');
    if ('IntersectionObserver' in window) {
        const iframeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const iframe = entry.target;
                    iframe.src = iframe.getAttribute('data-src');
                    iframeObserver.unobserve(iframe);
                }
            });
        });
        iframes.forEach(iframe => iframeObserver.observe(iframe));
    }
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
