/**
 * WordPress dependencies
 */
import { store } from '@wordpress/interactivity';

const { state } = store( 'create-block', {
	state: {
		get hasBeenOpened() {
			return state.timesOpened > 0;
		}
	}
} );
