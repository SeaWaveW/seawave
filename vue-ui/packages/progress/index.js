import SwProgress from './src/progress';

/* istanbul ignore next */
SwProgress.install = function(Vue) {
  Vue.component(SwProgress.name, SwProgress);
};

export default SwProgress;
