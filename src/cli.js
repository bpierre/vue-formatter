#!/usr/bin/env node
'use strict';
const fomatter = require('./vue-fomatter.js');
var code = '';
process.title = 'Vue Fomatter';
process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    //process.stdout.write(`data: ${chunk}`);
    var code = fomatter(chunk);
  }
});

process.stdin.on('end', () => {
  process.stdout.write(code);
});

// Error
process.on('uncaughtException', function(err) {
  console.error("Exception", err.stack);
  process.exit();
});
process.on('warning', function(warning) {
  //console.warn(warning.name); // Print the warning name
  console.warn('node:', warning.message); // Print the warning message
  //console.warn(warning.stack); // Print the stack trace
  process.exit();
});
