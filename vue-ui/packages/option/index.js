import SwOption from '../select/src/option';

/* istanbul ignore next */
SwOption.install = function(Vue) {
  Vue.component(SwOption.name, SwOption);
};

export default SwOption;
