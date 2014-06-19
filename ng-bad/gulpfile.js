var gulp = require('gulp');
var lr = require('gulp-livereload');
var embedlr = require('gulp-embedlr');

gulp.task('default', function () {
  gulp.watch('index.html').on('change', lr.changed);
});