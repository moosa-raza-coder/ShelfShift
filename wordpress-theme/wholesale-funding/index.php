<?php
if (!defined('ABSPATH')) exit;
get_header();
?>

<main class="site-content">
    <!-- 1. HERO SECTION -->
    <section class="hero-section" data-section="hero">
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title" style="animation: fadeInUp 0.8s ease-out;">
                    Unlock $150K+ in Business Credit
                </h1>
                <p class="hero-subtitle" style="animation: fadeInUp 0.8s ease-out 0.2s backwards;">
                    Premium B2B Funding for Wholesale Shelf Corporations
                </p>
                <div class="button-group" style="animation: fadeInUp 0.8s ease-out 0.4s backwards;">
                    <button class="button button-primary" onclick="document.getElementById('video-section').scrollIntoView({behavior:'smooth'}); setTimeout(() => document.getElementById('video-trigger').click(), 500)">Watch Video</button>
                    <button class="button button-secondary" onclick="document.getElementById('calendly-section').scrollIntoView({behavior:'smooth'})">Schedule Call</button>
                </div>
            </div>
        </div>
    </section>

    <!-- 2. GATED VIDEO SECTION (5-Step Flow) -->
    <section class="video-section" id="video-section" data-section="video">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title" style="animation: slideInLeft 0.8s ease-out;">See How It Works</h2>
                <p class="section-subtitle" style="animation: slideInRight 0.8s ease-out;">Watch our exclusive video to understand the funding process</p>
            </div>

            <!-- Video Container -->
            <div class="video-container" style="animation: zoomIn 0.8s ease-out;">
                <div class="video-overlay" id="video-trigger" onclick="openVideoGate()" style="cursor: pointer;">
                    <svg width="80" height="80" viewBox="0 0 80 80" class="play-button">
                        <circle cx="40" cy="40" r="40" fill="rgba(255,255,255,0.3)"/>
                        <polygon points="32,20 32,60 60,40" fill="white"/>
                    </svg>
                </div>
                <img src="https://via.placeholder.com/800x450/1A355E/ffffff?text=Watch+Our+Video" alt="Video Thumbnail" class="video-thumbnail">
            </div>
        </div>
    </section>

    <!-- STEP 1-2: LEAD CAPTURE MODAL -->
    <div id="lead-modal" class="modal" style="display: none;">
        <div class="modal-content" style="animation: slideDown 0.3s ease-out;">
            <button onclick="closeVideoGate()" class="modal-close">×</button>
            <div class="modal-header">
                <h2>Step 1: Share Your Details</h2>
                <p>Unlock exclusive access to our funding strategy video</p>
            </div>
            <form id="lead-form" class="form-grid">
                <input type="text" name="name" placeholder="Full Name" required class="form-input">
                <input type="email" name="email" placeholder="Email Address" required class="form-input">
                <input type="tel" name="phone" placeholder="Phone Number (Optional)" class="form-input">
                <select name="company_size" class="form-input">
                    <option value="">Select Company Size</option>
                    <option value="solo">Solo Entrepreneur</option>
                    <option value="1-10">1-10 Employees</option>
                    <option value="11-50">11-50 Employees</option>
                    <option value="51+">51+ Employees</option>
                </select>
                <input type="text" name="company_name" placeholder="Company Name" class="form-input">
                <select name="funding_goal" class="form-input">
                    <option value="">Funding Goal</option>
                    <option value="50k">$50K</option>
                    <option value="100k">$100K</option>
                    <option value="150k">$150K+</option>
                </select>
                <button type="submit" class="button button-primary" style="grid-column: 1/-1;">Unlock Video</button>
            </form>
        </div>
    </div>

    <!-- STEP 3: VIDEO PLAYER MODAL -->
    <div id="video-player-modal" class="modal" style="display: none;">
        <div class="modal-content modal-video" style="animation: slideDown 0.3s ease-out;">
            <button onclick="closeVideo()" class="modal-close">×</button>
            <div class="video-player-wrapper">
                <iframe width="100%" height="500" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 12px;"></iframe>
            </div>
            <button onclick="nextStep()" class="button button-primary" style="width: 100%; margin-top: 1.5rem;">Next Step: Schedule Booking</button>
        </div>
    </div>

    <!-- 3. HOW IT WORKS SECTION -->
    <section class="how-it-works-section" data-section="how-it-works">
        <div class="container">
            <h2 class="section-title" style="text-align: center; margin-bottom: 3rem;">How Our Process Works</h2>
            <div class="process-grid">
                <div class="process-card" style="animation: fadeInUp 0.6s ease-out 0.1s backwards;">
                    <div class="process-number">1</div>
                    <h3>Apply Online</h3>
                    <p>Complete our quick application in under 5 minutes with basic business information</p>
                </div>
                <div class="process-card" style="animation: fadeInUp 0.6s ease-out 0.2s backwards;">
                    <div class="process-number">2</div>
                    <h3>Get Approved</h3>
                    <p>Our team reviews your application and approves you within 24 hours</p>
                </div>
                <div class="process-card" style="animation: fadeInUp 0.6s ease-out 0.3s backwards;">
                    <div class="process-number">3</div>
                    <h3>Receive Funds</h3>
                    <p>Get your business credit and funds deposited directly to your account</p>
                </div>
                <div class="process-card" style="animation: fadeInUp 0.6s ease-out 0.4s backwards;">
                    <div class="process-number">4</div>
                    <h3>Scale Fast</h3>
                    <p>Use your funding to grow your business and scale operations immediately</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 4. FUNDING CALCULATOR SECTION -->
    <section class="calculator-section" data-section="calculator">
        <div class="container">
            <h2 class="section-title" style="text-align: center; margin-bottom: 2rem;">Calculate Your Potential Funding</h2>
            <div class="calculator-wrapper">
                <div class="calculator-input">
                    <label>Annual Revenue ($)</label>
                    <input type="range" id="revenue-slider" min="50000" max="1000000" step="10000" value="250000" class="slider">
                    <input type="number" id="revenue-input" min="50000" max="1000000" value="250000" class="form-input">
                </div>
                <div class="calculator-input">
                    <label>Years in Business</label>
                    <select id="years-select" class="form-input">
                        <option value="1">1 Year</option>
                        <option value="2">2 Years</option>
                        <option value="3" selected>3+ Years</option>
                    </select>
                </div>
                <div class="calculator-result" id="calculator-result">
                    <p class="result-label">Your Potential Funding</p>
                    <p class="result-amount">$75,000</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 5. FEATURES SECTION -->
    <section class="features-section" data-section="features">
        <div class="container">
            <h2 class="section-title" style="text-align: center; margin-bottom: 3rem;">Why Choose Wholesale Funding</h2>
            <div class="features-grid">
                <div class="feature-card" style="animation: fadeInUp 0.6s ease-out;">
                    <div class="feature-icon">💰</div>
                    <h3>Up to $150K+</h3>
                    <p>Access significant business credit instantly to grow your operations</p>
                </div>
                <div class="feature-card" style="animation: fadeInUp 0.6s ease-out 0.1s backwards;">
                    <div class="feature-icon">⚡</div>
                    <h3>24-Hour Approval</h3>
                    <p>Get approved and funded faster than traditional bank loans</p>
                </div>
                <div class="feature-card" style="animation: fadeInUp 0.6s ease-out 0.2s backwards;">
                    <div class="feature-icon">🔒</div>
                    <h3>Secure & Private</h3>
                    <p>Enterprise-grade security protects your sensitive business data</p>
                </div>
                <div class="feature-card" style="animation: fadeInUp 0.6s ease-out 0.3s backwards;">
                    <div class="feature-icon">📱</div>
                    <h3>Online Process</h3>
                    <p>Complete everything online - no office visits required</p>
                </div>
                <div class="feature-card" style="animation: fadeInUp 0.6s ease-out 0.4s backwards;">
                    <div class="feature-icon">🎯</div>
                    <h3>No Collateral</h3>
                    <p>Get funding without pledging business assets or equipment</p>
                </div>
                <div class="feature-card" style="animation: fadeInUp 0.6s ease-out 0.5s backwards;">
                    <div class="feature-icon">🚀</div>
                    <h3>Expert Support</h3>
                    <p>Dedicated funding specialists guide you through every step</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 6. BENEFITS SECTION -->
    <section class="benefits-section" data-section="benefits">
        <div class="container">
            <h2 class="section-title" style="text-align: center; margin-bottom: 3rem;">Transform Your Business</h2>
            <div class="benefits-content">
                <div class="benefit-item" style="animation: slideInLeft 0.6s ease-out;">
                    <h3>✓ Immediate Cash Flow</h3>
                    <p>Stop waiting months for traditional loans. Get funded in days.</p>
                </div>
                <div class="benefit-item" style="animation: slideInLeft 0.6s ease-out 0.1s backwards;">
                    <h3>✓ Build Credit History</h3>
                    <p>Establish and strengthen your business credit profile quickly.</p>
                </div>
                <div class="benefit-item" style="animation: slideInLeft 0.6s ease-out 0.2s backwards;">
                    <h3>✓ Flexible Use</h3>
                    <p>Use funds for inventory, marketing, equipment, or operations.</p>
                </div>
                <div class="benefit-item" style="animation: slideInLeft 0.6s ease-out 0.3s backwards;">
                    <h3>✓ No Personal Guarantee</h3>
                    <p>Business funding that doesn't put your personal assets at risk.</p>
                </div>
                <div class="benefit-item" style="animation: slideInLeft 0.6s ease-out 0.4s backwards;">
                    <h3>✓ Competitive Rates</h3>
                    <p>Get the best possible rates for your funding situation.</p>
                </div>
                <div class="benefit-item" style="animation: slideInLeft 0.6s ease-out 0.5s backwards;">
                    <h3>✓ Dedicated Account Manager</h3>
                    <p>Have a single point of contact for all your funding needs.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 7. TESTIMONIALS SECTION -->
    <section class="testimonials-section" data-section="testimonials">
        <div class="container">
            <h2 class="section-title" style="text-align: center; margin-bottom: 3rem;">What Our Clients Say</h2>
            <div class="testimonials-grid">
                <div class="testimonial-card" style="animation: fadeInUp 0.6s ease-out;">
                    <div class="testimonial-header">
                        <div class="testimonial-avatar">JD</div>
                        <div class="testimonial-info">
                            <h4>James Davidson</h4>
                            <p>CEO, Davidson Wholesale Co.</p>
                        </div>
                    </div>
                    <p class="testimonial-text">"Wholesale Funding transformed our business. We got $100K in just 2 days and scaled our inventory immediately."</p>
                    <div class="testimonial-rating">★★★★★</div>
                </div>
                <div class="testimonial-card" style="animation: fadeInUp 0.6s ease-out 0.1s backwards;">
                    <div class="testimonial-header">
                        <div class="testimonial-avatar">MS</div>
                        <div class="testimonial-info">
                            <h4>Maria Sanchez</h4>
                            <p>Founder, SanTech Solutions</p>
                        </div>
                    </div>
                    <p class="testimonial-text">"The process was incredibly simple. No hidden fees, no surprises. Best business decision we made this year."</p>
                    <div class="testimonial-rating">★★★★★</div>
                </div>
                <div class="testimonial-card" style="animation: fadeInUp 0.6s ease-out 0.2s backwards;">
                    <div class="testimonial-header">
                        <div class="testimonial-avatar">RC</div>
                        <div class="testimonial-info">
                            <h4>Robert Chen</h4>
                            <p>Owner, Chen Distribution</p>
                        </div>
                    </div>
                    <p class="testimonial-text">"Professional team, fast turnaround, and they actually care about your success. Highly recommended!"</p>
                    <div class="testimonial-rating">★★★★★</div>
                </div>
            </div>
        </div>
    </section>

    <!-- 8. FAQ SECTION -->
    <section class="faq-section" data-section="faq">
        <div class="container">
            <h2 class="section-title" style="text-align: center; margin-bottom: 3rem;">Frequently Asked Questions</h2>
            <div class="faq-container">
                <div class="faq-item" style="animation: fadeInUp 0.6s ease-out;">
                    <button class="faq-question" onclick="toggleFAQ(this)">
                        <span>How much funding can I get?</span>
                        <span class="faq-icon">+</span>
                    </button>
                    <div class="faq-answer">
                        <p>Depending on your business profile, annual revenue, and credit history, you can qualify for anywhere from $50,000 to $150,000+ in business credit.</p>
                    </div>
                </div>
                <div class="faq-item" style="animation: fadeInUp 0.6s ease-out 0.1s backwards;">
                    <button class="faq-question" onclick="toggleFAQ(this)">
                        <span>How long does approval take?</span>
                        <span class="faq-icon">+</span>
                    </button>
                    <div class="faq-answer">
                        <p>Most applications are approved within 24 hours. Once approved, funds are typically deposited within 1-3 business days.</p>
                    </div>
                </div>
                <div class="faq-item" style="animation: fadeInUp 0.6s ease-out 0.2s backwards;">
                    <button class="faq-question" onclick="toggleFAQ(this)">
                        <span>Do I need collateral?</span>
                        <span class="faq-icon">+</span>
                    </button>
                    <div class="faq-answer">
                        <p>No, our funding is unsecured. You don't need to pledge business assets or equipment as collateral.</p>
                    </div>
                </div>
                <div class="faq-item" style="animation: fadeInUp 0.6s ease-out 0.3s backwards;">
                    <button class="faq-question" onclick="toggleFAQ(this)">
                        <span>What are the fees?</span>
                        <span class="faq-icon">+</span>
                    </button>
                    <div class="faq-answer">
                        <p>We offer transparent pricing with no hidden fees. All costs are clearly outlined before you commit to any agreement.</p>
                    </div>
                </div>
                <div class="faq-item" style="animation: fadeInUp 0.6s ease-out 0.4s backwards;">
                    <button class="faq-question" onclick="toggleFAQ(this)">
                        <span>Can I use the funds for anything?</span>
                        <span class="faq-icon">+</span>
                    </button>
                    <div class="faq-answer">
                        <p>Yes, use your funds flexibly for inventory, equipment, marketing, payroll, operations, or any other legitimate business purpose.</p>
                    </div>
                </div>
                <div class="faq-item" style="animation: fadeInUp 0.6s ease-out 0.5s backwards;">
                    <button class="faq-question" onclick="toggleFAQ(this)">
                        <span>What are the requirements?</span>
                        <span class="faq-icon">+</span>
                    </button>
                    <div class="faq-answer">
                        <p>You need to be in business for at least 1 year, have annual revenue of $50K+, and pass a basic credit check. That's it!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- STEP 4: CALENDLY SECTION -->
    <section class="calendly-section" id="calendly-section" data-section="calendly">
        <div class="container">
            <h2 class="section-title" style="text-align: center; margin-bottom: 2rem;">Schedule Your Strategy Call</h2>
            <p class="section-subtitle" style="text-align: center; margin-bottom: 2rem;">Book a 30-minute call with one of our funding specialists</p>
            <div id="calendly-container" class="calendly-wrapper">
                <div style="text-align: center; padding: 3rem;">
                    <p>Calendly booking widget will appear here</p>
                    <button class="button button-primary" onclick="window.open('https://calendly.com', '_blank')">Open Calendly</button>
                </div>
            </div>
        </div>
    </section>

    <!-- 9. TRUST BADGES SECTION -->
    <section class="trust-section" data-section="trust">
        <div class="container">
            <h2 class="section-title" style="text-align: center; margin-bottom: 3rem;">Trusted By Businesses Nationwide</h2>
            <div class="trust-badges">
                <div class="badge">✓ BBB Accredited</div>
                <div class="badge">✓ Licensed & Insured</div>
                <div class="badge">✓ 1000+ Successful Deals</div>
                <div class="badge">✓ ISO 27001 Certified</div>
                <div class="badge">✓ 24/7 Customer Support</div>
                <div class="badge">✓ Money-Back Guarantee</div>
            </div>
        </div>
    </section>

    <!-- 10. CTA SECTION -->
    <section class="cta-section" data-section="cta">
        <div class="container">
            <h2 class="section-title" style="text-align: center; margin-bottom: 1.5rem;">Ready to Transform Your Business?</h2>
            <p class="section-subtitle" style="text-align: center; margin-bottom: 2rem;">Join thousands of businesses already using Wholesale Funding to scale faster</p>
            <div class="cta-buttons" style="text-align: center;">
                <button class="button button-primary button-large" onclick="document.getElementById('lead-modal').style.display='flex'">Start Your Application</button>
                <button class="button button-outline button-large" onclick="document.getElementById('calendly-section').scrollIntoView({behavior:'smooth'})">Schedule Call Instead</button>
            </div>
        </div>
    </section>

    <!-- 11. CONTACT SECTION -->
    <section class="contact-section" data-section="contact">
        <div class="container">
            <h2 class="section-title" style="text-align: center; margin-bottom: 3rem;">Get In Touch</h2>
            <div class="contact-grid">
                <div class="contact-card" style="animation: fadeInUp 0.6s ease-out;">
                    <h3>📞 Phone</h3>
                    <p><a href="tel:+18005551234">(800) 555-1234</a></p>
                </div>
                <div class="contact-card" style="animation: fadeInUp 0.6s ease-out 0.1s backwards;">
                    <h3>✉️ Email</h3>
                    <p><a href="mailto:info@wholesalefunding.com">info@wholesalefunding.com</a></p>
                </div>
                <div class="contact-card" style="animation: fadeInUp 0.6s ease-out 0.2s backwards;">
                    <h3>📍 Office</h3>
                    <p>New York, NY • Los Angeles, CA • Chicago, IL</p>
                </div>
            </div>
        </div>
    </section>
