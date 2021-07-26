import SwTimelineItem from '../timeline/src/item';

/* istanbul ignore next */
SwTimelineItem.install = function(Vue) {
  Vue.component(SwTimelineItem.name, SwTimelineItem);
};

export default SwTimelineItem;
