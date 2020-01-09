var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('default', function () {
    console.log("WOW");
});

gulp.task('html', function () {
    console.log("WOW2");
});

gulp.task('watch', function () {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html', function () {
        browserSync.reload();
    })

    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('cssInject');
    })
});

gulp.task('cssInject', ['styles'], function () {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
});
