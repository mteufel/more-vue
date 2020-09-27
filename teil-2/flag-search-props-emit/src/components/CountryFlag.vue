<template>
  <div>
    <img id="flag-image" border="0" src="../assets/blank.gif" v-bind:class="flagCss" />
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: "Flag",
  props: {
    country: String
  },
  setup(props) {
    const flagCss = computed( () => "flag flag-" + props.country)     
    return { flagCss }
  }
};
</script>


<style scoped src="../assets/flags.css">
</style>