const { cpSync } = require('fs');
const os = require('os');

/* console.log(os.arch()); //muetra la arquitectura del sistema */

/* console.log(os.platform());//muestra la plataforma */

/* console.log(os.cpus()); //muetra el cpu */

/* console.log(os.constants); //muestra los errores del sistema */

/* const SIZE = 1024;
function kb(bytes) { return bytes / SIZE }
function mb(bytes) { return kb(bytes) / SIZE }
function gb(bytes) { return mb(bytes) / SIZE }
console.log(os.freemen());// muestra la memoria del sitema 
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

console.log(os.totalmem());// muestra la memoria del sitema  */

/* console.log(os.homedir()) //directorio raiz */
/* console.log(os.tmpdir()) //directorio temporal */
/* console.log(os.hostname());//NOMBRE DEL EQUIPO
 */
console.log(os.networkInterfaces());//muestra todas las interfaces de red que estan activas en la maquia