<template>
  <div>
    <Navbar/>
    <Intro/>
    <Buscador/>
    <Banners/>
    <SeccionGeneral/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import Intro from "../components/Intro.vue"
import Buscador from "../components/Buscador.vue"
import Banners from "../components/Banners.vue"
import SeccionGeneral from "../components/SeccionGeneral.vue"
export default {
  name: 'HomeView',
  components: {
    Navbar,
    Intro,
    Buscador,
    Banners,
    SeccionGeneral
  }
}
</script>

<style scoped>

</style>
