'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');

gulp.task('default', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:3000",
        files: ["public/**/*.*", "routes/**/*.*", "views/**/*.*", "routes/*.*", '*.js'],
        browser: "chrome",
        port: 7000,
	});
});

gulp.task('nodemon', function (cb) {
	var started = false;

	return nodemon({
		script: './bin/www'
	}).on('start', function () {
		if (!started) {
			cb();
			started = true; 
		} 
	});
});