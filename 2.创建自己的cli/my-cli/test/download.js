// const download = require('download-git-repo');

import download from 'download-git-repo';

download('direct:git@gitee.com:beiyaoyaoyao/express-template.git', 'xxx', { clone: true }, (error) => {
    console.log(error);
}
);



