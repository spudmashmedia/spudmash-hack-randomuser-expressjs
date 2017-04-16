"use strict"

function usrproxy(conn, gender) {
    console.log("----] inside usrproxy")
    let url = 'https://randomuser.me/api/?gender=' //TODO: send to environments config
    return conn.get(url + gender)
        .then(response => JSON.parse(response))
}

module.exports = usrproxy