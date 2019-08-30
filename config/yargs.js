const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }

}

const argumentos = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea la tabla con su base y limite y la guarda en archivo', opts)
    .help()
    .argv;


module.exports = {
    argumentos
}