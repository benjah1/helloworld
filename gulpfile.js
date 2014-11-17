'use strict';

var gulp = require('gulp');

// load plugins
var $ = require('gulp-load-plugins')();

gulp.task('jslint', function () {
	return gulp.src([
		'js/**/*.js', 
		'test/js/**/*.js'
	], {base: '.'})
		.pipe($.jshint())
		.pipe($.jshint.reporter(require('jshint-stylish')))
});

gulp.task('jsTest', ['jslint', 'jsClean'], function(cb) {
	var karma = require('karma').server;
	karma.start({
	  configFile: __dirname + '/karma.conf.js',
	  singleRun: true
	}, cb);
});

gulp.task('jsClean', function () {
  return gulp.src([
  	'coverage/js'
  ], { read: false })
    .pipe($.rimraf());
});

gulp.task('watch', function () {
	 gulp.watch(['test/js/**/*.js','js/**/*.js'], ['jsTest']);
});

gulp.task('ci', ['jsTest'], function() {
	var coveralls = require('gulp-coveralls');
	gulp.src('coverage/**/lcov.info')
	  .pipe(coveralls());
});