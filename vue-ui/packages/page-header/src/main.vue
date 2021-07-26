<template>
  <div class="sw-page-header">
    <div class="sw-page-header__left" @click="$emit('back')">
      <i class="sw-icon-back"></i>
      <div class="sw-page-header__title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <div class="sw-page-header__content">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script>
import { t } from 'seawave-ui/src/locale';
export default {
  name: 'SwPageHeader',

  props: {
    title: {
      type: String,
      default() {
        return t('sw.pageHeader.title');
      }
    },
    content: String
  }
};
</script>
