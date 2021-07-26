import SwImage from './src/main';

/* istanbul ignore next */
SwImage.install = function(Vue) {
  Vue.component(SwImage.name, SwImage);
};

export default SwImage;
