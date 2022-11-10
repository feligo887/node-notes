#! /usr/bin/env node
const { program } = require('commander');
const cliFrawork = require('../lib/core/frawork');
const cliCommand = require('../lib/core/command');

//  设置命令  
cliFrawork(program);

//  创建项目
cliCommand(program);



// process.argv 命令行的所有选项
program.parse(process.argv);
