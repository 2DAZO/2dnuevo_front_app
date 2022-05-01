<template>
  <div class="app-container">
    <Navbar/>
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/layout/Navbar.vue"
import Footer from "./components/layout/Footer.vue"

export default {
  components:{
    Navbar,
    Footer
  }
}
</script>

<style >

:root{
  --verde: #19D078;
  --morado: #7F54FF;
  --blanco: #fff;
  --gris-oscuro: #464646;
  --gris-claro:#f5f5f5;
  --negro: black;

}


*{
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Poppins', sans-serif;
/* max-width: 1300px;
width: 100%;
margin: auto; */
}

.app-container{
  display: grid;
  grid-template-rows: auto 1fr auto;
}

</style>
