<?php
/**
 * Wholesale Shelf Theme Functions - With Real Content from React Site
 */

if (!defined('ABSPATH')) { exit; }

define('WHOLESALE_SHELF_VERSION', '2.0.0');
define('WHOLESALE_SHELF_DIR', get_template_directory());
define('WHOLESALE_SHELF_URI', get_template_directory_uri());

function wholesale_shelf_setup() {
    load_theme_textdomain('wholesale-shelf', WHOLESALE_SHELF_DIR . '/languages');
    add_theme_support('post-thumbnails');
    set_post_thumbnail_size(200, 200, true);
    add_theme_support('responsive-embeds');
    register_nav_menus(['primary' => 'Primary Menu', 'footer' => 'Footer Menu']);
    add_theme_support('custom-logo', ['height' => 100, 'width' => 100, 'flex-height' => true, 'flex-width' => true]);
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'script', 'style']);
    add_post_type_support('page', 'excerpt');
    add_theme_support('title-tag');
}
add_action('after_setup_theme', 'wholesale_shelf_setup');

function wholesale_shelf_enqueue_assets() {
    wp_enqueue_style('wholesale-shelf-style', WHOLESALE_SHELF_URI . '/style.css', [], WHOLESALE_SHELF_VERSION);
    wp_enqueue_style('wholesale-shelf-custom', WHOLESALE_SHELF_URI . '/assets/css/custom.css', ['wholesale-shelf-style'], WHOLESALE_SHELF_VERSION);
    wp_enqueue_script('wholesale-shelf-main', WHOLESALE_SHELF_URI . '/assets/js/main.js', [], WHOLESALE_SHELF_VERSION, true);
    wp_enqueue_script('wholesale-shelf-animations', WHOLESALE_SHELF_URI . '/assets/js/animations.js', [], WHOLESALE_SHELF_VERSION, true);
    wp_add_inline_style('wholesale-shelf-style', 'html{scroll-behavior:smooth}body{font-family:"Inter",sans-serif}h1,h2,h3,h4,h5,h6{font-family:"Space Grotesk",sans-serif}.hero-section{min-height:600px;display:flex;align-items:center}');
}
add_action('wp_enqueue_scripts', 'wholesale_shelf_enqueue_assets');

function wholesale_shelf_widgets_init() {
    for ($i = 1; $i <= 4; $i++) {
        register_sidebar([
            'name' => "Footer Widget Area $i",
            'id' => "footer-$i",
            'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
            'after_widget' => '</div>',
            'before_title' => '<h4 class="widget-title">',
            'after_title' => '</h4>',
        ]);
    }
}
add_action('widgets_init', 'wholesale_shelf_widgets_init');

function wholesale_shelf_excerpt_length($length) { return 30; }
add_filter('excerpt_length', 'wholesale_shelf_excerpt_length');

show_admin_bar(false);

// ===== REAL CONTENT FROM REACT SITE =====

function wholesale_shelf_get_hero_content() {
    return [
        'badge' => '✨ Exclusive Funding Strategy',
        'title' => 'Get $150,000+ in Business Credit — Without Waiting 2 Years',
        'subtitle' => 'Acquire a lender-ready aged corporation and unlock high-limit business funding in days, not years.',
        'cta_text' => 'Book My Strategy Call',
        'cta_desc' => 'Speak with a business credit specialist & learn about our verified inventory.',
    ];
}

function wholesale_shelf_get_hero_benefits() {
    return [
        'Instantly skip "startup" restrictions',
        'Qualify for dramatically higher credit limits',
        'Build business credit separate from personal',
        'Complete setup in 72 hours',
    ];
}

function wholesale_shelf_get_video_section() {
    return [
        'title' => 'Your Aged Corporation Could Unlock $150K+ in Unsecured Funding',
        'cta' => 'WATCH NOW',
    ];
}

function wholesale_shelf_get_ready_to_begin() {
    return [
        ['text' => '2-minute inventory review'],
        ['text' => '24-hour expert response'],
        ['text' => '3-day full documentation delivery'],
    ];
}

