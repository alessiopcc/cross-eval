#!/usr/bin/env node

const child_process = require('child_process');

const command = process.argv.slice(2).join(' ');
const eval = child_process.execSync(command);
const result = child_process.execSync(eval.toString());
console.log(result.toString());
