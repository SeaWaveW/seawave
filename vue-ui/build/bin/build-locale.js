// node build/bin/build-locale.js
var fs = require('fs');
var save = require('file-save');
var resolve = require('path').resolve;
var basename = require('path').basename;
// 读取语言目录
var localePath = resolve(__dirname, '../../src/locale/lang');
// 得到一个文件列表
var fileList = fs.readdirSync(localePath);

// 转换方法
var transform = function(filename, name, cb) {
  // babel-core：将exmodule风格 转换为 umd格式
  require('babel-core').transformFile(resolve(localePath, filename), {
    plugins: [
      'add-module-exports',
      ['transform-es2015-modules-umd', {loose: true}]
    ],
    moduleId: name
  }, cb);
};

// 遍历文件列表 只处理js文件
fileList
  .filter(function(file) {
    return /\.js$/.test(file);
  })
  .forEach(function(file) {
    var name = basename(file, '.js');

    transform(file, name, function(err, result) {
      if (err) {
        console.error(err);
      } else {
        var code = result.code;

        code = code
          .replace('define(\'', 'define(\'element/locale/')
          .replace('global.', 'global.SEAWAVE.lang = global.ELEMENT.lang || {}; \n    global.SEAWAVE.lang.');
        // 最后写入到 /lib/umd/locale目录下
        save(resolve(__dirname, '../../lib/umd/locale', file)).write(code);

        console.log(file);
      }
    });
  });
