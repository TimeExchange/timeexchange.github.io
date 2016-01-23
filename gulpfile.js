const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const imageminJpegtran = require('imagemin-jpegtran');
const imageop = require('gulp-image-optimization');
const minifyCss = require('gulp-minify-css');
gulp.task('default', () => {
  return gulp.src('images/*')
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('images/min'));
});

gulp.task('images', function(cb) {
    gulp.src(['images/**/*.png','images/**/*.jpg','images/**/*.gif','images/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 2,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('images/min')).on('end', cb).on('error', cb);
});

gulp.task('minify-css', function() {
  return gulp.src('assets/css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});