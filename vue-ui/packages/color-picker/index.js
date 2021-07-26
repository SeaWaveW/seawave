import SwColorPicker from './src/main';

/* istanbul ignore next */
SwColorPicker.install = function(Vue) {
  Vue.component(SwColorPicker.name, SwColorPicker);
};

export default SwColorPicker;
