
const { crearArchivo } = require('./helpers/multiplicar')
const yargs = require('./config/yargs')

const colors = require('colors')
console.clear();

const base = yargs.b;
const listar = yargs.l
const hasta = yargs.h;

crearArchivo(base, listar,hasta)
.then(nombreArchivo => console.log(nombreArchivo.rainbow, "creada".green))
.catch(err => console.log(err));

