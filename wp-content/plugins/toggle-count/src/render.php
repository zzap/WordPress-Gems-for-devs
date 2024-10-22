<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
wp_interactivity_state(
	'wpgems',
	[
		'toglleCount' => 0,
		'isOpened'    => false,
	]
);
?>

<div
	<?php echo get_block_wrapper_attributes(); ?>
	data-wp-interactive="wpgems"
	data-wp-class--is-opened="state.isOpened"
>
	<p>The toggle is opened <span data-wp-text="state.toglleCount"></span> times.</p>
</div>
