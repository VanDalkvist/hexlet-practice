const tape = require('tape');

const invertCase = require('./invert-case');

tape('minimal diff', test => {
    test.equal(invertCase("HeLLo"), "hEllO");
    test.equal(invertCase("Hello World!"), "hELLO wORLD!");

    test.end();
});