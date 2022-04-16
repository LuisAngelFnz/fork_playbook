/* Importando el módulo */
import * as module_logger from './logger.js'

const instance = new module_logger.default('Custom');

instance.log('From instance');

console.log(module_logger)