import SwTableColumn from '../table/src/table-column';

/* istanbul ignore next */
SwTableColumn.install = function(Vue) {
  Vue.component(SwTableColumn.name, SwTableColumn);
};

export default SwTableColumn;
