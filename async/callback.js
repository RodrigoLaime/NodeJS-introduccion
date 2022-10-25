function esperar(nombre, myCallback) {
  setTimeout(function () {
    console.log('Grasia por eperar ' + nombre);
    myCallback(nombre);
  }, 1500);

}
function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log('Adios ', nombre);
    otroCallback();
  }, 1000);
}
console.log('Espera 2 segundos');
esperar('Rodrigo', function (nombre) {
  adios(nombre, function () {
    console.log('Ya puedes retirarte');
  })
});
/* esperar('Rodrigo ', function () { });
adios('Rodrigo ', function () { });
 */