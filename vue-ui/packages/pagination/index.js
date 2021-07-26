import SwPagination from './src/pagination';

/* istanbul ignore next */
SwPagination.install = function(Vue) {
  Vue.component(SwPagination.name, SwPagination);
};

export default SwPagination;
