const tape = require('tape');

const reverseInt = require('./reverse-int');

tape('reverse-int', function (test) {

    test.equals(reverseInt(321), 123);
    test.equals(reverseInt(-123), -321);

    test.end();
});