//requireds
const argv = require('./config/yargs').argumentos;
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js')
    //const { listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {

    case 'listar':
        // console.log('Listar');
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(tabla))
            .catch(e => console.log(e));

        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
        break;



}


// console.log(argv.base);

// let argv2 = process.argv;

// let parametro = argv[2];
// let base = parametro.split('=')[1]

//console.log(argv.base);
// console.log('Limite', argv.limite);