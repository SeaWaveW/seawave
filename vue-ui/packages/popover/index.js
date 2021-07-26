import SwPopover from './src/main';
import directive from './src/directive';
import Vue from 'vue';

Vue.directive('popover', directive);

/* istanbul ignore next */
SwPopover.install = function(Vue) {
  Vue.directive('popover', directive);
  Vue.component(SwPopover.name, SwPopover);
};
SwPopover.directive = directive;

export default SwPopover;
