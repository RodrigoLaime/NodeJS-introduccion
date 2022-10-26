function funcion1() {
  console.group('funcion 1');
  console.log('esto es de la funcion 1');
  console.log('esto tambine');
  console.log('esto tambine');
  funcion2();
  console.log('hemos vuelto a la funcion 1');
  console.groupEnd('funcion 1');
}

function funcion2() {
  console.group('funcion 2');
  console.log('Ahora estamos en la funcion 2')
  console.groupEnd('funcion 2');
}

console.log('Empezamos');

funcion1();

/* 
console.log: recibe cualquier tipo y lo muestra en el consola.
console.info: es equivalente a log pero es usado para informar.
console.error: es equivalente a log pero es usado para errores.
console.warn: es equivalente a log pero es usado para warning.
console.table: muestra una tabla a partir de un objeto.
console.count: inicia un contador autoincremental.
console.countReset: reinicia el contador a 0.
console.time: inicia un cronometro en ms.
console.timeEnd: Finaliza el cronometro.
console.group: permite agrupar errores mediante identación.
console.groupEnd: finaliza la agrupación.
console.clear: Limpia la consola.
*/