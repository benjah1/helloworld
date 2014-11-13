'use strict';

var gulp = require('gulp');

// load plugins
var $ = require('gulp-load-plugins')();

gulp.task('scripts', function () {
	return gulp.src('js/*.js')
		.pipe($.jshint())
		.pipe($.jshint.reporter(require('jshint-stylish')))
		.pipe($.browserify({
			insertGlobals: true,
			debug: !gulp.env.production
		}))
});
/*
gulp.task('test', function() {
	return gulp.src([
		'js/*.js',
		'test/js/*.js'
	])
		.pipe($.karma({
			configFile: 'karma.conf.js',
			action: 'run'
		}));
});
*/

gulp.task('test', function() {
    // Bundle a test JS bundle and put it on our project JS root path.
    //var testFiles = $.glob.sync('test/js/*.js');  // Bundle all our tests.
    return gulp.src('js/*.js')
				.pipe($.browserify({
					insertGlobals: true,
					debug: true
				}))
				.pipe($.useref())
        .pipe(gulp.dest('./www/js'))
				.pipe($.karma({
					configFile: 'karma.conf.js',
					action: 'run'
				}));

});
gulp.task('watch', function () {
	 gulp.watch('js/*.js', ['scripts', 'test']);
	 gulp.watch('test/js/*.js', ['test']);
});
