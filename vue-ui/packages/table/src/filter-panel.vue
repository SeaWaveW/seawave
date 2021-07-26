<template>
  <transition name="sw-zoom-in-top">
    <div
      class="sw-table-filter"
      v-if="multiple"
      v-clickoutside="handleOutsideClick"
      v-show="showPopper">
      <div class="sw-table-filter__content">
        <sw-scrollbar wrap-class="sw-table-filter__wrap">
          <sw-checkbox-group class="sw-table-filter__checkbox-group" v-model="filteredValue">
            <sw-checkbox
              v-for="filter in filters"
              :key="filter.value"
              :label="filter.value">{{ filter.text }}</sw-checkbox>
          </sw-checkbox-group>
        </sw-scrollbar>
      </div>
      <div class="sw-table-filter__bottom">
        <button @click="handleConfirm"
          :class="{ 'is-disabled': filteredValue.length === 0 }"
          :disabled="filteredValue.length === 0">{{ t('sw.table.confirmFilter') }}</button>
        <button @click="handleReset">{{ t('sw.table.resetFilter') }}</button>
      </div>
    </div>
    <div
      class="sw-table-filter"
      v-else
      v-clickoutside="handleOutsideClick"
      v-show="showPopper">
      <ul class="sw-table-filter__list">
        <li class="sw-table-filter__list-item"
            :class="{ 'is-active': filterValue === undefined || filterValue === null }"
            @click="handleSelect(null)">{{ t('el.table.clearFilter') }}</li>
        <li class="sw-table-filter__list-item"
            v-for="filter in filters"
            :label="filter.value"
            :key="filter.value"
            :class="{ 'is-active': isActive(filter) }"
            @click="handleSelect(filter.value)" >{{ filter.text }}</li>
      </ul>
    </div>
  </transition>
</template>

<script type="text/babel">
  import Popper from 'seawave-ui/src/utils/vue-popper';
  import { PopupManager } from 'seawave-ui/src/utils/popup';
  import Locale from 'seawave-ui/src/mixins/locale';
  import Clickoutside from 'seawave-ui/src/utils/clickoutside';
  import Dropdown from './dropdown';
  import SwCheckbox from 'seawave-ui/packages/checkbox';
  import SwCheckboxGroup from 'seawave-ui/packages/checkbox-group';
  import SwScrollbar from 'seawave-ui/packages/scrollbar';

  export default {
    name: 'SwTableFilterPanel',

    mixins: [Popper, Locale],

    directives: {
      Clickoutside
    },

    components: {
      SwCheckbox,
      SwCheckboxGroup,
      SwScrollbar
    },

    props: {
      placement: {
        type: String,
        default: 'bottom-end'
      }
    },

    methods: {
      isActive(filter) {
        return filter.value === this.filterValue;
      },

      handleOutsideClick() {
        setTimeout(() => {
          this.showPopper = false;
        }, 16);
      },

      handleConfirm() {
        this.confirmFilter(this.filteredValue);
        this.handleOutsideClick();
      },

      handleReset() {
        this.filteredValue = [];
        this.confirmFilter(this.filteredValue);
        this.handleOutsideClick();
      },

      handleSelect(filterValue) {
        this.filterValue = filterValue;

        if ((typeof filterValue !== 'undefined') && (filterValue !== null)) {
          this.confirmFilter(this.filteredValue);
        } else {
          this.confirmFilter([]);
        }

        this.handleOutsideClick();
      },

      confirmFilter(filteredValue) {
        this.table.store.commit('filterChange', {
          column: this.column,
          values: filteredValue
        });
        this.table.store.updateAllSelected();
      }
    },

    data() {
      return {
        table: null,
        cell: null,
        column: null
      };
    },

    computed: {
      filters() {
        return this.column && this.column.filters;
      },

      filterValue: {
        get() {
          return (this.column.filteredValue || [])[0];
        },
        set(value) {
          if (this.filteredValue) {
            if ((typeof value !== 'undefined') && (value !== null)) {
              this.filteredValue.splice(0, 1, value);
            } else {
              this.filteredValue.splice(0, 1);
            }
          }
        }
      },

      filteredValue: {
        get() {
          if (this.column) {
            return this.column.filteredValue || [];
          }
          return [];
        },
        set(value) {
          if (this.column) {
            this.column.filteredValue = value;
          }
        }
      },

      multiple() {
        if (this.column) {
          return this.column.filterMultiple;
        }
        return true;
      }
    },

    mounted() {
      this.popperElm = this.$el;
      this.referenceElm = this.cell;
      this.table.bodyWrapper.addEventListener('scroll', () => {
        this.updatePopper();
      });

      this.$watch('showPopper', (value) => {
        if (this.column) this.column.filterOpened = value;
        if (value) {
          Dropdown.open(this);
        } else {
          Dropdown.close(this);
        }
      });
    },
    watch: {
      showPopper(val) {
        if (val === true && parseInt(this.popperJS._popper.style.zIndex, 10) < PopupManager.zIndex) {
          this.popperJS._popper.style.zIndex = PopupManager.nextZIndex();
        }
      }
    }
  };
</script>
