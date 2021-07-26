import SwContainer from './src/main';

/* istanbul ignore next */
SwContainer.install = function(Vue) {
  Vue.component(SwContainer.name, SwContainer);
};

export default SwContainer;
