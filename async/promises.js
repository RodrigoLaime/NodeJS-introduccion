function esperar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('Hola ' + nombre);
      resolve(nombre);
    }, 1500);
  })
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('bla bla bla bla...');
      resolve(nombre);
      reject('Hay un error');
    }, 1000)
  })
};

function adios(nombre, otroCallback) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('Adios', nombre);
      resolve();
    }, 1000);
  })
}


/* ---llamada de funciones ---- */
console.log('Proceso Inicializado');

esperar('Rodrigo')
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)/* el parametro nombre lo pone automaticamente */
  .then((nombre) => {
    console.log('Proceso terminado');
  })
  .catch(error => {/* cuando hay un error que no resuelve se va al catch */
    console.error('hubo un problema');
  })