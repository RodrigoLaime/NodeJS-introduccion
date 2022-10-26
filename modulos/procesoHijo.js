/* const { exec }  se usa para desestructurar un objeto*/
/* const exec = require('Child_process').exec; se puede escribir de esta forma o*/

/* const { exec } = require('child_process');

exec('node modulos/consola.js', (err, stdout, sterr) => {
  if (err) {
    console.error(err);
    return false;
  }

  console.log(standarout);
}) */
const { exec, spawn } = require('child_process')

let proceso = spawn('ls', ['-ls']);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function (dato) {
  console.log('¿Esta muerto?');
  console.log(process.killed);
  console.log(dato.toString())
})

proceso.on('exit', function () {
  console.log('El proceso termino');
  console.log(proceso.killed)
})