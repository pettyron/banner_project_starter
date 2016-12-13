/**
* @module gulp/sprites/hpJpg
*
* @requires gulp-if
* @requires sprity
*
* @file A gulp module for building half-page banner JPEG sprites
*/
/** Build half-page banner JPEG Sprite */
module.exports = function (gulp) {
    var gulpif = require('gulp-if'),
		sprity = require('sprity');

	function initSprite() {
		return sprity.src({
		    src: './src/sprites/jpg/300X600J/*.{png,jpg}',
		    orientation: 'horizontal',
		    format: 'jpg',
		    name: 'hp_sprite_jpg',
		    margin: 0,
		    style: './_hpJpgSprite.scss',
		    processor: 'sass',
		})
		.pipe(gulpif('*.jpg', gulp.dest('htdocs/300X600/assets/images/'), gulp.dest('./src/scss/partials/sprites/')));
	}

	return function () {
		initSprite();
	};
};
