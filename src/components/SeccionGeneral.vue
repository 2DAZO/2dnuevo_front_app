<template>
  <div class="mt-20 py-5 px-5 general">
    <div class="w-full flex items-center">
      <div class="">
        <h2 class="text-2xl">Seccion de:</h2>
      </div>
      <div class="px-5 w-max m-0 mr-5 flex items-center py-2 seleccion cursor-pointer">
        <div>
          <p class="w-max m-0 font-semibold text-2xl">Tecnologia</p>
        </div>
        <svg v-if="selectA == false" class="ml-12 h-10 w-10 m-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/> </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="ml-12 h-10 w-10 m-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/></svg>
      </div>
    </div>
    <div>
      <Carousel :settings="settings" :breakpoints="breakpoints" wrap-around="true">
        <Slide class="" v-for="product in products" :key="product.id">
          <div @click="filterProducts" class="carousel__item">
            <div class="tag-store">
              <p class="text-xs text-white">Vendido por</p>
            </div>
            <div class="tag-logo">
              <img src="../assets/logo-exito.png" alt="">
            </div>
            <div class="p-3">
              <img class="rounded-lg" :src="product.mainImg" alt="">
            </div>
            <div></div>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>

  <!-- TODO Realizar maquetacion -->
</template>

<script>
import productsServices from "../services/products/productsService";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  name: "SeccionGeneral",
  components: {
    Carousel,
    Slide,
    Navigation
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1.2,
      snapAlign: "start",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.2,
        snapAlign: "start",
      },
      // 1024 and up
      1024: {
        itemsToShow: 4.2,
        snapAlign: "start",
      },
    },
    products: []
  }),

  async mounted() {
    this.getProducts()
  },

  methods:{
    getProducts() {
      productsServices.get()
        .then((response) => {
          this.products = response.data;
        })
        .catch((e) => console.log(e));
    },

    filterProducts(){
      this.products.filter(
        product =>{
          return product.top == false
        }
      )
    }

  }
};
</script>

<style scoped>
.general .carousel__prev{
  background: red;
}

.carousel__item {
  height: 350px;
  width: 100%;
  max-width: 250px;
  border-radius: 8px;
  display: grid;
  grid-template-rows: auto 1fr;
  box-shadow: 0px 0px 12px #e1e1e1;
  position: relative;
}

.carousel__slide {
  padding: 10px;
}

.tag-store{
  padding: 2px 10px;
  top: 10px;
  border-radius: 0 8px 8px 0;
  position: absolute;
  background: var(--morado);
}

.tag-logo{
  width: max-content;
  top: 2px;
  right: 5px;
  position: absolute;
}

.tag-logo img{
  width: 100px;
}
</style>