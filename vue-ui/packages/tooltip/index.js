import SwTooltip from './src/main';

/* istanbul ignore next */
SwTooltip.install = function(Vue) {
  Vue.component(SwTooltip.name, SwTooltip);
};

export default SwTooltip;
