var http = require('http');
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var refresh = require('gulp-livereload');
var lr = require('tiny-lr');
var lrserver = lr();
var embedlr = require('gulp-embedlr');
var ecstatic = require('ecstatic');

var livereloadport = 35729,
    serverport = 1337;

gulp.task('scripts', function() {
    return gulp.src(['src/**/*.js'])
        .pipe(browserify())
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('js/'))
        .pipe(refresh(lrserver));
});

gulp.task('styles', function() {
    return gulp.src(['sass/style.sass'])
        .pipe(sass())
        .on('error', console.log)
        .pipe(gulp.dest('css/'))
        .pipe(refresh(lrserver));
});

gulp.task('serve', function() {
  //Set up your static fileserver, which serves files in the build dir
  http.createServer(ecstatic({ root: __dirname })).listen(serverport);

  //Set up your livereload server
  lrserver.listen(livereloadport);
});


gulp.task('html', function() {
    return gulp.src("index.html")
        .pipe(refresh(lrserver));
});

gulp.task('embedlr', function() {
    return gulp.src("index.html")
        .pipe(embedlr())
        .pipe(gulp.dest(''));
});

// Requires gulp >=v3.5.0
gulp.task('watch', function () {
    gulp.watch('src/**', ['scripts']);
    gulp.watch('sass/**', ['styles']);
    gulp.watch('index.html', ['html']);
});

gulp.task('default', ['scripts', 'styles', 'serve', 'watch']);