import SwSteps from './src/steps';

/* istanbul ignore next */
SwSteps.install = function(Vue) {
  Vue.component(SwSteps.name, SwSteps);
};

export default SwSteps;
