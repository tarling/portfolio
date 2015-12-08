var gulp = require('gulp'),
    rjs = require('gulp-requirejs'),
    sass = require('gulp-sass'),
    importData = require('./tools/import-data/main');

var src = "./src/";
var copyOptions = {
  base: src
}

gulp.task('default', ['copy', 'sass', 'watch'], function() {
  // place code for your default task here
});

gulp.task('importData', function(){
    importData("./json/projects.json");
});

gulp.task('rjs', function(cb) {
    rjs({
        name: 'main',
        baseUrl: 'src/js/',
        out: 'build/app.js',
        include: ['requireLib'],
        mainConfigFile: "src/js/main.js"
    })
    .pipe(gulp.dest(tempPath)); // pipe it to the output DIR

    cb();
});

gulp.task('copy', ['copy-html', 'copy-js', 'copy-lib'], function() {
  
});

gulp.task('copy-html', function() {
  gulp.src('./src/index.html', copyOptions)
    .pipe(gulp.dest('./build/'));
});

gulp.task('copy-js', function() {
  gulp.src('./src/js/**/*', copyOptions)
    .pipe(gulp.dest('./build/'));
});

gulp.task('copy-lib', function() {
  gulp.src('./src/lib/**/*', copyOptions)
    .pipe(gulp.dest('./build/'));
});

gulp.task('sass', function () {
  gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch('./src/js/**', ['copy-js']);
  gulp.watch('./src/index.html', ['copy-html']);
});