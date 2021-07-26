<template>
  <footer class="sw-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'SwFooter',

    componentName: 'SwFooter',

    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>
