<?php
/**
 * Plugin Name:       Block Development Examples - Countdown 3cd73e
 * Description:       Countdown created with the Interactivity API
 * Requires at least: 6.5
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       block-development-examples
 *
 * @package           block-development-examples
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function interactivity_api_countdown_3cd73e__register_block() {
	register_block_type( __DIR__ . '/build' );
}

add_action( 'init', 'interactivity_api_countdown_3cd73e__register_block' );
