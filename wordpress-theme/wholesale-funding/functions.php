<?php
/**
 * Wholesale Shelf Theme Functions
 * 
 * @package Wholesale_Shelf
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Constants
 */
define('WHOLESALE_SHELF_VERSION', '2.0.0');
define('WHOLESALE_SHELF_DIR', get_template_directory());
define('WHOLESALE_SHELF_URI', get_template_directory_uri());

/**
 * Set up theme defaults
 */
function wholesale_shelf_setup() {
    // Make theme available for translation
    load_theme_textdomain('wholesale-shelf', WHOLESALE_SHELF_DIR . '/languages');

    // Add support for post thumbnails
    add_theme_support('post-thumbnails');
    set_post_thumbnail_size(200, 200, true);

    // Add support for responsive embedded content
    add_theme_support('responsive-embeds');

    // Register navigation menus
    register_nav_menus([
        'primary' => esc_html__('Primary Menu', 'wholesale-shelf'),
        'footer' => esc_html__('Footer Menu', 'wholesale-shelf'),
    ]);

    // Add support for custom logo
    add_theme_support('custom-logo', [
        'height' => 100,
        'width' => 100,
        'flex-height' => true,
        'flex-width' => true,
    ]);

    // Add support for HTML5 markup
    add_theme_support('html5', [
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'script',
        'style',
    ]);

    // Add support for excerpt in pages
    add_post_type_support('page', 'excerpt');

    // Add support for title tag
    add_theme_support('title-tag');

    // Add support for custom post types
    add_theme_support('post-formats', ['aside', 'gallery']);
}
add_action('after_setup_theme', 'wholesale_shelf_setup');

/**
 * Enqueue theme scripts and styles
 */
function wholesale_shelf_enqueue_assets() {
    // Enqueue main stylesheet
    wp_enqueue_style(
        'wholesale-shelf-style',
        WHOLESALE_SHELF_URI . '/style.css',
        [],
        WHOLESALE_SHELF_VERSION
    );

    // Enqueue custom CSS
    wp_enqueue_style(
        'wholesale-shelf-custom',
        WHOLESALE_SHELF_URI . '/assets/css/custom.css',
        ['wholesale-shelf-style'],
        WHOLESALE_SHELF_VERSION
    );

    // Enqueue main JS
    wp_enqueue_script(
        'wholesale-shelf-main',
        WHOLESALE_SHELF_URI . '/assets/js/main.js',
        [],
        WHOLESALE_SHELF_VERSION,
        true
    );

    // Enqueue animations JS
    wp_enqueue_script(
        'wholesale-shelf-animations',
        WHOLESALE_SHELF_URI . '/assets/js/animations.js',
        [],
        WHOLESALE_SHELF_VERSION,
        true
    );

    // Inline critical CSS
    wp_add_inline_style('wholesale-shelf-style', wholesale_shelf_critical_css());

    // Localize script for dynamic data
    wp_localize_script('wholesale-shelf-main', 'wholesalfShelfData', [
        'siteUrl' => get_site_url(),
        'homeUrl' => home_url(),
        'nonce' => wp_create_nonce('wholesale-shelf-nonce'),
    ]);
}
add_action('wp_enqueue_scripts', 'wholesale_shelf_enqueue_assets');

/**
 * Enqueue admin styles and scripts
 */
function wholesale_shelf_enqueue_admin_assets() {
    wp_enqueue_style(
        'wholesale-shelf-admin',
        WHOLESALE_SHELF_URI . '/assets/css/admin.css',
        [],
        WHOLESALE_SHELF_VERSION
    );
}
add_action('admin_enqueue_scripts', 'wholesale_shelf_enqueue_admin_assets');

/**
 * Critical CSS for above-the-fold
 */
function wholesale_shelf_critical_css() {
    return '
        html { scroll-behavior: smooth; }
        body { font-family: "Inter", sans-serif; }
        h1, h2, h3, h4, h5, h6 { font-family: "Space Grotesk", sans-serif; }
        .hero-section { min-height: 600px; display: flex; align-items: center; }
    ';
}

/**
 * Register widget areas
 */
