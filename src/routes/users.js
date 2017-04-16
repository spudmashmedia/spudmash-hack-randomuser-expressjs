"use strict"

var express = require('express')
var router = express.Router()

// dependency: proxy
var rp = require('request-promise')
var proxy = require('../model/usrproxy')

// controllers
var getUsersCtrl = require('./users/getUsers')
var getUserByGenderCtrl = require('./users/getUserByGender')


// inject proxy via middleware
console.log("----] inside getUsers")
router.use(function (req, res, next) {
    req.app = {
        locals: {
            proxy: proxy,
            conn: rp,
        }
    }

    next()
})

router.get('/', getUsersCtrl)
router.get('/:gender', getUserByGenderCtrl)

module.exports = router