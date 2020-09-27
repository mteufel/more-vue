<template>
  <div>
    <img id="flag-image" border="0" src="../assets/blank.gif" v-bind:class="flagCss" />
  </div>
</template>

<script>
import { computed, inject } from 'vue'

export default {
  name: "Flag",
  props: {
    country: String
  },
  setup(props) {
    
    //const flagCss = computed( () => "flag flag-" + props.country)    
    
    const flagCss = computed( () => "flag flag-" + inject('country').value)     
    
    return { flagCss }
  }
};
</script>


<style scoped src="../assets/flags.css">
</style>