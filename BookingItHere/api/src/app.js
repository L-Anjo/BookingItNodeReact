const dotenv = require('dotenv').config({
    path: process.env.NODE_ENV === "test" ? ".env" : ".env"//.env.testing
});
const express = require('express');
const fileupload = require("express-fileupload");
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router');

// App
const app = express();

// Database
require('./database/index')
const options = {
    origin: ['http://localhost','http://localhost:3000', 'https://bookingithere.com', 'https://www.bookingithere.com']
}
app.use(cors(options))
app.use(fileupload({
    useTempFiles: true,
    safeFileNames: true,
    preserveExtension: true,
    tempFileDir: `${__dirname}/public/files/temp`,
    limits: { fileSize: 50 * 1024 * 1024 }
}));
app.use(express.static("files"));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
    });
});

module.exports = app;