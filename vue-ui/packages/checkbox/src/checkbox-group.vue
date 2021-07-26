<script>
  import Emitter from 'seawave-ui/src/mixins/emitter';

  export default {
    name: 'SwCheckboxGroup',

    componentName: 'SwCheckboxGroup',

    mixins: [Emitter],

    inject: {
      swFormItem: {
        default: ''
      }
    },

    props: {
      value: {},
      disabled: Boolean,
      min: Number,
      max: Number,
      size: String,
      fill: String,
      textColor: String
    },

    computed: {
      _swFormItemSize() {
        return (this.swFormItem || {}).swFormItemSize;
      },
      checkboxGroupSize() {
        return this.size || this._swFormItemSize || (this.$ELEMENT || {}).size;
      }
    },

    watch: {
      value(value) {
        this.dispatch('SwFormItem', 'sw.form.change', [value]);
      }
    }
  };
</script>

<template>
  <div class="sw-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>
