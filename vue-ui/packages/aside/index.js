import SwAside from './src/main';

/* istanbul ignore next */
SwAside.install = function(Vue) {
  Vue.component(SwAside.name, SwAside);
};

export default SwAside;
