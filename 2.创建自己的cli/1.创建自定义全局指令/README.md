### 创建自定义全局指令
1. 新建一个‘bin’的文件夹
2. 在bin中新建一个js文件，如：cli.js
3. 在项目打开命令行 输入 'npm init' or 'npm init -y'；
4. 在根目录下执行 ' npm link' 挂载到全局命令
5. 在cli.js 写入 '#! /usr/bin/env node' 
- #! 告诉系统这个是一段运行脚本
- /usr/bin/env 需要的环境路径
- node 需要的环境