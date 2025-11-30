<?php
/**
 * Front Page Template
 * 
 * @package Wholesale_Shelf
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();

// Hero Section
wholesale_shelf_hero_section();

// How It Works Section
wholesale_shelf_process_section();

// Benefits Section
wholesale_shelf_benefits_section();

// Testimonials Section
wholesale_shelf_testimonials_section();

// FAQ Section
wholesale_shelf_faq_section();

// Final CTA Section
wholesale_shelf_final_cta();

// Blog Posts if enabled
if (get_theme_mod('show_blog_on_front')) {
    echo '<section class="section"><div class="container">';
    echo '<h2 class="section-title">Latest Posts</h2>';
    
    $args = [
        'post_type' => 'post',
        'posts_per_page' => 3,
        'orderby' => 'date',
        'order' => 'DESC',
    ];
    
    $query = new WP_Query($args);
    
    if ($query->have_posts()) {
        echo '<div class="process-grid">';
        while ($query->have_posts()) {
            $query->the_post();
            echo '<article class="post-card">';
            if (has_post_thumbnail()) {
                echo '<div style="margin-bottom: 1rem; border-radius: 8px; overflow: hidden;">';
                the_post_thumbnail('medium', ['style' => 'width: 100%; height: auto;']);
                echo '</div>';
            }
            echo '<h3><a href="' . esc_url(get_permalink()) . '">' . get_the_title() . '</a></h3>';
            echo '<p>' . wp_kses_post(get_the_excerpt()) . '</p>';
            echo '</article>';
        }
        echo '</div>';
        wp_reset_postdata();
    }
    
    echo '</div></section>';
}

get_footer();
