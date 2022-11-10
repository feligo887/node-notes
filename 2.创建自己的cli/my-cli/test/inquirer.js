import config from '../config';

import { downloadGitRepoFn } from '../lib/core/download'; 
/**
 * 这里是一个大坑 官方文档说的 inquirer 已经是ESModule 构建的不支持commonjs
 * 但是 node 使用的话 不支持 ESModule，所以要在package里面设置后才能使用！！！
 * const inquirer = require('inquirer');
 * **/
import inquirer from 'inquirer';

const answers =  async (project) =>{
    inquirer.prompt(//  prompt 是一个promise对象
    [//  questions: 包含问题的数组
        {   
            //  用户输入的类型是什么，默认input。
            //  可选：input, number, confirm, list, rawlist, expand, checkbox, password, editor
            type: 'input', 
            // 将答案存储的key标记
            name: 'userName',
            //  String|Function： 用户需要回答的问题
            message: '你的名字',
            //  给用户的选项
            choices: config.framwork
        }
    ]
)
} 
console.log(answers);

downloadGitRepoFn(config.framworkUrl[answers.framwork],project);
