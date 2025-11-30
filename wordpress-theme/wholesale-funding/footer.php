<?php
if (!defined('ABSPATH')) exit;
?>
    <footer class="site-footer">
        <div class="container">
            <div class="footer-content">
                <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All rights reserved.</p>
                <?php wp_nav_menu(array(
                    'theme_location' => 'footer',
                    'fallback_cb' => '__return_empty_string'
                )); ?>
            </div>
        </div>
    </footer>
    
    <?php wp_footer(); ?>
</body>
</html>
