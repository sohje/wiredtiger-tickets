var wt = require('../index.js')
var assert = require('assert')

describe('WiredTiger', function() {
    it('Should throw error', function() {
        assert.throws(wt, Error);
    })
})
