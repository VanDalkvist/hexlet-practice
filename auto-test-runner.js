const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const debounce = require('debounce');

let [node, command, fileName, reporter, ...rest] = process.argv;

console.debug('defaults : ', node, command, fileName, reporter, rest);

reporter = reporter || 'tap-dot';

console.info('command  : ', node, command, fileName, reporter, rest);

if (!fileName) {
    throw new Error("You must specify a file name or directory.");
}

const exceptions = ['.idea', 'auto-test-runner', 'package', '.git'];

let hash = {};

fs.watch(fileName, {}, (eventType, name) => {
    console.debug(eventType, name);

    if (eventType !== 'change') return;
    if (exceptions.find((e) => name.includes(e))) return;

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
    let tapePath = path.join('node_modules', '.bin', 'tape');
    let command = `${tapePath} ${tests} | ${reporterPath}`;

    console.log(`[${name}] running command: ${command}\n`);

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`failed: ${error}`);
        }

        console.info(`stdout [${name}]: ${stdout}`);
        console.error(`stderr [${name}]: ${stderr}`);
    });
}