<template>
  <div class="sw-collapse-item"
    :class="{'is-active': isActive, 'is-disabled': disabled }">
    <div
      role="tab"
      :aria-expanded="isActive"
      :aria-controls="`sw-collapse-content-${id}`"
      :aria-describedby ="`sw-collapse-content-${id}`"
    >
      <div
        class="sw-collapse-item__header"
        @click="handleHeaderClick"
        role="button"
        :id="`sw-collapse-head-${id}`"
        :tabindex="disabled ? undefined : 0"
        @keyup.space.enter.stop="handleEnterClick"
        :class="{
          'focusing': focusing,
          'is-active': isActive
        }"
        @focus="handleFocus"
        @blur="focusing = false"
      >
        <slot name="title">{{title}}</slot>
        <i
          class="sw-collapse-item__arrow sw-icon-arrow-right"
          :class="{'is-active': isActive}">
        </i>
      </div>
    </div>
    <sw-collapse-transition>
      <div
        class="sw-collapse-item__wrap"
        v-show="isActive"
        role="tabpanel"
        :aria-hidden="!isActive"
        :aria-labelledby="`sw-collapse-head-${id}`"
        :id="`sw-collapse-content-${id}`"
      >
        <div class="sw-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </sw-collapse-transition>
  </div>
</template>
<script>
  import SwCollapseTransition from 'seawave-ui/src/transitions/collapse-transition';
  import Emitter from 'seawave-ui/src/mixins/emitter';
  import { generateId } from 'seawave-ui/src/utils/util';

  export default {
    name: 'SwCollapseItem',

    componentName: 'SwCollapseItem',

    mixins: [Emitter],

    components: { SwCollapseTransition },

    data() {
      return {
        contentWrapStyle: {
          height: 'auto',
          display: 'block'
        },
        contentHeight: 0,
        focusing: false,
        isClick: false,
        id: generateId()
      };
    },

    inject: ['collapse'],

    props: {
      title: String,
      name: {
        type: [String, Number],
        default() {
          return this._uid;
        }
      },
      disabled: Boolean
    },

    computed: {
      isActive() {
        return this.collapse.activeNames.indexOf(this.name) > -1;
      }
    },

    methods: {
      handleFocus() {
        setTimeout(() => {
          if (!this.isClick) {
            this.focusing = true;
          } else {
            this.isClick = false;
          }
        }, 50);
      },
      handleHeaderClick() {
        if (this.disabled) return;
        this.dispatch('SwCollapse', 'item-click', this);
        this.focusing = false;
        this.isClick = true;
      },
      handleEnterClick() {
        this.dispatch('SwCollapse', 'item-click', this);
      }
    }
  };
</script>
