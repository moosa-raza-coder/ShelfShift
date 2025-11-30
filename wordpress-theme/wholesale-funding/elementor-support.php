<?php
/**
 * Elementor Support for Wholesale Shelf Theme
 * 
 * @package Wholesale_Shelf
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Add Elementor Theme Support
 */
function wholesale_shelf_elementor_support() {
    add_theme_support('elementor');
    add_theme_support('elementor-labs');
}
add_action('after_setup_theme', 'wholesale_shelf_elementor_support');

/**
 * Enqueue Elementor compatible styles
 */
function wholesale_shelf_elementor_styles() {
    if (defined('ELEMENTOR_VERSION')) {
        // Ensure custom fonts work with Elementor
        wp_enqueue_style('wholesale-shelf-elementor', WHOLESALE_SHELF_URI . '/assets/css/elementor.css', [], WHOLESALE_SHELF_VERSION);
    }
}
add_action('wp_enqueue_scripts', 'wholesale_shelf_elementor_styles');

/**
 * Register custom Elementor widgets (optional)
 */
function wholesale_shelf_register_elementor_widgets() {
    if (defined('ELEMENTOR_PATH') && class_exists('\Elementor\Plugin')) {
        // Custom widgets can be registered here
    }
}
add_action('elementor/widgets/register', 'wholesale_shelf_register_elementor_widgets');

/**
 * Customize Elementor settings
 */
function wholesale_shelf_elementor_settings() {
    if (class_exists('\Elementor\Settings')) {
        // Add custom Elementor settings if needed
    }
}
add_action('elementor/init', 'wholesale_shelf_elementor_settings');
