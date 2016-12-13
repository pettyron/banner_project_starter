/**
* @module gulp/sprites/hpJpg
*
* @requires gulp-if
* @requires sprity
*
* @file A gulp module for building medium rectangle banner JPEG sprites
*/
/** Build medium rectangle banner JPEG Sprite */
module.exports = function (gulp) {
    var gulpif = require('gulp-if'),
		sprity = require('sprity');

	function initSprite() {
		return sprity.src({
		    src: './src/sprites/jpg/300X250J/*.{png,jpg}',
		    orientation: 'horizontal',
		    format: 'jpg',
		    name: 'mr_sprite_jpg',
		    margin: 0,
		    style: './_mrJpgSprite.scss',
		    processor: 'sass',
		})
		.pipe(gulpif('*.jpg', gulp.dest('htdocs/300X250/assets/images/'), gulp.dest('./src/scss/partials/sprites/')));
	}

	return function () {
		initSprite();
	};
};
