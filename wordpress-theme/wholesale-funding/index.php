<?php
/**
 * Main Template - Wholesale Shelf Funding
 * Displays the React site inside an iframe
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    
    <iframe 
        id="wholesale-shelf-iframe"
        src="https://d7657c13-7ef8-46fc-b026-f939d8f63298-00-2qwmjscg6s1hj.picard.replit.dev/"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
    
    <?php wp_footer(); ?>
</body>
</html>
