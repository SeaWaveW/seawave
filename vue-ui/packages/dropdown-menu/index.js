import SwDropdownMenu from '../dropdown/src/dropdown-menu';

/* istanbul ignore next */
SwDropdownMenu.install = function(Vue) {
  Vue.component(SwDropdownMenu.name, SwDropdownMenu);
};

export default SwDropdownMenu;
