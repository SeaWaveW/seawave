import SwMenuItem from '../menu/src/menu-item';

/* istanbul ignore next */
SwMenuItem.install = function(Vue) {
  Vue.component(SwMenuItem.name, SwMenuItem);
};

export default SwMenuItem;
