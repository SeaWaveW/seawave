import SwDatePicker from './src/picker/date-picker';

/* istanbul ignore next */
SwDatePicker.install = function install(Vue) {
  Vue.component(SwDatePicker.name, SwDatePicker);
};

export default SwDatePicker;
