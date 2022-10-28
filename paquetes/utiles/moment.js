const moment = require('moment');

let ahora = moment();/* genera la fecha del dia */

/* console.log(ahora); */
console.log(ahora.toString());

console.log(ahora.format('YYYY/MM/DD - HH:mm'));/* le da forma a la fecha */