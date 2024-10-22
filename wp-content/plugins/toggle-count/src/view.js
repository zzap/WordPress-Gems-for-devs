/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

const { state } = store( 'wpgems', {
	state: {
		get isOpened() {
			return state.toglleCount > 0;
		}
	}
} );
