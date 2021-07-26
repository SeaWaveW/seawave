import SwTabs from './src/tabs';

/* istanbul ignore next */
SwTabs.install = function(Vue) {
  Vue.component(SwTabs.name, SwTabs);
};

export default SwTabs;