</main>

<!-- STEP 5: EXIT INTENT POPUP -->
<div id="exit-intent-popup" class="modal" style="display: none;">
    <div class="modal-content modal-exit" style="animation: slideDown 0.3s ease-out;">
        <button onclick="closeExitIntent()" class="modal-close">×</button>
        <h2>Wait! One More Thing...</h2>
        <p>Don't leave without unlocking your personalized funding quote</p>
        <button class="button button-primary" onclick="document.getElementById('exit-intent-popup').style.display='none'; document.getElementById('lead-modal').style.display='flex';">Get My Quote</button>
        <button class="button-text" onclick="closeExitIntent()">No thanks, continue browsing</button>
    </div>
</div>

<style>
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}
@keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-30px); }
    to { opacity: 1; transform: translateX(0); }
}
@keyframes slideInRight {
    from { opacity: 0; transform: translateX(30px); }
    to { opacity: 1; transform: translateX(0); }
}
@keyframes slideDown {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
}
@keyframes zoomIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
}
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

.site-content {
    min-height: 100%;
}

.hero-section {
    background: linear-gradient(135deg, #1A355E 0%, #B21E44 100%);
    color: white;
    padding: 8rem 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%);
    pointer-events: none;
}

.hero-content {
    position: relative;
    z-index: 1;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    font-family: 'Space Grotesk', sans-serif;
    text-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

.hero-subtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.95;
}

