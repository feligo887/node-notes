const commandAction = require('./action');
const cliCommand = (program) => {
    //  创建项目
    program
        .command('create <project> [other...]') // 声明创建项目 命令
        .alias('crt') //  创建项目 命令别名
        .description('创建项目')// 项目描述 命令
        .action(commandAction);
}
module.exports = cliCommand;