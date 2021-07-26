<template>
  <div class="sw-breadcrumb" aria-label="Breadcrumb" role="navigation">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'SwBreadcrumb',

    props: {
      separator: {
        type: String,
        default: '/'
      },
      separatorClass: {
        type: String,
        default: ''
      }
    },

    provide() {
      return {
        swBreadcrumb: this
      };
    },

    mounted() {
      const items = this.$el.querySelectorAll('.sw-breadcrumb__item');
      if (items.length) {
        items[items.length - 1].setAttribute('aria-current', 'page');
      }
    }
  };
</script>
