
/*
  Al exportar una función/objeto así:

  > module.exports.verbose

  Estaremos exportando el contenido con el nombre `verbose`

  module.exports hará que puedas invocar esta función en otro script como:
  > const logger = require('./logger')

  y usarla como:

  > logger.verbose("Heeey!")
*/

module.exports.verbose = (...args) => {
    args.forEach((each_arg) => {
        console.log(`[VERBOSE] ${new Date().toLocaleString()} ${each_arg}`);
    })
}