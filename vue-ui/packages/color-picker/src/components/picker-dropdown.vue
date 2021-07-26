<template>
  <transition name="sw-zoom-in-top" @after-leave="doDestroy">
    <div
      class="sw-color-dropdown"
      v-show="showPopper">
      <div class="sw-color-dropdown__main-wrapper">
        <hue-slider ref="hue" :color="color" vertical style="float: right;"></hue-slider>
        <sv-panel ref="sl" :color="color"></sv-panel>
      </div>
      <alpha-slider v-if="showAlpha" ref="alpha" :color="color"></alpha-slider>
      <predefine v-if="predefine" :color="color" :colors="predefine"></predefine>
      <div class="sw-color-dropdown__btns">
        <span class="sw-color-dropdown__value">
          <sw-input
            v-model="customInput"
            @keyup.native.enter="handleConfirm"
            @blur="handleConfirm"
            :validate-event="false"
            size="mini">
          </sw-input>
        </span>
        <sw-button
          size="mini"
          type="text"
          class="sw-color-dropdown__link-btn"
          @click="$emit('clear')">
          {{ t('sw.colorpicker.clear') }}
        </sw-button>
        <sw-button
          plain
          size="mini"
          class="sw-color-dropdown__btn"
          @click="confirmValue">
          {{ t('sw.colorpicker.confirm') }}
        </sw-button>
      </div>
    </div>
  </transition>
</template>

<script>
  import SvPanel from './sv-panel';
  import HueSlider from './hue-slider';
  import AlphaSlider from './alpha-slider';
  import Predefine from './predefine';
  import Popper from 'seawave-ui/src/utils/vue-popper';
  import Locale from 'seawave-ui/src/mixins/locale';
  import SwInput from 'seawave-ui/packages/input';
  import SwButton from 'seawave-ui/packages/button';

  export default {
    name: 'sw-color-picker-dropdown',

    mixins: [Popper, Locale],

    components: {
      SvPanel,
      HueSlider,
      AlphaSlider,
      SwInput,
      SwButton,
      Predefine
    },

    props: {
      color: {
        required: true
      },
      showAlpha: Boolean,
      predefine: Array
    },

    data() {
      return {
        customInput: ''
      };
    },

    computed: {
      currentColor() {
        const parent = this.$parent;
        return !parent.value && !parent.showPanelColor ? '' : parent.color.value;
      }
    },

    methods: {
      confirmValue() {
        this.$emit('pick');
      },

      handleConfirm() {
        this.color.fromString(this.customInput);
      }
    },

    mounted() {
      this.$parent.popperElm = this.popperElm = this.$el;
      this.referenceElm = this.$parent.$el;
    },

    watch: {
      showPopper(val) {
        if (val === true) {
          this.$nextTick(() => {
            const { sl, hue, alpha } = this.$refs;
            sl && sl.update();
            hue && hue.update();
            alpha && alpha.update();
          });
        }
      },

      currentColor: {
        immediate: true,
        handler(val) {
          this.customInput = val;
        }
      }
    }
  };
</script>
