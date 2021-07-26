import SwTimeline from './src/main';

/* istanbul ignore next */
SwTimeline.install = function(Vue) {
  Vue.component(SwTimeline.name, SwTimeline);
};

export default SwTimeline;
