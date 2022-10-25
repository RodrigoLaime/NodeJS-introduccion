console.log('Primera instruccion');

let i = 0;
setInterval(function () {
  console.log(i);
  i++;

  if (i === 5) {
    console.log('forzar error');
    var a = 3 + z;
  }
}, 1000);
/* let i = 0; para que no pare la ejecucion 
setInterval(function () {
  console.log(i++);
  try {
    if (i === 5) {
      var a = 3 + z;
    }
  } catch (error) {
    console.error(error)
  }
}, 1000) */

console.log('Segunda instruccion');
