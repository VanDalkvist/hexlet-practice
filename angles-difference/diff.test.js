var tape = require('tape');

var diff = require('./diff');

tape('minimal diff', function (test) {
    test.equal(diff(0, 45), 45);
    test.equal(diff(0, 180), 180);
    test.equal(diff(0, 190), 170);
    test.equal(diff(120, 280), 160);

    test.end();
});