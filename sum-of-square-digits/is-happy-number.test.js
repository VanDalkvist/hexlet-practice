const tape = require('tape');
const isHappy = require('./is-happy-number');

tape('sum of square digits', function (test) {

    test.equals(isHappy(7), true);

    test.end();
});