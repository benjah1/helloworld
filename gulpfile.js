'use strict';

var gulp = require('gulp');

// load plugins
var $ = require('gulp-load-plugins')();
var    cover = require('gulp-coverage');

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
	

});

gulp.task('jsTest', ['jsBuildTest'], function(cb) {

  var istanbul = require("gulp-istanbul");
	var browserify = require('browserify');
	var transform = require('vinyl-transform');

	gulp.src(['test/js/*.js'])
		.pipe(transform(function(filename) {
			return browserify(filename).bundle();
		}))
		.pipe(gulp.dest('./.tmp'))
		.on('finish', function() {
			gulp.src(['.tmp/**/*.js'])
		    // .pipe(istanbul())
				.pipe($.karma({
					configFile: 'karma.conf.js',
					action: 'run'
				}))
				// .pipe(istanbul.writeReports())
		    .on('end', cb);

		})


  //   gulp.src('js/**/*.js')
  //   .pipe(istanbul())
  //   .on('finish', function () {
		// 	gulp.src(['test/js/*.js'])
  //  		//  .pipe(transform(function(filename) {
		//  //    return browserify(filename).bundle();
		//  //  }))
		// 	// .pipe(gulp.dest('./.tmp'))
		// 	.pipe($.karma({
		// 		configFile: 'karma.conf.js',
		// 		action: 'run'
		// 	}))
    
		// 	.pipe(istanbul.writeReports())
  //     .on('end', cb);
		// });

// var karma = require('karma').server;
// .pipe(karma.start({
// 	    configFile: __dirname + '/karma.conf.js',
// 	    singleRun: true
// 	  }, cb))

	// gulp.src([
	// 	'js/**/*.js',
	// 	'test/js/**/*.js'
	// ], {base: '.', read: false})
	// 	.pipe($.browserify({
	// 		debug: false
	// 	}))
	// 	// .pipe(gulp.dest('./.tmp'))
	// //   .pipe(cover.instrument({
	// //       pattern: ['js/**/*.js'],
	// //       debugDirectory: 'debug'
	// //   }))
	// .pipe($.karma({
	// 	configFile: 'karma.conf.js',
	// 	action: 'run'
	// }))
 //    .pipe(cover.report({
 //        outFile: 'coverage.html'
 //    }));

	// var karma = require('karma').server;

	// karma.start({
	// 	configFile: __dirname + '/karma.conf.js',
	// 	singleRun: true
	// }, done);
 
});

gulp.task('jsClean', function () {
  return gulp.src('./.tmp', { read: false })
    .pipe($.rimraf());
});

gulp.task('watch', function () {
	 gulp.watch(['test/js/**/*.js','js/**/*.js'], ['jsTest']);
});

gulp.task('ci', ['jsTest']);