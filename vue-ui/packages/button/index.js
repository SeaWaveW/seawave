import SwButton from './src/button';

/* istanbul ignore next */
SwButton.install = function(Vue) {
  Vue.component(SwButton.name, SwButton);
};

export default SwButton;
