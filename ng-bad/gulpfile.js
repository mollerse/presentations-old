var gulp = require('gulp');
var lr = require('gulp-livereload');

gulp.task('default', function () {
  gulp.watch('index.html').on('change', lr.changed);
});