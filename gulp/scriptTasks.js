/**
* @module gulp/scriptTasks
*
* @requires lazypipe
* @requires gulp-jshint
* @requires jshint-stylish
* @requires gulp-cached
* @requires gulp-size
* @requires gulp-notify
* @requires gulp/config
*
* @file A Gulp module for linting JavaScript and tracking the file size
*/

/** Lint scripts when an update to the main JavaScript file occurs and return the file size to the console */
module.exports = function (gulp) {
	var lazypipe = require('lazypipe'),
		jshint = require('gulp-jshint'),
		stylish = require('jshint-stylish'),
		cached = require('gulp-cached'),
		size = require('gulp-size'),
		notify = require('gulp-notify');

	var scriptConfig = require('./config').script;

	var renameOptions = {
		basename: 'scripts'
	};

	var repeatTasks = lazypipe()
		.pipe(jshint)
		.pipe(jshint.reporter, stylish)
		.pipe(size)

	function medrectTask() {
		gulp.src(scriptConfig.medRect.src)
			.pipe(cached('hinting'))
			.pipe(repeatTasks())
			.pipe(notify({message: '300x250 script task is complete.'}));
	}
	function skyscraperTask() {
		gulp.src(scriptConfig.skyScraper.src)
			.pipe(cached('hinting'))
			.pipe(repeatTasks())
			.pipe(notify({message: '160x600 script task is complete.'}));
	}
	function halfpageTask() {
		gulp.src(scriptConfig.halfPage.src)
			.pipe(cached('hinting'))
			.pipe(repeatTasks())
			.pipe(notify({message: '300x600 script task is complete.'}));
	}
	function leaderboardTask() {
		gulp.src(scriptConfig.leaderboard.src)
			.pipe(cached('hinting'))
			.pipe(repeatTasks())
			.pipe(notify({message: '728x90 script task is complete.'}));
	}

	return function () {
		medrectTask();
		skyscraperTask();
		halfpageTask();
		leaderboardTask();
	};
};
