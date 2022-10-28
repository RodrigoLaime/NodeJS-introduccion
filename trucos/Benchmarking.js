/* Verificar cuanto tiempo tarda cada proceso */
console.time('todo')
let suma = 0;

console.time('bucle');
for (let i = 0; i < 10000000; i++) {
  suma += 1;
}
console.timeEnd('bucle');

let suma2 = 0;

console.time('bucle 2');
for (let j = 0; j < 100000000; j++) {
  suma2 += 1;
}

console.timeEnd('bucle 2');

console.time('asincrono');
console.log('Empiesa el proceso asincrono')
asincrona()
  .then(() => {
    console.timeEnd('asincrona');
  });
console.timeEnd('asincrono');

console.timeEnd('todo');

function asincrona() {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log('Termino el proceso')
      resolve();
    }, 10000);
  })
}