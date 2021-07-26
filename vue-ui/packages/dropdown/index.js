import SwDropdown from './src/dropdown';

/* istanbul ignore next */
SwDropdown.install = function(Vue) {
  Vue.component(SwDropdown.name, SwDropdown);
};

export default SwDropdown;
