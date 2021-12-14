const {crearArchivo} = require('./helpers/multiplicar')
require('colors')
const argv =  require('./config/yargs');

console.clear();

/*
const [,,arg3 = 'base=5'] = process.argv;   //process.argv es para recibir parametros por consola aun que tiene inconvenientes por el orden de los argumentos
const [, base] = arg3.split('=');
*/

//const base = 3;

crearArchivo(argv.b, argv.l, argv.e)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(console.log)