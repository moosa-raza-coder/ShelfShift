<?php
if (!defined('ABSPATH')) { exit; }
get_header();

// Render all sections in order from React site
wholesale_shelf_hero_section();
wholesale_shelf_video_section();
wholesale_shelf_process_section();
wholesale_shelf_secret_section();
wholesale_shelf_comparison_section();
wholesale_shelf_complete_package_section();
wholesale_shelf_perfect_for_section();
wholesale_shelf_benefits_section();
wholesale_shelf_trusted_authority_section();
wholesale_shelf_testimonials_section();
wholesale_shelf_commitment_section();
wholesale_shelf_faq_section();
wholesale_shelf_limited_availability_section();

get_footer();
