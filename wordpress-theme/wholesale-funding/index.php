<?php
if (!defined('ABSPATH')) exit;
get_header();
?>

<main class="site-content">
    <div class="container">
        <?php
        if (have_posts()) {
            while (have_posts()) {
                the_post();
                ?>
                <article class="post">
                    <h2><?php the_title(); ?></h2>
                    <?php the_excerpt(); ?>
                </article>
                <?php
            }
        } else {
            echo '<p>No posts found.</p>';
        }
        ?>
    </div>
</main>

<?php get_footer(); ?>
