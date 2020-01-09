var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    simplevars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    browserSync = require('browser-sync').create(),
    pcssImport = require('postcss-import');

gulp.task('default', function () {
    console.log("WOW");
});

gulp.task('html', function () {
    console.log("WOW2");
});

gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([pcssImport, simplevars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function () {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html', function () {
        browerSync.reload();
    })

    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('cssInject');
    })
});

gulp.task('cssInject', ['styles'], function () {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
});
