'use strict';

var grunt = require('grunt'),
    Litmus = require('./lib/test-litmus');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.litmus = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  litmus: function(test) {
    
    var litmusFunction = new Litmus({
      subject: 'Custom subject line',
      username : 'username',
      password : 'password',
      url      : 'https://yoursite.litmus.com',
      applications : []
    });

    var htmlTest  = '<p></p>';

    // TESTS
    // ----------
    test.expect(1);

    var actual = grunt.file.read('test/expected/xmlOutput.xml');
    var expected = litmusFunction.getBuiltXml(htmlTest, 'Test XML');

    test.equal(expected, actual, 'Should return valid xml to send to Litmus');

    test.done();
  },
};
