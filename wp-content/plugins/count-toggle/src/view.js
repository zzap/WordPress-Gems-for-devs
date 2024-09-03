/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

const { state } = store( 'wpgems', {
	state: {
		get hasBeenOpened() {
			return state.timesToggled > 0;
		}
	}
} );
