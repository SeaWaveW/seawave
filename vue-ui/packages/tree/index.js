import SwTree from './src/tree.vue';

/* istanbul ignore next */
SwTree.install = function(Vue) {
  Vue.component(SwTree.name, SwTree);
};

export default SwTree;
