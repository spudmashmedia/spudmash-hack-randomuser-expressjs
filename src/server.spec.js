"use strict"

var request = require('supertest')

describe('loading express', function () {
    let server

    beforeEach(function () {
        server = require('./server')
    })
    afterEach(function () {
        server.close()
    })

    it('response to /', function TestRoot(done) {
        request(server)
            .get('/')
            .expect(404, done)
    })

    it('response to /api', function TestRootApi(done) {
        request(server)
            .get('/api')
            .expect(404, done)
    })

    it('response to /api/v1', function TestRootApiV1(done) {
        request(server)
            .get('/api/v1')
            .expect(404, done)
    })

    it('response to /api/v1/users', function TestRootApiV1Users(done) {
        request(server)
            .get('/api/v1/users')
            .expect(200, done)
    })

    it('response to /api/v1/users/male', function TestRootApiV1UsersMale(done) {
        request(server)
            .get('/api/v1/users/male')
            .expect(200, done)
    })
    it('response to /api/v1/users/female', function TestRootApiV1UsersFemale(done) {
        request(server)
            .get('/api/v1/users/female')
            .expect(200, done)
    })
})