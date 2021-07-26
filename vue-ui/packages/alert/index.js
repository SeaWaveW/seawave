import SwAlert from './src/main';

/* istanbul ignore next */
SwAlert.install = function(Vue) {
  Vue.component(SwAlert.name, SwAlert);
};

export default SwAlert;
