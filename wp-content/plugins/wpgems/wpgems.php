<?php
/**
 * Plugin Name:     WP Gems
 * Plugin URI:      PLUGIN SITE HERE
 * Description:     PLUGIN DESCRIPTION HERE
 * Author:          WC Skopje Community
 * Author URI:      YOUR SITE HERE
 * Text Domain:     wpgems
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Wpgems
 */

// Your code starts here.
if ( ! defined( 'ABSPATH') ) {
	exit;
}

add_filter( 'the_content', 'wpgems_remove_nofollow_internal' );

function wpgems_remove_nofollow_internal( $content ): string {

	$home_url_host = parse_url( get_home_url(), PHP_URL_HOST );

	$tags = new WP_HTML_Tag_Processor( $content );
	while ( $tags->next_tag() ) {
		// find all anchors
		if ( 'A' === $tags->get_tag() ) {
			// filter internal links
			$href = $tags->get_attribute( 'href' );
			if ( str_contains( $href, $home_url_host ) ) {
				// modify rel attr
				$tags->remove_attribute( 'rel' );
			}
		}
	}
	// return filtered HTML
	return $tags->get_updated_html();
}
