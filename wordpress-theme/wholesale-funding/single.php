<?php
/**
 * Single Post Template
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
                        <div style="margin-bottom: 1.5rem;">
                            <div style="font-size: 0.9rem; color: var(--text-tertiary); margin-bottom: 1rem;">
                                <?php printf(__('Published on %s by %s', 'wholesale-shelf'), 
                                    get_the_date(),
                                    get_the_author()
                                ); ?>
                                <?php if (get_the_category()) {
                                    echo ' in ' . get_the_category_list(', ');
                                } ?>
                            </div>
                        </div>

                        <?php if (has_post_thumbnail()) : ?>
                            <div style="margin-bottom: 2rem; border-radius: 8px; overflow: hidden;">
                                <?php the_post_thumbnail('full', ['style' => 'width: 100%; height: auto; display: block;']); ?>
                            </div>
                        <?php endif; ?>

                        <h1 class="section-title"><?php the_title(); ?></h1>

                        <div class="post-content" style="line-height: 1.8; margin: 2rem 0; color: var(--text-secondary);">
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

                        <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border);">
                            <?php the_tags('<p><strong>Tags:</strong> ', ', ', '</p>'); ?>
                        </div>
                    </article>

                    <?php
                    // Related posts
                    $related_args = [
                        'posts_per_page' => 3,
                        'orderby' => 'rand',
                        'post__not_in' => [get_the_ID()],
                        'category__in' => wp_get_post_categories(get_the_ID()),
                    ];
                    $related_query = new WP_Query($related_args);
                    
                    if ($related_query->have_posts()) {
                        echo '<div style="margin-top: 3rem;"><h3 class="section-title">Related Posts</h3><div class="process-grid">';
                        while ($related_query->have_posts()) {
                            $related_query->the_post();
                            echo '<div class="process-card"><h4><a href="' . esc_url(get_permalink()) . '">' . get_the_title() . '</a></h4>';
                            echo '<p>' . wp_kses_post(wp_trim_words(get_the_excerpt(), 15)) . '</p></div>';
                        }
                        echo '</div></div>';
                        wp_reset_postdata();
                    }

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
