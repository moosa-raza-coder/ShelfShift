<?php
if (!defined('ABSPATH')) exit;
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Premium B2B Funding Solutions - Unlock $150K+ in Business Credit">
    <meta property="og:title" content="Wholesale Funding Platform">
    <meta property="og:description" content="Premium B2B Funding Solutions">
    <meta property="og:type" content="website">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap" rel="preload" as="style">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    
    <header class="site-header">
        <div class="container">
            <div class="header-inner">
                <div class="site-branding">
                    <h1 class="site-title">
                        <a href="<?php echo esc_url(home_url('/')); ?>">
                            <?php bloginfo('name'); ?>
                        </a>
                    </h1>
                </div>
                
                <nav class="site-navigation">
                    <?php wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'fallback_cb' => function() {
                            echo '<ul><li><a href="' . home_url('/') . '">Home</a></li></ul>';
                        }
                    )); ?>
                </nav>
            </div>
        </div>
    </header>
