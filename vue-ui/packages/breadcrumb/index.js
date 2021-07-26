import SwBreadcrumb from './src/breadcrumb';

/* istanbul ignore next */
SwBreadcrumb.install = function(Vue) {
  Vue.component(SwBreadcrumb.name, SwBreadcrumb);
};

export default SwBreadcrumb;
