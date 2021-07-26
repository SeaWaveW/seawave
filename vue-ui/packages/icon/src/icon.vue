<template>
  <i :class="'sw-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'SwIcon',

    props: {
      name: String
    }
  };
</script>
