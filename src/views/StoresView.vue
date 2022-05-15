<template>
  <div class="top-container w-full">
    <div class="top-content">
      <div class="title py-16 w-full text-center">
        <p class="font-medium"> Las tiendas más <span class="font-bold">TOP</span> aquí </p>
      </div>

      <BannersStores/>

      <div class="w-full mt-10 flex items-center">
        <div class="">
          <h2 class="text-2xl">Top en:</h2>
        </div>
        <div class="px-5 w-max m-0 mr-5 flex items-center py-2 seleccion cursor-pointer">
          <div>
            <p class="w-max m-0 font-semibold text-2xl">Tecnologia</p>
          </div>
          <svg v-if="selectA == false" class="ml-12 h-10 w-10 m-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/> </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="ml-12 h-10 w-10 m-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/></svg>
        </div>
      </div>

      <div class="products-container">
        <div v-for="product in products" @click="redirectStore(product.name)" :key="product.id" class="card flex justify-center items-end cursor-pointer">
          <div class="comercio-logo flex justify-center items-center rounded-full">
            <img class="rounded-full" :src="product.img" alt="">
          </div>
          <div class="comercio-content p-3 flex flex-col items-center justify-end rounded-lg">
            <p class="text-2xl font-bold">{{ product.name }}</p>
            <p class="text-sm">Categoria: <strong>{{ product.category }}</strong></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannersStores from "../components/BannersStores.vue"
import router from '@/router'
export default {
  name: 'TopView',
  components: {
    BannersStores,
  },

  data() {
    return {
      /* products: [], */
      products:[
        {name: "Puma", category: "Ropa y accesorios", img: "http://placeimg.com/640/480/cats"},
        {name: "Exito", category: "General", img: "http://placeimg.com/640/480/cats"},
        {name: "Alkosto", category: "General", img: "http://placeimg.com/640/480/cats"},
        {name: "Logitech G", category: "Tecnologia", img: "http://placeimg.com/640/480/cats"},
        {name: "Puma", category: "Ropa y accesorios", img: "http://placeimg.com/640/480/cats"},
        {name: "Exito", category: "General", img: "http://placeimg.com/640/480/cats"},
        {name: "Alkosto", category: "General", img: "http://placeimg.com/640/480/cats"},
        {name: "Logitech G", category: "Tecnologia", img: "http://placeimg.com/640/480/cats"},
      ],
    }
  },

  methods: {
    redirectStore(name){
      router.push(`/store/${name.toLowerCase()}`)
    }
  },

}
</script>

<style scoped>
  .title p{
    font-size: 65px;
    color: var(--morado);
  }

  .title span {
    color: var(--verde);
  }

  .top-content{
    max-width: 1300px;
    margin: 0 auto;
  }

  .products-container{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
    padding: 20px;
    justify-items: stretch;
  }

  .card {
    height: 180px;
    width: 100%;
    max-width: 315px;
    position: relative;
  }

  .comercio-content{
    width: 100%;
    height: 130px;
    /* position: absolute;
    bottom: 0; */
    box-shadow: 0px 0px 12px #e1e1e1;
  }

  .comercio-content p {
    color: var(--gris-oscuro);
  }

  .comercio-logo{
    width: 100px;
    height: 100px;
    border: 4px solid white;
    box-shadow: 0px 0px 12px #e1e1e1;
    position: absolute;
    top: 0;
  }

  .comercio-logo img{
    width: 90px;
    height: 90px;
  }
</style>
