const download = require('download-git-repo');
const ora = require('ora');
const chalk = require('chalk');

const downloadGitRepoFn = (url,project) => {
    const spinner = ora('Loading unicorns').start();
    spinner.color = 'yellow';
    spinner.text = '正在下载中...';
    download(`direct:${url}`, project, { clone: true }, (error) => {
            if(!error){
                spinner.succeed('成功');
                console.log(chalk.yellow('使用 npm i 来初始化项目'));
                console.log(chalk.yellow('使用 npm run dev 运行项目'));
            }else {
                spinner.fail('失败');
            }
    }
    );
}

module.exports = downloadGitRepoFn

