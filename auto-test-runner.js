const fs = require('fs');
const debounce = require('debounce');
const { exec } = require('child_process');

let [node, command, fileName, ...rest] = process.argv;

if (!fileName) {
    throw new Error("You must specify a file name or directory.");
}

console.log(node, command, fileName, rest);

const exceptions = ['.idea', 'auto-test-runner', 'package'];

let hash = {};

fs.watch(fileName, {}, (eventType, name) => {
    if (eventType !== 'change') return;
    if (exceptions.find((e) => name.match(e))) return;

    if (hash[name]) {
        hash[name]();
        return;
    }

    hash[name] = debounce(_runTests.bind(null, name), 500);
    hash[name]();
});

function _runTests(name) {
    let command = `node ${name}\\${name}.test.js | node_modules\\.bin\\tap-dot`;

    console.log(`[${name}] running command: ${command}`);

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`failed: ${error}`);
        }

        console.log(`stdout [${name}]: ${stdout}`);
        console.log(`stderr [${name}]: ${stderr}`);
    });
}