 // 用户构建算法实现的 md 文件

const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname);
const distPath = path.resolve(__dirname, 'README.md');

let md = `本文件构建启发自 30-seconds-of-code，由 JS 文件打包生成 MD 文件

# CodeWars

- 非常好的刷题平台，面向测试用例编程，\`cmd + s\` 即可跑测试用例
- 题目有趣味且实用，习得的编码技巧很容易用到日常工作中
- 利用筛选条件例如【正则相关 + 好评度 + 难度】，能较为全面的掌握一个方向的知识
- 完成后发现更好的答案，重写一遍，有利于自己的编码习惯国际化

另一个刷题战场：[LeetCode](https://github.com/ringcrl/LeetCode)

# 个人主页

实时分数：

![](https://static.chenng.cn/api/dynamic_image/codewars)

https://www.codewars.com/users/ringcrl

# 刷题参数

- Sort By: Positive Feedback，>= 90%
- Language：JavaScript
- Status：Approved
- Progress：Kata I hava not completed
- Diffculty：To 6 kyu

[每日刷题](https://www.codewars.com/kata/search/my-languages?q=&xids=completed&beta=false&order_by=satisfaction_percent+desc%2Ctotal_completed+desc)

# 已刷题目

`;

function writeCode(fileStats) {
  md += `## ${fileStats.filename}

\`\`\`js
${fs.readFileSync(fileStats.filedir)}
\`\`\`

`;
}

function writeTitle(dirStates) {
  md += `# ${dirStates}

`;
}

function readAllFiles(filePath, cb) {
  //根据文件路径读取文件，返回文件列表
  const files = fs.readdirSync(filePath);
  files.forEach((filename) => {
    const exclude = [
      '.lib',
      '.git',
      '.DS_Store',
      '.vscode',
      '.eslintrc.js',
      'helper.js',
      'package.json',
      'README.md',
    ];
    if (exclude.includes(filename)) {
      return;
    }
    // 获取当前文件的绝对路径
    const filedir = path.resolve(filePath, filename);

    // 根据文件路径获取文件信息，返回一个 fs.Stats 对象
    const stats = fs.statSync(filedir);
    const isFile = stats.isFile();
    const isDir = stats.isDirectory();
    if (isFile) {
      cb({
        filename,
        filedir,
      });
    }
    if (isDir) {
      writeTitle(filename);
      readAllFiles(filedir, cb); // 递归，如果是文件夹，就继续遍历该文件夹下面的文件
    }
  });
}

readAllFiles(filePath, writeCode);

fs.writeFileSync(distPath, md);
