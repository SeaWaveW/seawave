import SwTable from './src/table';

/* istanbul ignore next */
SwTable.install = function(Vue) {
  Vue.component(SwTable.name, SwTable);
};

export default SwTable;
