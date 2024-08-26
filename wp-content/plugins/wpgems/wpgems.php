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
			/**
			 * Find all href attributes and check if they contain
			 * our local domain
			 *
			 * https://developer.wordpress.org/reference/classes/wp_html_tag_processor/get_attribute/
			 */
			$href = $processor->get_attribute( 'href' );
			if ( str_contains( $href, 'wpgems.loc' ) ) {
				/**
				 * Remove rel attribute
				 *
				 * https://developer.wordpress.org/reference/classes/wp_html_tag_processor/remove_attribute/
				 */
				$processor->remove_attribute( 'rel' );
			}
		}
	}

	return $processor->get_updated_html();
}
add_filter( 'the_content', 'wpgems_remove_nofollow_internal' );
