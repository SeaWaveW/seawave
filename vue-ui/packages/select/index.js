import SwSelect from './src/select';

/* istanbul ignore next */
SwSelect.install = function(Vue) {
  Vue.component(SwSelect.name, SwSelect);
};

export default SwSelect;
