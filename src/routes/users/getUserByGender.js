/*
 * getuserByGender
 */
"use strict"

function getUserByGender(req, res, next) {
    console.log("----] inside getuserByGender")
    let gender = req.params.gender
    let conn = req.app.locals.conn

    req.app.locals.proxy(conn, gender)
        .then(function (data) {
            res.send(data)
            next()
        })
        .catch(function (err) {
            next(err)
        })
}

module.exports = getUserByGender