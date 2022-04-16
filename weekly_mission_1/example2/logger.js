// logger.js

// Esta es una función que se guardara en este módulo como info
exports.info = (...args) => {
    args.forEach((each_arg) => {
        console.log(`[INFO] ${new Date().toLocaleString()} ${each_arg}`);
    })
}

// Esta es una función que se guardara en este módulo como verbose
exports.verbose = (...args) => {
    args.forEach((each_arg) => {
        console.log(`[VERBOSE] ${new Date().toLocaleString()} ${each_arg}`);

    })
}

/*
  const logger = require('./logger')
  logger.info('This is an informational message')
  logger.verbose('This is a verbose message')
 * */
