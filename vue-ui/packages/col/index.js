import SwCol from './src/col';

/* istanbul ignore next */
SwCol.install = function(Vue) {
  Vue.component(SwCol.name, SwCol);
};

export default SwCol;

