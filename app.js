const { crearArchivo, listar } = require('./multiplicar/multiplicar');
const { argv } = require('./config/config.yargs');

// let base = 'ABD';

// let argv2 = process.argv;
// const parametro = argv[2];
// let base = parametro.split('=')[1];
let accion = argv._[0];
let base = argv.base;
let limite = argv.limite;

// console.log(argv._[0]);
// console.log(argv2);


// console.log(parametro);

switch (accion) {
    case 'listar':
        listar(base, limite);
        break;
    case 'crear':
        crearArchivo(base, limite)
            .then(archivo => console.log(`Archivo creado : ${ archivo }`))
            .catch(err => console.log(err))
        break;
    default:
        console.log('Comando no reconocido');
        break;
}