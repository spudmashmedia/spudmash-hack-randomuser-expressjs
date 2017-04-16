"use strict"

var getUsers = require('./getUsers')
var chai = require('chai')
var expect = chai.expect

xdescribe('getUsers', () => {
    it('should have a valid response', () =>{
        var req, res, next
        req = res = next = {}
        res.locals = {}
        res.locals.proxy = (conn, gender) =>{
            return new Promise(function(resolve){
                //something in here
                res.send = data =>{
                    return 'moo'
                }
            })
        }
        

        var result = getUsers(req,res,next)
        expect(result).to.equal('moo')
    })
})