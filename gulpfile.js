const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const gcmq = require('gulp-group-css-media-queries');
const preproc = require('gulp-less');

var locals = {
    srcs: './src',
    css: {
        watch: './src/precss/**/*.less',
        src: './src/precss/styles.less',
        dest: './src/css'
    },
    html: './src/**/*.html'
}

gulp.task('build', function () {
    gulp.src(locals.css.src)
        .pipe(sourcemaps.init())
        .pipe(preproc())
        .pipe(gcmq())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS(({
            compatibility: 'ie9',
            level:2
        })))
        .pipe(browserSync.reload({
            stream: true
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(locals.css.dest))

});

gulp.task('watch',['browser-sync'], function() {
    gulp.watch(locals.css.watch, ['build']);
    gulp.watch(locals.html, browserSync.reload)}
);

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: locals.srcs
        }
    });
});