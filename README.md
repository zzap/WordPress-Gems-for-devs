# WordPress Gems for devs

Repository for code examples and resources used in the "WordPress gems for devs" talk.

## HTML API

### What problems does it solve?

It makes manipulation of HTML faster, easier and more controlled.

It is built completely custom, starting with [HTML standards](https://html.spec.whatwg.org/), which means the parser is never surprised by the HTML it receives but rather it supports the HTML we will probably never see.

### Reference

- [WP_HTML_Tag_Processor](https://developer.wordpress.org/reference/classes/wp_html_tag_processor/)
  - [next_tag()](https://developer.wordpress.org/reference/classes/wp_html_tag_processor/next_tag/)
  - [get_tag()](https://developer.wordpress.org/reference/classes/wp_html_tag_processor/get_tag/)
  - [get_attribute()](https://developer.wordpress.org/reference/classes/wp_html_tag_processor/get_attribute/)
  - [remove_attribute()](https://developer.wordpress.org/reference/classes/wp_html_tag_processor/remove_attribute/)
  - [get_updated_html()](https://developer.wordpress.org/reference/classes/wp_html_tag_processor/get_updated_html/)
- [WP_HTML_Processor](https://developer.wordpress.org/reference/classes/wp_html_processor/)

### Examples

- [Set aspect ratio for an iframe](https://gist.github.com/zzap/827c34cf84c5dfef0230a3315805fe3b).
- [Table of contents generator](https://github.com/WordPress/gutenberg/issues/61440#issuecomment-2107797038)
- Tests:
    - [HTML Tag Processor functionality](https://github.com/dmsnell/wordpress-develop/blob/aad531083a2eb33a051b1c8782a6c75a6d51c8b3/tests/phpunit/tests/html/wpHtmlTagProcessor.php)
    - [WP_HTML_Tag_Processor bookmark functionality](https://github.com/dmsnell/wordpress-develop/blob/aad531083a2eb33a051b1c8782a6c75a6d51c8b3/tests/phpunit/tests/html/wpHtmlTagProcessor-bookmark.php)

### Resources

- [HTML Tag Processor Roadmap](https://github.com/WordPress/gutenberg/issues/44410)
- [Introducing the HTML API in WordPress 6.2](https://make.wordpress.org/core/2023/03/07/introducing-the-html-api-in-wordpress-6-2/)
- [HTML standards](https://html.spec.whatwg.org/)

### Equivalents in other PHP frameworks

None.

## Interactivity API

### What problems does it solve?

- Compatibility with PHP hooks.
- Inter-block communication.
- Site-wide features such as client-side navigation.

### Reference

- [Interactivity API Reference](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/)
  - [The Reactive and Declarative mindset](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/core-concepts/the-reactive-and-declarative-mindset/)
    - [List of Directives](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/api-reference/#list-of-directives)
  - [Understanding global state, local context and derived state](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/core-concepts/undestanding-global-state-local-context-and-derived-state/)
    - [The store](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/api-reference/#the-store)
  - [Server-side rendering: Processing directives on the server](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/core-concepts/server-side-rendering/)
    - [Server functions](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/api-reference/#server-functions)
- [WP_Interactivity_API_Directives_Processor](https://developer.wordpress.org/reference/classes/wp_interactivity_api_directives_processor/)
- [@wordpress/create-block-interactive-template](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block-interactive-template/)

### Examples

- [The movie demo](https://wpmovies.dev/), [GitHub repo](https://github.com/WordPress/wp-movies-demo)
- [Instant Search](https://github.com/r-chrzan/instant-search-interactivity)
- [Countdown](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/interactivity-api-countdown-3cd73e)
- [Todo list](https://github.com/ahsanshaheen199/interactive-todos/tree/main)
- [Interactivity API showcase](https://github.com/WordPress/gutenberg/discussions/55642)

### Resources

- [Interactivity API: Roadmap](https://github.com/WordPress/gutenberg/discussions/52904)
- [Proposal: The Interactivity API – A better developer experience in building interactive blocks](https://make.wordpress.org/core/2023/03/30/proposal-the-interactivity-api-a-better-developer-experience-in-building-interactive-blocks/#how-to-create-interactive-blocks)
- [Interactivity API discussions](https://github.com/WordPress/gutenberg/discussions/categories/interactivity-api)
- [Changelog - Tracking Breaking Changes in the Interactivity API](https://github.com/WordPress/gutenberg/discussions/52906)
- [Getting Started - and other learning resources](https://github.com/WordPress/gutenberg/discussions/52894)

### Equivalents in other PHP frameworks

- Laravel - [Livewire](https://livewire.laravel.com/) using AlpineJS
- Symfony UX - [Live components](https://ux.symfony.com/live-component), primarily built on top of [Turbo](https://turbo.hotwired.dev/) and [Stimulus](https://stimulus.hotwired.dev/), which are part of the [Hotwire](https://hotwired.dev/) framework.
- Phoenix [LiveView](https://hexdocs.pm/phoenix_live_view/welcome.html)
