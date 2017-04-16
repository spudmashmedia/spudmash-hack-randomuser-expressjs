"use strict"

function getUsers(req, res, next) {
    console.log("----] inside getUsers")
    let conn = res.locals.conn

    res.locals.proxy(conn, 'male')
        .then(function (data) {
            res.send(data)
            next()
        })
        .catch(function (err) {
            next(err)
        })
}

module.exports = getUsers