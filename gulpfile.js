'use strict';

var gulp = require('gulp');

// load plugins
var $ = require('gulp-load-plugins')();

gulp.task('scripts', function () {
	return gulp.src('js/**/*.js', {base: '.'})
		.pipe($.jshint())
		.pipe($.jshint.reporter(require('jshint-stylish')))
		// .pipe($.browserify({
		// 	insertGlobals: true,
		// 	debug: true
		// }))
});

gulp.task('buildTest', ['scripts'], function() {
	return gulp.src([
		'test/js/**/*.js'
	], {base: '.'})
		.pipe($.browserify({
			debug: true
		}))
 		.pipe(gulp.dest('.tmp'))

});

gulp.task('test', ['buildTest'], function() {
	return gulp.src([
		'.tmp/*.js'
	], {base: '.'})
		.pipe($.karma({
			configFile: 'karma.conf.js',
			action: 'run'
		}));
});



// gulp.task('test', function() {
//     return gulp.src(['js/**/*.js','test/js/**/*.js'])
// 		.pipe($.browserify({
// 			insertGlobals: true,
// 			debug: true
// 		}))
// 		.pipe($.useref())
// 		.pipe(gulp.dest('.tmp/js/test.js'))
// 		.pipe($.karma({
// 			configFile: 'karma.conf.js',
// 			action: 'run'
// 		}));
// });

gulp.task('watch', function () {
	 gulp.watch('js/**/*.js', ['scripts']);
	 gulp.watch(['test/js/**/*.js','js/**/*.js'], ['test']);
});
