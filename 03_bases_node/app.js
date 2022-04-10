const { createFile } = require('./helpers/multiplicar');
const { argv } = require('./config/yargs');
console.clear();

console.log(argv);

const imprimirTablas = async ( ) => {
  const retorno = await createFile(argv.b, argv.l);
  console.log(retorno);
}

imprimirTablas();