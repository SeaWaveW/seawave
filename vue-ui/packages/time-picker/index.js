import SwTimePicker from '../date-picker/src/picker/time-picker';

/* istanbul ignore next */
SwTimePicker.install = function(Vue) {
  Vue.component(SwTimePicker.name, SwTimePicker);
};

export default SwTimePicker;
