const tape = require('tape');
const isHappy = require('./is-happy-number');

tape('sum of square digits', function (test) {

    test.equals(isHappy(1), true);
    test.equals(isHappy(7), true);
    test.equals(isHappy(13), true);
    test.equals(isHappy(0), false);
    test.equals(isHappy(2), false);
    test.equals(isHappy(90), false);

    test.end();
});