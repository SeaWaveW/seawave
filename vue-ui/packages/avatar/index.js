import SwAvatar from './src/main';

/* istanbul ignore next */
SwAvatar.install = function(Vue) {
  Vue.component(SwAvatar.name, SwAvatar);
};

export default SwAvatar;
