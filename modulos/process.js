/* const p = require('process'); */

process.on('beforeExit', () => {//proceso que es antes de que termine el proceso
  console.log('Ale, el proceso va a terminar');
})

process.on('exit', () => { //proceso de que termina el proceso
  console.log('Ale, el proceso acabo');
  setTimeout(() => {
    console.log('esto no se va a ver nunca')
  }, 0)
})
setTimeout(() => {
  console.log('esto si se va a ver nunca')
}, 0)

process.on('uncaughtException', (err, origen) => {//proceso que muetra las promesas que se han rechasad
  console.error('no se capturo el error');
  /*  console.error(err); */
  setTimeout(() => {
    console.log('esto viene desde las excepciones')
  }, 0);
});

functionqNoExiste();

console.log('Esto si el error no se recoje, no sale');