function wholesale_shelf_widgets_init() {
    register_sidebar([
        'name' => esc_html__('Primary Sidebar', 'wholesale-shelf'),
        'id' => 'primary-sidebar',
        'description' => esc_html__('Main sidebar for pages', 'wholesale-shelf'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ]);

    register_sidebar([
        'name' => esc_html__('Footer Widget Area 1', 'wholesale-shelf'),
        'id' => 'footer-1',
        'description' => esc_html__('First footer widget area', 'wholesale-shelf'),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h4 class="widget-title">',
        'after_title' => '</h4>',
    ]);

    register_sidebar([
        'name' => esc_html__('Footer Widget Area 2', 'wholesale-shelf'),
        'id' => 'footer-2',
        'description' => esc_html__('Second footer widget area', 'wholesale-shelf'),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h4 class="widget-title">',
        'after_title' => '</h4>',
    ]);

    register_sidebar([
        'name' => esc_html__('Footer Widget Area 3', 'wholesale-shelf'),
        'id' => 'footer-3',
        'description' => esc_html__('Third footer widget area', 'wholesale-shelf'),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h4 class="widget-title">',
        'after_title' => '</h4>',
    ]);

    register_sidebar([
        'name' => esc_html__('Footer Widget Area 4', 'wholesale-shelf'),
        'id' => 'footer-4',
        'description' => esc_html__('Fourth footer widget area', 'wholesale-shelf'),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h4 class="widget-title">',
        'after_title' => '</h4>',
    ]);
}
add_action('widgets_init', 'wholesale_shelf_widgets_init');

/**
 * Custom excerpt length
 */
function wholesale_shelf_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'wholesale_shelf_excerpt_length');

/**
 * Custom excerpt more
 */
function wholesale_shelf_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'wholesale_shelf_excerpt_more');

/**
 * Add custom body classes
 */
function wholesale_shelf_body_classes($classes) {
    if (is_page_template('page-home.php')) {
        $classes[] = 'is-home';
    }
    return $classes;
}
add_filter('body_class', 'wholesale_shelf_body_classes');

/**
 * Modify post class
 */
function wholesale_shelf_post_class($classes) {
    $classes[] = 'card';
    return $classes;
}
add_filter('post_class', 'wholesale_shelf_post_class');

/**
 * Add search form to header
 */
function wholesale_shelf_header_search() {
    if (!has_nav_menu('primary')) {
        echo get_search_form();
    }
}
add_action('wholesale_shelf_after_header', 'wholesale_shelf_header_search');

/**
 * Sanitize array input
 */
function wholesale_shelf_sanitize_array($array) {
    if (is_array($array)) {
        return array_map('sanitize_text_field', $array);
    }
    return sanitize_text_field($array);
}

/**
 * Get hero section content
 */
function wholesale_shelf_get_hero_content() {
    return apply_filters('wholesale_shelf_hero_content', [
        'title' => get_theme_mod('hero_title', 'Get $150,000+ in Business Credit — Without Waiting 2 Years'),
        'subtitle' => get_theme_mod('hero_subtitle', 'Acquire a lender-ready aged corporation and unlock high-limit business funding in days, not years.'),
        'cta_text' => get_theme_mod('hero_cta_text', 'Book My Strategy Call'),
    ]);
}

/**
 * Get testimonials
 */
function wholesale_shelf_get_testimonials() {
    $testimonials = [
        [
            'quote' => 'Went from $10k limits to over $150k in approvals within a month.',
            'name' => 'Mark R.',
            'role' => 'E-Commerce',
            'rating' => 5,
        ],
        [
            'quote' => 'Browsed Monday, documents Wednesday, $75k approval Friday.',
            'name' => 'Sarah L.',
            'role' => 'Consultant',
            'rating' => 5,
        ],
        [
            'quote' => 'The fastest path to business credibility I\'ve ever seen.',
            'name' => 'Derek P.',
            'role' => 'Agency Owner',
            'rating' => 5,
        ],
    ];
    return apply_filters('wholesale_shelf_testimonials', $testimonials);
}

/**
 * Get FAQ items
 */
function wholesale_shelf_get_faq() {
    $faq = [
        [
            'question' => 'Is this legal?',
            'answer' => 'Yes. Aged corporations are fully legal and commonly used for business credit positioning.',
        ],
        [
            'question' => 'Do these corporations have credit histories?',
            'answer' => 'No. They have aged history, not credit activity — making them clean and ready for your credit building journey.',
        ],
        [
            'question' => 'Will this hurt my personal credit?',
            'answer' => 'No. Business credit is built separately from personal credit.',
        ],
        [
            'question' => 'How fast can I get approved?',
            'answer' => 'Most clients see approvals within 30–45 days.',
        ],
        [
            'question' => 'How fast do I get my corporation?',
            'answer' => 'Within 72 hours of completing your strategy call and making your decision.',
        ],
        [
            'question' => 'Can I choose the age of the corporation?',
            'answer' => 'Yes. We have multiple age tiers available (2-5 years) to match your funding goals.',
        ],
        [
            'question' => 'What is the investment to get started?',
            'answer' => 'Our full-service funding solutions start at $5,000. This investment includes your aged corporation, all documentation, and our complete credit building and funding program.',
        ],
    ];
    return apply_filters('wholesale_shelf_faq', $faq);
}

