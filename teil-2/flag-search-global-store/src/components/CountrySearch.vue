<template>
  <div>
     <a-select
        show-search
        placeholder="Search for a country here"
        style="width: 500px"
        :filter-option="false"
        :default-active-first-option="false"
        :show-arrow="false"
        @search="onSearch"
        @change="onSelection">
        <a-select-option v-for="o in options" :key="o.value">
          {{ o.text }}
        </a-select-option>
    </a-select>
  </div>
</template>

<script>

import { ref } from 'vue'
import flagStore from '../stores/FlagStore'

export default {
  name: "CountrySearch",
  setup() {
    const options = ref([])
    return { options }
  },
  methods: {
    onSearch(search) {
      flagStore.doSearch(search)
      this.options = flagStore.getOptions();
    },
    onSelection(selectedValue) {
      flagStore.countrySelected(selectedValue)
    }
  }
}
</script>

<style>
.country-search {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
}
</style>