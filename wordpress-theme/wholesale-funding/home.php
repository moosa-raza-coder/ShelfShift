<?php
if (!defined('ABSPATH')) exit;
get_header();
?>

<main class="site-content">
    <div class="container">
        <h1><?php bloginfo('name'); ?></h1>
        <?php
        if (have_posts()) {
            while (have_posts()) {
                the_post();
                ?>
                <article class="post">
                    <h2><?php the_title(); ?></h2>
                    <?php the_content(); ?>
                </article>
                <?php
            }
        }
        ?>
    </div>
</main>

<?php get_footer(); ?>
