var wt = require('..')
var assert = require('assert')

describe('WiredTiger', function() {
    it('Should throw error', function() {
        assert.throws(wt, new Error);
    })
})
