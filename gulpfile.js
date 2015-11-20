var gulp = require('gulp'),
    rjs = require('gulp-requirejs');

gulp.task('default', function() {
  // place code for your default task here
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

gulp.task('copy-html', function() {
  gulp.src('./app/index.html')
    .pipe(htmlreplace({
      'blockly-js': 'blockly-min.js',
      'app-js': 'app.js',
      'test-meta': '',
    }))
    .pipe(gulp.dest(tempPath + 'app/'));
});