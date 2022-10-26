function otraFuncion() {
  seRompe();
}

function seRompe() {
  return 3 + z;
}

function seRompeAsincrona(cb) { /* se genera fuera del event loop  */
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (err) {
      console.error('error en mi funcion async')
      cb(err);
    }

  }, 1000);
}

try {
  /*   otraFuncion(); */
  seRompeAsincrona(function (err) {
    console.log(err.message);
  });
} catch (err) {
  console.log('Hubo un error');
  console.error(err.message);
  console.log('No pasa nada por que lo capturamos')
}