.video-section {
    padding: 4rem 2rem;
    background: white;
}

.video-container {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
}

.video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    transition: background 0.3s;
}

.video-overlay:hover {
    background: rgba(0,0,0,0.5);
}

.play-button {
    animation: pulse 2s infinite;
}

.video-thumbnail {
    width: 100%;
    display: block;
    aspect-ratio: 16/9;
    object-fit: cover;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
}

.modal-content {
    background: white;
    padding: 40px;
    border-radius: 12px;
    max-width: 500px;
    width: 90%;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    position: relative;
}

.modal-close {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    font-size: 28px;
    cursor: pointer;
    color: #999;
    transition: color 0.2s;
}

.modal-close:hover {
    color: #333;
}

.modal-header {
    margin-bottom: 1.5rem;
}

.modal-header h2 {
    color: #1A355E;
    margin-bottom: 0.5rem;
    font-family: 'Space Grotesk', sans-serif;
}

.modal-header p {
    color: #666;
}

.form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
}

.form-input {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
    font-family: inherit;
    grid-column: 1;
}

.form-input:nth-child(n+5) {
    grid-column: 1/-1;
}

.form-input:focus {
    outline: none;
    border-color: #B21E44;
    box-shadow: 0 0 0 3px rgba(178, 30, 68, 0.1);
}

