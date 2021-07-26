import SwCard from './src/main';

/* istanbul ignore next */
SwCard.install = function(Vue) {
  Vue.component(SwCard.name, SwCard);
};

export default SwCard;
