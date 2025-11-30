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
                    <h1><?php the_title(); ?></h1>
                    <div class="post-meta">
                        Posted on <?php echo get_the_date(); ?> by <?php the_author(); ?>
                    </div>
                    <div class="post-content">
                        <?php the_content(); ?>
                    </div>
                </article>
                <?php
            }
        }
        ?>
    </div>
</main>

<?php get_footer(); ?>
