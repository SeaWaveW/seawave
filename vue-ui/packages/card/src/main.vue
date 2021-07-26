<template>
  <div class="sw-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
    <div class="sw-card__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="sw-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SwCard',
    props: {
      header: {},
      bodyStyle: {},
      shadow: {
        type: String
      }
    }
  };
</script>
