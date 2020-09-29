<template>
  <div id="app">
    <AppHeader title="Welcome to Flag Search" />
    <CountryPanel>
      <CountrySearch @country-changed="countryChanged" />
      <CountryFlag :country="country" />
    </CountryPanel>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import CountrySearch from "./components/CountrySearch.vue"
import CountryPanel from "./components/CountryPanel.vue"
import CountryFlag from "./components/CountryFlag.vue";


export default {
  name: "App",
  data() {
    return {
      country: 'gb'
    }
  },
  methods: {
    countryChanged(selectedCountry) {
      console.log('event angekommen: ' + selectedCountry)
      this.country = selectedCountry
    }
  },
  components: {
    AppHeader,
    CountryPanel,
    CountrySearch,
    CountryFlag
  }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
