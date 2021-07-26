import SwMain from './src/main';

/* istanbul ignore next */
SwMain.install = function(Vue) {
  Vue.component(SwMain.name, SwMain);
};

export default SwMain;