.how-it-works-section {
    padding: 4rem 2rem;
    background: #f9f9f9;
}

.process-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.process-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.process-number {
    background: linear-gradient(135deg, #1A355E, #B21E44);
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
    margin: 0 auto 1rem;
}

.process-card h3 {
    color: #1A355E;
    margin-bottom: 0.5rem;
    font-family: 'Space Grotesk', sans-serif;
}

.process-card p {
    color: #666;
}

.calculator-section {
    padding: 4rem 2rem;
    background: white;
}

.calculator-wrapper {
    max-width: 600px;
    margin: 0 auto;
    background: #f9f9f9;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.calculator-input {
    margin-bottom: 2rem;
}

.calculator-input label {
    display: block;
    margin-bottom: 0.5rem;
    color: #1A355E;
    font-weight: 600;
}

.slider {
    width: 100%;
    height: 6px;
    border-radius: 3px;
    background: linear-gradient(to right, #1A355E, #B21E44);
    outline: none;
    -webkit-appearance: none;
    appearance: none;
    margin-bottom: 0.5rem;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #B21E44;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.slider::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #B21E44;
    cursor: pointer;
    border: none;
}

.calculator-result {
    text-align: center;
    padding: 2rem;
    background: linear-gradient(135deg, #1A355E, #B21E44);
    color: white;
    border-radius: 12px;
}

.result-label {
    font-size: 0.9rem;
    opacity: 0.9;
    margin-bottom: 0.5rem;
}

.result-amount {
    font-size: 2.5rem;
    font-weight: 700;
    font-family: 'Space Grotesk', sans-serif;
}

.features-section {
    padding: 4rem 2rem;
    background: #f9f9f9;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.feature-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.feature-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    display: block;
}

.feature-card h3 {
    color: #1A355E;
    margin-bottom: 0.5rem;
    font-family: 'Space Grotesk', sans-serif;
}

.feature-card p {
    color: #666;
    font-size: 0.95rem;
}

.benefits-section {
    padding: 4rem 2rem;
    background: white;
}

.benefits-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    max-width: 900px;
    margin: 0 auto;
}

.benefit-item h3 {
    color: #1A355E;
    margin-bottom: 0.5rem;
    font-family: 'Space Grotesk', sans-serif;
}

.benefit-item p {
    color: #666;
}

.testimonials-section {
    padding: 4rem 2rem;
    background: #f9f9f9;
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.testimonial-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.testimonial-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

.testimonial-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #1A355E, #B21E44);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
}

.testimonial-info h4 {
    margin: 0;
    color: #1A355E;
}

.testimonial-info p {
    margin: 0;
    color: #999;
    font-size: 0.9rem;
}

.testimonial-text {
    color: #666;
    margin-bottom: 1rem;
    font-style: italic;
}

.testimonial-rating {
    color: #FFA500;
}

.faq-section {
    padding: 4rem 2rem;
    background: white;
}

.faq-container {
    max-width: 700px;
    margin: 0 auto;
}

.faq-item {
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 0;
}

.faq-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1.5rem 0;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    color: #1A355E;
    text-align: left;
    transition: color 0.2s;
}

.faq-question:hover {
    color: #B21E44;
}

.faq-icon {
    transition: transform 0.3s;
    font-size: 1.5rem;
}

.faq-question.active .faq-icon {
    transform: rotate(45deg);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
}

.faq-answer.show {
    max-height: 300px;
    transition: max-height 0.3s ease-in;
}

.faq-answer p {
    color: #666;
    margin: 0 0 1.5rem 0;
}

.calendly-section {
    padding: 4rem 2rem;
    background: #f9f9f9;
}

.calendly-wrapper {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    overflow: hidden;
}

.trust-section {
    padding: 4rem 2rem;
    background: white;
}

.trust-badges {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    max-width: 900px;
    margin: 0 auto;
}

.badge {
    background: linear-gradient(135deg, rgba(26, 53, 94, 0.1), rgba(178, 30, 68, 0.1));
    color: #1A355E;
    padding: 1rem;
    text-align: center;
    border-radius: 8px;
    font-weight: 600;
    border: 1px solid rgba(26, 53, 94, 0.2);
}

.cta-section {
    padding: 4rem 2rem;
    background: linear-gradient(135deg, #1A355E 0%, #B21E44 100%);
    color: white;
    text-align: center;
}

.cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.button {
    display: inline-block;
    padding: 12px 32px;
    background: #B21E44;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    border: none;
    font-size: 1rem;
    transition: all 0.3s;
    font-family: inherit;
}

.button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

.button-primary {
    background: linear-gradient(135deg, #1A355E, #B21E44);
    color: white;
}

.button-secondary {
    background: rgba(255,255,255,0.2);
    border: 2px solid white;
    color: white;
}

.button-outline {
    background: transparent;
    border: 2px solid white;
    color: white;
}

.button-large {
    padding: 14px 40px;
    font-size: 1.1rem;
}

.button-text {
    background: none;
    border: none;
    color: rgba(255,255,255,0.8);
    cursor: pointer;
    text-decoration: underline;
    padding: 0;
    font-size: 0.95rem;
    margin-top: 1rem;
    display: block;
    width: 100%;
    transition: color 0.2s;
}

.button-text:hover {
    color: white;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    font-family: 'Space Grotesk', sans-serif;
    color: #1A355E;
    margin: 0;
}

.section-subtitle {
    font-size: 1.1rem;
    color: #666;
    margin: 0;
}

.contact-section {
    padding: 4rem 2rem;
    background: white;
}

.contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 900px;
    margin: 0 auto;
}

.contact-card {
    background: #f9f9f9;
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
}

.contact-card h3 {
    color: #1A355E;
    margin-bottom: 1rem;
}

.contact-card a {
    color: #B21E44;
    text-decoration: none;
    font-weight: 600;
}

.contact-card a:hover {
    text-decoration: underline;
}

.modal-video {
    max-width: 700px;
}

.video-player-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
}

.video-player-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.modal-exit {
    text-align: center;
    max-width: 400px;
}

.modal-exit h2 {
    color: #1A355E;
    margin-bottom: 0.5rem;
    font-family: 'Space Grotesk', sans-serif;
}

.modal-exit p {
    color: #666;
    margin-bottom: 2rem;
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 2rem;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .benefits-content {
        grid-template-columns: 1fr;
    }
    
    .form-grid {
        grid-template-columns: 1fr;
    }
    
    .form-input {
        grid-column: 1 !important;
    }
    
    .cta-buttons {
        flex-direction: column;
    }
    
    .button {
        width: 100%;
    }
}
</style>

<script>
// Calculator
document.getElementById('revenue-slider')?.addEventListener('input', function() {
    document.getElementById('revenue-input').value = this.value;
    updateCalculator();
});

document.getElementById('revenue-input')?.addEventListener('input', function() {
    document.getElementById('revenue-slider').value = this.value;
    updateCalculator();
});

document.getElementById('years-select')?.addEventListener('change', updateCalculator);

function updateCalculator() {
    const revenue = parseFloat(document.getElementById('revenue-input')?.value || 250000);
    const years = parseFloat(document.getElementById('years-select')?.value || 3);
    let funding = (revenue * 0.3) * (1 + (years - 1) * 0.1);
    funding = Math.min(funding, 150000);
    document.getElementById('calculator-result').innerHTML = `
        <p class="result-label">Your Potential Funding</p>
        <p class="result-amount">$${funding.toLocaleString('en-US', {maximumFractionDigits: 0})}</p>
    `;
}

// FAQ Toggle
function toggleFAQ(btn) {
    btn.classList.toggle('active');
    const answer = btn.nextElementSibling;
    answer.classList.toggle('show');
}

// Video Gate Flow
function openVideoGate() {
    document.getElementById('lead-modal').style.display = 'flex';
}

function closeVideoGate() {
    document.getElementById('lead-modal').style.display = 'none';
}

function closeVideo() {
    document.getElementById('video-player-modal').style.display = 'none';
}

function nextStep() {
    closeVideo();
    document.getElementById('calendly-section').scrollIntoView({behavior: 'smooth'});
}

function closeExitIntent() {
    document.getElementById('exit-intent-popup').style.display = 'none';
}

// Lead Form
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
            closeVideoGate();
            document.getElementById('video-player-modal').style.display = 'flex';
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error submitting form. Please try again.');
    }
});

// Exit Intent
document.addEventListener('mouseleave', function(e) {
    if (e.clientY <= 0) {
        if (!document.getElementById('exit-intent-popup').dataset.shown) {
            document.getElementById('exit-intent-popup').style.display = 'flex';
            document.getElementById('exit-intent-popup').dataset.shown = 'true';
        }
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

document.querySelectorAll('[data-section]').forEach(el => {
    observer.observe(el);
});

// Initialize calculator
updateCalculator();
</script>

<?php get_footer(); ?>
