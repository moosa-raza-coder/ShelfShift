<?php
/**
 * Comments Template
 * 
 * @package Wholesale_Shelf
 */

if (!defined('ABSPATH')) {
    exit;
}

if (post_password_required()) {
    return;
}
?>

<div class="comments-area">
    <?php if (have_comments()) : ?>
        <h3 class="comments-title">
            <?php
            $comment_count = get_comments_number();
            printf(
                esc_html(_n('%s comment', '%s comments', $comment_count, 'wholesale-shelf')),
                $comment_count
            );
            ?>
        </h3>

        <ol class="comment-list">
            <?php
            wp_list_comments([
                'style' => 'ol',
                'short_ping' => true,
                'callback' => 'wholesale_shelf_comment_callback',
            ]);
            ?>
        </ol>

        <?php
        the_comments_pagination([
            'prev_text' => esc_html__('← Older comments', 'wholesale-shelf'),
            'next_text' => esc_html__('Newer comments →', 'wholesale-shelf'),
        ]);
        ?>
    <?php endif; ?>

    <?php
    comment_form([
        'title_reply' => esc_html__('Leave a Reply', 'wholesale-shelf'),
        'comment_field' => '<p class="comment-form-comment"><label for="comment">' . esc_html__('Comment', 'wholesale-shelf') . '</label><textarea id="comment" name="comment" cols="45" rows="8" required></textarea></p>',
    ]);
    ?>
</div>

<?php

/**
 * Custom comment callback
 */
function wholesale_shelf_comment_callback($comment, $args, $depth) {
    $GLOBALS['comment'] = $comment;
    ?>
    <li <?php comment_class(); ?> id="li-comment-<?php comment_ID(); ?>">
        <div class="comment">
            <div class="comment-author">
                <?php echo get_comment_author(); ?> — <span class="comment-date"><?php echo get_comment_date(); ?></span>
            </div>
            <div class="comment-content">
                <?php comment_text(); ?>
            </div>
            <?php
            comment_reply_link([
                'depth' => $depth,
                'max_depth' => $args['max_depth'],
            ]);
            ?>
        </div>
    <?php
}
