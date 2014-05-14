var path = require('path');
var gulp = require('gulp');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');

var on_error = function (err) { console.error(err.message); };

var generate_theme_less = function(dir, file_name, less_options) {
  if (typeof less_options === 'undefined') {
    less_options = {};
  }
  return gulp.src(dir + '/' + file_name + '.less').
              pipe(less(less_options).on('error', on_error)).
              pipe(minifyCSS().on('error', on_error)).
              pipe(gulp.dest(dir));
};

gulp.task('coral-bubbles-css', function() {
  var less_options = {paths: ['coral-bubbles/bootstrap']};
  return generate_theme_less('coral-bubbles', 'theme', less_options);
});

gulp.task('tulip-world-css', function() {
  return generate_theme_less('tulip-world', 'theme');
});

gulp.task('watch', function() {
  var themes = ['tulip-world', 'coral-bubbles'];
  for (var i=0; i<themes.length; i++) {
    var theme = themes[i];
    gulp.watch([theme + '/theme.less'], [theme + '-css']);
  }
});

gulp.task('default', ['watch']);
