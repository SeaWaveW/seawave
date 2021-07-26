import SwSpinner from './src/spinner';

/* istanbul ignore next */
SwSpinner.install = function(Vue) {
  Vue.component(SwSpinner.name, SwSpinner);
};

export default SwSpinner;
