var path = require('path');
var gulp = require('gulp');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');

var on_error = function (err) { console.error(err.message); };

gulp.task('tulip-world-css', function() {
  return gulp.src('tulip-world/theme.less').
              pipe(less().on('error', on_error)).
              pipe(minifyCSS().on('error', on_error)).
              pipe(gulp.dest('tulip-world'));
});

gulp.task('watch', function() {
  gulp.watch(['tulip-world/theme.less'], ['tulip-world-css']);
});

gulp.task('default', ['watch']);
