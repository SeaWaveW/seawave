import SwBadge from './src/main';

/* istanbul ignore next */
SwBadge.install = function(Vue) {
  Vue.component(SwBadge.name, SwBadge);
};

export default SwBadge;
