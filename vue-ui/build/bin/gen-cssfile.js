// node build/bin/gen-cssfile.js
// 负责处理样式
var fs = require('fs');
var path = require('path');
// 引入配置文件
var Components = require('../../components.json');
var themes = [
  'theme-chalk'
];
// 得到组件包数组
Components = Object.keys(Components);
// 基础路径
var basepath = path.resolve(__dirname, '../../packages/');
// 判断文件是否存在的方法
function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
}

themes.forEach((theme) => {
  // 判断主题是否是theme-chalk，如果是则表示样式文件是scss格式，否则就是其他
  var isSCSS = theme !== 'theme-default';
  var indexContent = isSCSS ? '@import "./base.scss";\n' : '@import "./base.css";\n';
  // 遍历组件数组
  Components.forEach(function(key) {
    // 对这几个进行额外的处理，不在此处处理
    if (['icon', 'option', 'option-group'].indexOf(key) > -1) return;
    // key：组件名 比如 checkbox-button.scss || css
    var fileName = key + (isSCSS ? '.scss' : '.css');
    // @import ./checkbox-button.scss
    indexContent += '@import "./' + fileName + '";\n';
    // 补齐工作： 如 /package/theme-chalk/src/checkbox-button.scss 不存在则创建
    var filePath = path.resolve(basepath, theme, 'src', fileName);
    if (!fileExists(filePath)) {
      fs.writeFileSync(filePath, '', 'utf8');
      console.log(theme, ' 创建遗漏的 ', fileName, ' 文件');
    }
  });
  // 生成/package/theme-chalk/src/index.scss文件
  fs.writeFileSync(path.resolve(basepath, theme, 'src', isSCSS ? 'index.scss' : 'index.css'), indexContent);
});
