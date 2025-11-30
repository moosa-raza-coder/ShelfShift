<?php
if (!defined('ABSPATH')) exit;
get_header();
?>

<main class="site-content">
    <!-- Hero Section -->
    <section class="hero-section" style="background: linear-gradient(135deg, #1A355E 0%, #B21E44 100%); color: white; padding: 6rem 0; text-align: center;">
        <div class="container">
            <h1 style="font-size: 3.5rem; font-weight: 700; margin-bottom: 1rem; font-family: 'Space Grotesk';">
                Unlock $150K+ in Business Credit
            </h1>
            <p style="font-size: 1.25rem; margin-bottom: 2rem; opacity: 0.95;">
                Premium B2B Funding for Wholesale Shelf Corporations
            </p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <button class="button" onclick="document.querySelector('.video-gate').scrollIntoView({behavior: 'smooth'})" style="background: white; color: #1A355E; text-decoration: none; padding: 12px 32px; border-radius: 8px; font-weight: 600; cursor: pointer; border: none; font-size: 1rem;">
                    Watch Video
                </button>
                <button class="button" style="background: rgba(255,255,255,0.2); border: 2px solid white; color: white; padding: 12px 32px; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 1rem;">
                    Schedule Call
                </button>
            </div>
        </div>
    </section>

    <!-- Gated Video Section -->
    <section class="video-gate" style="padding: 4rem 0;">
        <div class="container">
            <div style="max-width: 800px; margin: 0 auto;">
                <h2 style="text-align: center; margin-bottom: 2rem; font-size: 2.5rem; color: #1A355E; font-family: 'Space Grotesk';">
                    See How It Works
                </h2>
                
                <div class="video-container" style="position: relative; width: 100%; background: #f5f5f5; border-radius: 12px; overflow: hidden;">
                    <div class="video-overlay" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 10; border-radius: 12px;" onclick="document.querySelector('.lead-modal').style.display='flex'">
                        <div class="video-play-button" style="animation: pulse 2s infinite;">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="white">
                                <circle cx="40" cy="40" r="40" fill="rgba(255,255,255,0.3)"/>
                                <polygon points="32,20 32,60 60,40" fill="white"/>
                            </svg>
                        </div>
                    </div>
                    <img src="https://via.placeholder.com/800x450/1A355E/ffffff?text=Video+Thumbnail" alt="Video Thumbnail" style="width: 100%; height: auto; display: block;">
                </div>

                <!-- Lead Capture Modal -->
                <div class="lead-modal" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); flex-items: center; justify-content: center; z-index: 1000; align-items: center;">
                    <div class="modal-content" style="background: white; padding: 40px; border-radius: 12px; max-width: 400px; width: 90%; box-shadow: 0 10px 40px rgba(0,0,0,0.2);">
                        <button onclick="this.closest('.lead-modal').style.display='none'" style="float: right; background: none; border: none; font-size: 24px; cursor: pointer; color: #999;">×</button>
                        <h2 style="color: #1A355E; margin-bottom: 1rem; font-family: 'Space Grotesk'; clear: both;">Unlock Your Video</h2>
                        <p style="color: #666; margin-bottom: 1.5rem;">Enter your details to watch how we help B2B companies unlock funding.</p>
                        
                        <form class="lead-form" style="display: flex; flex-direction: column; gap: 12px;">
                            <input type="text" name="name" placeholder="Full Name" required style="padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px;">
                            <input type="email" name="email" placeholder="Email Address" required style="padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px;">
                            <input type="tel" name="phone" placeholder="Phone (Optional)" style="padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px;">
                            <button type="submit" class="button" style="background: linear-gradient(135deg, #1A355E, #B21E44); color: white; padding: 12px; border: none; border-radius: 6px; font-weight: 600; cursor: pointer; font-size: 16px;">
                                Unlock Video
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section style="padding: 4rem 0; background: #f9f9f9;">
        <div class="container">
            <h2 style="text-align: center; margin-bottom: 3rem; font-size: 2.5rem; color: #1A355E; font-family: 'Space Grotesk';">
                Why Choose Us
            </h2>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
                <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); text-align: center;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">💰</div>
                    <h3 style="color: #1A355E; margin-bottom: 0.5rem; font-family: 'Space Grotesk';">Up to $150K+</h3>
                    <p style="color: #666;">Unlock significant business credit instantly</p>
                </div>
                
                <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); text-align: center;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">⚡</div>
                    <h3 style="color: #1A355E; margin-bottom: 0.5rem; font-family: 'Space Grotesk';">Fast Approval</h3>
                    <p style="color: #666;">Get approved in as little as 24 hours</p>
                </div>
                
                <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); text-align: center;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🔒</div>
                    <h3 style="color: #1A355E; margin-bottom: 0.5rem; font-family: 'Space Grotesk';">Secure & Private</h3>
                    <p style="color: #666;">Your data is protected with enterprise security</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section style="background: linear-gradient(135deg, #B21E44 0%, #1A355E 100%); color: white; padding: 4rem 0; text-align: center;">
        <div class="container">
            <h2 style="font-size: 2.5rem; margin-bottom: 1rem; font-family: 'Space Grotesk';">Ready to Get Funded?</h2>
            <p style="font-size: 1.1rem; margin-bottom: 2rem; opacity: 0.95;">Schedule a strategy call with our funding experts today</p>
            <button class="button" style="background: white; color: #1A355E; padding: 14px 40px; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 1rem;">
                Schedule Your Call
            </button>
        </div>
    </section>
</main>

<style>
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

.lead-form input:focus {
    outline: none;
    border-color: #B21E44;
    box-shadow: 0 0 0 3px rgba(178, 30, 68, 0.1);
}

.button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
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
                    alert('Thank you! Check your email for access to the video.');
                    document.querySelector('.lead-modal').style.display = 'none';
                    // Show video
                    document.querySelector('.video-overlay').style.display = 'none';
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Error submitting form. Please try again.');
            }
        });
    });
});
</script>

<?php get_footer(); ?>
