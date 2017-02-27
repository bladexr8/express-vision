var winston = require('winston');
var config = require('../configuration');
var fs = require("fs");

if (!fs.existsSync("logs")) {
    fs.mkdirSync("logs");
}

function Logger() {
    console.log("Log File: " + config.get('logger:filename')); 
    return winston.add(winston.transports.File, {
        filename: config.get('logger:filename'),
        maxsize: 1048576,
        maxFiles: 5,
        level: config.get('logger:level')
    });
}

module.exports = new Logger();