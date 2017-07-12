var gulp = require('gulp'),
    exec = require('child_process').exec,
    panini = require('panini'),
    fontello = require('gulp-fontello');

gulp.task('clean', function(cb)
{
  exec('rmdir build /s /q', function (err, stdout, stderr)
  {
    console.log(stdout);
    console.log(stderr);
    // cb(err);
    cb();
  });
});

gulp.task('build', ['clean', 'pages', 'glyph'], function(cb)
{
  exec('node ./node_modules/basisjs-tools-build/bin/build build -p -b . -f ./dist/home.html -o ./build/', function (err, stdout, stderr)
  {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('pages', function()
{
  panini.refresh();

  return gulp.src('src/pages/**/*.html')
    .pipe(panini({
      root: 'src/pages/',
      layouts: 'src/layouts/',
      partials: 'src/chunks/',
      helpers: 'src/helpers/',
      data: 'src/data/'
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('glyph', function()
{
  return gulp.src('./src/glyph/config.json')
    .pipe(fontello())
    .pipe(gulp.dest('./dist/font/'));
});

gulp.task('watch', ['pages', 'glyph'], function()
{
  gulp.watch(['./src/{chunks,pages,layouts}/**/*.html'], ['pages']);
  gulp.watch(['./src/glyph/config.json'], ['glyph']);
});

gulp.task('default', ['build']);
