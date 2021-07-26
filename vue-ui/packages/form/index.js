import SwForm from './src/form';

/* istanbul ignore next */
SwForm.install = function(Vue) {
  Vue.component(SwForm.name, SwForm);
};

export default SwForm;
