/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

const { state } = store( 'wpgems', {
	state: {
		// get themeText() {
		// 	return state.isDark ? state.darkText : state.lightText;
		// },
	},
	actions: {
		toggleOpen() {
			const context = getContext();
			context.isOpen = ! context.isOpen;
		},
		toggleTheme() {
			state.isDark = ! state.isDark;
			state.themeText = state.isDark ? state.darkText : state.lightText;
		},
	},
	callbacks: {
		logIsOpen: () => {
			const { isOpen } = getContext();
			// Log the value of `isOpen` each time it changes.
			if ( isOpen ) {
				state.toglleCount++;
			}
			console.log( `Is open: ${ isOpen }` );
		},
	},
} );
