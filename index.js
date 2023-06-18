#!/usr/bin/env node

const { exec } = require('child_process');
const path = require('path');

if(process.argv.length >= 3) {
    let dirPath;
    if(process.argv[2] === '.') {
        dirPath = path.resolve(process.cwd());
    } else {
        dirPath = process.argv[2];
    }
    let command;
    if (process.platform === 'darwin') {
        // macOS
        command = `open "${dirPath}"`;
    } else if (process.platform === 'win32') {
        // Windows
        command = `explorer "${dirPath}"`;
    } else {
        // Linux or other platforms
        command = `xdg-open "${dirPath}"`;
    }

    exec(command);
} else {
    console.log('Please provide a path');
}