function wholesale_shelf_get_process_steps() {
    return [
        [
            'number' => '01',
            'title' => 'Acquire an Aged Corporation (2–5 Years Old)',
            'description' => 'Skip the "new business" phase entirely. Start with a corporation that already has age, history, and lender credibility.',
        ],
        [
            'number' => '02',
            'title' => 'Build a Powerful Credit Profile',
            'description' => 'We guide you through the exact steps: correct structure, proper filing, verified EIN, vendor alignment, and compliance positioning.',
        ],
        [
            'number' => '03',
            'title' => 'Secure High-Limit Credit Lines',
            'description' => 'Access $10k–$50k business cards, $25k–$75k credit lines, $150k+ combined approvals, and Net 30 vendor accounts.',
        ],
    ];
}

function wholesale_shelf_get_secret_section() {
    return [
        'title' => 'The #1 Reason Startups Get Denied: "Not Enough Time in Business."',
        'intro' => 'Lenders use corporate age to determine:',
        'factors' => ['stability', 'default probability', 'risk profile', 'creditworthiness'],
        'problem' => 'A brand-new LLC is treated as a liability, no matter how skilled the founder is.',
        'solution' => 'But an aged corporation tells lenders: "This business is established, structured, and stable."',
        'benefits' => ['higher limits', 'faster approvals', 'better terms', 'more trust'],
        'tagline' => 'This is the ultimate funding advantage.',
    ];
}

function wholesale_shelf_get_comparison() {
    return [
        'title' => 'Your Business Age Is the Key to Faster Approvals',
        'subtitle' => 'Lenders rely on time-in-business as their #1 indicator of credibility.',
        'new_llc' => [
            'title' => 'Brand New LLC',
            'items' => ['High-risk startup', 'Limited credit (typically $10k–$50k)', 'Takes 2+ years to build trust', 'Net 15 vendor terms'],
        ],
        'aged_corp' => [
            'title' => 'Aged Shelf Corporation',
            'items' => ['Established business', '$150k+ typical approvals', 'Instant credibility', 'Preferred Net 30+ terms'],
        ],
        'cta' => 'Start two years ahead — without waiting.',
        'button' => 'See How It Works',
    ];
}

function wholesale_shelf_get_complete_package() {
    return [
        'title' => 'Every Aged Corporation Comes with:',
        'subtitle' => 'This is everything you need to go from zero to funded.',
        'items' => [
            'Verified 2–5 year corporate age',
            'Clean, unused corporate history',
            'EIN + full documentation',
            'Articles of Incorporation',
            'Registered Agent Setup',
            'Corporate compliance check',
            'Initial credit-building plan',
            'Funding strategy call',
            'Step-by-step vendor activation roadmap',
            'Dedicated support specialist',
        ],
    ];
}

function wholesale_shelf_get_perfect_for() {
    return [
        'title' => 'Ideal For:',
        'categories' => [
            ['icon' => '🚀', 'title' => 'Startup Founders', 'desc' => 'Tired of slow credit-building'],
            ['icon' => '📦', 'title' => 'E-commerce Sellers', 'desc' => 'Needing inventory funding'],
            ['icon' => '💼', 'title' => 'Consultants', 'desc' => 'Needing operating capital'],
            ['icon' => '🏠', 'title' => 'Real Estate Investors', 'desc' => 'Scaling faster'],
            ['icon' => '🛠️', 'title' => 'Service Businesses', 'desc' => 'Needing immediate trust'],
            ['icon' => '👨‍💼', 'title' => 'Entrepreneurs', 'desc' => 'Separating business & personal credit'],
        ],
    ];
}

function wholesale_shelf_get_benefits() {
    return [
        ['icon' => '💰', 'title' => 'No Capital Required', 'desc' => "The corporation's age does the heavy lifting for you."],
        ['icon' => '🏆', 'title' => 'Instant Credibility', 'desc' => 'Present yourself as an established business — from day one.'],
        ['icon' => '⚡', 'title' => 'Zero Startup Delays', 'desc' => 'Avoid formation delays, paperwork, and slow credit-building.'],
        ['icon' => '⏱️', 'title' => 'Minimal Time Investment', 'desc' => 'Setup takes hours — approvals arrive in days.'],
    ];
}

