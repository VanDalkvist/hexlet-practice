const tape = require('tape');
const reverse = require('./reverse');

tape('reverse', function (test) {
    test.equals(reverse('hell'), 'lleh');

    test.end();
});