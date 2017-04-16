"use strict"

const assert = require('assert')
var usrproxy = require('./usrproxy')
var chai = require('chai')
var expect = chai.expect

describe('usrproxy', () => {
    it('should have a valid url', () =>{

        const fakeproxy = {
            get: url =>{
                assert(
                    url === 'https://randomuser.me/api/?gender=female'
                )
                return new Promise(function(resolve){
                    
                })
            }
        }

        usrproxy(fakeproxy, 'female')
    })

    it('should have a valid female', () =>{
        const fakeproxy = {
            get: url =>{
                assert(
                    url === 'https://randomuser.me/api/?gender=female'
                )
                return new Promise(function(resolve){
                    return 'moo'
                })
            }
        }

        usrproxy(fakeproxy, 'female')
            .then(result => expect(result).to.equal('moo'))
    })

    it('should have a valid male', () =>{
        const fakeproxy = {
            get: url =>{
                assert(
                    url === 'https://randomuser.me/api/?gender=male'
                )
                return new Promise(function(resolve){
                    return 'moo'
                })
            }
        }

        usrproxy(fakeproxy, 'male')
            .then(result => expect(result).to.equal('moo'))
    })
})