function wholesale_shelf_get_trusted_authority() {
    return [
        'title' => 'Over a Decade of Experience. Thousands of Entrepreneurs Served.',
        'subtitle' => 'We are one of the most trusted providers of aged corporations in the U.S.',
        'segments' => ['high-growth startups', 'consultants', 'e-commerce founders', 'real estate investors', 'agency owners', 'small business operators'],
        'expertise' => ['Legal expertise', 'Credit system knowledge', 'Corporate structuring experience', 'Personalized client engagement'],
        'tagline' => "You're not guessing — you're guided by experts.",
        'stats' => [
            ['value' => '$150K+', 'label' => 'average funding potential'],
            ['value' => '72-hour', 'label' => 'corporate setup'],
            ['value' => '2-5 year', 'label' => 'aged entities'],
            ['value' => '5,000+', 'label' => 'corporations delivered'],
            ['value' => '30-45 days', 'label' => 'average approval timeframe'],
        ],
    ];
}

function wholesale_shelf_get_testimonials() {
    return [
        ['quote' => 'Went from $10k limits to over $150k in approvals within a month.', 'name' => 'Mark R.', 'role' => 'E-Commerce', 'rating' => 5],
        ['quote' => 'Browsed Monday, documents Wednesday, $75k approval Friday.', 'name' => 'Sarah L.', 'role' => 'Consultant', 'rating' => 5],
        ['quote' => "The fastest path to business credibility I've ever seen.", 'name' => 'Derek P.', 'role' => 'Agency Owner', 'rating' => 5],
    ];
}

function wholesale_shelf_get_commitment() {
    return [
        'title' => 'Our Commitment to You',
        'items' => ['Verified-aged corporations', 'Clean documentation', 'Full transparency', 'Clear process', 'Reliable support'],
        'tagline' => 'No surprises. No hidden risks. Just a clear path to building real business credit — fast.',
    ];
}

function wholesale_shelf_get_faq() {
    return [
        ['q' => 'Is this legal?', 'a' => 'Yes. Aged corporations are fully legal and commonly used for business credit positioning.'],
        ['q' => 'Do these corporations have credit histories?', 'a' => 'No. They have aged history, not credit activity — making them clean and ready for your credit building journey.'],
        ['q' => 'Will this hurt my personal credit?', 'a' => 'No. Business credit is built separately from personal credit.'],
        ['q' => 'How fast can I get approved?', 'a' => 'Most clients see approvals within 30–45 days.'],
        ['q' => 'How fast do I get my corporation?', 'a' => 'Within 72 hours of completing your strategy call and making your decision.'],
        ['q' => 'Can I choose the age of the corporation?', 'a' => 'Yes. We have multiple age tiers available (2-5 years) to match your funding goals.'],
        ['q' => 'What is the investment to get started?', 'a' => 'Our full-service funding solutions start at $5,000. This investment includes your aged corporation, all documentation, and our complete credit building and funding program.'],
    ];
}

function wholesale_shelf_get_limited_availability() {
    return [
        'title' => 'Ready to Unlock Real Business Funding?',
        'lines' => [
            'Take the fastest path to credibility.',
            'Take the shortcut that experienced entrepreneurs already know.',
            'Take advantage while inventory lasts.',
        ],
        'button' => 'Schedule My Strategy Call',
        'notice' => 'Only 4 Premium Aged Corporations Available This Week',
    ];
}

