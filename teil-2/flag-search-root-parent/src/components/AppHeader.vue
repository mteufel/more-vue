<template>
  <div>
    <h1>{{ title }} --> Initial Country was {{ this.$root.initialCountry }}</h1>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    title: String
  }
};
</script>