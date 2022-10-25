function esperar(nombre, myCallback) {
  setTimeout(function () {
    console.log('Grasia por eperar ya puedes hablar ' + nombre);
    myCallback(nombre);
  }, 1500);
}

function hablar(callbackHablar) {
  setTimeout(function () {
    console.log('bla bla bla bla...');
    callbackHablar();
  }, 1000)
};

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log('Adios', nombre);
    otroCallback();
  }, 1000);
}

function conversacion(nombre, veces, callback) {/* la persona con la que va a hablar la vesces que va a hablar y el callback ba a ser lo que va a suceder despues de conversacion una funcion */
  if (veces >= 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    })
  } else {
    adios(nombre, callback);
  }
};

console.log('Esperame 2 segundos');

esperar('Rodrigo', function (nombre) {
  conversacion(nombre, 3, function () {
    console.log('Conversacion terminada');
  });
});
/* esperar('Rodrigo', function (nombre) {  
  hablar(function () {
    hablar(function () {
      adios(nombre, function () {
        console.log('Ya puedes retirarte');
      })
    })
  })
}); */