<?php
/**
 * 404 Not Found Template
 * 
 * @package Wholesale_Shelf
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();
?>

<section class="section">
    <div class="container" style="text-align: center;">
        <h1 class="section-title" style="font-size: 4rem;">404</h1>
        <p style="font-size: 1.5rem; color: var(--text-secondary); margin-bottom: 2rem;">
            <?php esc_html_e('Page not found', 'wholesale-shelf'); ?>
        </p>
        <p style="color: var(--text-secondary); margin-bottom: 2rem;">
            <?php esc_html_e('The page you are looking for might have been removed or is temporarily unavailable.', 'wholesale-shelf'); ?>
        </p>
        <div>
            <a href="<?php echo home_url(); ?>" class="btn btn-large"><?php esc_html_e('Go to Home', 'wholesale-shelf'); ?></a>
            <br><br>
            <?php get_search_form(); ?>
        </div>
    </div>
</section>

<?php
get_footer();
