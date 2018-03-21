const tape = require('tape');
const formattedTime = require('./formatted-time');

tape('formatted-time', function (test) {

    test.equals(formattedTime(5), '00:05');
    test.equals(formattedTime(15), '00:15');
    test.equals(formattedTime(60), '01:00');
    test.equals(formattedTime(67), '01:07');
    test.equals(formattedTime(175), '02:55');
    test.equals(formattedTime(600), '10:00');
    test.equals(formattedTime(754), '12:34');

    test.end();
});