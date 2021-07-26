// webpack公共配置： 比如：externals、alisa
var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var Components = require('../components.json');

var utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'));
var mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'));
var transitionList = fs.readdirSync(path.resolve(__dirname, '../src/transitions'));
var externals = {};

// 被按需加载插件解析  import Button from 'seawave-ui' => require('seawave-ui/lib/button')
Object.keys(Components).forEach(function(key) {
  externals[`seawave-ui/packages/${key}`] = `seawave-ui/lib/${key}`;
});

/*
* 问题例子：
*   比如引入两个组件：Table checkbox
*   会产生冗余代码
* 只解决了组件、公共模块代码冗余的问题，但是没有解决样式冗余问题
*/

// 翻译文-国际化
externals['seawave-ui/src/locale'] = 'seawave-ui/lib/locale';
// 工具
utilsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`seawave-ui/src/utils/${file}`] = `seawave-ui/lib/utils/${file}`;
});
// 全局混入
mixinsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`seawave-ui/src/mixins/${file}`] = `seawave-ui/lib/mixins/${file}`;
});
// 动画
transitionList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`seawave-ui/src/transitions/${file}`] = `seawave-ui/lib/transitions/${file}`;
});

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
  'seawave-ui': path.resolve(__dirname, '../')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;
