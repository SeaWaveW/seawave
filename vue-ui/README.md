> Vue.js 2.0 的开发工具包 , 以Element为基础轮子进行二次开发

## Element官网
[Element](https://element.eleme.cn/#/zh-CN)

## 安装
```shell
npm install seawave-ui -S
```

> 注意：两种方式只能选其一
## 全局引入
``` javascript
import Vue from 'vue'
import SeawaveUI from 'seawave-ui'
import 'seawave-ui/lib/theme-chalk/index.css';
Vue.use(SeawaveUI)
```

## 按需引入
```javascript
  npm install babel-plugin-component -D
```

babel.config.js
``` javascript
  module.exports = {
    presets: [
      ["@babel/preset-env", { "modules": false }]
    ],
    plugins: [
      [
        "component",
        {
          "libraryName": "seawave-ui",
          "styleLibraryName": "theme-chalk"
        }
      ]
    ]
  }
```
①：main.js
``` javascript
import Vue from 'vue'
import {
  Select,
  Button
} from 'seawave-ui'
Vue.use(Select)
Vue.use(Button)
```
②：component.vue
``` javascript
import {Button} from 'seawave-ui'
export default {
  components:{
      SwButton:Button
  }
}
```