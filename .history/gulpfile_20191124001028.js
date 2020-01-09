var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    simplevars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    browerSync = require('browser-sync').create();

gulp.task('default', function () {
    console.log("WOW");
});

gulp.task('html', function () {
    console.log("WOW2");
});

gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([nested, simplevars, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function () {
    browerSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html', function () {
        browerSync.reload();
    })

    watch('./app/assets/styles/**/*.css', function () {
        gulp.setMaxListeners('cssInject');
    })
});

gulp.task('cssInject', ['styles'], function () {
    return gulp.src('./app/temp/styles.css')
        .pipe(browerSync.stream());
});
