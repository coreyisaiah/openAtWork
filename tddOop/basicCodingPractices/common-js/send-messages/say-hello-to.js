const sayMessage = require('../messages/say-message.js')

function sayHelloTo(name) {
  sayMessage(`Hello ${name}!`)
}

sayHelloTo("Woody");

//!!START SILENT
module.exports = { sayHelloTo };
//!!END