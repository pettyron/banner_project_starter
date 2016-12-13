/**
* @module gulp/stylingTasks
*
* @requires lazypipe
* @requires node-bourbon
* @requires gulp-sass
* @requires gulp-cached
* @requires gulp-changed
* @requires gulp-cssnano
* @requires gulp-rename
* @requires gulp-notify
* @requires gulp/config
*
* @file A Gulp module for Sass processing and distribution of CSS
*/

/** Lint scripts when an update to the main JavaScript file occurs and return the file size to the console */
module.exports = function (gulp) {
	var lazypipe = require('lazypipe'),
		sass = require('gulp-sass'),
		cached = require('gulp-cached'),
		changed = require('gulp-changed'),
		minifyCSS = require('gulp-cssnano'),
		rename = require('gulp-rename'),
		notify = require('gulp-notify');

	var styleConfig = require('./config').styles;

	var renameOptions = {
		basename: 'main',
		suffix: '.min'
	};

    /**
    * Set CSSNANO options
    * @param {Object} nanoOptions
    * @description override zindex default behavior in CSSNANO and override autoprefixer in CSSNANO to avoid collisions
    */
	var nanoOptions = {
		zindex: false,
		autoprefixer: false
	}

    /**
    * file include for Bourbon
    * ensure your Sass pipe is set to .pipe(sass, bourbonInclude)
    */
	var bourbonInclude = {
		includePaths: require('node-bourbon').includePaths
	};

	var repeatTasks = lazypipe()
		.pipe(sass, bourbonInclude)
		.pipe(autoprefixer, prefixOptions)
		.pipe(minifyCSS, nanoOptions)
		.pipe(rename, renameOptions);

	var mrCssDirs = styleConfig.medRect.dest + '*.css';
	var ssCssDirs = styleConfig.skyScraper.dest + '*.css';
	var hpCssDirs = styleConfig.halfPage.dest + '*.css';
	var lbCssDirs = styleConfig.leaderboard.dest + '*.css';

	function medrectTask() {
		gulp.src(styleConfig.medRect.src)
			.pipe(repeatTasks())
			.pipe(cached('sass'))
			.pipe(changed('mrCssDirs', {extension: '.css', hasChanged: changed.compareLastModifiedTime}))
			.pipe(gulp.dest(styleConfig.medRect.dest))
			.pipe(notify({message: '300 styles task is complete.'}));
	}
	function skyscraperTask() {
		gulp.src(styleConfig.skyScraper.src)
			.pipe(repeatTasks())
			.pipe(cached('sass'))
			.pipe(changed('ssCssDirs', {extension: '.css', hasChanged: changed.compareLastModifiedTime}))
			.pipe(gulp.dest(styleConfig.skyScraper.dest))
			.pipe(notify({message: '160 styles task is complete.'}));
	}
	function halfpageTask() {
		gulp.src(styleConfig.halfPage.src)
			.pipe(repeatTasks())
			.pipe(cached('sass'))
			.pipe(changed('hpCssDirs', {extension: '.css', hasChanged: changed.compareLastModifiedTime}))
			.pipe(gulp.dest(styleConfig.halfPage.dest))
			.pipe(notify({message: '600 styles task is complete.'}));
	}
	function leaderboardTask() {
		gulp.src(styleConfig.leaderboard.src)
			.pipe(repeatTasks())
			.pipe(cached('sass'))
			.pipe(changed('lbCssDirs', {extension: '.css', hasChanged: changed.compareLastModifiedTime}))
			.pipe(gulp.dest(styleConfig.leaderboard.dest))
			.pipe(notify({message: '728 styles task is complete.'}));
	}

	return function () {
		medrectTask();
		skyscraperTask();
		halfpageTask();
		leaderboardTask();
	};

};