// RENDER FUNCTIONS
function wholesale_shelf_hero_section() {
    $hero = wholesale_shelf_get_hero_content();
    $benefits = wholesale_shelf_get_hero_benefits();
    ?>
    <section class="hero-section">
        <div class="container">
            <div style="max-width: 700px;">
                <div class="section-badge"><?php echo $hero['badge']; ?></div>
                <h1 class="hero-title"><?php echo $hero['title']; ?></h1>
                <p class="hero-subtitle"><?php echo $hero['subtitle']; ?></p>
                <ul class="hero-benefits">
                    <?php foreach ($benefits as $b): ?>
                        <li><span class="hero-benefits-icon">✓</span><?php echo $b; ?></li>
                    <?php endforeach; ?>
                </ul>
                <button class="btn btn-large"><?php echo $hero['cta_text']; ?></button>
                <p style="margin-top: 1rem; font-size: 0.9rem; color: rgba(255,255,255,0.9);"><?php echo $hero['cta_desc']; ?></p>
            </div>
        </div>
    </section>
    <?php
}

function wholesale_shelf_video_section() {
    $vid = wholesale_shelf_get_video_section();
    ?>
    <section class="section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title"><?php echo $vid['title']; ?></h2>
            </div>
            <div class="video-container" onclick="alert('Video player: Open YouTube or embedded video')">
                <div style="background: linear-gradient(135deg, #1A355E, #B21E44); height: 400px; border-radius: 16px; display: flex; align-items: center; justify-content: center;">
                    <div style="text-align: center;">
                        <div style="font-size: 60px; color: white; margin-bottom: 1rem;">▶</div>
                        <div style="color: white; font-size: 1.2rem;"><?php echo $vid['cta']; ?></div>
                    </div>
                </div>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-top: 3rem; text-align: center;">
                <?php foreach (wholesale_shelf_get_ready_to_begin() as $item): ?>
                    <div>
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">✓</div>
                        <p><?php echo $item['text']; ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
    <?php
}

function wholesale_shelf_process_section() {
    $steps = wholesale_shelf_get_process_steps();
    ?>
    <section id="how-it-works" class="section" style="background: linear-gradient(to bottom right, rgba(26, 53, 94, 0.03), rgba(178, 30, 68, 0.03));">
        <div class="container">
            <div class="section-header">
                <div class="section-badge">The Process</div>
                <h2 class="section-title">The Proven 3-Step System to Qualify for Real Business Funding</h2>
            </div>
            <div class="process-grid">
                <?php foreach ($steps as $step): ?>
                    <div class="process-card">
                        <div class="process-number"><?php echo $step['number']; ?></div>
                        <h3><?php echo $step['title']; ?></h3>
                        <p><?php echo $step['description']; ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
    <?php
}

function wholesale_shelf_secret_section() {
    $sec = wholesale_shelf_get_secret_section();
    ?>
    <section class="section">
        <div class="container">
            <div class="section-header">
                <div class="section-badge">The Secret</div>
                <h2 class="section-title"><?php echo $sec['title']; ?></h2>
            </div>
            <div style="max-width: 800px; margin: 0 auto;">
                <p style="font-weight: 600; color: var(--primary); margin-bottom: 1rem;"><?php echo $sec['intro']; ?></p>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 2rem;">
                    <?php foreach ($sec['factors'] as $f): ?>
                        <div style="padding: 1rem; background: var(--muted); border-radius: 8px; text-align: center;"><strong><?php echo $f; ?></strong></div>
                    <?php endforeach; ?>
                </div>
                <div style="background: linear-gradient(135deg, rgba(26,53,94,0.1), rgba(178,30,68,0.1)); padding: 2rem; border-radius: 12px; margin-bottom: 2rem;">
                    <p style="margin-bottom: 1rem;"><strong><?php echo $sec['problem']; ?></strong></p>
                    <p style="margin-bottom: 1.5rem; color: var(--accent); font-weight: 600;"><?php echo $sec['solution']; ?></p>
                    <p style="font-weight: 600;">That is why aged corporations consistently get:</p>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 1rem;">
                        <?php foreach ($sec['benefits'] as $b): ?>
                            <div>• <?php echo $b; ?></div>
                        <?php endforeach; ?>
                    </div>
                </div>
                <p style="text-align: center; font-weight: 600; color: var(--primary); font-size: 1.1rem;"><?php echo $sec['tagline']; ?></p>
            </div>
        </div>
    </section>
    <?php
}

