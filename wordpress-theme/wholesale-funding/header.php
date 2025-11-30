<?php
/**
 * Header Template
 * 
 * @package Wholesale_Shelf
 */

if (!defined('ABSPATH')) {
    exit;
}
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Get $150,000+ in Business Credit with aged corporations - Wholesale Shelf Corporation">
    <meta property="og:title" content="<?php bloginfo('name'); ?>">
    <meta property="og:description" content="Get $150,000+ in Business Credit without waiting 2 years">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo home_url(); ?>">
    <link rel="icon" href="<?php echo WHOLESALE_SHELF_URI; ?>/assets/img/favicon.ico">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    
    <a class="skip-link" href="#main"><?php esc_html_e('Skip to content', 'wholesale-shelf'); ?></a>
    
    <header class="site-header">
        <div class="container">
            <div class="header-inner">
                <div class="site-branding">
                    <?php
                    if (has_custom_logo()) {
                        the_custom_logo();
                    }
                    ?>
                    <div>
                        <h1 class="site-title">
                            <a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
                                <?php bloginfo('name'); ?>
                            </a>
                        </h1>
                        <p class="site-description"><?php bloginfo('description'); ?></p>
                    </div>
                </div>

                <nav class="site-navigation primary-navigation">
                    <?php
                    wp_nav_menu([
                        'theme_location' => 'primary',
                        'menu_id' => 'primary-menu',
                        'menu_class' => 'primary-menu',
                        'fallback_cb' => 'wp_page_menu',
                        'depth' => 2,
                    ]);
                    ?>
                </nav>

                <div>
                    <?php get_search_form(); ?>
                </div>
            </div>
        </div>
    </header>

    <main id="main" class="site-content">
