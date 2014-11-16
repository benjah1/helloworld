'use strict';

var gulp = require('gulp');

// load plugins
var $ = require('gulp-load-plugins')();

gulp.task('jslint', function () {
	return gulp.src('js/**/*.js', {base: '.'})
		.pipe($.jshint())
		.pipe($.jshint.reporter(require('jshint-stylish')))
		// .pipe($.browserify({
		// 	insertGlobals: true,
		// 	debug: true
		// }))
});

gulp.task('jsBuildTest', ['jslint', 'jsClean'], function() {
	return gulp.src([
		'test/js/**/*.js'
	], {base: '.'})
		.pipe($.browserify({
			debug: true
		}))
 		.pipe(gulp.dest('./.tmp'))

});

gulp.task('jsTest', ['jsBuildTest'], function() {
	return gulp.src([
		'.tmp/**/*.js'
	], {base: '.'})
		.pipe($.karma({
			configFile: 'karma.conf.js',
			action: 'run'
		}));
});

gulp.task('jsClean', function () {
  return gulp.src('./.tmp', { read: false })
    .pipe($.rimraf());
});

gulp.task('watch', function () {
	 gulp.watch(['test/js/**/*.js','js/**/*.js'], ['jsTest']);
});
