const tape = require('tape');
const isHappyTicket = require('./is-happy-ticket');

tape('is-happy-ticket', function (test) {

    test.equals(isHappyTicket(385916),   true);
    test.equals(isHappyTicket(231002),   false);
    test.equals(isHappyTicket(128722),   true);
    test.equals(isHappyTicket('054702'), true);

    test.throws(() => isHappyTicket('54702'));

    test.end();
});