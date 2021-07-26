import SwDialog from './src/component';

/* istanbul ignore next */
SwDialog.install = function(Vue) {
  Vue.component(SwDialog.name, SwDialog);
};

export default SwDialog;
