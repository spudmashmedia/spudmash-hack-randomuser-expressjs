"use strict"

var express = require('express')
var app = express()
var bunyan = require('bunyan')
var logger = bunyan.createLogger({
    name: 'users-api'
})
var users = require('./routes/users')

let port = 8080 // change this to environment variable
let baseUri = '/api/v1' //change this to environment variable

// users middleware (loads routes + controllers)
app.use(baseUri + '/users', users)

// middlware to capture all exceptions with bunyan
app.use(function (err, req, res, next) {
    console.log("*** ERROR OCCURRED***")
    if (err) {
        logger.error(err)
    }
})


var server = app.listen(port, function (err) {
    if (err) {
        logger.error(err)
        return
    }

    console.log('Server started http://localhost:8080')
})

module.exports = server