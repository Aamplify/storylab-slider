require('../misc/dependencies.js')();

/* -----  Start Tasks for Main Website Styling ----- */

const srcPath = './main/src/scss/';
const srcJsPath = './main/src/js/';
const distPath = './main/dist/';

/* Main.css */

gulp.task('sass-bundle', function() {
    run_sass([srcPath + '/main.scss'], 'expanded' //Hubspot doesn't like compressed css
        , distPath + '/css');
});

gulp.task('autoprefixer-bundle', ['clean-bundle', 'sass-bundle'], function() {
    setTimeout(function() {
        run_autoprefixer(distPath + '/css/main.css', ['last 10 versions'], false, distPath + '/css');
    }, 1000); //needs timeout due to run_sass not finished writing file before this functions runs
});

gulp.task('scripts-bundle', function() {
    run_uglify(srcJsPath + '/**/*.js', distPath + '/scripts');
});

gulp.task('clean-bundle', function() {
    clean([distPath + '/css']);
});

gulp.task('watch-scripts', function() {
    watch(srcJsPath + '/**/*.js', batch(function(events, done) {
        gulp.start('scripts-bundle', done);
    }));
});

gulp.task('watch-styles', function() {
    watch(srcPath + '/**/*.scss', batch(function(events, done) {
        gulp.start('autoprefixer-bundle', done)
    }));
});