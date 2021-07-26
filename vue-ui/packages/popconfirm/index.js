import SwPopconfirm from './src/main';

/* istanbul ignore next */
SwPopconfirm.install = function(Vue) {
  Vue.component(SwPopconfirm.name, SwPopconfirm);
};

export default SwPopconfirm;
