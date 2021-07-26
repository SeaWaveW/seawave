import SwAutocomplete from './src/autocomplete';

/* istanbul ignore next */
SwAutocomplete.install = function(Vue) {
  Vue.component(SwAutocomplete.name, SwAutocomplete);
};

export default SwAutocomplete;