/**
 * Disable WordPress admin bar for non-admins on frontend
 */
show_admin_bar(false);

/**
 * Custom theme support for blocks
 */
function wholesale_shelf_setup_block_editor() {
    add_theme_support('wp-block-styles');
    add_theme_support('wp-block-patterns');
}
add_action('after_setup_theme', 'wholesale_shelf_setup_block_editor');

/**
 * Get hero benefits
 */
function wholesale_shelf_get_hero_benefits() {
    return apply_filters('wholesale_shelf_hero_benefits', [
        'Instantly skip "startup" restrictions',
        'Qualify for dramatically higher credit limits',
        'Build business credit separate from personal',
        'Complete setup in 72 hours',
    ]);
}

/**
 * Get process steps
 */
function wholesale_shelf_get_process_steps() {
    return apply_filters('wholesale_shelf_process_steps', [
        [
            'number' => '01',
            'icon' => '🏢',
            'title' => 'Acquire an Aged Corporation',
            'subtitle' => '(2–5 Years Old)',
            'description' => 'Skip the "new business" phase entirely. Start with a corporation that already has age, history, and lender credibility.',
        ],
        [
            'number' => '02',
            'icon' => '📋',
            'title' => 'Build a Powerful Credit Profile',
            'subtitle' => '',
            'description' => 'We guide you through the exact steps: correct structure, proper filing, verified EIN, vendor alignment, and compliance positioning.',
        ],
        [
            'number' => '03',
            'icon' => '💳',
            'title' => 'Secure High-Limit Credit Lines',
            'subtitle' => '',
            'description' => 'Access $10k–$50k business cards, $25k–$75k credit lines, $150k+ combined approvals, and Net 30 vendor accounts.',
        ],
    ]);
}

/**
 * Get benefits
 */
function wholesale_shelf_get_benefits() {
    return apply_filters('wholesale_shelf_benefits', [
        [
            'icon' => '💰',
            'title' => 'No Capital Required',
            'description' => 'The corporation\'s age does the heavy lifting for you.',
        ],
        [
            'icon' => '🏆',
            'title' => 'Instant Credibility',
            'description' => 'Present yourself as an established business — from day one.',
        ],
        [
            'icon' => '⚡',
            'title' => 'Zero Startup Delays',
            'description' => 'Avoid formation delays, paperwork, and slow credit-building.',
        ],
        [
            'icon' => '⏱️',
            'title' => 'Minimal Time Investment',
            'description' => 'Setup takes hours — approvals arrive in days.',
        ],
    ]);
}

/**
 * Render hero section
 */
function wholesale_shelf_hero_section() {
    $hero = wholesale_shelf_get_hero_content();
    $benefits = wholesale_shelf_get_hero_benefits();
    ?>
    <section class="hero-section">
        <div class="container">
            <div style="max-width: 700px;">
                <div class="section-badge" style="color: #B21E44;">✨ Exclusive Funding Strategy</div>
                <h1 class="hero-title"><?php echo wp_kses_post($hero['title']); ?></h1>
                <p class="hero-subtitle"><?php echo wp_kses_post($hero['subtitle']); ?></p>
                <ul class="hero-benefits">
                    <?php foreach ($benefits as $benefit) : ?>
                        <li>
                            <span class="hero-benefits-icon">✓</span>
                            <?php echo wp_kses_post($benefit); ?>
                        </li>
                    <?php endforeach; ?>
                </ul>
                <button class="btn btn-large" onclick="alert('Schedule call functionality')"><?php echo wp_kses_post($hero['cta_text']); ?></button>
            </div>
        </div>
    </section>
    <?php
}

/**
 * Render process section
 */
