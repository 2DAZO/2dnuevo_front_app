<template>
  <Carousel :items-to-show="1.5">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>

    <template #addons>
      <Navigation/>
    </template>
  </Carousel>
</template>

<script>
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  name: 'WrapAround',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
}
</script>

<style scoped>
  .negro{
    padding: 15px;
    background: var(--negro);
  }
</style>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  max-width: 350px;
  background-color: var(--verde);
  color:  var(--blanco);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  display: flex;
  box-sizing: content-box;
  border: 5px solid white !important;
  background: var(--verde);
}
</style>