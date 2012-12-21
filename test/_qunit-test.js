// This is an example of how to write qunit style tests
//
// you need this in config.coffee
//   test:
//     ui: 'qunit'
//
// You need this in test/test-helpers.js
var chai = require('chai');

module.exports = {
    ok: function(state, message) {
        chai.assert.ok(state, message);
    },
    notEqual: function(actual, expected, message) {
        chai.assert.notEqual(actual, expected, message);
    },
    equal: function(actual, expected, message) {
        chai.assert.equal(actual, expected, message);
    },
    equals: function(actual, expected, message) {
        this.equal(actual, expected, message);
    },
    deepEqual: function(actual, expected, message) {
        chai.assert.deepEqual(actual, expected, message);
    }
};

// example of a suite of tests, stick those in a file
test("one tautology", function() {
  ok(true);
});

suite("simple tests");

test("increments", function() {
  var mike = 0;

  ok(mike++ === 0);
  ok(mike === 1);
});

test("increments (improved)", function() {
  var mike = 0;

  equal(mike++, 0);
  equal(mike, 1);
});


suite("setUp/tearDown");

before(function() {
  // console.log("Before");
});

after(function() {
  // console.log("After");
});

test("example", function() {
  // console.log("During");
});
