import SwUpload from './src';

/* istanbul ignore next */
SwUpload.install = function(Vue) {
  Vue.component(SwUpload.name, SwUpload);
};

export default SwUpload;
