<template>
  <span class="sw-breadcrumb__item">
    <span
      :class="['sw-breadcrumb__inner', to ? 'is-link' : '']"
      ref="link"
      role="link">
      <slot></slot>
    </span>
    <i v-if="separatorClass" class="sw-breadcrumb__separator" :class="separatorClass"></i>
    <span v-else class="sw-breadcrumb__separator" role="presentation">{{separator}}</span>
  </span>
</template>
<script>
  export default {
    name: 'SwBreadcrumbItem',
    props: {
      to: {},
      replace: Boolean
    },
    data() {
      return {
        separator: '',
        separatorClass: ''
      };
    },

    inject: ['swBreadcrumb'],

    mounted() {
      this.separator = this.swBreadcrumb.separator;
      this.separatorClass = this.swBreadcrumb.separatorClass;
      const link = this.$refs.link;
      link.setAttribute('role', 'link');
      link.addEventListener('click', _ => {
        const { to, $router } = this;
        if (!to || !$router) return;
        this.replace ? $router.replace(to) : $router.push(to);
      });
    }
  };
</script>
