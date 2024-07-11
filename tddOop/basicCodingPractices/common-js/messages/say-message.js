const helloMessage = require('./hello-message.js');

function sayMessage(message) {
  console.log(`"${message}"`)
}

sayMessage(helloMessage);

//!!START SILENT
module.exports = sayMessage;
//!!END