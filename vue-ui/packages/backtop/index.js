import SwBacktop from './src/main';

/* istanbul ignore next */
SwBacktop.install = function(Vue) {
  Vue.component(SwBacktop.name, SwBacktop);
};

export default SwBacktop;
