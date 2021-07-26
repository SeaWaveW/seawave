import SwMenu from './src/menu';

/* istanbul ignore next */
SwMenu.install = function(Vue) {
  Vue.component(SwMenu.name, SwMenu);
};

export default SwMenu;
