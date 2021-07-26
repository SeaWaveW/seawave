<template>
  <sw-popover
    v-bind="$attrs"
    v-model="visible"
    trigger="click"
  >
  <div class="sw-popconfirm">
    <p class="sw-popconfirm__main">
    <i
      v-if="!hideIcon"
      :class="icon"
      class="sw-popconfirm__icon"
      :style="{color: iconColor}"
    ></i>
      {{title}}
    </p>
    <div class="sw-popconfirm__action">
      <sw-button 
        size="mini" 
        :type="cancelButtonType" 
        @click="cancel"
      >
        {{ displayCancelButtonText }}
      </sw-button>
      <sw-button 
        size="mini" 
        :type="confirmButtonType" 
        @click="confirm"
      >
        {{ displayConfirmButtonText }}
      </sw-button>
    </div>
  </div>
  <slot name="reference" slot="reference"></slot>
</sw-popover>
</template>

<script>
import SwPopover from 'seawave-ui/packages/popover';
import SwButton from 'seawave-ui/packages/button';
import {t} from 'seawave-ui/src/locale';

export default {
  name: 'SwPopconfirm',
  props: {
    title: {
      type: String
    },
    confirmButtonText: {
      type: String
    },
    cancelButtonText: {
      type: String
    },
    confirmButtonType: {
      type: String,
      default: 'primary'
    },
    cancelButtonType: {
      type: String,
      default: 'text'
    },
    icon: {
      type: String,
      default: 'sw-icon-question'
    },
    iconColor: {
      type: String,
      default: '#f90'
    },
    hideIcon: {
      type: Boolean,
      default: false
    }
  },
  components: {
    SwPopover,
    SwButton
  },
  data() {
    return {
      visible: false
    };
  },
  computed: {
    displayConfirmButtonText() {
      return this.confirmButtonText || t('sw.popconfirm.confirmButtonText');
    },
    displayCancelButtonText() {
      return this.cancelButtonText || t('sw.popconfirm.cancelButtonText');
    }
  },
  methods: {
    confirm() {
      this.visible = false;
      this.$emit('confirm');
    },
    cancel() {
      this.visible = false;
      this.$emit('cancel');
    }
  }
};
</script>
