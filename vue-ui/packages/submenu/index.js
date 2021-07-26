import SwSubmenu from '../menu/src/submenu';

/* istanbul ignore next */
SwSubmenu.install = function(Vue) {
  Vue.component(SwSubmenu.name, SwSubmenu);
};

export default SwSubmenu;
