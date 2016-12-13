/**
* @module gulp/sprites/hpJpg
*
* @requires gulp-if
* @requires sprity
*
* @file A gulp module for building leaderboard banner JPEG sprites
*/
/** Build leaderboard banner JPEG Sprite */
module.exports = function (gulp) {
    var gulpif = require('gulp-if'),
		sprity = require('sprity');

	function initSprite() {
		return sprity.src({
		    src: './src/sprites/jpg/728X90J/*.{png,jpg}',
		    orientation: 'horizontal',
		    format: 'jpg',
		    name: 'lb_sprite_jpg',
		    margin: 0,
		    style: './_lbJpgSprite.scss',
		    processor: 'sass',
		})
		.pipe(gulpif('*.jpg', gulp.dest('htdocs/728X90/assets/images/'), gulp.dest('./src/scss/partials/sprites/')));
	}

	return function () {
		initSprite();
	};
};
