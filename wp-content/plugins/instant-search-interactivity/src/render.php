<?php

$wrapper_attributes = get_block_wrapper_attributes(
	array( 'class' => 'instant-search' )
);

$post = get_post();

$category = get_terms(
	array(
		'taxonomy'   => 'category',
		'hide_empty' => true,
	)
);


$state = wp_interactivity_state(
	'instantSearch',
	array(
		'search' => isset( $_GET['search'] ) ? $_GET['search'] : '',
		'pcat'   => isset( $_GET['pcat'] ) ? $_GET['pcat'] : '',
	)
);

?>

<div
	data-wp-interactive="instantSearch"
	<?php echo $wrapper_attributes; ?>
	>
	<form class="form">
		<div class="layout">
			<div class="grow1">
				<input
					id="instantSearch"
					type="search"
					class="form-input"
					name="search"
					role="search"
					aria-live="polite"
					inputmode="search"
					placeholder="<?php echo esc_attr_x( 'Search for a post...', 'insidecode' ); ?>"
					required=""
					autocomplete="off"
					data-wp-bind--value="state.search"
					data-wp-on--input="actions.updateSearch"
				>
			</div>
			<div class="wrapper">
				<div class="gradient"></div>
				<div class="items">
					<div>
						<div class="form-select">
							<select 
								name="pcat"
								data-wp-bind--value="state.pcat"
								data-wp-on--change="actions.updateSearch"
							>
								<option value=""><?php echo __( 'Categories', 'insidecode' ); ?></option>
								<?php foreach ( $category as $cat ) { ?>
									<option value="<?php echo $cat->term_id; ?>"><?php echo $cat->name; ?></option> 
								<?php } ?>
							</select>
						</div>
					</div>
				</div>
			</div>
			<div class="center-item">
				<div
					data-wp-on--click="actions.removeAllFilters"
					class="search-clear-button"><?php echo esc_html_x( 'Clear filters', 'sccg' ); ?></div>
			</div>
		</div>
	</form>
</div>
