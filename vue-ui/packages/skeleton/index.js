import SwSkeleton from './src/index.vue';

/* istanbul ignore next */
SwSkeleton.install = function(Vue) {
  Vue.component(SwSkeleton.name, SwSkeleton);
};

export default SwSkeleton;
