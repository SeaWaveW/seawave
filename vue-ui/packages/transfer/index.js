import SwTransfer from './src/main';

/* istanbul ignore next */
SwTransfer.install = function(Vue) {
  Vue.component(SwTransfer.name, SwTransfer);
};

export default SwTransfer;
