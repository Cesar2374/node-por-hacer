const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
        
};

const completado = {
    // demand: true,
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
        .command('crear', 'Crear un elemento por hacer', {
            descripcion
        })
        .command('borrar', 'Elimina una tarea', {
            descripcion
        })
        .command('actualizar', 'Actualiza el estado completado de una', {
            descripcion,
            completado
        })
        .help().argv

module.exports = {
    argv
}