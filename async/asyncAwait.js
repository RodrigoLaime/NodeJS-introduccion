async function esperar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('Hola ' + nombre);
      resolve(nombre);
    }, 1500);
  })
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('bla bla bla bla...');
      resolve(nombre);
      reject('Hay un error');
    }, 1000)
  })
};

async function adios(nombre, otroCallback) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('Adios', nombre);
      resolve();
    }, 1000);
  })
}


/* ---llamada de funciones ---- */
async function main(miNombre) {
  await esperar(miNombre);
  await hablar();
  await hablar();
  await hablar();
  await adios(miNombre);
  console.log('Proceso finalizado');
}
console.log('Proceso inicializado');
main('Rodrigo');
console.log('va a ser la segunda instruccion asyncrona con async await')