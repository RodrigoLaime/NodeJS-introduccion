let i = 0;
let intervalo = setInterval(function () {
  console.log('Hola');
  if (i === 3) {
    clearInterval(intervalo);
  }
  i++;
}, 1000);

setImmediate(function () {
  console.log('hola de inmediato');
})

/* console.log(process)//muestra un monton de procesos */
/* console.log(__dirname);//muestra la carpeta donde estamos */
/* console.log(_filename);//muestar el archivo donde estamos */