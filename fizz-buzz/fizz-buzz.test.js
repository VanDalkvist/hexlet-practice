const tape = require('tape');
const fizzBuzz = require('./fizz-buzz');

tape('fizz-buzz', function (test) {
    let gen = fizzBuzz(11, 20);

    test.equals(gen.next().value, 11);
    test.equals(gen.next().value, 'Fizz');
    test.equals(gen.next().value, 13);
    test.equals(gen.next().value, 14);
    test.equals(gen.next().value, 'FizzBuzz');
    test.equals(gen.next().value, 16);
    test.equals(gen.next().value, 17);
    test.equals(gen.next().value, 'Fizz');
    test.equals(gen.next().value, 19);
    test.equals(gen.next().value, 'Buzz');

    test.end();
});