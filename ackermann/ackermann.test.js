const tape = require('tape');
const ackermann = require('./ackermann');

tape('ackermann', function (test) {

    test.equals(ackermann(0, 0), 1);
    test.equals(ackermann(2, 1), 5);
    test.equals(ackermann(2, 3), 9);

    test.end();
});