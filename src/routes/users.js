"use strict"

var express = require('express')
var router = express.Router()

// dependency: proxy
var rp = require('request-promise')
var proxy = require('../model/usrproxy')

// controllers
var getUsersCtrl = require('./users/getUsers')
var getUserByIdCtrl = require('./users/getUserById')


// inject proxy via middleware
console.log("----] inside getUsers")
router.use(function (req, res, next) {
    res.locals.proxy = proxy
    res.locals.conn = rp
    next()
})

router.get('/', getUsersCtrl)
router.get('/:gender', getUserByIdCtrl)

module.exports = router