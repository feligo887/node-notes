### node中的模块化

#### ES模块规范
- 倒出 和 导入时都可以使用 as 关键字给文件设置别名
- node 默认不支持 ESModular，需要用 **.mjs 扩展使用
- 或者直接设置package.json 文件,设置属性
```
{
    "type": "module"
}
```

### CommonJS规范
- 倒出：所有的模块功能都在module下，使用 module.exports 倒出
```
const aa = 1;
//  相当于es的默认倒出
module.exports = aa;

```
- 多个文件倒出
```
const aa = 1;
const bb = 2;
//  相当于es的命名倒出
module.exports.aa = aa;
module.exports.bb = bb;

//or
exports.aa = aa;
exports.bb = bb;
```
- 导入：使用 require 关键值导入
```
const a1 = require('./*.js');
```