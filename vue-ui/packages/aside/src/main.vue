<template>
  <aside class="sw-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    name: 'SwAside',

    componentName: 'SwAside',

    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  };
</script>
