//yargs esta roto para manejar los argumentos
const argv = require('yargs')
    .options(
        {
            'b': {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'
            },
            'l': {
                alias: 'list',
                type: 'boolean',
                demandOption: true,
                default: false,
                describe: 'Muestra la tabla en consola'
            },
            'e': {
                alias: 'ends',
                type: 'number',
                demandOption: true,
                default: 10,
                describe: 'Indica el maximo de la tabla que se desea mostrar'
            }
        }
        ).check((argv, options) => {
        if( isNaN(argv.b)) {
            throw 'La base tiene que ser un numero';
        }
        if( isNaN(argv.e)) {
            throw 'El maximo tiene que ser un numero';
        }
        return true;
    })
    .argv; 

module.exports = argv;