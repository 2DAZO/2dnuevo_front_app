<template>
  <div class="top-container w-full">
    <div class="top-content">
      <div class="title py-16 w-full text-center">
        <p class="font-medium"> Los productos más <span class="font-bold">TOP</span> aquí </p>
      </div>

      <BannersTop/>

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
        <div v-for="product in productsTop" :key="product.id" class="product-card">
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
              <button class="button-buy py-2 w-full rounded-lg text-white">Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productsServices from "../services/products/productsService";
import BannersTop from "../components/BannersTop.vue"

export default {
  name: 'TopView',
  components: {
    BannersTop,
  },

  data() {
    return {
      /* products: [], */
      productsTop: [],
    }
  },

  methods: {
    getProducts() {
      productsServices.get()
        .then((response) => {
          this.productsTop = response.data.filter(product => product.top == true);
          console.log(this.productsTop)
        })
        .catch((e) => console.log(e));
    },
  },

  async mounted() {
    await this.getProducts()
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

  .product-card {
    height: 100%;
    width: 100%;
    max-width: 300px;
    border-radius: 8px;
    display: grid;
    grid-template-rows: auto 1fr;
    box-shadow: 0px 0px 12px #e1e1e1;
    position: relative;
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
    top: 7px;
    right: 5px;
    position: absolute;
  }

  .tag-logo img{
    width: 100px;
  }

  .borderText{
    border-bottom: 2px solid var(--morado);
  }

  .name-product{
    max-width: 200px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #666;
  }

  .discount-product{
    color: var(--morado);
  }

  .button-buy{
    background: var(--morado);
  }

  .off-profuct{
    color: var(--verde);
  }
</style>
