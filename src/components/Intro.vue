<template>
  <div class="mt-16 py-5 px-5 w-full grid grid-cols-2 leading-none">
    <div class="intro-text">
      <div class="text-one">
        <p class="font-medium">
          Los productos <br />más <span class="font-bold">TOP</span><br />
          aquí
        </p>
        <img
          src="https://res.cloudinary.com/segundazo/image/upload/v1646717397/NUEVOS/MATERIAL%20GRAFICO/flecha-01_qdxaeq.svg"
          alt=""
        />
      </div>
      <div class="text-two w-10/12 ml-0 mt-10 leading-tight font-normal">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, quis
          vestibulum aenean sed. In risus amet elit ultrices lacus.
        </p>
      </div>
      <div class="bt-intro mt-9 flex text-lg">
        <router-link to="/top" class="bt-toBuy font-semibold py-4 px-8 w-auto ml-0 mr-5">
          <p>COMPRAR AHORA</p>
        </router-link>
        <div class="bt-toSell font-semibold py-4 px-8 w-auto ml-0">
          <p>VENDE AQUÍ</p>
        </div>
      </div>
      <div class="statistics flex justify-start m-0 mt-9">
        <div
          class="
            st-one
            flex flex-col
            justify-center
            items-center
            w-auto
            m-0
            mr-14
          "
        >
          <p class="number font-bold text-3xl w-auto">
            +{{ statisticsObject.totalProducts }}
          </p>
          <p class="st-text font-light text-xl w-auto">Productos</p>
        </div>
        <div
          class="
            st-two
            flex flex-col
            justify-center
            items-center
            w-auto
            m-0
            mr-14
          "
        >
          <p class="number font-bold text-3xl w-auto">
            +{{ statisticsObject.totalShops }}
          </p>
          <p class="st-text font-light text-xl w-auto">Comercios</p>
        </div>
        <div
          class="
            st-three
            flex flex-col
            justify-center
            items-center
            w-auto
            m-0
            mr-14
          "
        >
          <p class="number font-bold text-3xl w-auto">
            +{{ statisticsObject.totalClients }}
          </p>
          <p class="st-text font-light text-xl w-auto">Clientes</p>
        </div>
      </div>
    </div>
    <div class="intro-top h-full">
      <Carousel
        class="h-full"
        :autoplay="3000"
        :items-to-show="1.65"
      >
        <Slide class="" v-for="product in products" :key="product.top">
          <div class="productsTop" >
            <img :src="product.mainImg" alt="" class="imgProductTop h-auto  mb-5" />
            <div class="w-full borderText mb-5" ></div>
            <div class="flex flex-col">
              <p class="nameProduct font-medium">{{ product.name }}</p> 
              <div class="mt-3 flex justify-between">
                <div class="flex w-max m-0">
                  <p class=" font-bold w-max mr-2 price" v-if="product.discount == false">${{ product.price }}
                </p>
                <p class=" font-bold w-max mr-2 price" v-else>${{ product.priceDiscount }}
                </p>
                <p class="w-max line-through text-xs priceDiscount" v-if="product.discount == true">
                  ${{product.price}}
                </p>
                </div>
                <p class="w-max font-bold off" v-if="product.discount == true">
                  % {{product.percentage}} OFF
                </p>
              </div>
              <div class="flex mt-3 justify-between">
                <div class="w-max store flex flex-col items-start m-0">
                  <p class="text-xs w-max">Vendido por</p>
                  <img src="https://seeklogo.com/images/E/exito-logo-4AC4CFF6A0-seeklogo.com.png" alt="">
                </div>
                <button @click="viewProduct(product.id)" class="bt-toBuy text-sm px-10 py-3 w-max m-0">Comprar</button>
              </div>
            </div>
          </div>
        </Slide>
        <template #addons class="botones">
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>
<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import productsServices from "../services/products/productsService";
import router from '@/router'
export default {
  name: "Intro",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      id: 1,
      statisticsObject: {},
      products: [],
    };
  },

  async mounted() {
    await this.$store.dispatch("getSta");
    this.getObjectStatistics();
    this.getProducts();
  },

  methods: {
    getObjectStatistics() {
      this.getStatistics.forEach((object) => {
        if (object.id == this.id) {
          this.statisticsObject = object;
        }
      });
    },

    getProducts() {
      productsServices.get()
        .then((response) => {
          this.products = response.data;
        })
        .catch((e) => console.log(e));
    },

    viewProduct(id){
      router.push(`/product/${id}`)
    }
  },

  computed: {
    getStatistics() {
      return this.$store.state.statistics;
    },
  }
};
</script>

<style scoped>
.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}
.carousel__track {
  height: 100%;
}
.carousel__viewport {
  height: 100%;
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  max-width: 350px;
  background-color: var(--verde);
  color: var(--blanco);
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
  border: 5px solid white;
  background: var(--morado);
}
</style>

<style scoped>
.text-one {
  font-size: 65px;
  color: var(--morado);
  position: relative;
}

.text-one img {
  max-width: 300px;
  width: 100%;
  position: absolute;
  top: 50%;
  right: -10px;
}

.text-one span {
  color: var(--verde);
}

.bt-toBuy {
  color: var(--blanco);
  background: var(--morado);
  border-radius: 10px;
}

.bt-toSell {
  color: var(--verde);
  border: 1px solid var(--verde);
  border-radius: 10px;
}

.number {
  color: var(--gris-oscuro);
}

.intro-products {
  display: grid;
  justify-content: space-between;
  grid-auto-flow: column;
  grid-template-columns: auto;
  gap: 10px;
  overflow-x: scroll;
  padding: 20px 20px;
  height: 100%;
}

.intro-products::-webkit-scrollbar {
  display: none;
}

.productsTop {
  padding: 20px;
  width: 100%;
  max-width: 360px;
  height: 100%;
  box-shadow: 0px 0px 12px #e1e1e1;
  border-radius: 10px;
}

.imgProductTop {
  border-radius: 10px;
  object-fit: cover;
  height: 65%;
}

.borderText{
  border-bottom: 2px solid var(--morado);
}

.nameProduct{
    color: #666;
    margin-top: 12px;
    max-height: 1em;
    overflow: hidden;
    word-break: break-all;
    margin-top: 0 !important;
    width: fit-content;
}

.price{
  color: var(--morado);
}

.priceDiscount{
  color: var(--gris-oscuro);
}

.off{
  color: var(--verde);
}

.store img{
  border-radius: 50px;
  object-fit: cover;
  height: 28px;
  width: 95px;
}



@media (min-width: 1300px) {
  .text-one img {
    right: 75px;
  }
}
</style>