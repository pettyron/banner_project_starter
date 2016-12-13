/**
* @module gulp/imageTasks
*
* @requires gulp-newer
* @requires gulp-cached
* @requires gulp-notify
* @requires gulp-imagemin
* @requires gulp/config
*
* @file A gulp module for image optimization and image file size control
*/

/** Optimize images for all banner sizes */
module.exports = function (gulp) {
    var newer = require('gulp-newer'),
		cached = require('gulp-cached'),
		notify = require('gulp-notify'),
		imagemin = require('gulp-imagemin');

	var imageConfig = require('./config').image;

	function medrectTask() {
		gulp.src(imageConfig.medRect.src)
			.pipe(newer(imageConfig.medRect.dest))
			.pipe(cached(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
			.pipe(gulp.dest(imageConfig.medRect.dest))
			.pipe(notify({message: '300x250 images task is complete.'}));
	}
	function skyscraperTask() {
		gulp.src(imageConfig.skyScraper.src)
			.pipe(newer(imageConfig.skyScraper.dest))
			.pipe(cached(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
			.pipe(gulp.dest(imageConfig.skyScraper.dest))
			.pipe(notify({message: '160x600 images task is complete.'}));
	}
	function halfpageTask() {
		gulp.src(imageConfig.halfPage.src)
			.pipe(newer(imageConfig.halfPage.dest))
			.pipe(cached(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
			.pipe(gulp.dest(imageConfig.halfPage.dest))
			.pipe(notify({message: '300x600 images task is complete.'}));
	}
	function leaderboardTask() {
		gulp.src(imageConfig.leaderboard.src)
			.pipe(newer(imageConfig.leaderboard.dest))
			.pipe(cached(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
			.pipe(gulp.dest(imageConfig.leaderboard.dest))
			.pipe(notify({message: '728x90 images task is complete.'}));
	}

	return function () {
		medrectTask();
		skyscraperTask();
		halfpageTask();
		leaderboardTask();
	};
};
