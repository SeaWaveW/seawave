import SwCollapse from './src/collapse';

/* istanbul ignore next */
SwCollapse.install = function(Vue) {
  Vue.component(SwCollapse.name, SwCollapse);
};

export default SwCollapse;

