var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    simplevars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    pcssImport = require('postcss-import');

gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([pcssImport, simplevars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
});
