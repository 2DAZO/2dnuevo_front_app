<template >
  <div class="product-container">
    <div class="product-content">
      <div class="product-secction mb-20">
        <div class="card-container p-5 flex justify-center items-center">
          <div class="card py-10 rounded-lg">
            <Carousel :settings="settings" :breakpoints="breakpoints" :wrap-around="true">
              <Slide class="" v-for="product in products" :key="product.id">
                <div class="carousel__item pt-2">
                  <img class="rounded-lg" :src="product.mainImg" alt="">
                </div>
              </Slide>
              <template class="navigation-container" #addons>
                <Navigation />
              </template>
            </Carousel>
          </div>
        </div>
        <div class="info-container p-5">
          <p class="mb-5 text-2xl font-semibold">{{currentProduct.name}}</p>
          <p class="w-max line-through text-lg priceDiscount text-gray-500" v-if="currentProduct.discount == true"> ${{currentProduct.price}} </p>
          <div class="flex items-center">
            <p class="text-3xl font-bold" style="color: var(--morado)" v-if="currentProduct.discount == false">$ {{currentProduct.price}}</p>
            <p class="text-3xl font-bold" style="color: var(--morado)" v-else>$ {{currentProduct.priceDiscount}}</p>
            <p class="ml-5 font-bold text-lg" style="color: var(--verde)" v-if="currentProduct.discount == true"> % {{currentProduct.percentage}} OFF</p>
          </div>
          <p class="mb-5" >Cualquier medio de pago</p>
          <p class="text-lg" style="color: var(--morado)">Garantía del producto</p>
          <p class="mb-5">Tienes 30 días desde que recibes el producto para devolverlo. ¡No importa el motivo! </p>
          <p class="font-semibold" style="color: var(--verde)">Tenemos:</p>
          <div class="mb-5 flex">
            <p class="text-lg" style="color: var(--morado)">Disponibilidad local y nacional</p>
            <p class="mx-5" style="color: var(--verde)">|</p>
            <p class="text-lg" style="color: var(--morado)">Envio gratis localmente</p>
          </div>
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
                <div class="py-2 px-4 flex items-center rounded-lg cursor-pointer" style="border: 1px solid var(--morado)">
                  <svg class="w-6 h-6" fill="none" stroke="var(--morado)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
                  <div class="ml-2 text-center">
                    <p class="text-sm font-semibold leading-none">500</p>
                    <p class="font-semibold leading-none">Me encantó</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-between">
              <p class="text-sm cursor-pointer" style="color: var(--verde)">Ver más productos del comercio</p>
              <p class="text-sm cursor-pointer" style="color: var(--morado)">Estoy inconforme</p>
            </div>
          </div>
        </div>
      </div>
      <div class="specifications-container mb-10">
        <div class="specifications-title p-5 flex justify-between" >
          <p>Especificaciones</p>
          <button @click="toggleInfo" class="py-2 px-4 rounded-lg" style="background: var(--morado)"></button>
        </div>
        <div class="specifications-content" :class="toggleClass">
          <div class="specification grid" v-for="specification in this.specifications" :key="specification.title">
            <p class="text-lg font-semibold">{{ specification.title }}</p>
            <p class="text-gray-500">{{ specification.description }}</p>
          </div>
        </div>
      </div>
      <!-- <div class="comments-container mb-20">
        <div class="comments-title p-5 flex justify-between">
          <p>Sobre este producto</p>
          <button class="py-2 px-4 rounded-lg" style="background: var(--morado)"></button>
        </div>
        <div class="comments-content p-5">
          <p class="mb-5 text-lg font-semibold">Escribe tu opinion</p>
          <div class="flex items-center">
            <button class="py-2 px-5 flex items-center">
              <svg class="w-6 h-6" fill="none" stroke="var(--morado)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
              <p class="ml-2 font-semibold">Te gusta</p>
            </button>
            <div class="" style="color: var(--morado)">|</div>
            <button class="py-2 px-5 flex items-center">
              <svg class="w-6 h-6" fill="none" stroke="var(--morado)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"></path></svg>
              <p class="ml-2 font-semibold">no te gusta</p>
            </button>
          </div>
        </div>
        <div class="comments-msg p-5">
          <p class="mb-5 text-lg font-semibold">¿Por qué lo dices?</p>
          <div class="msg grid px-5">
            <label for="message"></label>
            <textarea name="message" id="message" cols="30" rows="6" placeholder="escribe tu mensaje" class="p-2 mb-5 rounded-lg focus:outline-none" style="border: 1px solid var(--morado)"></textarea>
            <button class="py-1 px-6 w-max text-white font-semibold rounded-lg" style="background: var(--morado)">Enviar</button>
          </div>
        </div>
      </div> -->
      <div class="products-container">
        <p class="mb-10 text-2xl font-semibold">Mas productos del comercio</p>
        <Carousel :settings="settings2" :breakpoints="breakpoints2" :wrap-around="true">
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

              <div class="px-4 pb-4">
                <div class="mb-3 w-full borderText" ></div>
                <div class="h-full">
                  <p class="name-product font-medium">{{ product.name }}</p>
                  <p class="text-left text-sm line-through text-gray-400 font-light">$ {{ product.price }}</p>
                  <div class="mb-2 flex justify-between items-center">
                    <p class="discount-product text-left text-2xl font-bold">$ {{ product.priceDiscount }}</p>
                    <p class="off-profuct text-sm font-bold">100% OFF</p>
                  </div>
                  <button @click="viewProduct(product.id)" class="button-buy py-2 w-full rounded-lg text-white">Comprar</button>
                </div>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>
