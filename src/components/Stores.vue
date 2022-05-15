<template>
  <div class="mt-20 py-5 px-5 general">
    <div class="w-full flex items-center">
      <div class="w-full flex justify-between items-center">
        <h2 class="text-2xl">Comercios destacados:</h2>
        <router-link to="/stores" class="w-max">
          <p class="text-lg" style="color: var(--morado)">Ver más</p>
        </router-link>
      </div>
    </div>
    <div>
      <Carousel :settings="settings" :breakpoints="breakpoints" wrap-around="true">
        <Slide class="" v-for="(product, index) in products" :key="index">
          <div @click="redirectStore(product.name)" class="carousel__item flex justify-center items-end cursor-pointer">
            <div class="comercio-logo flex justify-center items-center rounded-full">
              <img class="rounded-full" :src="product.img" alt="">
            </div>
            <div class="comercio-content p-3 flex flex-col items-center justify-end rounded-lg">
              <p class="text-2xl font-bold">{{ product.name }}</p>
              <p class="text-sm">Categoria: <strong>{{ product.category }}</strong></p>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>
<script>
import router from '@/router'
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  components: {
    Carousel,
    Slide,
    Navigation
  },
  data() {
    return {
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
    }
  },

  methods: {
    redirectStore(name){
      router.push(`/store/${name.toLowerCase()}`)
    }
  },
}
</script>
<style>
  .carousel__item {
    height: 180px;
    width: 100%;
    max-width: 315px;
    position: relative;
  }

  .carousel__slide {
    padding: 10px;
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