<?php
/**
 * Main Blog Template
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
        <div style="display: grid; grid-template-columns: 1fr 300px; gap: 2rem;">
            <div>
                <?php
                if (have_posts()) {
                    if (is_home()) {
                        echo '<h1 class="section-title">Latest Posts</h1>';
                    } elseif (is_category()) {
                        single_cat_title('<h1 class="section-title">', '</h1>');
                    } elseif (is_tag()) {
                        single_tag_title('<h1 class="section-title">Posts tagged: ', '</h1>');
                    } elseif (is_author()) {
                        echo '<h1 class="section-title">Posts by ' . get_the_author() . '</h1>';
                    }

                    echo '<div style="display: grid; gap: 2rem;">';
                    
                    while (have_posts()) {
                        the_post();
                        ?>
                        <article <?php post_class('process-card'); ?>>
                            <?php if (has_post_thumbnail()) : ?>
                                <div style="margin-bottom: 1rem; border-radius: 8px; overflow: hidden; height: 300px;">
                                    <?php the_post_thumbnail('large', ['style' => 'width: 100%; height: 100%; object-fit: cover;']); ?>
                                </div>
                            <?php endif; ?>

                            <h2 style="margin-bottom: 0.5rem;">
                                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                            </h2>

                            <div style="font-size: 0.9rem; color: var(--text-tertiary); margin-bottom: 1rem;">
                                <?php printf(__('Published on %s by %s', 'wholesale-shelf'), 
                                    get_the_date(),
                                    get_the_author()
                                ); ?>
                                <?php if (get_the_category()) {
                                    echo ' in ' . get_the_category_list(', ');
                                } ?>
                            </div>

                            <div class="post-content">
                                <?php the_excerpt(); ?>
                            </div>

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
                    ?>
                    <div style="text-align: center; padding: 3rem;">
                        <h2><?php esc_html_e('Nothing found', 'wholesale-shelf'); ?></h2>
                        <p><?php esc_html_e('Sorry, no posts matched your criteria.', 'wholesale-shelf'); ?></p>
                        <?php get_search_form(); ?>
                    </div>
                    <?php
                }
                ?>
            </div>

            <aside class="sidebar">
                <?php
                if (is_active_sidebar('primary-sidebar')) {
                    dynamic_sidebar('primary-sidebar');
                }
                ?>
            </aside>
        </div>
    </div>
</section>

<?php
get_footer();
