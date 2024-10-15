# Prepare for WordCamp Skopje 2024 workshop

## Requirements

1. Latst WordPress installed in local environment.
2. [Twenty Twenty Two](https://wordpress.org/themes/twentytwentytwo/) theme - because it's the last theme that uses style.css for actual styles.
3. [NPM and NodeJS](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) - for creating blocks
4. [WP-CLI](https://make.wordpress.org/cli/handbook/guides/installing/) - not necessary but we're going to use it for quick scaffolding the plugin.

## Preparation

1. Install the latest WordPress in your local environment (preferably http://wpgems.loc but it can be anything else you want)
2. Copy content of the [db/hello-world.txt](db/hello-world.txt) and paste it in Hello World post. If your local URL is not http://wpgems.loc, change it to what you chose.
3. Install (if not present in your install) and activate [Twenty Twenty Two](https://wordpress.org/themes/twentytwentytwo/) theme (you can use any other theme where it's easy enough to add a snippet of CSS code).
4. In theme's style.css add the following code:
```CSS
a[rel~=nofollow] {
 background-color: red !important;
 color: white !important;
}
```
5. Check in Hello World post if the styles are applied (all links but one should be highlighted)