function wholesale_shelf_comparison_section() {
    $comp = wholesale_shelf_get_comparison();
    ?>
    <section class="section" style="background: var(--muted);">
        <div class="container">
            <div class="section-header">
                <div class="section-badge">Comparison</div>
                <h2 class="section-title"><?php echo $comp['title']; ?></h2>
                <p class="section-subtitle"><?php echo $comp['subtitle']; ?></p>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
                <?php foreach (['new_llc', 'aged_corp'] as $type): $data = $comp[$type]; ?>
                    <div class="glass-card" style="padding: 2rem; border-radius: 12px;">
                        <h3 style="color: var(--primary); margin-bottom: 1rem;"><?php echo $data['title']; ?></h3>
                        <ul style="list-style: none; padding: 0;">
                            <?php foreach ($data['items'] as $item): ?>
                                <li style="padding: 0.5rem 0; color: var(--text-secondary);">• <?php echo $item; ?></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                <?php endforeach; ?>
            </div>
            <div style="text-align: center;">
                <p style="font-size: 1.1rem; font-weight: 600; color: var(--primary); margin-bottom: 1.5rem;"><?php echo $comp['cta']; ?></p>
                <button class="btn btn-large"><?php echo $comp['button']; ?></button>
            </div>
        </div>
    </section>
    <?php
}

function wholesale_shelf_complete_package_section() {
    $pkg = wholesale_shelf_get_complete_package();
    ?>
    <section class="section">
        <div class="container">
            <div class="section-header">
                <div class="section-badge">Complete Package</div>
                <h2 class="section-title"><?php echo $pkg['title']; ?></h2>
                <p class="section-subtitle"><?php echo $pkg['subtitle']; ?></p>
            </div>
            <div style="max-width: 600px; margin: 0 auto;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                    <?php foreach ($pkg['items'] as $item): ?>
                        <div style="padding: 1rem; background: var(--muted); border-radius: 8px; text-align: center;"><span style="color: var(--primary); font-weight: 600;">✓</span> <?php echo $item; ?></div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>
    <?php
}

function wholesale_shelf_perfect_for_section() {
    $pf = wholesale_shelf_get_perfect_for();
    ?>
    <section class="section" style="background: var(--muted);">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title"><?php echo $pf['title']; ?></h2>
            </div>
            <div class="features-grid">
                <?php foreach ($pf['categories'] as $cat): ?>
                    <div class="feature-card">
                        <div class="feature-icon"><?php echo $cat['icon']; ?></div>
                        <h3><?php echo $cat['title']; ?></h3>
                        <p><?php echo $cat['desc']; ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
    <?php
}

function wholesale_shelf_benefits_section() {
    $benefits = wholesale_shelf_get_benefits();
    ?>
    <section id="benefits" class="section">
        <div class="container">
            <div class="section-header">
                <div class="section-badge">Why Choose Us</div>
                <h2 class="section-title">Why Entrepreneurs Choose Aged Corporations</h2>
            </div>
            <div class="features-grid">
                <?php foreach ($benefits as $b): ?>
                    <div class="feature-card">
                        <div class="feature-icon"><?php echo $b['icon']; ?></div>
                        <h3><?php echo $b['title']; ?></h3>
                        <p><?php echo $b['desc']; ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
    <?php
}

