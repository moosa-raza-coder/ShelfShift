<?php
/**
 * Archive Template
 * 
 * @package Wholesale_Shelf
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header();
?>

<section class="section" style="background: var(--muted);">
    <div class="container">
        <div style="text-align: center; margin-bottom: 3rem;">
            <?php the_archive_title('<h1 class="section-title">', '</h1>'); ?>
            <?php the_archive_description('<p style="color: var(--text-secondary);">', '</p>'); ?>
        </div>

        <?php
        if (have_posts()) {
            echo '<div class="process-grid">';
            
            while (have_posts()) {
                the_post();
                ?>
                <article <?php post_class('process-card'); ?>>
                    <?php if (has_post_thumbnail()) : ?>
                        <div style="margin-bottom: 1rem; border-radius: 8px; overflow: hidden; height: 200px;">
                            <?php the_post_thumbnail('medium', ['style' => 'width: 100%; height: 100%; object-fit: cover;']); ?>
                        </div>
                    <?php endif; ?>

                    <h3>
                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    </h3>

                    <p><?php the_excerpt(); ?></p>

                    <a href="<?php the_permalink(); ?>" class="btn" style="display: inline-block; margin-top: 1rem;">
                        <?php esc_html_e('Read More →', 'wholesale-shelf'); ?>
                    </a>
                </article>
                <?php
            }
            
            echo '</div>';

            // Pagination
            the_posts_pagination([
                'prev_text' => esc_html__('← Previous', 'wholesale-shelf'),
                'next_text' => esc_html__('Next →', 'wholesale-shelf'),
            ]);

        } else {
            echo '<div style="text-align: center; padding: 3rem;"><p>' . esc_html__('No posts found.', 'wholesale-shelf') . '</p></div>';
        }
        ?>
    </div>
</section>

<?php
get_footer();
