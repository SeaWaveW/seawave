<template>
  <header class="sw-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'SwHeader',

    componentName: 'SwHeader',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
