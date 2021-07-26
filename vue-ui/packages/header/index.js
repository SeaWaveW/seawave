import SwHeader from './src/main';

/* istanbul ignore next */
SwHeader.install = function(Vue) {
  Vue.component(SwHeader.name, SwHeader);
};

export default SwHeader;
