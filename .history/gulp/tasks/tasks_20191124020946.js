gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([pcssImport, simplevars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
});
