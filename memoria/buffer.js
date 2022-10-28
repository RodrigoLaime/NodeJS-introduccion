/* let buffer = Buffer.alloc(4);*/
/*let buffer = Buffer.from([1, 2, 5]);//guarda datos*/
let buffer = Buffer.from('Hola');

console.log(buffer);
/* console.log(buffer.toString()); */

let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < 26; i++) {
  abc[i] = i + 97;/* el 97 es la letra A */
}
console.log(abc);/* debuelve el abc en texto buffer */
console.log(abc.toString());/* devuelve el abc en texto legible */