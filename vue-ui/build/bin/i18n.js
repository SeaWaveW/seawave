'use strict';
// node build/bin/i18n.js
// 根据模板生成四种语言的官网文件 make
var fs = require('fs');
var path = require('path');
// 读取官网页面的翻译配置，内置了四种语言
var langConfig = require('../../examples/i18n/page.json');
// 遍历所有语言
langConfig.forEach(lang => {
  // lang =》 zh-CN
  // 判断语言目录是否存在 不存在则创建 /examoles/pages/zh-CN
  try {
    fs.statSync(path.resolve(__dirname, `../../examples/pages/${ lang.lang }`));
  } catch (e) {
    fs.mkdirSync(path.resolve(__dirname, `../../examples/pages/${ lang.lang }`));
  }
  // 遍历所有的页面，根据 page.tpl 自动生成对应的 .vue文件
  Object.keys(lang.pages).forEach(page => {
    // pages/template  page：具体的某个页面，比如index  拼出模板路径=》/examoles/pages/template/index.tpl
    var templatePath = path.resolve(__dirname, `../../examples/pages/template/${ page }.tpl`);
    // 输出的vue文件路径 比如：/examoles/pages/zh-CN/index.vue
    var outputPath = path.resolve(__dirname, `../../examples/pages/${ lang.lang }/${ page }.vue`);
    // 读取模板文件内容
    var content = fs.readFileSync(templatePath, 'utf8');
    // 读取某个页面的所有键值对的配置
    var pairs = lang.pages[page];

    // 遍历键值对
    Object.keys(pairs).forEach(key => {
      // 通过正则匹配的方式替换掉模板中的key
      content = content.replace(new RegExp(`<%=\\s*${ key }\\s*>`, 'g'), pairs[key]);
    });
    // 将替换后的内容写入 .vue文件
    fs.writeFileSync(outputPath, content);
  });
});
