
const { default: Splide } = require('@splidejs/splide');
const loader = require('scriptjs');
loader([
	'/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
	'/node_modules/@splidejs/splide/dist/js/splide.min.js'
], 'dependencies');


/**
 * Bootstrap and Splide will be available to you once this
 * callback is called. This is a good place to initiate
 * your scripts
 *
 * Read more about the script loader at
 * https://github.com/ded/script.js/
 */
loader.ready('dependencies', () => {
	const splide = new Splide(".splide");
	splide.mount();
	});


/**
 * Add your scripts here
 */