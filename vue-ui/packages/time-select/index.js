import SwTimeSelect from '../date-picker/src/picker/time-select';

/* istanbul ignore next */
SwTimeSelect.install = function(Vue) {
  Vue.component(SwTimeSelect.name, SwTimeSelect);
};

export default SwTimeSelect;
