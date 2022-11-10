const config = require('../../config');
const inquirer = require ('inquirer');
const downloadGitRepoFn = require('./download');

// 命令行执行逻辑代码
const commandAction = async (project, args) => {

    //  prompt 是一个promise对象
    const answers = await inquirer.prompt([//  questions: 包含问题的数组
        {   
            //  用户输入的类型是什么，默认input。
            //  可选：input, number, confirm, list, rawlist, expand, checkbox, password, editor
            type: 'list', 
            // 将答案存储的key标记
            name: 'framwork',
            //  给用户的选项
            choices: config.framwork,
            //  String|Function： 用户需要回答的问题
            message: '请选择你所使用的框架'
        }
    ])

    downloadGitRepoFn(config.framworkUrl[answers.framwork],project);
}

module.exports = commandAction;