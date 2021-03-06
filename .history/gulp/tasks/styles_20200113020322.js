var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    simplevars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    pcssImport = require('postcss-import'),
    mixins = require('postcss-mixins'),
    hexrgba = require('postcss-hexrgba');

gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([pcssImport, mixins, simplevars, nested, hexrgba, autoprefixer]))
        .on('error', function (errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});
