"use strict"

function getUserById(req, res, next) {
    console.log("----] inside getUserById")
    let gender = req.params.gender
    let conn = res.locals.conn

    res.locals.proxy(conn, gender)
        .then(function (data) {
            res.send(data)
            next()
        })
        .catch(function (err) {
            next(err)
        })
}

module.exports = getUserById