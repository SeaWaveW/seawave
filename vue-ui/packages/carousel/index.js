import SwCarousel from './src/main';

/* istanbul ignore next */
SwCarousel.install = function(Vue) {
  Vue.component(SwCarousel.name, SwCarousel);
};

export default SwCarousel;
