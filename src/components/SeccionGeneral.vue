<template>
  <div class="mt-20 py-5 px-5 general">
    <Carousel
      :settings="settings"
      :breakpoints="breakpoints"   
      wrap-around="true"
    >
      <Slide v-for="product in products" :key="product.id">
        <div @click="filterProducts" class="carousel__item">{{ product.top }}</div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
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

<style>
.general .carousel__prev{
  background: red;
}
</style>