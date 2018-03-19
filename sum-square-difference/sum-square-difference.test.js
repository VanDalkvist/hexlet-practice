const tape = require('tape');

const { diff } = require('./sum-square-difference');

tape('diff of sums', test => {
    test.equals(diff(3), (1 + 2 + 3) ** 2 - (1 + 2 ** 2 + 3 ** 2));
    test.equals(diff(10), 2640);

    test.end();
});