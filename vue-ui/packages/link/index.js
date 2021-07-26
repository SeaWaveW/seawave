import SwLink from './src/main';

/* istanbul ignore next */
SwLink.install = function(Vue) {
  Vue.component(SwLink.name, SwLink);
};

export default SwLink;
