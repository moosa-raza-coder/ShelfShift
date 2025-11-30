<?php
if (!defined('ABSPATH')) exit;
get_header();
?>

<main class="site-content">
    <div class="container">
        <!-- Hero Section -->
        <section class="hero-section">
            <h1>Unlock $150K+ in Business Credit</h1>
            <p>Premium B2B Funding for Wholesale Shelf Corporations</p>
            <div class="button-group">
                <button class="button" onclick="document.getElementById('video-section').scrollIntoView({behavior:'smooth'})">Watch Video</button>
                <button class="button button-secondary">Schedule Call</button>
            </div>
        </section>

        <!-- Video Section -->
        <section id="video-section" style="padding: 4rem 0; max-width: 800px; margin: 0 auto;">
            <h2 style="text-align: center; margin-bottom: 2rem; font-size: 2.5rem; color: #1A355E; font-family: 'Space Grotesk', sans-serif;">See How It Works</h2>
            
            <div class="video-container" style="position: relative; background: #f5f5f5; border-radius: 12px; overflow: hidden; aspect-ratio: 16/9;">
                <div class="video-overlay" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 10;" onclick="document.getElementById('lead-modal').style.display='flex'">
                    <svg width="80" height="80" viewBox="0 0 80 80" style="animation: pulse 2s infinite;">
                        <circle cx="40" cy="40" r="40" fill="rgba(255,255,255,0.3)"/>
                        <polygon points="32,20 32,60 60,40" fill="white"/>
                    </svg>
                </div>
                <img src="https://via.placeholder.com/800x450/1A355E/ffffff?text=Video+Thumbnail" alt="Video" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
        </section>

        <!-- Lead Modal -->
        <div id="lead-modal" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); align-items: center; justify-content: center; z-index: 1000;">
            <div style="background: white; padding: 40px; border-radius: 12px; max-width: 400px; width: 90%; box-shadow: 0 10px 40px rgba(0,0,0,0.2);">
                <button onclick="document.getElementById('lead-modal').style.display='none'" style="float: right; background: none; border: none; font-size: 24px; cursor: pointer; color: #999;">×</button>
                <h2 style="color: #1A355E; margin-bottom: 1rem; clear: both; font-family: 'Space Grotesk', sans-serif;">Unlock Your Video</h2>
                
                <form id="lead-form" style="display: flex; flex-direction: column; gap: 12px;">
                    <input type="text" name="name" placeholder="Full Name" required style="padding: 12px; border: 1px solid #ddd; border-radius: 6px;">
                    <input type="email" name="email" placeholder="Email Address" required style="padding: 12px; border: 1px solid #ddd; border-radius: 6px;">
                    <input type="tel" name="phone" placeholder="Phone (Optional)" style="padding: 12px; border: 1px solid #ddd; border-radius: 6px;">
                    <button type="submit" class="button" style="padding: 12px;">Unlock Video</button>
                </form>
            </div>
        </div>

        <!-- Features Section -->
        <section style="padding: 4rem 0; background: #f9f9f9; margin: 4rem -20px 0;">
            <div class="container">
                <h2 style="text-align: center; margin-bottom: 3rem; font-size: 2.5rem; color: #1A355E; font-family: 'Space Grotesk', sans-serif;">Why Choose Us</h2>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
                    <div style="background: white; padding: 2rem; border-radius: 12px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                        <h3 style="color: #1A355E; margin: 1rem 0; font-family: 'Space Grotesk', sans-serif;">💰 Up to $150K+</h3>
                        <p style="color: #666;">Unlock significant business credit instantly</p>
                    </div>
                    <div style="background: white; padding: 2rem; border-radius: 12px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                        <h3 style="color: #1A355E; margin: 1rem 0; font-family: 'Space Grotesk', sans-serif;">⚡ Fast Approval</h3>
                        <p style="color: #666;">Get approved in as little as 24 hours</p>
                    </div>
                    <div style="background: white; padding: 2rem; border-radius: 12px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                        <h3 style="color: #1A355E; margin: 1rem 0; font-family: 'Space Grotesk', sans-serif;">🔒 Secure & Private</h3>
                        <p style="color: #666;">Your data is protected with enterprise security</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</main>

<style>
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}
</style>

<script>
document.getElementById('lead-form')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(this));
    try {
        const response = await fetch('/wp-json/wholesale/v1/leads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            alert('Thank you! Check your email for access to the video.');
            document.getElementById('lead-modal').style.display = 'none';
            document.querySelector('.video-overlay').style.display = 'none';
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
</script>

<?php get_footer(); ?>
