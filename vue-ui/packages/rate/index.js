import SwRate from './src/main';

/* istanbul ignore next */
SwRate.install = function(Vue) {
  Vue.component(SwRate.name, SwRate);
};

export default SwRate;
