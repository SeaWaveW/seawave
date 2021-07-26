import SwInfiniteScroll from './src/main.js';

/* istanbul ignore next */
SwInfiniteScroll.install = function(Vue) {
  Vue.directive(SwInfiniteScroll.name, SwInfiniteScroll);
};

export default SwInfiniteScroll;
