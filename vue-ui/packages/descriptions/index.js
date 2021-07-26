import SwDescriptions from './src/index';

/* istanbul ignore next */
SwDescriptions.install = function install(Vue) {
  Vue.component(SwDescriptions.name, SwDescriptions);
};

export default SwDescriptions;
