import SwDrawer from './src/main';

/* istanbul ignore next */
SwDrawer.install = function(Vue) {
  Vue.component(SwDrawer.name, SwDrawer);
};

export default SwDrawer;
