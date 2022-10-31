const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', function (cb) {//task es el nombre de las tareas
  console.log('Construyendo el sitio');

  setTimeout(cb, 1200);
});

gulp.task('server', function (cb) {
  gulp.src('www')
    .pipe(server({
      livereload: true,//si hay algun cambio se actualize inmediatamente
      open: true//para que automaticamente se habra el navegador
    }));
})
