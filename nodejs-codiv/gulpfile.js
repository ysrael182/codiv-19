const gulp = require('gulp');
const ts = require('gulp-typescript');
const JSON_FILES = ['src/*.json', 'src/**/*.json'];

const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', gulp.series([], () => {
  const tsResult = tsProject.src()
  .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist'));
}));

gulp.task('watch', gulp.series(['scripts'], () => {
  gulp.watch('src/**/*.ts', ['scripts']);
}));

gulp.task('assets', gulp.series([], function() {
  return gulp.src(JSON_FILES)
  .pipe(gulp.dest('dist'));
}));