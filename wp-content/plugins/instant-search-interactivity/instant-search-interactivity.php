<?php

/**
 * Plugin Name:       Instant search with Interactivity
 * Description:       Searching like algolia
 * Version:           0.1.0
 * Requires at least: 6.5
 * Requires PHP:      8.1
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       insidecode
 *
 * @package           insidecode
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Automatically registers block types by scanning the build/blocks folder.
 *
 * This function searches for JSON files within each subfolder and registers
 * them as block types. It is triggered on WordPress 'init' action.
 */
function instant_search_interactivity_block_init() {
	register_block_type_from_metadata( __DIR__ . '/build' );
}
add_action( 'init', 'instant_search_interactivity_block_init' );


add_filter(
	'pre_render_block',
	function ( $pre_render, $parsed_block ) {

		if ( array_key_exists( 'namespace', $parsed_block['attrs'] ) ) {
			if ( 'instant-search-loop' === $parsed_block['attrs']['namespace'] ) {
				add_filter(
					'query_loop_block_query_vars',
					function ( $query ) {

						if ( isset( $_GET['pcat'] ) || isset( $_GET['search'] ) ) {
							if ( ! empty( $_GET['search'] ) ) {
								$query['s'] = $_GET['search'];
							}

							$query['tax_query'] = array(
								'relation' => 'AND',
							);

							if ( ! empty( $_GET['pcat'] ) ) {
								$query['tax_query'][] = array(
									'taxonomy' => 'category',
									'field'    => 'term_id',
									'terms'    => array( $_GET['pcat'] ),
								);
							}
						}

						return $query;
					}
				);
			}
		}

		return $pre_render;
	},
	10,
	3
);

function insidecode_register_block_patterns() {
		register_block_pattern(
			'insidecode/instant-search-interactivity',
			array(
				'title'         => __( 'Instant search with Interactivity <3', 'textdomain' ),
				'description'   => _x( 'Instant search with Interactivity <3', 'Instant searching', 'insidecode' ),
				'content'       => '<!-- wp:insidecode/instant-search /--> <!-- wp:query {"queryId":19,"query":{"perPage":"2","pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false},"namespace":"instant-search-loop","enhancedPagination":true} --> <div class="wp-block-query"><!-- wp:post-template --> <!-- wp:post-title /--> <!-- wp:post-excerpt /--> <!-- /wp:post-template --> <!-- wp:query-pagination --> <!-- wp:query-pagination-previous /--> <!-- wp:query-pagination-numbers /--> <!-- wp:query-pagination-next /--> <!-- /wp:query-pagination --> <!-- wp:query-no-results --> <!-- wp:paragraph {"placeholder":"Add text or blocks that will display when a query returns no results."} --> <p>No posts found.</p> <!-- /wp:paragraph --> <!-- /wp:query-no-results --></div> <!-- /wp:query -->',
				'categories'    => array( 'text' ),
				'keywords'      => array( 'instant', 'search', 'interactivity' ),
				'viewportWidth' => 800,
			)
		);
}
add_action( 'init', 'insidecode_register_block_patterns' );
