
const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');


function watchCss(cb) {
	watch('./css/**/*.scss', series(developmentCss));
	cb();
}


function developmentCss() {
	return src('./css/src/**.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(cleanCSS({ compatibility: '*' }))
		.pipe(sourcemaps.write())
		.pipe(autoprefixer())
		.pipe(dest('./css/dist/'));
}


function productionCss() {
	return src('./css/src/**.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(cleanCSS({ compatibility: '*' }))
		.pipe(autoprefixer())
		.pipe(dest('./css/dist/'));
}


exports.dev = series(developmentCss, watchCss);
exports.production = series(productionCss);
