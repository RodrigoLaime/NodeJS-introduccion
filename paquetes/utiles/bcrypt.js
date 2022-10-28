const bcrypt = require('bcrypt');//traer el paquete o importar paquete

const password = '1234Segura!';//sifrar el password

bcrypt.hash(password, 5, function (err, hash) {//sifrar el password
  console.log(hash);

  bcrypt.compare(password, hash, function (err, res) {/* compara si este password genera el hash */
    /*     console.log(err); */
    console.log(res);
  })
});