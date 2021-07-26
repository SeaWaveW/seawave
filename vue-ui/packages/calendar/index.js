import SwCalendar from './src/main';

/* istanbul ignore next */
SwCalendar.install = function(Vue) {
  Vue.component(SwCalendar.name, SwCalendar);
};

export default SwCalendar;
