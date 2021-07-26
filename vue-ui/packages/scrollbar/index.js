import SwScrollbar from './src/main';

/* istanbul ignore next */
SwScrollbar.install = function(Vue) {
  Vue.component(SwScrollbar.name, SwScrollbar);
};

export default SwScrollbar;
