const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const debounce = require('debounce');

let [node, command, fileName, reporter, ...rest] = process.argv;

console.log('defaults : ', node, command, fileName, reporter, rest);

reporter = reporter || 'tap-dot';

console.log('command  : ', node, command, fileName, reporter, rest);

if (!fileName) {
    throw new Error("You must specify a file name or directory.");
}

const exceptions = ['.idea', 'auto-test-runner', 'package', '.git'];

let hash = {};

fs.watch(fileName, {}, (eventType, name) => {
    if (eventType !== 'change') return;
    if (exceptions.find((e) => name.match(e))) return;

    let execute = hash[name];
    if (execute) {
        execute();
        return;
    }

    hash[name] = debounce(_runTests.bind(null, name), 500);
    hash[name]();
});

function _runTests(name) {
    let tests = path.join(name, '**', '*.test.js');
    let reporterPath = path.join('node_modules', '.bin', reporter);
    let command = `tape ${tests} | ${reporterPath}`;

    console.log(`[${name}] running command: ${command}`);

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`failed: ${error}`);
        }

        console.log(`stdout [${name}]: ${stdout}`);
        console.log(`stderr [${name}]: ${stderr}`);
    });
}