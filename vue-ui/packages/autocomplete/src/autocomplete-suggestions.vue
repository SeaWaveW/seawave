<template>
  <transition name="sw-zoom-in-top" @after-leave="doDestroy">
    <div
      v-show="showPopper"
      class="sw-autocomplete-suggestion el-popper"
      :class="{ 'is-loading': !parent.hideLoading && parent.loading }"
      :style="{ width: dropdownWidth }"
      role="region">
      <sw-scrollbar
        tag="ul"
        wrap-class="sw-autocomplete-suggestion__wrap"
        view-class="sw-autocomplete-suggestion__list">
        <li v-if="!parent.hideLoading && parent.loading"><i class="sw-icon-loading"></i></li>
        <slot v-else>
        </slot>
      </sw-scrollbar>
    </div>
  </transition>
</template>
<script>
  import Popper from 'seawave-ui/src/utils/vue-popper';
  import Emitter from 'seawave-ui/src/mixins/emitter';
  import SwScrollbar from 'seawave-ui/packages/scrollbar';

  export default {
    components: { SwScrollbar },
    mixins: [Popper, Emitter],

    componentName: 'SwAutocompleteSuggestions',

    data() {
      return {
        parent: this.$parent,
        dropdownWidth: ''
      };
    },

    props: {
      options: {
        default() {
          return {
            gpuAcceleration: false
          };
        }
      },
      id: String
    },

    methods: {
      select(item) {
        this.dispatch('SwAutocomplete', 'item-click', item);
      }
    },

    updated() {
      this.$nextTick(_ => {
        this.popperJS && this.updatePopper();
      });
    },

    mounted() {
      this.$parent.popperElm = this.popperElm = this.$el;
      this.referenceElm = this.$parent.$refs.input.$refs.input || this.$parent.$refs.input.$refs.textarea;
      this.referenceList = this.$el.querySelector('.sw-autocomplete-suggestion__list');
      this.referenceList.setAttribute('role', 'listbox');
      this.referenceList.setAttribute('id', this.id);
    },

    created() {
      this.$on('visible', (val, inputWidth) => {
        this.dropdownWidth = inputWidth + 'px';
        this.showPopper = val;
      });
    }
  };
</script>
