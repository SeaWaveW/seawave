import SwStep from '../steps/src/step';

/* istanbul ignore next */
SwStep.install = function(Vue) {
  Vue.component(SwStep.name, SwStep);
};

export default SwStep;
