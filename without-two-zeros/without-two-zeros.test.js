const tape = require('tape');

const withoutTwoZeros = require('./without-two-zeros');

tape('minimal diff', test => {

    test.equal(withoutTwoZeros(2, 2), 3);
    test.equal(withoutTwoZeros(1, 1), 2);
    test.equal(withoutTwoZeros(1, 3), 4);
    test.equal(withoutTwoZeros(0, 3), 1);
    test.equal(withoutTwoZeros(2, 4), 10);

    test.end();
});