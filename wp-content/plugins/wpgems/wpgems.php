<?php
/**
 * Plugin Name:     WP Gems
 * Plugin URI:      PLUGIN SITE HERE
 * Description:     PLUGIN DESCRIPTION HERE
 * Author:          Community
 * Author URI:      YOUR SITE HERE
 * Text Domain:     wpgems
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Wpgems
 */

// Your code starts here.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function wpgems_remove_nofollow_internal( $content ) {
	// https://developer.wordpress.org/reference/classes/wp_html_tag_processor/
	$processor = new WP_HTML_Tag_Processor( $content );

	// https://developer.wordpress.org/reference/classes/wp_html_tag_processor/next_tag/
	while ( $processor->next_tag() ) {
		/**
		 * Find all links
		 *
		 * https://developer.wordpress.org/reference/classes/wp_html_tag_processor/get_tag/
		 */
		if ( 'A' === $processor->get_tag() ) {
			// find all internal links with rel="nofollow" and remove rel attribute

		}
	}

	return $content;
}
add_filter( 'the_content', 'wpgems_remove_nofollow_internal' );
