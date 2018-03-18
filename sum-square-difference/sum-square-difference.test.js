const tape = require('tape');

const testable = require('./sum-square-difference');

tape('diff of sums', test => {
    test.equals(testable(3), (1 + 2 + 3) ** 2 - (1 + 2 ** 2 + 3 ** 2));
    test.equals(testable(10), 2640);

    test.end();
});