/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

const { state } = store( 'wpgems', {
	actions: {
		toggle: () => {
			const context = getContext();
			context.isOpen = ! context.isOpen;
			state.isOpen = context.isOpen;

		},
	},
	callbacks: {
		logIsOpen: () => {
			const { isOpen } = getContext();
			// Log the value of `isOpen` each time it changes.
			console.log( `Is open: ${ isOpen }` );
			state.isOpen = isOpen;
			if ( isOpen ) {
				state.timesToggled++;
				console.log( `Is opened ${ state.timesToggled } times.` );
			}
		},
	},
} );
