import SwOptionGroup from '../select/src/option-group';

/* istanbul ignore next */
SwOptionGroup.install = function(Vue) {
  Vue.component(SwOptionGroup.name, SwOptionGroup);
};

export default SwOptionGroup;
