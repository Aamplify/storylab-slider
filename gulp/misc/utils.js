/* ----- Common Functions ----- */

module.exports = function() {

    this.run_sass = function(src, outputStyle, destination) {
        pump([
            gulp.src(src),
            sass({ outputStyle: outputStyle }).on('error', sass.logError),
            rename('bundle.css'),
            gulp.dest(destination)
        ]);
    }

    this.run_autoprefixer = function(src, browsers, cascade, destination) {
        pump([
            gulp.src(src),
            autoprefixer({
                browsers: browsers,
                cascade: cascade
            }),
            gulp.dest(destination)
        ]);
    }

    this.run_uglify = function(src, destination) {
        pump([
            gulp.src(src),
            concat('bundle.js'),
            gulp.dest(destination),
            uglify(),
            gulp.dest(destination)
        ]);

    }

    this.add_style_tags = function(src, destination) {
        pump([
            gulp.src(src), inject.prepend('<style>'), inject.append('</style>'), gulp.dest(destination)
        ]);
    }

    this.add_script_tags = function(src, destination) {
        pump([
            gulp.src(src), inject.prepend('<script>'), inject.append('</script>'), gulp.dest(destination)
        ]);
    }
    this.clean = function(path) {
        del(path);
    }
}