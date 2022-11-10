const ora = require('ora')().start();
// const spinner = ora().start();

ora.text = 'loading...';

setTimeout( ()=> {
    ora.succeed('成功');
    ora.fail('失败');
    ora.info('信息');
},2000)