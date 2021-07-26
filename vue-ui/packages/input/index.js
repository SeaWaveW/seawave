import SwInput from './src/input';

/* istanbul ignore next */
SwInput.install = function(Vue) {
  Vue.component(SwInput.name, SwInput);
};

export default SwInput;
