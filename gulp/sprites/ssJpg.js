/**
* @module gulp/sprites/hpJpg
*
* @requires gulp-if
* @requires sprity
*
* @file A gulp module for building skyscraper banner JPEG sprites
*/
/** Build skyscraper banner JPEG Sprite */
module.exports = function (gulp) {
    var gulpif = require('gulp-if'),
		sprity = require('sprity');

	function initSprite() {
		return sprity.src({
		    src: './src/sprites/jpg/160X600J/*.{png,jpg}',
		    orientation: 'horizontal',
		    format: 'jpg',
		    name: 'ss_sprite_jpg',
		    margin: 0,
		    style: './_ssJpgSprite.scss',
		    processor: 'sass',
		})
		.pipe(gulpif('*.jpg', gulp.dest('htdocs/160X600/assets/images/'), gulp.dest('./src/scss/partials/sprites/')));
	}

	return function () {
		initSprite();
	};
};
