import SwTag from './src/tag';

/* istanbul ignore next */
SwTag.install = function(Vue) {
  Vue.component(SwTag.name, SwTag);
};

export default SwTag;
