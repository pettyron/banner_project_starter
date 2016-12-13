/**
* @module gulp/sprites/hpJpg
*
* @requires gulp-if
* @requires sprity
*
* @file A gulp module for building skyscraper banner PNG sprites
*/
/** Build skyscraper banner PNG Sprite */
module.exports = function (gulp) {
    var gulpif = require('gulp-if'),
		sprity = require('sprity');

	function initSprite() {
		return sprity.src({
		    src: './src/sprites/png/160X600P/*.{png,jpg}',
		    name: 'mr_sprite_png',
		    margin: 10,
		    style: './_mrPngSprite.scss',
		    processor: 'sass',
		})
		.pipe(gulpif('*.jpg', gulp.dest('htdocs/160X600/assets/images/'), gulp.dest('./src/scss/partials/sprites/')));
	}

	return function () {
		initSprite();
	};
};
