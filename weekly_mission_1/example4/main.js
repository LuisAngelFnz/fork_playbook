const Logger = require('./logger') // Invocas el módulo que contiene la clase

// Creación de un objeto
const dbLogger = new Logger('thread-1') // Creas un objeto nuevo, esto llama por default el constructor de la clase
// invocación del método
dbLogger.info('This is an informational message')

// Creación de otro objeto
const accessLogger = new Logger('subprocess-1')
accessLogger.verbose('This is a verbose message')