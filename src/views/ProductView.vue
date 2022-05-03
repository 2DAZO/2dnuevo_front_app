<template >
  <div class="product-container">
    <div class="product-content">
      <div class="product-secction">
        <div class="card-container p-5">
          <div class="card rounded-lg">
            <Carousel :settings="settings" :breakpoints="breakpoints" :wrap-around="true">
              <Slide class="" v-for="product in products" :key="product.id">
                <div class="carousel__item pt-2">
                  <img class="rounded-lg" :src="product.mainImg" alt="">
                </div>
              </Slide>
              <template #addons>
                <Navigation />
              </template>
            </Carousel>
            <div class="galery p-5 flex justify-between">
              <div class="galery-content rounded-lg bg-blue-500"></div>
              <div class="galery-content rounded-lg bg-blue-500"></div>
              <div class="galery-content rounded-lg bg-blue-500"></div>
              <div class="galery-content rounded-lg bg-blue-500"></div>
            </div>
          </div>
        </div>
        <div class="info-container p-5">
          <p class="mb-5 text-2xl font-semibold">TV SAMSUNG 65" Pulgadas 165.1 cm 65AU8000 4K-UHD LED Plano Smart TV</p>
          <p class="text-3xl font-bold" style="color: var(--morado)">$ 3.450.600</p>
          <p class="mb-5 text-sm" >Cualquier medio de pago</p>
          <p class="" style="color: var(--morado)">Garantía del producto</p>
          <p class="mb-5 text-sm">Tienes 30 días desde que recibes el producto para devolverlo. ¡No importa el motivo! </p>
          <p class="mb-5" style="color: var(--morado)">Tiempo de envio: <strong>2 dias habiles</strong></p>
          <button class="mb-2 w-full p-2 text-white rounded-lg" style="background: var(--morado)">Comprar Ahora</button>
          <div class="mb-5 flex" >
            <select class="mr-5 p-2 rounded-lg" style="border: 1px solid var(--verde); color: var(--verde)" name="count" id="count">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <button class="w-full p-2 rounded-lg" style="border: 1px solid var(--verde); color: var(--verde)">Comprar Ahora</button>
          </div>
          <div>
            <div class="points-container mb-2">
              <div class="logo">
                <p class="mb-2 text-sm" style="color: var(--morado)">Vendido por</p>
                <img src="../assets/logo-exito.png" alt="">
              </div>
              <div class="grid justify-center">
                <p class="text-2xl font-bold">+580</p>
                <p>Productos</p>
              </div>
              <div class="grid justify-end">
                <p class="text-2xl text-center font-bold">4.5/5</p>
                <p>Calificacion</p>
              </div>
            </div>
            <p class="text-sm" style="color: var(--verde)">Ver más productos del comercio</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import productsServices from "../services/products/productsService";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  components:{
    Carousel,
    Slide,
    Navigation
  },

  data: () => ({
    // carousel settings
    settings: {
        itemsToShow: 1.2,
        snapAlign: "center",
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        320: {
          itemsToShow: 1,
          snapAlign: "start",
        },
    },
    products: []
  }),

  async mounted() {
    this.getProducts()
  },
  
  methods: {
    getProducts() {
      productsServices.get()
        .then((response) => {
          this.products = response.data
        })
        .catch((e) => console.log(e));
    },
  },
}
</script>
<style scoped>
  .product-content{
    max-width: 1300px;
    margin: 0 auto;
  }

  .product-secction{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .card{
    border: 5px solid white;
    box-shadow: 0px 0px 12px #e1e1e1;
  }

  .carousel__item {
    height: 350px;
    width: 100%;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .carousel__slide {
    padding: 10px;
    
  }


  .galery-content{
    width: 100px;
    height: 50px;
  }

  .points-container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  
  .logo img{
    width: 100px;
  }
</style>