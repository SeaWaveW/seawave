// node build/bin/build-entry.js
// 负责生成组件库的入口 /src/index.js

// 引入配置文件
var Components = require('../../components.json');
var fs = require('fs');
// 字符串模板库
var render = require('json-templater/string');
// 工具库-负责将连字符形式的字符串 转换为 大驼峰形式 （如：checkbox-button =》 CheckboxButton)
var uppercamelcase = require('uppercamelcase');
var path = require('path');
// 换行符
var endOfLine = require('os').EOL;

// 输出的路径 /src/index.js  name：包名  package：包的路径
var OUTPUT_PATH = path.join(__dirname, '../../src/index.js');
// import语句的模板
var IMPORT_TEMPLATE = 'import {{name}} from \'../packages/{{package}}/index.js\';';
var INSTALL_COMPONENT_TEMPLATE = '  {{name}}';
// 整个文件（/src/index.js）的模板
var MAIN_TEMPLATE = `/* Automatically generated by './build/bin/build-entry.js' */

{{include}}
import locale from 'seawave-ui/src/locale';
import CollapseTransition from 'seawave-ui/src/transitions/collapse-transition';

const components = [
{{install}},
  CollapseTransition
];

const install = function(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.use(InfiniteScroll);
  Vue.use(Loading.directive);

  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '{{version}}',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  CollapseTransition,
  Loading,
{{list}}
};
`;

delete Components.font;

// 包名组成的数组
var ComponentNames = Object.keys(Components);

// import语句组成的数组
var includeComponentTemplate = [];
// components数组
var installTemplate = [];
// export导出的数组，模板中的list
var listTemplate = [];

// 遍历组件包
ComponentNames.forEach(name => {
  // 将连字符形式的包名转为大驼峰形式（checkbox-button =》 CheckboxButton
  var componentName = uppercamelcase(name);
  // 负责将组件替换 =》 import CheckboxButton from '../package/checkbox-button/index.js'
  const importStr = render(IMPORT_TEMPLATE, {
    name: componentName,
    package: name
  });
  includeComponentTemplate.push(importStr);

  // 剔除组件-当组件不为这几个组件时 才会走下面这段
  if (['Loading', 'MessageBox', 'Notification', 'Message', 'InfiniteScroll'].indexOf(componentName) === -1) {
    // ['CheckboxButton' , ...]
    installTemplate.push(render(INSTALL_COMPONENT_TEMPLATE, {
      name: componentName,
      // 这个变量其实是没用的
      component: name
    }));
  }
  // 如果不是loading这个组件 ['CheckboxButton' , ...]
  if (componentName !== 'Loading') listTemplate.push(`  ${componentName}`);
});

var template = render(MAIN_TEMPLATE, {
  // import
  include: includeComponentTemplate.join(endOfLine),
  // components
  install: installTemplate.join(',' + endOfLine),
  // 版本号
  version: process.env.VERSION || require('../../package.json').version,
  // 导出的组件列表 list
  list: listTemplate.join(',' + endOfLine)
});

// 将就绪的模板文件写入 /src/index.js
fs.writeFileSync(OUTPUT_PATH, template);
console.log('[build entry] DONE:', OUTPUT_PATH);

