<template>
  <div class="store-container w-full">
    <div class="store-content pt-10">
      <div class="title-container pb-10">
        <div class="logo-container flex justify-center">
          <div class="logo flex justify-center items-center rounded-full">
            <p class="text-5xl text-gray-800 font-bold">Exito</p>
          </div>
        </div>
        <div class="title-content pl-5 flex justify-between">
          <div class="h-full flex flex-col justify-center">
            <p class="text-4xl font-bold">Tienda oficial: Éxito</p>
            <p class="" style="color: var(--morado)">EN 2DAZO NUEVOS</p>
          </div>
          <div class="h-full flex items-center">
            <div class="mr-5">
              <p class="text-3xl font-bold">+580</p>
              <p class="font-semibold">Productos</p>
            </div>
            <div>
              <p class="text-3xl font-bold">4.5/5</p>
              <p class="font-semibold">Calificacion</p>
            </div>
          </div>
        </div>
      </div>
      <div class="info-container pr-5">
        <div class="category-container w-full">
          <p class="mb-5 text-2xl font-bold">Categorias</p>
          <ul class="">
            <li v-for="(category, index) in categories" :key="index" class="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">{{ category.name }}</li>
          </ul>
        </div>
        <div class="products-container">
          <div v-for="product in products" :key="product.id" class="product-card">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productsServices from "../services/products/productsService";
import router from '@/router'
export default {
  name: 'HomeView',
  components: {
  },

  data() {
    return {
      categories: [
        {name: "Ropa y accesorios"},
        {name: "Consolas y Videojuegos"},
        {name: "Ropa y accesorios"},
        {name: "Consolas y Videojuegos"},
        {name: "Ropa y accesorios"},
        {name: "Consolas y Videojuegos"},
        {name: "Ropa y accesorios"},
        {name: "Consolas y Videojuegos"},
      ],
      products: []
    }
  },

  async mounted() {
    this.getProducts()
  },

  methods: {
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
}
</script>

<style scoped>
.store-content{
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr;
}

.title-container{
  display: grid;
  grid-template-columns: auto 1fr;
}

.logo-container{
  width: 250px;
}

.logo{
  width: 200px;
  height: 200px;
  border: 5px solid white;
  box-shadow: 0px 0px 12px #e1e1e1;
  background-color: yellow;
}

.info-container{
  display: grid;
  grid-template-columns: auto 1fr;
}

.category-container{
  width: 250px;
}

.products-container{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  padding: 20px;
  justify-items: stretch;
}

.product-card {
  height: 350px;
  width: 100%;
  max-width: 250px;
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
  top: 2px;
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