<script>
import productsServices from "../services/products/productsService";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import router from '@/router'

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

    settings2: {
      itemsToShow: 1.2,
      snapAlign: "start",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints2: {
      // 700px and up
      700: {
        itemsToShow: 3.2,
        snapAlign: "start",
      },
      // 1024 and up
      1024: {
        itemsToShow: 5.2,
        snapAlign: "start",
      },
    },
    
    products: [],

    specifications: [
      {title: "Camara Principal", description: "11 a 15 MP"},
      {title: "Memoria del Sistema Ram", description: "4 GB"},
      {title: "Red Celular", description: "4G"},
      {title: "Tamaño de Pantalla", description: "6.1 Pulgadas"},
      {title: "Capacidad de almacenamiento", description: "128 GB"},
      {title: "Tamaño SIM", description: "Nano"},
      {title: "Camara frontal", description: "11 a 15 MP"},
      {title: "Dual Sim", description: "Si"},
      {title: "Tipo de pantalla", description: "OLED"},
      {title: "Sistema operativo", description: "IOS"},
      {title: "Rango Tamaño de Pantalla", description: "6.1 a 8 pulgadas"},
      {title: "Rango Bateria", description: "3001 a 3500 mAh"},
    ],

    currentProduct: {
      name: "Nevera Whirlpool 500 L Auto - descongelador autonomo",
      price: "493.000",
      discount: true,
      priceDiscount: "355.000",
      percentage: 23,
      paymentMethod: [],
      warranty: "warranty 1",
      shippingAvailabilit: [],
      freeShipping: [],
      whatsApp: "1-700-807-3938",
      specifications: "specifications 1",
      data: "data 1",
      rating: 95,
      top: true,
      caregory: "caregory 1",
      mainImg: "http://placeimg.com/640/480/technics",
      id: "1"
    },

    toggleStatus: false,
    toggleClass: "close"
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

    viewProduct(id){
      router.push(`/product/${id}`)
    },

    toggleInfo(){
      this.toggleStatus = !this.toggleStatus
      
      if (this.toggleStatus) {
        this.toggleClass = "open"
      } else{
        this.toggleClass = "close"
      }
    }
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
    grid-template-columns: 55% 45%;
  }

  .card{
    max-width: 600px;
    border: 5px solid white;
    box-shadow: 0px 0px 12px #e1e1e1;
  }

  .carousel__item {
    height: 400px;
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .carousel__slide {
    padding: 10px;
    
  }

  /* .navigation-container .carousel__prev, .carousel__next {
    background-color: rgba(246, 246, 246, 1) ;
    box-shadow: 0px 0px 12px #e1e1e1;
  } */

  /* .navigation-container .carousel__prev, .carousel__next .carousel__icon  {
    background-color: rgba(246, 246, 246, 1);
    box-shadow: 0px 0px 12px #e1e1e1;
  } */

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

  .specifications-title{
    border-top: 1px solid var(--morado);
    border-bottom: 1px solid var(--morado);
  }

  .comments-title{
    border-top: 1px solid var(--morado);
    border-bottom: 1px solid var(--morado);
  }

  .products-container .carousel__item {
    height: 350px;
    width: 100%;
    max-width: 250px;
    border-radius: 8px;
    display: grid;
    grid-template-rows: auto 1fr;
    box-shadow: 0px 0px 12px #e1e1e1;
    position: relative;
  }

.products-container .carousel__slide {
  padding: 10px;
}

.products-container .tag-store{
  padding: 2px 10px;
  top: 10px;
  border-radius: 0 8px 8px 0;
  position: absolute;
  background: var(--morado);
}

.products-container .tag-logo{
  width: max-content;
  top: 10px;
  right: 5px;
  position: absolute;
}

.products-container .tag-logo img{
  width: 70px;
}

.products-container .borderText{
  border-bottom: 2px solid var(--morado);
}

.products-container .name-product{
  max-width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #666;
}

.products-container .discount-product{
  color: var(--morado);
}

.products-container .button-buy{
  background: var(--morado);
}

.products-container .off-profuct{
  color: var(--verde);
}

.open {
  height: max-content;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  padding: 20px;
  justify-items: stretch;
  transition: all 300ms;
}

.open p{
  display: block;
}

.close {
  height: 0;
  transition: all 300ms;
}

.close p{
  display: none;
}

.specification{
  width: 300px;
}
</style>