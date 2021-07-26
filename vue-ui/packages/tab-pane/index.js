import SwTabPane from '../tabs/src/tab-pane.vue';

/* istanbul ignore next */
SwTabPane.install = function(Vue) {
  Vue.component(SwTabPane.name, SwTabPane);
};

export default SwTabPane;
