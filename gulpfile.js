'use strict';

var gulp = require('gulp');

// load plugins
var $ = require('gulp-load-plugins')();

gulp.task('scripts', function () {
	return gulp.src('js/*.js')
		.pipe($.jshint())
		.pipe($.jshint.reporter(require('jshint-stylish')))
		.pipe($.browserify({
			insertGlobals : true,
			debug : !gulp.env.production
		}))
});

gulp.task('watch', function () {
	 gulp.watch('js/*.js', ['scripts']);
});
