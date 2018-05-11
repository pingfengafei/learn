/**
 * Created by luo_f on 2018/5/11.
 */

console.log('start gulpfile.js')

//即使node10.1.0，也只是experimental模式下支持es6 modules

const gulp = require('gulp')

const target = [
  './!(node_modules|publish)',
  './!.git',
  './**/*'
]
const dest = './publish'

gulp.task('copy', () => {
  return gulp.src(target)
    .pipe(gulp.dest(dest))
})

gulp.task('babel', ['copy'], () => {

})

gulp.task('default', ['babel'])