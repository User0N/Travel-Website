var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    del = require('del');

gulp.task('deleteDistFolder', function () {
    return delete ("./dist");
});

gulp.task('optimizeImages', function () {
    return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest("./dist/assets/images"))
});

gulp.task('build', ['deleteDistFolder', 'optimizeImages']);
