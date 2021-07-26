<template>
  <li
    class="sw-dropdown-menu__item"
    :class="{
      'is-disabled': disabled,
      'sw-dropdown-menu__item--divided': divided
    }"
    @click="handleClick"
    :aria-disabled="disabled"
    :tabindex="disabled ? null : -1"
  >
    <i :class="icon" v-if="icon"></i>
    <slot></slot>
  </li>
</template>
<script>
  import Emitter from 'seawave-ui/src/mixins/emitter';

  export default {
    name: 'SwDropdownItem',

    mixins: [Emitter],

    props: {
      command: {},
      disabled: Boolean,
      divided: Boolean,
      icon: String
    },

    methods: {
      handleClick(e) {
        this.dispatch('SwDropdown', 'menu-item-click', [this.command, this]);
      }
    }
  };
</script>
