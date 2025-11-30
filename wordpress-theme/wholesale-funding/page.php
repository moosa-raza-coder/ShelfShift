<?php
/**
 * Single Page Template
 * 
 * @package Wholesale_Shelf
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();
?>

<section class="section">
    <div class="container" style="display: grid; grid-template-columns: 1fr 300px; gap: 2rem; max-width: 1000px;">
        <main>
            <?php
            if (have_posts()) {
                while (have_posts()) {
                    the_post();
                    ?>
                    <article <?php post_class(); ?>>
                        <?php if (has_post_thumbnail()) : ?>
                            <div style="margin-bottom: 2rem; border-radius: 8px; overflow: hidden;">
                                <?php the_post_thumbnail('full', ['style' => 'width: 100%; height: auto; display: block;']); ?>
                            </div>
                        <?php endif; ?>

                        <h1 class="section-title"><?php the_title(); ?></h1>

                        <div class="page-content" style="line-height: 1.8; margin: 2rem 0; color: var(--text-secondary);">
                            <?php the_content(); ?>
                        </div>

                        <?php
                        wp_link_pages([
                            'before' => '<div style="margin: 2rem 0;">',
                            'after'  => '</div>',
                            'link_before' => '<span class="btn" style="margin-right: 0.5rem;">',
                            'link_after' => '</span>',
                        ]);
                        ?>
                    </article>

                    <?php
                    // Comments
                    if (comments_open() || get_comments_number()) {
                        comments_template();
                    }
                }
            }
            ?>
        </main>

        <aside class="sidebar">
            <?php
            if (is_active_sidebar('primary-sidebar')) {
                dynamic_sidebar('primary-sidebar');
            }
            ?>
        </aside>
    </div>
</section>

<?php
get_footer();
