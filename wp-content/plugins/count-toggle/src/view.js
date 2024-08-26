/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

const { state } = store( 'wpgems', {
	state: {
		get firstTimeOpened() {
			return state.timesOpened > 0;
		}
	}
} );
