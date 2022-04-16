// Importando la clase MyLogger, al parecer solo el default
import MyLogger from './logger.js'

console.log(MyLogger);

const logger = new MyLogger('info')
logger.log('Hello World')