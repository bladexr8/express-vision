var morgan = require('morgan');

var express = require('express');
var http = require('http');
var config = require('../configuration');
var heartbeat = require('../routes/heartbeat');
var notFound = require('../middleware/notFound');
var logger = require('../logger');
var app = express();

// middleware
app.set('port', config.get("express:port"));
// application logging
app.use(morgan("common", {
    stream: {
        write: (message) => {
            logger.info(message);
        }
    }
}));
app.get('/heartbeat', heartbeat.index);
app.use(notFound.index);

http.createServer(app).listen(app.get('port'));
module.exports = app;