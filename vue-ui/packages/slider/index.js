import SwSlider from './src/main';

/* istanbul ignore next */
SwSlider.install = function(Vue) {
  Vue.component(SwSlider.name, SwSlider);
};

export default SwSlider;
