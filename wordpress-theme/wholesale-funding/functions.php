<?php
/**
 * Wholesale Funding - WordPress Theme Functions
 * Premium B2B Funding Platform
 */

if (!defined('ABSPATH')) {
    exit;
}

// Define theme constants
define('THEME_VERSION', '1.0.0');
define('THEME_DIR', get_template_directory());
define('THEME_URL', get_template_directory_uri());

// Setup theme
add_action('after_setup_theme', function() {
    load_theme_textdomain('wholesale-funding');
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('responsive-embeds');
    add_theme_support('align-wide');
    
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'wholesale-funding'),
        'footer' => __('Footer Menu', 'wholesale-funding'),
    ));
});

// Enqueue scripts and styles
add_action('wp_enqueue_scripts', function() {
    wp_enqueue_style('wholesale-style', THEME_URL . '/style.css', array(), THEME_VERSION);
    wp_enqueue_script('wholesale-script', THEME_URL . '/assets/js/main.js', array('jquery'), THEME_VERSION, true);
});

// Register custom post types
add_action('init', function() {
    register_post_type('funding_lead', array(
        'labels' => array('name' => 'Funding Leads', 'singular_name' => 'Lead'),
        'public' => false,
        'show_ui' => true,
        'supports' => array('title', 'editor', 'custom-fields'),
    ));
    
    register_post_type('booking', array(
        'labels' => array('name' => 'Bookings', 'singular_name' => 'Booking'),
        'public' => false,
        'show_ui' => true,
        'supports' => array('title', 'editor', 'custom-fields'),
    ));
});

// Performance: Disable gutenberg on custom post types
add_filter('use_block_editor_for_post_type', function($use_block_editor, $post_type) {
    if (in_array($post_type, array('funding_lead', 'booking'))) {
        return false;
    }
    return $use_block_editor;
}, 10, 2);

// Performance: Lazy load images
add_filter('wp_get_attachment_image_attributes', function($attr, $attachment, $size) {
    $attr['loading'] = 'lazy';
    return $attr;
}, 10, 3);

// Add API endpoint for leads
add_action('rest_api_init', function() {
    register_rest_route('wholesale/v1', '/leads', array(
        'methods' => 'POST',
        'callback' => function($request) {
            $params = $request->get_json_params();
            $lead = wp_insert_post(array(
                'post_type' => 'funding_lead',
                'post_status' => 'publish',
                'post_title' => $params['name'] ?? 'Lead',
                'post_content' => json_encode($params),
            ));
            return rest_ensure_response(array('id' => $lead, 'success' => true));
        },
        'permission_callback' => '__return_true',
    ));
    
    register_rest_route('wholesale/v1', '/bookings', array(
        'methods' => 'POST',
        'callback' => function($request) {
            $params = $request->get_json_params();
            $booking = wp_insert_post(array(
                'post_type' => 'booking',
                'post_status' => 'publish',
                'post_title' => $params['name'] ?? 'Booking',
                'post_content' => json_encode($params),
            ));
            return rest_ensure_response(array('id' => $booking, 'success' => true));
        },
        'permission_callback' => '__return_true',
    ));
});

// Performance: Disable comments
add_filter('comments_open', '__return_false', 20, 2);
add_filter('pings_open', '__return_false', 20, 2);

// Performance: Remove unnecessary scripts
add_action('wp_print_styles', function() {
    wp_dequeue_style('wp-block-library');
}, 100);

// Add Elementor support if installed
if (defined('ELEMENTOR_VERSION')) {
    add_theme_support('elementor');
}

// Custom theme options
add_action('customize_register', function($wp_customize) {
    $wp_customize->add_section('wholesale_settings', array(
        'title' => 'Wholesale Funding Settings',
    ));
    
    $wp_customize->add_setting('primary_color', array(
        'default' => '#1A355E',
    ));
    
    $wp_customize->add_control('primary_color', array(
        'label' => 'Primary Color',
        'section' => 'wholesale_settings',
        'type' => 'color',
    ));
    
    $wp_customize->add_setting('accent_color', array(
        'default' => '#B21E44',
    ));
    
    $wp_customize->add_control('accent_color', array(
        'label' => 'Accent Color',
        'section' => 'wholesale_settings',
        'type' => 'color',
    ));
});
?>
