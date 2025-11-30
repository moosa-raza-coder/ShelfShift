<?php
/**
 * Wholesale Shelf Funding Theme Functions
 */

// Disable all WordPress front-end functionality and display iframe
if (!is_admin()) {
    add_action('wp_head', 'wholesale_remove_wp_head');
    add_action('wp', 'wholesale_disable_page_rendering');
}

function wholesale_remove_wp_head() {
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'wpl_print_css');
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
    
    // Add meta viewport for responsiveness
    echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    echo '<meta charset="UTF-8">';
}

function wholesale_disable_page_rendering() {
    global $wp_query;
    $wp_query->is_404 = false;
    $wp_query->is_page = true;
}

// Register theme features
function wholesale_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
}
add_action('after_setup_theme', 'wholesale_theme_setup');

// Enqueue styles
function wholesale_enqueue_styles() {
    wp_enqueue_style('wholesale-style', get_stylesheet_uri(), array(), '1.0.0');
}
add_action('wp_enqueue_scripts', 'wholesale_enqueue_styles');

// Remove WordPress front-end admin bar
add_filter('show_admin_bar', '__return_false');

// Disable WordPress comments
add_filter('comments_open', '__return_false', 10, 2);
add_filter('pings_open', '__return_false', 10, 2);

// Set site icon if needed
function wholesale_custom_logo() {
    if (has_custom_logo()) {
        return true;
    }
    return false;
}

// Customize login page
function wholesale_login_logo() {
    echo '<style>
        .login h1 a {
            background-image: url("' . get_template_directory_uri() . '/assets/logo.png") !important;
            background-size: contain !important;
            background-repeat: no-repeat !important;
            width: 320px !important;
            height: 65px !important;
        }
    </style>';
}
add_action('login_enqueue_scripts', 'wholesale_login_logo');

// Disable WordPress feeds
add_action('wp_head', function() {
    remove_action('wp_head', 'feed_links_extra', 3);
    remove_action('wp_head', 'feed_links', 2);
}, 1);

// Allow iframe embedding
function wholesale_allow_iframes($allowed_html, $context) {
    $allowed_html['iframe'] = array(
        'src' => true,
        'width' => true,
        'height' => true,
        'frameborder' => true,
        'allow' => true,
        'allowfullscreen' => true,
        'style' => true,
    );
    return $allowed_html;
}
add_filter('wp_kses_allowed_html', 'wholesale_allow_iframes', 10, 2);
