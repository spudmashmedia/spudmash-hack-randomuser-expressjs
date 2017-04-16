"use strict"

function usrproxy(conn, gender) {
    console.log("----] inside usrproxy")
    let url = 'https://randomuser.me/api/?gender='
    return conn.get(url + gender)
        .then(response => JSON.parse(response))
}

module.exports = usrproxy