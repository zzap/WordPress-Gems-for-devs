/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';
// import domReady from '@wordpress/dom-ready';
import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor. All other files
 * get applied to the editor only.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';
import './editor.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
} );

registerBlockVariation('core/query', {
	name: 'instant-search-loop',
	title: __('Instant Search Loop'),
	description: __('Create advanced loop with instant search'),
	isActive: ({ namespace, query }) => {
		return (
			namespace === 'instant-search-loop'
			&& query.postType === 'post'
		);
	},
	attributes: {
		namespace: 'instant-search-loop',
		query: {
			postType: 'post',
		},
	},
	allowedControls: ['inherit', 'order', 'taxQuery', 'search'],
	scope: ['inserter'],
});