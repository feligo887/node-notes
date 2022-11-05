设置commander指令
> 插件地址： https://github.com/tj/commander.js/blob/HEAD/Readme_zh-CN.md
```
#! /usr/bin/env node

const { program } = require('commander');

//  设置命令  
// <name> 必填
program.option('-f --frawork <frawork>','设置模板');

//  创建项目
program
.command('create <project> [other...]') // 声明创建项目 命令
.alias('crt') //  创建项目 命令别名
.description('创建项目')// 项目描述 命令
.action( (project,args) => {
    // 命令行执行逻辑代码
    console.log('project: ', project);
    console.log('args: ', args);
})


// process.argv 命令行的所有选项
program.parse(process.argv);


```
### commander模块化拆分
