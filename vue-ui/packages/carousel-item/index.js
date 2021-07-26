import SwCarouselItem from '../carousel/src/item';

/* istanbul ignore next */
SwCarouselItem.install = function(Vue) {
  Vue.component(SwCarouselItem.name, SwCarouselItem);
};

export default SwCarouselItem;
