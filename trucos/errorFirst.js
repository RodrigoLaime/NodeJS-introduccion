function asyncrina(callback) {
  setTimeout(function () {
    try {
      let a = 3 + z;
      callback(null, a);//el error va a ser nulo por que todo ha ido bien, y el valor que vamos a devolver
    } catch (error) {
      callback(error, null);//devuelve el valor error y que la variable va  aser nulo
    }
  }, 1000)
}
asyncrina(function (err, data) {
  if (err) {
    console.error('Tenemos un error');
    console.error(err);
    return false; //buenas practicas
    // throw err; No funciona en funcionas asincronas
  }

  console.log('Todo ha ido bien');
});