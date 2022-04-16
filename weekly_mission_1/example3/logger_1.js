/*
  Esto también es la declaración de una función

  module.exports hará que puedas invocar esta función en otro script como:
  > const logger = require('./logger')

  y usarla como:

  > logger("Heeey!")
*/

module.exports = (...args) => {
    args.forEach((each_arg) => {
        console.log(`[INFO] ${new Date().toLocaleString()} ${each_arg}`);
    })
}

