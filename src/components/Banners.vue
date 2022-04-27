<template>
   <div class="intro-top h-full py-5 px-5">
      <Carousel
        class="h-full"
        :autoplay="4000"
        wrap-around="true"
        :items-to-show="1.6"  
        :settings="settings"
      >
        <Slide class="" v-for="banner in banners" :key="banner.id">
          <div class="h-64" >
            <img :src="banner.img" alt="" class="img-banner h-full px-2 object-cover rounded-xl" />
          </div>
        </Slide>
        <template #addons class="botones">
          <Navigation />
        </template>
      </Carousel>
    </div>
</template>
<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import bannersService from "../services/banners/bannersService.js";
export default {
    name: "Banners",
    components: {
    Carousel,
    Slide,
    Navigation
  },
  data() {
      return {
          banners: null,
          settings: {
          snapAlign: 'start',
    },
      }
  },

  async mounted() {
      this.getBanners()
  },

  methods:{
      getBanners() {
      bannersService.get()
        .then((response) => {
          this.banners = response.data;
          
        })
        .catch((e) => console.log(e));
    },
  }
}
</script>
<style scoped>

.carousel__prev {
    display: flex;
    box-sizing: content-box;
    border: 5px solid white;
    background: var(--verde) !important;
}

.img-banner{
  width: 785px;
}
</style>