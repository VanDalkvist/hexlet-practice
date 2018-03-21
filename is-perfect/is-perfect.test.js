const tape = require('tape');

const isPerfect = require('./is-perfect');

tape('is-perfect', function (test) {

    test.equals(isPerfect(6), true);
    test.equals(isPerfect(28), true);

    test.end();
});