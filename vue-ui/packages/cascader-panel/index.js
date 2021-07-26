import SwCascaderPanel from './src/cascader-panel';

/* istanbul ignore next */
SwCascaderPanel.install = function(Vue) {
  Vue.component(SwCascaderPanel.name, SwCascaderPanel);
};

export default SwCascaderPanel;
