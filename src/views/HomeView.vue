<template>
  <div class="home-container w-full">
    <div class="home-content">
      <Navbar/>
      <Intro/>
      <div class="w-full flex justify-center">
        <Buscador/>
      </div>
      <Banners/>
      <SeccionGeneral/>
      <Stores/>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import Intro from "../components/Intro.vue"
import Buscador from "../components/Buscador.vue"
import Banners from "../components/Banners.vue"
import SeccionGeneral from "../components/SeccionGeneral.vue"
import Stores from "../components/Stores.vue"
export default {
  name: 'HomeView',
  components: {
    Navbar,
    Intro,
    Buscador,
    Banners,
    SeccionGeneral,
    Stores
  }
}
</script>

<style scoped>
.home-content{
  max-width: 1300px;
  margin: 0 auto;
}
</style>
