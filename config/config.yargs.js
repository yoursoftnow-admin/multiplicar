const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        // demand: true,
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprimne lista en consola los multiplos del numero base', opts)
    .command('crear', 'Permite crear un archivo forma txt el cual almacena la tabla de multiplibar asignada por el usuario', opts)
    .help()
    .argv;


module.exports = {
    argv
}