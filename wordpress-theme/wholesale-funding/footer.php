<?php
/**
 * Footer Template
 * 
 * @package Wholesale_Shelf
 */

if (!defined('ABSPATH')) {
    exit;
}
?>
    </main>

    <footer class="site-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3><?php echo esc_html(get_bloginfo('name')); ?></h3>
                    <p><?php echo wp_kses_post(get_bloginfo('description')); ?></p>
                </div>

                <?php
                for ($i = 1; $i <= 3; $i++) {
                    if (is_active_sidebar("footer-$i")) {
                        echo '<div class="footer-section">';
                        dynamic_sidebar("footer-$i");
                        echo '</div>';
                    }
                }
                ?>
            </div>

            <div class="footer-bottom">
                <nav class="footer-navigation">
                    <?php
                    wp_nav_menu([
                        'theme_location' => 'footer',
                        'menu_class' => 'footer-menu',
                        'fallback_cb' => 'wp_page_menu',
                        'depth' => 1,
                    ]);
                    ?>
                </nav>

                <p>&copy; <?php echo date('Y'); ?> <?php echo esc_html(get_bloginfo('name')); ?>. <?php esc_html_e('All rights reserved.', 'wholesale-shelf'); ?></p>
            </div>
        </div>
    </footer>

    <?php wp_footer(); ?>
</body>
</html>
