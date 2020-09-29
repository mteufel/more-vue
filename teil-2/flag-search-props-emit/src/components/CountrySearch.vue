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

import { useSearch } from '../use/useCountries'
export default {
  name: "CountrySearch",
  setup() {
    return { ...useSearch() }

  },
  methods: {
    onSelection(selectedValue) {
      this.$emit('country-changed', selectedValue)
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
