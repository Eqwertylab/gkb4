var gulp = require('gulp');
var exec = require('child_process').exec;
var panini = require('panini');

gulp.task('clean', function(cb)
{
  exec('rmdir build /s /q', function (err, stdout, stderr)
  {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('build', ['clean'], function(cb)
{
  exec('node ./node_modules/basisjs-tools-build/bin/build build -p -b . -f ./src/main.html -o ./build/', function (err, stdout, stderr)
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
      root: 'src/',
      layouts: 'src/layouts/',
      partials: 'src/chunks/',
      helpers: 'src/helpers/',
      data: 'src/data/'
    }))
    .pipe(gulp.dest('./src/'));
});

gulp.task('watch', ['pages'], function()
{
  gulp.watch(['./src/{chunks,pages,layouts}/**/*.html'], ['pages']);
});

gulp.task('default', ['build']);