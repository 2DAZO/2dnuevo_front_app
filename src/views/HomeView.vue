<template>
  <div>
    <Navbar/>
    <Intro/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import Intro from "../components/Intro.vue"
export default {
  name: 'HomeView',
  components: {
    Navbar,
    Intro
  }
}
</script>

<style scoped>

</style>
