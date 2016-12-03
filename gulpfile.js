'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('sass/*.sass', ['sass']);
});

// var sourcemaps = require('gulp-sourcemaps');
//
// gulp.task('sass', function () {
//  return gulp.src('./sass/**/*.scss')
//   .pipe(sourcemaps.init())
//   .pipe(sass().on('error', sass.logError))
//   .pipe(sourcemaps.write())
//   .pipe(gulp.dest('./css'));
// });



// var gulp = require('gulp'),
    // less = require('gulp-less'),
    // livereload = require('gulp-livereload');
//
// gulp.task('less', function() {
//   gulp.src('less/*.less')
//     .pipe(less())
//     .pipe(gulp.dest('css'))
//     .pipe(livereload());
// });
//
// gulp.task('watch', function() {
//   livereload.listen();
//   gulp.watch('less/*.less', ['less']);
// });
