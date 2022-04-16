/*
  export default nos permite exportar esta clase e importara

  import MyLogger from './logger.js'
*/
export const MyLogger = '22'

export default class Logger {
  constructor (name='DEFAULT') {
    this.name = name
  }

  log (message) {
    console.log(`[${this.name}] ${message}`)
  }
}

// export default class Logger3 {
//   constructor (name) {
//     this.name = name
//   }

//   log (message) {
//     console.log(`[${this.name}] ${message}`)
//   }
// }