function wholesale_shelf_process_section() {
    $steps = wholesale_shelf_get_process_steps();
    ?>
    <section id="how-it-works" class="section">
        <div class="container">
            <div class="section-header">
                <div class="section-badge">The Process</div>
                <h2 class="section-title">The Proven <span class="text-gradient-gold">3-Step System</span> to Qualify for Real Business Funding</h2>
            </div>
            <div class="process-grid">
                <?php foreach ($steps as $step) : ?>
                    <div class="process-card">
                        <div style="font-size: 2.5rem; margin-bottom: 1rem;"><?php echo wp_kses_post($step['icon']); ?></div>
                        <div class="process-number"><?php echo wp_kses_post($step['number']); ?></div>
                        <h3><?php echo wp_kses_post($step['title']); ?><?php if ($step['subtitle']) echo ' <span class="text-gradient-gold">' . wp_kses_post($step['subtitle']) . '</span>'; ?></h3>
                        <p><?php echo wp_kses_post($step['description']); ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
            <div style="text-align: center; margin-top: 3rem;">
                <button class="btn btn-large" onclick="alert('Schedule call functionality')">Schedule Your Strategy Call</button>
            </div>
        </div>
    </section>
    <?php
}

/**
 * Render benefits section
 */
function wholesale_shelf_benefits_section() {
    $benefits = wholesale_shelf_get_benefits();
    ?>
    <section id="benefits" class="section" style="background: linear-gradient(to bottom right, rgba(26, 53, 94, 0.03), rgba(178, 30, 68, 0.03));">
        <div class="container">
            <div class="section-header">
                <div class="section-badge" style="color: #B21E44;">Why Choose Us</div>
                <h2 class="section-title">Why Entrepreneurs Choose <span class="text-gradient-gold">Aged Corporations</span></h2>
            </div>
            <div class="features-grid">
                <?php foreach ($benefits as $benefit) : ?>
                    <div class="feature-card">
                        <div class="feature-icon"><?php echo wp_kses_post($benefit['icon']); ?></div>
                        <h3><?php echo wp_kses_post($benefit['title']); ?></h3>
                        <p><?php echo wp_kses_post($benefit['description']); ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
            <div style="text-align: center; margin-top: 3rem;">
                <button class="btn btn-large" onclick="alert('Schedule call functionality')">Schedule Your Strategy Call</button>
            </div>
        </div>
    </section>
    <?php
}

/**
 * Render testimonials section
 */
function wholesale_shelf_testimonials_section() {
    $testimonials = wholesale_shelf_get_testimonials();
    ?>
    <section id="testimonials" class="section">
        <div class="container">
            <div class="section-header">
                <div class="section-badge">Success Stories</div>
                <h2 class="section-title">What Business Owners <span class="text-gradient-gold">Are Saying</span></h2>
            </div>
            <div class="testimonials-grid">
                <?php foreach ($testimonials as $testimonial) : ?>
                    <div class="testimonial-card">
                        <div class="testimonial-rating"><?php echo str_repeat('★', $testimonial['rating']); ?></div>
                        <blockquote class="testimonial-text">"<?php echo wp_kses_post($testimonial['quote']); ?>"</blockquote>
                        <div class="testimonial-header" style="border-top: 1px solid rgba(26, 53, 94, 0.1); padding-top: 1rem; margin-top: 1rem;">
                            <div class="testimonial-avatar"><?php echo wp_kses_post(substr($testimonial['name'], 0, 2)); ?></div>
                            <div class="testimonial-info">
                                <h4><?php echo wp_kses_post($testimonial['name']); ?></h4>
                                <p><?php echo wp_kses_post($testimonial['role']); ?></p>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
    <?php
}

/**
 * Render FAQ section
 */
function wholesale_shelf_faq_section() {
    $faqs = wholesale_shelf_get_faq();
    ?>
    <section id="faq" class="section" style="background: #f5f5f5;">
        <div class="container">
            <div class="section-header">
                <div class="section-badge">❓ FAQ</div>
                <h2 class="section-title">Frequently Asked <span class="text-gradient-gold">Questions</span></h2>
            </div>
            <div style="max-width: 700px; margin: 0 auto;">
                <?php foreach ($faqs as $index => $faq) : ?>
                    <div class="faq-item">
                        <button class="faq-question" onclick="toggleFAQ(this)">
                            <span><?php echo wp_kses_post($faq['question']); ?></span>
                            <span class="faq-icon">+</span>
                        </button>
                        <div class="faq-answer">
                            <?php echo wp_kses_post($faq['answer']); ?>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
    <?php
}

/**
 * Render final CTA section
 */
function wholesale_shelf_final_cta() {
    ?>
    <section class="cta-section">
        <div class="container">
            <h2 style="font-size: 2.5rem; color: white; margin-bottom: 1rem;">Ready to Get Funded?</h2>
            <p style="font-size: 1.25rem; color: rgba(255,255,255,0.95); margin-bottom: 2rem;">Schedule a strategy call with our business credit specialists today</p>
            <button class="cta-button" onclick="alert('Schedule call functionality')">Book Your Call Now</button>
        </div>
    </section>
    <?php
}
