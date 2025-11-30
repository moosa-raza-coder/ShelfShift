<?php
/**
 * Search Form Template
 * 
 * @package Wholesale_Shelf
 */

if (!defined('ABSPATH')) {
    exit;
}
?>

<form role="search" method="get" class="search-box" action="<?php echo home_url('/'); ?>">
    <input type="search" class="search-input" placeholder="<?php esc_attr_e('Search...', 'wholesale-shelf'); ?>" value="<?php echo get_search_query(); ?>" name="s">
    <button type="submit" class="search-submit"><?php esc_html_e('Search', 'wholesale-shelf'); ?></button>
</form>
