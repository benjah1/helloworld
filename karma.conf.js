// Karma configuration
// Generated on Thu Nov 13 2014 15:35:35 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['commonjs','mocha','chai'],


    // list of files / patterns to load in the browser
    files: [
        'js/**/*.js',
        'test/js/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'js/**/*.js': ['coverage', 'commonjs'],
        'test/js/**/*.js': ['commonjs']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    coverageReporter: {
        reporters: [
            { type: 'html', dir: 'coverage/js' },
            { type: 'lcovonly', dir: 'coverage/js' },
            { type: 'json', dir: 'coverage/js' },
            { type: 'cobertura', dir: 'coverage/js' }
        ]
    }

  });
};
