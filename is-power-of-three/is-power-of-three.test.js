const tape = require('tape');
const isPowerOfThree = require('./is-power-of-three');

tape('is-power-of-three', function (test) {

    test.equals(isPowerOfThree(1), true);
    test.equals(isPowerOfThree(2), false);
    test.equals(isPowerOfThree(9), true);

    test.end();
});