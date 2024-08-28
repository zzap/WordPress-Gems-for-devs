# WordPress Gems for devs

Repository for code examples and resources used in the "WordPress gems for devs" talk.

## HTML API

Reference:

- [WP_HTML_Tag_Processor](https://developer.wordpress.org/reference/classes/wp_html_tag_processor/)
  - [next_tag()](https://developer.wordpress.org/reference/classes/wp_html_tag_processor/next_tag/)
  - [get_tag()](https://developer.wordpress.org/reference/classes/wp_html_tag_processor/get_tag/)
  - [get_attribute()](https://developer.wordpress.org/reference/classes/wp_html_tag_processor/get_attribute/)
  - [remove_attribute()](https://developer.wordpress.org/reference/classes/wp_html_tag_processor/remove_attribute/)
  - [get_updated_html()](https://developer.wordpress.org/reference/classes/wp_html_tag_processor/get_updated_html/)
- [WP_HTML_Processor](https://developer.wordpress.org/reference/classes/wp_html_processor/)

Examples:

- [Set aspect ratio for an iframe](https://gist.github.com/zzap/827c34cf84c5dfef0230a3315805fe3b).
- [Table of contents generator](https://github.com/WordPress/gutenberg/issues/61440#issuecomment-2107797038)
- Tests:

    - [HTML Tag Processor functionality](https://github.com/dmsnell/wordpress-develop/blob/aad531083a2eb33a051b1c8782a6c75a6d51c8b3/tests/phpunit/tests/html/wpHtmlTagProcessor.php)
    - [WP_HTML_Tag_Processor bookmark functionality](https://github.com/dmsnell/wordpress-develop/blob/aad531083a2eb33a051b1c8782a6c75a6d51c8b3/tests/phpunit/tests/html/wpHtmlTagProcessor-bookmark.php)

Resources:

- [HTML Tag Processor Roadmap](https://github.com/WordPress/gutenberg/issues/44410)
- [Introducing the HTML API in WordPress 6.2](https://make.wordpress.org/core/2023/03/07/introducing-the-html-api-in-wordpress-6-2/)
- [HTML standards](https://html.spec.whatwg.org/)
