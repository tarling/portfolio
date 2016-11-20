var gulp = require('gulp'),
    rjs = require('gulp-requirejs'),
    sass = require('gulp-sass'),
    importData = require('./tools/import-data/main'),
    htmlreplace = require('gulp-html-replace'),
    gcallback = require('gulp-callback'),
    runSequence = require('run-sequence'),
    ftp = require( 'vinyl-ftp' ),
    ftpCreds = require('./ftp.json'),
    uglify = require('gulp-uglify'),
    gutil = require( 'gulp-util' );

var src = "./src/";
var dataOutput = "./static/json/";
var output = "./build/";
var copyOptions = {
  base: src
}

gulp.task('default', ['copy', 'sass', 'watch'], function() {
  // place code for your default task here
});

gulp.task('import-data', function(cb){
    importData(dataOutput).then(function(){
        cb();
    });
});

gulp.task('rjs', function(cb) {
    rjs({
        name: 'main',
        baseUrl: 'src/js/',
        out: 'app.js',
        include: ['requireLib'],
        mainConfigFile: "src/js/main.js"
    })
    .pipe(uglify({output:{ascii_only:true}}))
    .pipe(gulp.dest(output))
    .pipe(gcallback(function(){
      cb()
    }));
});

gulp.task('convert-html', function() {
  return gulp.src('./src/index.html')
    .pipe(htmlreplace({
      'app-js': 'app.js'
    }))
    .pipe(gulp.dest(output));
});

gulp.task('copy', ['copy-static', 'copy-html', 'copy-partials', 'copy-js'], function() {
  
});

gulp.task('copy-static', function() {
  return gulp.src('./static/**')
    .pipe(gulp.dest(output));
});

gulp.task('copy-html', function() {
  gulp.src('./src/index.html', copyOptions)
    .pipe(gulp.dest(output));
});

gulp.task('copy-partials', function() {
  gulp.src('./src/partials/**', copyOptions)
    .pipe(gulp.dest(output));
});

gulp.task('copy-js', function() {
  return gulp.src('./src/js/**/*', copyOptions)
    .pipe(gulp.dest(output));
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(output + 'css'));
});

gulp.task('watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch('./src/js/**', ['copy-js']);
  gulp.watch('./src/index.html', ['copy-html']);
  gulp.watch('./src/partials/**', ['copy-partials']);
});

gulp.task('set-dist-path', function(cb){
  output = "./dist/";
  cb();
});

gulp.task('dist', function () {
  runSequence(
    'set-dist-path',
    ['copy-static', 'sass', 'rjs', 'convert-html', 'copy-partials'],
    'ftp-code'
  );
});

gulp.task('update-data', function(){
  runSequence(
    'import-data',
    'ftp-data'
  );
});

function makeFtpConn() {
  return ftp.create( {
        host:     'ftp.jamestarling.co.uk',
        user:     ftpCreds.user,
        password: ftpCreds.password,
        parallel: 10,
        log:      gutil.log
    } );
}

gulp.task('ftp-all', function(){
    var conn = makeFtpConn();
    var path = './dist/';

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance

    return gulp.src( path + "**/*", { base: path, buffer: false } )
        .pipe( conn.newer( ftpCreds.homeDir ) ) // only upload newer files
        .pipe( conn.dest( ftpCreds.homeDir ) );
});

gulp.task('ftp-code', function(){
    var conn = makeFtpConn();
    var path = './dist/';

    var globs = [
      path + 'css/**/*',
      path + 'json/**/*',
      path + 'partials/**/*',
      path + 'app.js',
      path + 'index.html'
    ]

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance

    return gulp.src( globs, { base: path, buffer: false } )
        .pipe( conn.newer( ftpCreds.homeDir ) ) // only upload newer files
        .pipe( conn.dest( ftpCreds.homeDir ) );
});

gulp.task('ftp-data', function(){
    var conn = makeFtpConn();

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance

    return gulp.src( dataOutput + "**/*", { base: './static/', buffer: false } )
        .pipe( conn.newer( ftpCreds.homeDir ) ) // only upload newer files
        .pipe( conn.dest( ftpCreds.homeDir ) );
});