<?php
if (!defined('ABSPATH')) {
    exit;
}

define('THEME_VERSION', '1.0.0');
define('THEME_DIR', get_template_directory());
define('THEME_URL', get_template_directory_uri());

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

add_action('wp_enqueue_scripts', function() {
    wp_enqueue_style('wholesale-style', THEME_URL . '/style.css', array(), THEME_VERSION);
    wp_enqueue_script('wholesale-script', THEME_URL . '/assets/js/main.js', array(), THEME_VERSION, true);
});

add_action('init', function() {
    register_post_type('funding_lead', array(
        'labels' => array('name' => 'Funding Leads'),
        'public' => false,
        'show_ui' => true,
        'supports' => array('title', 'custom-fields'),
    ));
    
    register_post_type('booking', array(
        'labels' => array('name' => 'Bookings'),
        'public' => false,
        'show_ui' => true,
        'supports' => array('title', 'custom-fields'),
    ));
});

add_filter('wp_get_attachment_image_attributes', function($attr, $attachment, $size) {
    $attr['loading'] = 'lazy';
    return $attr;
}, 10, 3);

add_action('rest_api_init', function() {
    register_rest_route('wholesale/v1', '/leads', array(
        'methods' => 'POST',
        'callback' => function($request) {
            $params = $request->get_json_params();
            $lead = wp_insert_post(array(
                'post_type' => 'funding_lead',
                'post_status' => 'publish',
                'post_title' => sanitize_text_field($params['name'] ?? 'Lead'),
            ));
            update_post_meta($lead, 'email', sanitize_email($params['email'] ?? ''));
            update_post_meta($lead, 'phone', sanitize_text_field($params['phone'] ?? ''));
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
                'post_title' => sanitize_text_field($params['name'] ?? 'Booking'),
            ));
            update_post_meta($booking, 'email', sanitize_email($params['email'] ?? ''));
            update_post_meta($booking, 'phone', sanitize_text_field($params['phone'] ?? ''));
            return rest_ensure_response(array('id' => $booking, 'success' => true));
        },
        'permission_callback' => '__return_true',
    ));
});

add_filter('comments_open', '__return_false', 20, 2);

add_action('customize_register', function($wp_customize) {
    $wp_customize->add_section('wholesale_settings', array(
        'title' => 'Wholesale Funding',
    ));
    
    $wp_customize->add_setting('video_url', array('default' => ''));
    $wp_customize->add_control('video_url', array(
        'label' => 'Video URL',
        'section' => 'wholesale_settings',
        'type' => 'text',
    ));
});
?>
