import {
  store,
  getElement
} from '@wordpress/interactivity';


const isEmpty = obj => [Object, Array].includes((obj || {}).constructor) && !Object.entries((obj || {})).length;

const updateURL = async (value, name) => {

  const url = new URL(window.location);
  const { actions } = await import('@wordpress/interactivity-router');

  if ('pcat' === name) {
	  if (!isEmpty(value)) {
		  url.searchParams.set('pcat', value);
	  } else {
      url.searchParams.delete('pcat');
	  }
  }
  if ('search' === name) {
	  if (!isEmpty(value)) {
		  url.searchParams.set('search', value);
		} else {
			url.searchParams.delete('search');
		}
	}

	await actions.navigate(`${window.location.pathname}${url.search}`);
};

const { state } = store('instantSearch', {
  actions: {
    *updateSearch() {
      const { ref } = getElement();
      const { value, name } = ref;

    // Don't navigate if the search didn't really change.
	if ('search' === name && value === state.search) return;
	if ('pcat' === name && value === state.pcat) return;

      if ('pcat' === name) {
        state.pcat = value;
      }

      if ('search' === name) {
		  state.search = value;
      }

      // If not, navigate to the new URL.
      yield updateURL(value, name);
    },

    *removeAllFilters () {
      const { actions } = yield import(
        '@wordpress/interactivity-router'
      );

		yield actions.navigate(`${window.location.pathname}`);
    },
  },
});