function wholesale_shelf_trusted_authority_section() {
    $ta = wholesale_shelf_get_trusted_authority();
    ?>
    <section class="section" style="background: var(--muted);">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title"><?php echo $ta['title']; ?></h2>
                <p class="section-subtitle"><?php echo $ta['subtitle']; ?></p>
            </div>
            <div style="margin-bottom: 3rem;">
                <p style="text-align: center; color: var(--text-secondary); margin-bottom: 1.5rem;"><strong><?php echo implode(' • ', $ta['segments']); ?></strong></p>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; margin: 2rem 0;">
                    <?php foreach ($ta['expertise'] as $exp): ?>
                        <div><strong><?php echo $exp; ?></strong></div>
                    <?php endforeach; ?>
                </div>
                <p style="text-align: center; font-weight: 600; color: var(--primary); font-size: 1.1rem; margin-top: 2rem;"><?php echo $ta['tagline']; ?></p>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 2rem; text-align: center; padding-top: 2rem; border-top: 1px solid var(--border);">
                <?php foreach ($ta['stats'] as $stat): ?>
                    <div>
                        <div style="font-size: 2rem; font-weight: 700; color: var(--primary);"><?php echo $stat['value']; ?></div>
                        <div style="color: var(--text-secondary); font-size: 0.9rem;"><?php echo $stat['label']; ?></div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
    <?php
}

function wholesale_shelf_testimonials_section() {
    $testi = wholesale_shelf_get_testimonials();
    ?>
    <section id="testimonials" class="section">
        <div class="container">
            <div class="section-header">
                <div class="section-badge">Success Stories</div>
                <h2 class="section-title">What Business Owners Are Saying</h2>
            </div>
            <div class="testimonials-grid">
                <?php foreach ($testi as $t): ?>
                    <div class="testimonial-card">
                        <div class="testimonial-rating"><?php echo str_repeat('★', $t['rating']); ?></div>
                        <blockquote class="testimonial-text">"<?php echo $t['quote']; ?>"</blockquote>
                        <div style="border-top: 1px solid rgba(26, 53, 94, 0.1); padding-top: 1rem; margin-top: 1rem;">
                            <div style="font-weight: 600; color: var(--primary);"><?php echo $t['name']; ?></div>
                            <div style="font-size: 0.9rem; color: var(--text-tertiary);"><?php echo $t['role']; ?></div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
    <?php
}

function wholesale_shelf_commitment_section() {
    $com = wholesale_shelf_get_commitment();
    ?>
    <section class="section" style="background: var(--muted);">
        <div class="container">
            <h2 class="section-title" style="text-align: center; margin-bottom: 2rem;"><?php echo $com['title']; ?></h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; text-align: center; margin-bottom: 2rem;">
                <?php foreach ($com['items'] as $item): ?>
                    <div><strong><?php echo $item; ?></strong></div>
                <?php endforeach; ?>
            </div>
            <p style="text-align: center; color: var(--text-secondary); font-size: 1.1rem;"><?php echo $com['tagline']; ?></p>
        </div>
    </section>
    <?php
}

function wholesale_shelf_faq_section() {
    $faq = wholesale_shelf_get_faq();
    ?>
    <section id="faq" class="section" style="background: #f5f5f5;">
        <div class="container">
            <div class="section-header">
                <div class="section-badge">❓ FAQ</div>
                <h2 class="section-title">Frequently Asked Questions</h2>
            </div>
            <div style="max-width: 700px; margin: 0 auto;">
                <?php foreach ($faq as $item): ?>
                    <div class="faq-item">
                        <button class="faq-question" onclick="toggleFAQ(this)">
                            <span><?php echo $item['q']; ?></span>
                            <span class="faq-icon">+</span>
                        </button>
                        <div class="faq-answer"><?php echo $item['a']; ?></div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
    <?php
}

function wholesale_shelf_limited_availability_section() {
    $la = wholesale_shelf_get_limited_availability();
    ?>
    <section class="cta-section">
        <div class="container" style="text-align: center;">
            <h2 style="font-size: 2.5rem; color: white; margin-bottom: 1.5rem;"><?php echo $la['title']; ?></h2>
            <?php foreach ($la['lines'] as $line): ?>
                <p style="font-size: 1.1rem; color: rgba(255,255,255,0.95); margin-bottom: 0.5rem;"><?php echo $line; ?></p>
            <?php endforeach; ?>
            <button class="cta-button" style="margin-top: 2rem;"><?php echo $la['button']; ?></button>
            <p style="margin-top: 2rem; color: rgba(255,255,255,0.8); font-size: 0.9rem;"><?php echo $la['notice']; ?></p>
        </div>
    </section>
    <?php
}
