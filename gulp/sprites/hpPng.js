/**
* @module gulp/sprites/hpJpg
*
* @requires gulp-if
* @requires sprity
*
* @file A gulp module for building half-page banner PNG sprites
*/
/** Build half-page banner PNG Sprite */
module.exports = function (gulp) {
    var gulpif = require('gulp-if'),
		sprity = require('sprity');

	function initSprite() {
		return sprity.src({
		    src: './src/sprites/png/300X600P/*.{png,jpg}',
		    name: 'hp_sprite_png',
		    margin: 10,
		    style: './_hpPngSprite.scss',
		    processor: 'sass',
		})
		.pipe(gulpif('*.jpg', gulp.dest('htdocs/300X600/assets/images/'), gulp.dest('./src/scss/partials/sprites/')));
	}

	return function () {
		initSprite();
	};
};
